import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

interface LikesContextType {
  likes: Record<string, number>;
  plays: Record<string, number>;
  likedSongs: Set<string>;
  likeSong: (songId: string) => void;
  recordPlay: (songId: string) => void;
}

const LikesContext = createContext<LikesContextType | null>(null);

export function useLikes() {
  const ctx = useContext(LikesContext);
  if (!ctx) throw new Error("useLikes must be used within LikesProvider");
  return ctx;
}

const STORAGE_KEY = "bc2c-liked-songs";

function getStoredLikes(): Set<string> {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? new Set(JSON.parse(stored)) : new Set();
  } catch {
    return new Set();
  }
}

function storeLikes(likedSongs: Set<string>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...likedSongs]));
}

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<Record<string, number>>({});
  const [plays, setPlays] = useState<Record<string, number>>({});
  const [likedSongs, setLikedSongs] = useState<Set<string>>(getStoredLikes);

  useEffect(() => {
    fetch("/api/likes")
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.likes || {});
        setPlays(data.plays || {});
      })
      .catch((err) => console.error("Failed to fetch likes:", err));
  }, []);

  const likeSong = useCallback(
    (songId: string) => {
      if (likedSongs.has(songId)) return;

      // Optimistic update
      setLikes((prev) => ({
        ...prev,
        [songId]: (prev[songId] || 0) + 1,
      }));
      const newLiked = new Set(likedSongs);
      newLiked.add(songId);
      setLikedSongs(newLiked);
      storeLikes(newLiked);

      fetch(`/api/likes/${songId}`, { method: "POST" })
        .then((res) => res.json())
        .then((data) => {
          setLikes((prev) => ({ ...prev, [songId]: data.likes }));
        })
        .catch((err) => {
          console.error("Failed to like song:", err);
          // Rollback
          setLikes((prev) => ({
            ...prev,
            [songId]: Math.max((prev[songId] || 1) - 1, 0),
          }));
          const rollback = new Set(likedSongs);
          rollback.delete(songId);
          setLikedSongs(rollback);
          storeLikes(rollback);
        });
    },
    [likedSongs]
  );

  const recordPlay = useCallback((songId: string) => {
    setPlays((prev) => ({ ...prev, [songId]: (prev[songId] || 0) + 1 }));
    fetch(`/api/plays/${songId}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        setPlays((prev) => ({ ...prev, [songId]: data.plays }));
      })
      .catch((err) => console.error("Failed to record play:", err));
  }, []);

  return (
    <LikesContext.Provider value={{ likes, plays, likedSongs, likeSong, recordPlay }}>
      {children}
    </LikesContext.Provider>
  );
}
