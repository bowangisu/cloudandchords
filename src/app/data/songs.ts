export interface Song {
  id: string;
  title: string;
  subtitle: string;
  category: "leadership" | "founder" | "blues" | "reflection" | "family";
  description: string;
  coverImage: string;
  lyrics: string;
  behindTheSong?: string;
  duration: string;
}

export const categories = [
  { id: "all", label: "All" },
  { id: "leadership", label: "Leadership" },
  { id: "founder", label: "Founder" },
  { id: "blues", label: "Blues" },
  { id: "reflection", label: "Reflection" },
  { id: "family", label: "Family" },
] as const;

export const songs: Song[] = [
  {
    id: "the-weight-of-deciding",
    title: "The Weight of Deciding",
    subtitle: "On the loneliness of leadership",
    category: "leadership",
    description:
      "A meditation on the quiet burden that comes with making decisions that shape other people's lives.",
    coverImage:
      "https://images.unsplash.com/photo-1549674130-2bac41ebf7a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25lJTIwcGVyc29uJTIwd2Fsa2luZyUyMGZvZyUyMG1pbmltYWx8ZW58MXx8fHwxNzcyMjEyNzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "3:42",
    lyrics: `The room goes quiet when you speak\nBut no one hears the doubt beneath\nA hundred lives hang on your word\nThe heaviest sound is what's not heard\n\nYou carry weight they'll never see\nThe cost of what you chose to be\nBetween the vision and the fear\nYou learn to lead by standing here\n\nSo close your eyes and breathe it in\nThe silence where the truth begins\nNo map, no manual, no guide\nJust you, the weight, and what's inside`,
    behindTheSong:
      "I wrote this after a particularly difficult quarter where I had to make layoff decisions. The melody came to me at 2am, and I realized that leadership songs rarely capture the private weight of it all. Most anthems are about triumph. This one is about the pause before the decision.",
  },
  {
    id: "founders-midnight",
    title: "Founder's Midnight",
    subtitle: "The 2am startup confession",
    category: "founder",
    description:
      "Every founder knows the hour when doubt and determination collide in the dark.",
    coverImage:
      "https://images.unsplash.com/photo-1759864731065-b0626a2a4e82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMGNpdHklMjBsaWdodHMlMjBib2tlaCUyMG1vb2R5fGVufDF8fHx8MTc3MjIxMjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "4:15",
    lyrics: `The metrics bleed across the screen\nRed numbers in a blue-lit scene\nAnother pitch, another no\nBut something keeps you going though\n\nYour partner sleeps, the house is still\nYou're rewriting the deck until\nThe morning light finds you awake\nStill building for the future's sake\n\nFounder's midnight, founder's prayer\nIs anybody really there?\nThe answer comes in lines of code\nIn every risk, a lighter load`,
    behindTheSong:
      "This one came from conversations with founder friends. There's a specific loneliness to building something from nothing. The song tries to honor that without romanticizing the burnout.",
  },
  {
    id: "two-tongues",
    title: "Two Tongues",
    subtitle: "Between languages, between worlds",
    category: "reflection",
    description:
      "On growing up translating not just words but entire worlds between Chinese and English.",
    coverImage:
      "https://images.unsplash.com/photo-1720702214757-c57fb7ba2b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwY2FsbGlncmFwaHklMjBicnVzaCUyMG1pbmltYWx8ZW58MXx8fHwxNzcyMjEyNzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "3:58",
    lyrics: `My mother's voice in morning light\nA melody I can't quite write\nIn English I'm articulate\nIn Mandarin, I hesitate\n\nTwo tongues, two truths, two ways to pray\nTwo versions of the things I say\nThe gap between them is the space\nWhere I became a hyphen place\n\nNot fully here, not fully there\nBut something new beyond compare\nA bridge that only I can cross\nBuilt on translation, built on loss`,
    behindTheSong:
      "Growing up Chinese-American means constantly code-switching. This song explores the beautiful discomfort of being a bridge between two cultures, and how that in-between space becomes its own kind of home.",
  },
  {
    id: "algorithm-blues",
    title: "Algorithm Blues",
    subtitle: "When the machine learns your sadness",
    category: "blues",
    description:
      "A bluesy reflection on what it means when AI can predict your feelings before you feel them.",
    coverImage:
      "https://images.unsplash.com/photo-1763865454149-176e19f1d92a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjB3YXRlciUyMHJlZmxlY3Rpb258ZW58MXx8fHwxNzcyMjEyNzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "4:33",
    lyrics: `The feed knows what I need tonight\nA slow song and a softer light\nThe model trained on all my tears\nPredicts my mood across the years\n\nI asked the machine to sing my pain\nIt gave me back my own refrain\nA mirror made of weights and wire\nReflecting back my own desire\n\nAlgorithm blues, electric soul\nA human heart with a digital hole\nSomewhere between the prompt and prayer\nI found myself already there`,
    behindTheSong:
      "The irony of using AI to write a song about AI understanding your feelings is not lost on me. This was an experiment in radical honesty with the tools we're building.",
  },
  {
    id: "small-hands",
    title: "Small Hands",
    subtitle: "A letter to my daughters",
    category: "family",
    description:
      "The quiet revolution of watching your children grow while trying to build something meaningful.",
    coverImage:
      "https://images.unsplash.com/photo-1763275530166-5e265bf06450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXRoZXIlMjBjaGlsZCUyMHNpbGhvdWV0dGUlMjB3YXJtJTIwbGlnaHR8ZW58MXx8fHwxNzcyMjEyNzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "3:21",
    lyrics: `Small hands reach up in morning light\nYou pull me from another night\nOf building things that scale and grow\nBut nothing scales like watching you know\n\nThe world I'm building, brick by brick\nIs nothing if these moments slip\nSo I will hold this time like glass\nAnd let the deadlines gently pass\n\nWhen you are grown and read these lines\nKnow that between the grand designs\nThe thing I built that mattered most\nWas being here, was being close`,
    behindTheSong:
      "My daughters won't remember these early mornings. But I will. This song is a timestamp — proof that in the chaos of ambition, the small moments were the ones I chose.",
  },
  {
    id: "between-cloud-and-chords",
    title: "Between Cloud & Chords",
    subtitle: "The title track",
    category: "reflection",
    description:
      "Where technology meets tenderness. The song that gave this project its name.",
    coverImage:
      "https://images.unsplash.com/photo-1761285908107-8d497de5605c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwdGhyb3VnaCUyMGNsb3VkcyUyMGdvbGRlbnxlbnwxfHx8fDE3NzIyMTI3NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "4:07",
    lyrics: `Between the cloud and chords I find\nA space where code meets peace of mind\nWhere servers hum a lullaby\nAnd algorithms learn to cry\n\nI used to think that art was pure\nUntouched by logic, undefined, unsure\nBut now I see the beauty in\nThe collaboration — human, machine\n\nThis is not replacement, this is growth\nA duet sung by one who's both\nThe programmer and the poet too\nThe future ancient, strange, and true`,
    behindTheSong:
      "This is the thesis statement of the entire project. Can AI-assisted music be authentic? I believe yes — if the human brings intention, vulnerability, and taste. The AI brings possibility. Together, it's something new.",
  },
  {
    id: "quiet-ambition",
    title: "Quiet Ambition",
    subtitle: "Success without noise",
    category: "leadership",
    description:
      "Not all ambition needs to be loud. Some of the most powerful leadership happens in whispers.",
    coverImage:
      "https://images.unsplash.com/photo-1757332224684-44aec99ee4bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXN0eSUyMG1vdW50YWluJTIwbGFuZHNjYXBlJTIwbWluaW1hbHxlbnwxfHx8fDE3NzIyMTI3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "3:35",
    lyrics: `They say you gotta shout to lead\nBut I have found a different creed\nThe quiet ones who build in dark\nLeave behind the deepest mark\n\nNo spotlight, no applause, no stage\nJust turning to the next blank page\nAnd writing down what needs to be\nWith patient possibility\n\nQuiet ambition, steady flame\nNo need to play the glory game\nThe work will speak when you are done\nA marathon, not a sprint — you've won`,
  },
  {
    id: "drift-current",
    title: "Drift Current",
    subtitle: "Letting go to move forward",
    category: "blues",
    description:
      "Sometimes the best thing you can do is stop swimming against the current and trust the drift.",
    coverImage:
      "https://images.unsplash.com/photo-1634518668551-0cac22b8c4c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwb2NlYW4lMjB3YXZlcyUyMG1vb2R5fGVufDF8fHx8MTc3MjIxMjc0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "4:48",
    lyrics: `I've been swimming upstream for years\nFighting currents, fighting fears\nBut tonight I'll let the water win\nAnd see where letting go begins\n\nThe drift is not defeat, my friend\nIt's trusting there's a deeper end\nWhere all the striving falls away\nAnd what remains is here to stay\n\nSo float with me beneath the stars\nForget the schedules, forget the scars\nThe ocean knows the way back home\nWe were never meant to swim alone`,
  },
];

export function getSongById(id: string): Song | undefined {
  return songs.find((s) => s.id === id);
}

export function getSongsByCategory(category: string): Song[] {
  if (category === "all") return songs;
  return songs.filter((s) => s.category === category);
}
