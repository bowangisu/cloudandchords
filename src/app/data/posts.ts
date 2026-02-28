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
  { id: "meaning",    label: { en: "Meaning",    zh: "意义" } },
  { id: "identity",   label: { en: "Identity",   zh: "身份" } },
  { id: "fatherhood", label: { en: "Fatherhood", zh: "父亲" } },
  { id: "creativity", label: { en: "Creativity", zh: "创意" } },
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
    id: "what-ambition-costs",
    title: {
      en: "What Ambition Costs",
      zh: "野心的代价",
    },
    subtitle: {
      en: "A meditation on the tax we never talk about",
      zh: "关于那笔我们从不言说的税",
    },
    date: "Jan 28, 2026",
    readTime: {
      en: "7 min",
      zh: "7 分钟",
    },
    category: "meaning",
    excerpt: {
      en: "We celebrate ambition. We write books about it, build companies around it, raise children to have it. But we rarely talk about what it takes in return.",
      zh: "我们颂扬野心。为它著书立说，围绕它创建公司，教育孩子要拥有它。但我们很少谈论它从我们这里拿走了什么。",
    },
    content: {
      en: `We celebrate ambition. We write books about it, build companies around it, raise children to have it. But we rarely talk about what it takes in return.

I've been ambitious for as long as I can remember. It started as a survival mechanism — the child of immigrants learns early that excellence is not optional, it's armor. But somewhere along the way, the armor became the identity, and I forgot what I was protecting.

The cost of ambition isn't just time, though time is the most obvious currency. It's the slow erosion of the parts of yourself that don't serve the mission. The hobbies that fade. The friendships that thin. The version of you that used to sit on the floor and draw for hours, replaced by someone who calculates ROI on creative expression.

I'm not writing this to renounce ambition. I still believe in building things that matter. But I've started to see the transaction more clearly now. Every "yes" to the work is a "not now" to something else. And the "something else" is often the thing that makes the work worth doing.

My daughters will inherit my work ethic. I hope they'll also inherit the wisdom I'm still learning: that ambition without awareness is just sophisticated running. And at some point, you have to stop and ask what you're running toward — and what you left behind to get there.

The song "Quiet Ambition" came from this exact feeling. The recognition that the most meaningful version of ambition might be the one nobody sees. The one that doesn't need a stage.

I don't have this figured out. I probably never will. But I think the figuring out is the point.`,
      zh: `我们颂扬野心。为它著书立说，围绕它创建公司，教育孩子要拥有它。但我们很少谈论它从我们这里拿走了什么。

从记事起，我就是一个有野心的人。最初它是一种生存机制——移民的孩子很早就懂得，优秀不是可选项，而是铠甲。但不知从何时起，铠甲变成了身份本身，我忘记了自己最初在保护什么。

野心的代价不仅仅是时间，尽管时间是最显而易见的货币。它是那些与使命无关的自我碎片被缓慢侵蚀——渐渐搁下的爱好，逐渐疏远的友谊，那个曾经能坐在地上画画好几个小时的你，被一个对创意表达计算投资回报率的人所取代。

写这些不是为了放弃野心。我依然相信要去创造有意义的东西。但我开始更清晰地看到这笔交易了。每一次对工作说"好的"，都是对另一件事说"现在不行"。而那个"另一件事"，往往恰恰是让工作本身值得去做的东西。

我的女儿们会继承我的职业精神。我希望她们也能继承我仍在学习的智慧：没有自省的野心，不过是一种精致的逃跑。在某个时刻，你必须停下来问问自己，你在奔向什么——又为此把什么遗落在了身后。

《沉静的野心》这首歌正是源于这种感受。那是一种领悟：最有意义的野心，或许恰恰是不为人知的那种。不需要舞台的那种。

我还没有想明白这一切。大概永远也不会。但我觉得，去想这件事本身，就是意义所在。`,
    },
  },
  {
    id: "between-two-languages",
    title: {
      en: "Between Two Languages",
      zh: "两种语言之间",
    },
    subtitle: {
      en: "On the untranslatable spaces of being Chinese-American",
      zh: "关于华裔美国人身份中那些无法翻译的地带",
    },
    date: "Jan 15, 2026",
    readTime: {
      en: "6 min",
      zh: "6 分钟",
    },
    category: "identity",
    excerpt: {
      en: "There are feelings that only exist in the gap between Mandarin and English. This is about learning to live in that gap instead of trying to close it.",
      zh: "有些感受只存在于中文和英文的缝隙之间。这篇文章讲的是学会栖居在那个缝隙里，而不是试图将它弥合。",
    },
    content: {
      en: `There are feelings that only exist in the gap between Mandarin and English. This is about learning to live in that gap instead of trying to close it.

My mother calls it "心里不舒服" — a discomfort in the heart. Not quite sadness, not quite anxiety. Something more elemental. A feeling that English doesn't have a clean word for, because English was built by people who didn't carry the same weight in the same way.

Growing up, I was the translator. Not just of words, but of entire worldviews. At parent-teacher conferences, I'd translate my mother's concerns into something the teacher could hear, and my teacher's responses into something my mother could trust. I was nine. I was a bridge. I was exhausted.

The Chinese-American experience is often described as being "between two worlds." But I think it's more accurate to say we're a third thing entirely — neither one nor the other, but something that couldn't exist without both. Like a chord that needs two notes to resonate.

When I wrote "Two Tongues," I was trying to capture that chord. The beauty and the loss of it. The way you can be perfectly fluent in two languages and still feel like you're speaking a third one that nobody else quite hears.

I've stopped trying to resolve the tension. The tension is the art. The gap between the languages is where my most honest self lives — in the space where neither culture's script can tell me exactly who to be, and I get to decide for myself.

My daughters will grow up even further from the source. Their Mandarin will be tourist-grade at best. But I hope they'll understand that the hyphen in "Chinese-American" isn't a minus sign. It's a bridge. And bridges are the most beautiful structures humans build.`,
      zh: `有些感受只存在于中文和英文的缝隙之间。这篇文章讲的是学会栖居在那个缝隙里，而不是试图将它弥合。

我妈妈把它叫做"心里不舒服"——心里有种说不上来的不适。不完全是悲伤，也不完全是焦虑。更原始的某种东西。英文里找不到一个恰切的词来形容，因为英文是由不曾以同样方式背负同样重量的人建造的。

从小，我就是翻译。不只是语言的翻译，更是整个世界观的翻译。在家长会上，我把妈妈的担忧翻译成老师能听进去的话，再把老师的回应翻译成妈妈能信任的话。我那年九岁。我是一座桥。我疲惫不堪。

华裔美国人的经历常被描述为"处于两个世界之间"。但我觉得更准确的说法是：我们是第三种存在——既非此亦非彼，却是一种离开任何一方都无法成立的东西。就像和弦需要两个音符才能产生共鸣。

写《两种语言》这首歌时，我试图捕捉的就是那个和弦。其中的美与失落。那种你可以流利地说两种语言，却仍然觉得自己在说第三种、别人听不太懂的语言的感觉。

我不再试图消解这种张力了。张力本身就是艺术。两种语言之间的那道缝隙，恰是我最真实的自我栖居之处——在那个空间里，哪种文化的剧本都无法告诉我该成为谁，而我可以自己决定。

我的女儿们将在离源头更远的地方长大。她们的中文充其量也就是旅游水平。但我希望她们能明白，"华裔美国人"中间的那个连字符不是减号，而是一座桥。桥，是人类建造的最美的结构。`,
    },
  },
  {
    id: "the-2am-frequency",
    title: {
      en: "The 2am Frequency",
      zh: "凌晨两点的频率",
    },
    subtitle: {
      en: "Why the best ideas come when the world is quiet",
      zh: "为什么最好的想法总在万籁俱寂时降临",
    },
    date: "Dec 30, 2025",
    readTime: {
      en: "4 min",
      zh: "4 分钟",
    },
    category: "creativity",
    excerpt: {
      en: "There's a frequency that only exists at 2am. It's the one where your guard is down, your ego is asleep, and the truest version of your thoughts can finally surface.",
      zh: "有一种频率只在凌晨两点存在。在那个时刻，你的防备卸下了，自尊心睡着了，最真实的想法终于得以浮出水面。",
    },
    content: {
      en: `There's a frequency that only exists at 2am. It's the one where your guard is down, your ego is asleep, and the truest version of your thoughts can finally surface.

I don't recommend sleep deprivation as a creative strategy. But I've noticed something consistent across years of late nights: the ideas that come after midnight have a different quality. They're less polished, less strategic, less concerned with what people will think. They're raw in the way that matters.

During the day, I'm a leader. I make decisions, run meetings, optimize systems. My brain operates in a mode of productivity and protection. But at 2am, the protective layer dissolves. The question shifts from "what should I build?" to "what do I actually feel?"

Most of these songs were born in that window. Not because I'm more creative at night, but because I'm more honest. The 2am version of me doesn't have an audience in mind. He's just trying to say something true before the morning comes and the armor goes back on.

I think everyone has a 2am frequency. It doesn't have to be literal. It's whatever time and space strips away your performance self and leaves you with the real one. For some people it's a long run. For others it's a hot shower. For me, it's a dark room, a laptop, and an AI that doesn't judge.

Find your frequency. Protect it. Make something there.`,
      zh: `有一种频率只在凌晨两点存在。在那个时刻，你的防备卸下了，自尊心睡着了，最真实的想法终于得以浮出水面。

我并不推荐把熬夜当作创作策略。但在多年的深夜里，我注意到一个规律：午夜之后浮现的想法，有一种不同的质地。它们没那么精致，没那么有策略感，也不太在乎别人怎么看。它们是那种真正有意义的粗粝。

白天的我是一个领导者。做决策，开会，优化系统。我的大脑运行在一种高产出、高防御的模式下。但到了凌晨两点，那层保护膜溶解了。问题从"我应该做什么"变成了"我真正的感受是什么"。

这些歌大多诞生在那个时间窗口。不是因为我在夜晚更有创造力，而是因为我在夜晚更诚实。凌晨两点的我，心里没有观众。他只是想在天亮之前、铠甲重新穿上之前，说出一些真实的东西。

我想每个人都有自己的"凌晨两点频率"。不一定是字面意义上的凌晨两点。它是任何能剥去你表演性自我、只留下真实自我的时间和空间。对有些人来说，是一次长跑；对另一些人来说，是一个热水澡。对我来说，是一个暗暗的房间、一台笔记本电脑，和一个不会评判你的AI。

找到你的频率。守护它。在那里创造些什么。`,
    },
  },
  {
    id: "letters-they-wont-read-yet",
    title: {
      en: "Letters They Won't Read Yet",
      zh: "她们还读不懂的信",
    },
    subtitle: {
      en: "Writing for my daughters across time",
      zh: "写给女儿们，跨越时光",
    },
    date: "Dec 18, 2025",
    readTime: {
      en: "5 min",
      zh: "5 分钟",
    },
    category: "fatherhood",
    excerpt: {
      en: "My daughters are too young to read these words. But I write them anyway, because one day the words will be all that's left of this version of me.",
      zh: "我的女儿们还太小，读不懂这些文字。但我还是写了，因为总有一天，这些文字将是这个版本的我仅存的痕迹。",
    },
    content: {
      en: `My daughters are too young to read these words. But I write them anyway, because one day the words will be all that's left of this version of me.

There's a particular kind of loneliness in loving someone who can't yet understand the depth of what you feel for them. My youngest is three. She thinks I'm the person who makes pancakes and does the funny voice during bedtime stories. She's right, of course. But she doesn't know that I'm also the person who stands in her doorway after she falls asleep and wonders how something so small can make the entire world feel both more fragile and more important.

I started writing songs partly for this reason. Journals feel too private. Social media feels too performative. But a song? A song can carry emotion across time in a way that prose can't. When my daughters are twenty-five and discover these tracks, they won't just read about what their father felt. They'll hear it.

The song "Small Hands" is the most personal thing I've ever made. It's not a good song in any technical sense. The melody is simple. The lyrics are obvious. But every line is true in the way that only fatherhood makes possible — that desperate, overwhelming, quiet kind of true that you can't explain to anyone who hasn't felt it.

I don't know what kind of father I'll turn out to be. I don't know if they'll remember the pancakes or the funny voice. But they'll have the songs. And maybe that's enough.

Maybe that's always been enough.`,
      zh: `我的女儿们还太小，读不懂这些文字。但我还是写了，因为总有一天，这些文字将是这个版本的我仅存的痕迹。

爱一个还无法理解你对她感情深度的人，有一种独特的孤独。我小女儿三岁。在她眼里，我是那个做煎饼、讲睡前故事时扮搞笑声音的人。她说得没错。但她不知道，我也是那个在她入睡后站在门口、不可思议地想着这么小的一个人竟能让整个世界同时变得更脆弱也更重要的人。

我开始写歌，部分原因就在于此。日记太私密，社交媒体太表演。但歌呢？歌能以散文做不到的方式，将情感跨越时间传递。当女儿们二十五岁、偶然发现这些歌的时候，她们不只是在读父亲的感受，她们会听到它。

《小小的手》是我创作过的最私人的作品。从技术角度来说，它算不上一首好歌。旋律简单，歌词直白。但每一行都是那种只有为人父才可能达到的真实——那种迫切的、铺天盖地的、安静的真实，你无法向没有体会过的人解释。

我不知道自己最终会成为什么样的父亲。我不知道她们会不会记得煎饼或者那个搞笑的声音。但她们会有那些歌。也许这就够了。

也许这一直都够了。`,
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
