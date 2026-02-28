export interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: "ai" | "meaning" | "identity" | "fatherhood" | "creativity";
  excerpt: string;
  content: string;
}

export const postCategories = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "meaning", label: "Meaning" },
  { id: "identity", label: "Identity" },
  { id: "fatherhood", label: "Fatherhood" },
  { id: "creativity", label: "Creativity" },
] as const;

export const posts: BlogPost[] = [
  {
    id: "the-prompt-is-the-mirror",
    title: "The Prompt Is the Mirror",
    subtitle: "What asking AI to write songs taught me about myself",
    date: "Feb 12, 2026",
    readTime: "5 min",
    category: "ai",
    excerpt:
      "When I started prompting AI to help me write lyrics, I expected the machine to do the creative work. Instead, it forced me to articulate feelings I'd been avoiding for years.",
    content: `When I started prompting AI to help me write lyrics, I expected the machine to do the creative work. Instead, it forced me to articulate feelings I'd been avoiding for years.

Here's the thing no one tells you about co-creating with AI: the quality of the output is entirely dependent on the quality of your input. And the quality of your input is entirely dependent on how well you know yourself.

I'd sit down at midnight and type something like: "Write a song about leadership." The result was always generic. Corporate. Empty. It sounded like a LinkedIn post set to music.

But when I typed: "Write a song about the specific loneliness of knowing your decision will eliminate someone's job, and the silence in your office after you've made that call" — something different happened. The AI had something real to work with. And so did I.

The prompt became a confession booth. The AI was just the wall I was speaking through.

I've started to think of prompting as a form of self-examination. Every vague prompt reveals a place where I haven't done the inner work yet. Every specific prompt is evidence that I have.

The machine doesn't know me. But in trying to communicate with it, I've come to know myself better than any journal or therapist has managed. Not because AI is wise — but because the act of translating your interior life into language precise enough for a model to understand is, itself, a profound exercise in clarity.

The prompt is the mirror. And I'm finally looking.`,
  },
  {
    id: "what-ambition-costs",
    title: "What Ambition Costs",
    subtitle: "A meditation on the tax we never talk about",
    date: "Jan 28, 2026",
    readTime: "7 min",
    category: "meaning",
    excerpt:
      "We celebrate ambition. We write books about it, build companies around it, raise children to have it. But we rarely talk about what it takes in return.",
    content: `We celebrate ambition. We write books about it, build companies around it, raise children to have it. But we rarely talk about what it takes in return.

I've been ambitious for as long as I can remember. It started as a survival mechanism — the child of immigrants learns early that excellence is not optional, it's armor. But somewhere along the way, the armor became the identity, and I forgot what I was protecting.

The cost of ambition isn't just time, though time is the most obvious currency. It's the slow erosion of the parts of yourself that don't serve the mission. The hobbies that fade. The friendships that thin. The version of you that used to sit on the floor and draw for hours, replaced by someone who calculates ROI on creative expression.

I'm not writing this to renounce ambition. I still believe in building things that matter. But I've started to see the transaction more clearly now. Every "yes" to the work is a "not now" to something else. And the "something else" is often the thing that makes the work worth doing.

My daughters will inherit my work ethic. I hope they'll also inherit the wisdom I'm still learning: that ambition without awareness is just sophisticated running. And at some point, you have to stop and ask what you're running toward — and what you left behind to get there.

The song "Quiet Ambition" came from this exact feeling. The recognition that the most meaningful version of ambition might be the one nobody sees. The one that doesn't need a stage.

I don't have this figured out. I probably never will. But I think the figuring out is the point.`,
  },
  {
    id: "between-two-languages",
    title: "Between Two Languages",
    subtitle: "On the untranslatable spaces of being Chinese-American",
    date: "Jan 15, 2026",
    readTime: "6 min",
    category: "identity",
    excerpt:
      "There are feelings that only exist in the gap between Mandarin and English. This is about learning to live in that gap instead of trying to close it.",
    content: `There are feelings that only exist in the gap between Mandarin and English. This is about learning to live in that gap instead of trying to close it.

My mother calls it "心里不舒服" — a discomfort in the heart. Not quite sadness, not quite anxiety. Something more elemental. A feeling that English doesn't have a clean word for, because English was built by people who didn't carry the same weight in the same way.

Growing up, I was the translator. Not just of words, but of entire worldviews. At parent-teacher conferences, I'd translate my mother's concerns into something the teacher could hear, and my teacher's responses into something my mother could trust. I was nine. I was a bridge. I was exhausted.

The Chinese-American experience is often described as being "between two worlds." But I think it's more accurate to say we're a third thing entirely — neither one nor the other, but something that couldn't exist without both. Like a chord that needs two notes to resonate.

When I wrote "Two Tongues," I was trying to capture that chord. The beauty and the loss of it. The way you can be perfectly fluent in two languages and still feel like you're speaking a third one that nobody else quite hears.

I've stopped trying to resolve the tension. The tension is the art. The gap between the languages is where my most honest self lives — in the space where neither culture's script can tell me exactly who to be, and I get to decide for myself.

My daughters will grow up even further from the source. Their Mandarin will be tourist-grade at best. But I hope they'll understand that the hyphen in "Chinese-American" isn't a minus sign. It's a bridge. And bridges are the most beautiful structures humans build.`,
  },
  {
    id: "the-2am-frequency",
    title: "The 2am Frequency",
    subtitle: "Why the best ideas come when the world is quiet",
    date: "Dec 30, 2025",
    readTime: "4 min",
    category: "creativity",
    excerpt:
      "There's a frequency that only exists at 2am. It's the one where your guard is down, your ego is asleep, and the truest version of your thoughts can finally surface.",
    content: `There's a frequency that only exists at 2am. It's the one where your guard is down, your ego is asleep, and the truest version of your thoughts can finally surface.

I don't recommend sleep deprivation as a creative strategy. But I've noticed something consistent across years of late nights: the ideas that come after midnight have a different quality. They're less polished, less strategic, less concerned with what people will think. They're raw in the way that matters.

During the day, I'm a leader. I make decisions, run meetings, optimize systems. My brain operates in a mode of productivity and protection. But at 2am, the protective layer dissolves. The question shifts from "what should I build?" to "what do I actually feel?"

Most of these songs were born in that window. Not because I'm more creative at night, but because I'm more honest. The 2am version of me doesn't have an audience in mind. He's just trying to say something true before the morning comes and the armor goes back on.

I think everyone has a 2am frequency. It doesn't have to be literal. It's whatever time and space strips away your performance self and leaves you with the real one. For some people it's a long run. For others it's a hot shower. For me, it's a dark room, a laptop, and an AI that doesn't judge.

Find your frequency. Protect it. Make something there.`,
  },
  {
    id: "letters-they-wont-read-yet",
    title: "Letters They Won't Read Yet",
    subtitle: "Writing for my daughters across time",
    date: "Dec 18, 2025",
    readTime: "5 min",
    category: "fatherhood",
    excerpt:
      "My daughters are too young to read these words. But I write them anyway, because one day the words will be all that's left of this version of me.",
    content: `My daughters are too young to read these words. But I write them anyway, because one day the words will be all that's left of this version of me.

There's a particular kind of loneliness in loving someone who can't yet understand the depth of what you feel for them. My youngest is three. She thinks I'm the person who makes pancakes and does the funny voice during bedtime stories. She's right, of course. But she doesn't know that I'm also the person who stands in her doorway after she falls asleep and wonders how something so small can make the entire world feel both more fragile and more important.

I started writing songs partly for this reason. Journals feel too private. Social media feels too performative. But a song? A song can carry emotion across time in a way that prose can't. When my daughters are twenty-five and discover these tracks, they won't just read about what their father felt. They'll hear it.

The song "Small Hands" is the most personal thing I've ever made. It's not a good song in any technical sense. The melody is simple. The lyrics are obvious. But every line is true in the way that only fatherhood makes possible — that desperate, overwhelming, quiet kind of true that you can't explain to anyone who hasn't felt it.

I don't know what kind of father I'll turn out to be. I don't know if they'll remember the pancakes or the funny voice. But they'll have the songs. And maybe that's enough.

Maybe that's always been enough.`,
  },
  {
    id: "ai-doesnt-dream",
    title: "AI Doesn't Dream",
    subtitle: "On the limits of the tools we're building",
    date: "Dec 5, 2025",
    readTime: "6 min",
    category: "ai",
    excerpt:
      "I build AI during the day and use AI to make music at night. The tool is extraordinary. But it's important to be honest about what it is and what it isn't.",
    content: `I build AI during the day and use AI to make music at night. The tool is extraordinary. But it's important to be honest about what it is and what it isn't.

AI doesn't dream. It doesn't lie awake at 2am wondering if the decision it made today was right. It doesn't carry the weight of a conversation it had with its father twenty years ago. It doesn't hear a melody in the sound of rain on a window and feel something it can't name.

These aren't limitations to be solved. They're the boundary between tool and creator, and that boundary is where the art lives.

When I use AI to write music, I'm not asking it to feel something on my behalf. I'm asking it to help me express something I already feel but lack the musical vocabulary to articulate. The emotion is mine. The craft is collaborative. The result is something neither of us could produce alone.

I worry sometimes about the narrative that AI will "replace" human creativity. Not because I think it will — but because the narrative itself can make people stop trying. If the machine can write a song, why bother? The answer is simple: because the song isn't the point. The point is the act of trying to say something true. The point is the 2am confession, the vulnerable prompt, the willingness to be bad at something in pursuit of honesty.

AI is the most powerful creative amplifier in human history. But an amplifier without a signal is just noise. The signal has to come from somewhere real. From a life lived, from losses absorbed, from love that costs something.

I'll keep building AI by day. I'll keep using it to make music by night. But I'll never confuse the tool for the artist. The tool doesn't dream. I do. And that's the whole difference.`,
  },
];

export function getPostById(id: string): BlogPost | undefined {
  return posts.find((p) => p.id === id);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "all") return posts;
  return posts.filter((p) => p.category === category);
}
