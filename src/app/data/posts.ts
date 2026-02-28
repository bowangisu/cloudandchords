import type { BilingualText } from "../i18n/LanguageContext";

export interface BlogPost {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  date: string;
  readTime: BilingualText;
  category: "ai" | "meaning" | "identity" | "fatherhood" | "creativity";
  excerpt: BilingualText;
  content: BilingualText;
}

export const postCategories: { id: string; label: BilingualText }[] = [
  { id: "all",        label: { en: "All",        zh: "全部" } },
  { id: "ai",         label: { en: "AI",         zh: "AI" } },
];

export const posts: BlogPost[] = [
  {
    id: "the-prompt-is-the-mirror",
    title: {
      en: "The Prompt Is the Mirror",
      zh: "提示词即是镜子",
    },
    subtitle: {
      en: "What asking AI to write songs taught me about myself",
      zh: "让AI写歌这件事，教会了我关于自己的什么",
    },
    date: "Feb 12, 2026",
    readTime: {
      en: "5 min",
      zh: "5 分钟",
    },
    category: "ai",
    excerpt: {
      en: "When I started prompting AI to help me write lyrics, I expected the machine to do the creative work. Instead, it forced me to articulate feelings I'd been avoiding for years.",
      zh: "当我开始用AI辅助写歌词时，我以为机器会替我完成创作。没想到，它反而迫使我去表达那些多年来一直在回避的感受。",
    },
    content: {
      en: `When I started prompting AI to help me write lyrics, I expected the machine to do the creative work. Instead, it forced me to articulate feelings I'd been avoiding for years.

Here's the thing no one tells you about co-creating with AI: the quality of the output is entirely dependent on the quality of your input. And the quality of your input is entirely dependent on how well you know yourself.

I'd sit down at midnight and type something like: "Write a song about leadership." The result was always generic. Corporate. Empty. It sounded like a LinkedIn post set to music.

But when I typed: "Write a song about the specific loneliness of knowing your decision will eliminate someone's job, and the silence in your office after you've made that call" — something different happened. The AI had something real to work with. And so did I.

The prompt became a confession booth. The AI was just the wall I was speaking through.

I've started to think of prompting as a form of self-examination. Every vague prompt reveals a place where I haven't done the inner work yet. Every specific prompt is evidence that I have.

The machine doesn't know me. But in trying to communicate with it, I've come to know myself better than any journal or therapist has managed. Not because AI is wise — but because the act of translating your interior life into language precise enough for a model to understand is, itself, a profound exercise in clarity.

The prompt is the mirror. And I'm finally looking.`,
      zh: `当我开始用AI辅助写歌词时，我以为机器会替我完成创作。没想到，它反而迫使我去表达那些多年来一直在回避的感受。

有一件事没人会提前告诉你：与AI协作创作时，输出的质量完全取决于输入的质量。而输入的质量，完全取决于你对自己的了解有多深。

午夜时分，我坐下来敲出这样一行字："写一首关于领导力的歌。"结果千篇一律——套话连篇，空洞无物，听起来像是配了背景音乐的LinkedIn帖子。

但当我输入："写一首歌，关于那种特殊的孤独——你明知自己的决定会让某个人失去工作，打完那通电话后，办公室里一片沉寂"——一切都不同了。AI有了真实的素材可以加工，而我也终于面对了真实的自己。

提示词变成了告解室。AI不过是我倾诉时隔着的那堵墙。

我开始把撰写提示词看作一种自我审视。每一个含糊的提示词，都暴露了一个我尚未做好内心功课的角落。每一个精确的提示词，都是我已经直面自我的证据。

机器并不了解我。但在努力与它沟通的过程中，我比任何日记或心理咨询都更深地认识了自己。不是因为AI有多智慧——而是因为把你内心的世界翻译成足够精确的语言、让一个模型能够理解，这个行为本身，就是一场深刻的自我澄清。

提示词就是镜子。而我终于开始正视自己。`,
    },
  },
  {
    id: "ai-doesnt-dream",
    title: {
      en: "AI Doesn't Dream",
      zh: "AI不会做梦",
    },
    subtitle: {
      en: "On the limits of the tools we're building",
      zh: "关于我们正在构建的工具的边界",
    },
    date: "Dec 5, 2025",
    readTime: {
      en: "6 min",
      zh: "6 分钟",
    },
    category: "ai",
    excerpt: {
      en: "I build AI during the day and use AI to make music at night. The tool is extraordinary. But it's important to be honest about what it is and what it isn't.",
      zh: "白天我构建AI，夜晚我用AI做音乐。这个工具非凡至极。但重要的是，对它是什么、不是什么，保持诚实。",
    },
    content: {
      en: `I build AI during the day and use AI to make music at night. The tool is extraordinary. But it's important to be honest about what it is and what it isn't.

AI doesn't dream. It doesn't lie awake at 2am wondering if the decision it made today was right. It doesn't carry the weight of a conversation it had with its father twenty years ago. It doesn't hear a melody in the sound of rain on a window and feel something it can't name.

These aren't limitations to be solved. They're the boundary between tool and creator, and that boundary is where the art lives.

When I use AI to write music, I'm not asking it to feel something on my behalf. I'm asking it to help me express something I already feel but lack the musical vocabulary to articulate. The emotion is mine. The craft is collaborative. The result is something neither of us could produce alone.

I worry sometimes about the narrative that AI will "replace" human creativity. Not because I think it will — but because the narrative itself can make people stop trying. If the machine can write a song, why bother? The answer is simple: because the song isn't the point. The point is the act of trying to say something true. The point is the 2am confession, the vulnerable prompt, the willingness to be bad at something in pursuit of honesty.

AI is the most powerful creative amplifier in human history. But an amplifier without a signal is just noise. The signal has to come from somewhere real. From a life lived, from losses absorbed, from love that costs something.

I'll keep building AI by day. I'll keep using it to make music by night. But I'll never confuse the tool for the artist. The tool doesn't dream. I do. And that's the whole difference.`,
      zh: `白天我构建AI，夜晚我用AI做音乐。这个工具非凡至极。但重要的是，对它是什么、不是什么，保持诚实。

AI不会做梦。它不会在凌晨两点辗转难眠、反复掂量今天做的决定对不对。它不会背负二十年前与父亲某次对话的重量。它不会在雨打窗棂的声音里听出一段旋律，然后涌起一种自己都无法命名的情感。

这些不是有待解决的缺陷。它们是工具与创造者之间的分界线，而艺术恰恰栖居在那条线上。

当我用AI写音乐时，我不是在请它代替我去感受什么。我是在请它帮我表达那些我已然感受到、却缺乏音乐语言去表述的东西。情感是我的，技艺是协作的，成果则是我们任何一方都无法独自完成的。

我有时会担心那种"AI将取代人类创造力"的论调。不是因为我觉得它会——而是因为这种论调本身会让人们停止尝试。如果机器都能写歌了，何必费那个劲？答案很简单：因为歌本身不是目的。目的是那个努力说出真话的行为。是凌晨两点的坦白，是脆弱的提示词，是为了诚实而甘愿笨拙的勇气。

AI是人类历史上最强大的创造力放大器。但没有信号的放大器只是噪音。信号必须来自真实的地方——来自被真切活过的人生，来自被消化了的失去，来自有代价的爱。

我会继续白天构建AI，夜晚用它做音乐。但我永远不会把工具误认为艺术家。工具不会做梦。我会。这就是全部的区别。`,
    },
  },
];

export function getPostById(id: string): BlogPost | undefined {
  return posts.find((p) => p.id === id);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "all") return posts;
  return posts.filter((p) => p.category === category);
}
