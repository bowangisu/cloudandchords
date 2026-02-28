import type { BilingualText } from "../i18n/LanguageContext";

export type SongCategory = "love" | "reflection" | "wuxia" | "faith" | "family" | "resilience";

export interface Song {
  id: string;
  title: BilingualText;
  subtitle: BilingualText;
  category: SongCategory;
  description: BilingualText;
  coverImage: string;
  lyrics: string;
  originalLanguage: "en" | "zh";
  behindTheSong?: BilingualText;
  duration: string;
  audioFile?: string;
  releaseDate: string; // "YYYY-MM" format for sorting
}

export const categories: { id: string; label: BilingualText }[] = [
  { id: "all",        label: { en: "All",        zh: "全部" } },
  { id: "love",       label: { en: "Love",       zh: "爱情" } },
  { id: "reflection", label: { en: "Reflection", zh: "思考" } },
  { id: "wuxia",      label: { en: "Wuxia",      zh: "武侠" } },
  { id: "faith",      label: { en: "Faith",      zh: "信仰" } },
  { id: "family",     label: { en: "Family",     zh: "家庭" } },
  { id: "resilience", label: { en: "Resilience", zh: "坚韧" } },
];

export const songs: Song[] = [
  {
    id: "red",
    releaseDate: "2026-02",
    title: { en: "Red", zh: "Red" },
    subtitle: { en: "A love that colors everything", zh: "染红一切的爱" },
    category: "love",
    description: {
      en: "A song about love that transforms your entire world into vivid color.",
      zh: "一首关于爱情的歌——那种能将你整个世界染成鲜艳色彩的爱。",
    },
    coverImage: "/cover/RED.jpeg",
    duration: "5:12",
    originalLanguage: "en",
    audioFile: "/songs/Red.mp3",
    lyrics: `Look at the sky tonight,
It's burning in your eyes,
Every little spark you hide
Is lighting up my life.

You don't even have to try,
You don't even have to speak,
Every time you're next to me
My heart forgets to breathe.

And I was blue before you came,
A quiet shadow in the rain,
But you called my name —

Red…
Like the blood inside my veins,
Like the fire we can't contain.
Oh, you turn my world to red.

Red…
Every sunset that we chase,
Every kiss that leaves a trace.
All I see, all I feel —
Is red.

You're the rush beneath my skin,
The riot pulling me in,
Every doubt I ever had
Falls away in crimson wind.

We don't need a reason why,
We don't need a perfect plan,
If you're reaching for my hand,
I know exactly who I am.

I was drifting in the grey,
Just another yesterday,
Till you showed me the flame —

Red…
Like the beating of a drum,
Like the place we're running from.
Oh, you turn my world to red.

Red…
Like the truth we're not afraid,
Like the love we never shade.
All I see, all I feel —
Is red.

And if the stars all fade to black,
If the night tries pulling us back,
I'll hold on to your light —
Your light.

We don't have to be afraid,
We don't have to look away,
'Cause you color every day —

Red…
Like the sunrise in your hair,
Like a promise in the air.
Oh, you turn my world to red.

Red…
Every heartbeat, every breath,
Even loving you to death —
All I see, all I feel,
All I'll ever want is

Red.`,
    behindTheSong: {
      en: "This song was born from the simple realization that love isn't subtle — it's vivid, overwhelming, and unmistakable. Before love, the world felt grey. After, everything was red.",
      zh: "这首歌源于一个简单的领悟：爱不是含蓄的——它是鲜明的、压倒性的、不可错认的。在爱之前，世界是灰色的。之后，一切都变成了红色。",
    },
  },
  {
    id: "yi-bian-yi-bian",
    releaseDate: "2026-01",
    title: { en: "On One Hand, On the Other", zh: "一边一边" },
    subtitle: { en: "The contradictions we live with", zh: "我们与矛盾共存" },
    category: "reflection",
    description: {
      en: "A song about the beautiful contradictions of growing up — doubting yet persisting, falling yet rising, alone yet shining.",
      zh: "一首关于成长中美丽矛盾的歌——怀疑却坚持，跌倒却站起，孤单却璀璨。",
    },
    coverImage: "/cover/一边一边.jpeg",
    duration: "4:35",
    originalLanguage: "zh",
    audioFile: "/songs/一边一边.mp3",
    lyrics: `你走过很长很长的路，
想看转过街角的风景。
年少的时候不服输，
想看外面精彩的世界。

月亮一直亮到很晚，
窗外还留几盏灯光。
后来才慢慢明白，
不是所有问题，
都能有正确答案。

你一边想要勇敢，
一边又怕孤单。
你不是不够坚强，
只是到了这年纪，
不敢轻易的投降。

你一边怀疑 一边坦然，
一边流泪 一边笑得自然；
一边低头 一边往前，
一边说算了 却一遍又一遍。

你一边孤单 一边璀璨，
一边跌倒 一边勇敢；
如果世界听不见，
至少你，
还在身边。

凌晨三点半的夜，
房间还亮着微光。
你听着收音机的老歌，
不知把心事
往哪放一放。

你一边爱着秩序，
一边又向往疯狂。
年轻说要改变世界，
如今只想
别辜负这一场。

有时你显得笃定，
像什么都有答案。
偶尔也会怀疑，
失去了方向感。

你一边装作坦然，
一边咬牙承担。
你知道没有标准答案，
却还是一步一步，
走在寻找自己的路上。

你一边怀疑 一边坦然，
一边流泪 一边笑得自然；
一边低头 一边往前，
一边说算了 却一遍又一遍。

你一边孤单 一边璀璨，
一边跌倒 一边勇敢；
如果世界听不见，
至少你，
还在身边。

有时候你也会想，
换条路又会怎样。
可真要重来一次，
你还是会，
选择不平凡。

人这一辈子哪有
那么正确的答案，
不过就是
一边后悔，
一边承担。

你一边怀疑 一边坦然，
一边流泪 一边笑得自然；
一边低头 一边往前，
一边说算了 却一遍又一遍。

你一边孤单 一边璀璨，
一边平凡 一边浪漫；
如果世界终究听见，
那是因为你在黑夜，
点亮了火焰`,
    behindTheSong: {
      en: "We all carry contradictions — wanting to be brave while fearing loneliness, doubting while moving forward. This song was written for everyone who lives between two sides of themselves, and somehow keeps walking.",
      zh: "我们都承载着矛盾——想要勇敢却害怕孤单，怀疑却继续前行。这首歌写给每一个在自我的两面之间生活，却依然坚持走下去的人。",
    },
  },
  {
    id: "dao-guang-qin-ying",
    releaseDate: "2025-10",
    title: { en: "Swords & Strings", zh: "刀光琴影" },
    subtitle: { en: "A wuxia love lost to the rivers and lakes", zh: "江湖儿女情长" },
    category: "wuxia",
    description: {
      en: "A cinematic wuxia ballad about a swordsman who could conquer everything except the memory of the one he loved.",
      zh: "一首电影般的武侠情歌，关于一个剑客——他能征服一切，却无法征服对爱人的记忆。",
    },
    coverImage: "/cover/刀光舞影.jpeg",
    duration: "4:22",
    originalLanguage: "zh",
    audioFile: "/songs/刀光舞影.mp3",
    lyrics: `踏雪无声，夜半出城，
剑光冷冷，照我半生。
她说江湖远，爱也长，
可惜英雄梦，容不下柔肠。

当年桃花开满山岗，
她弹一曲《问情》泪光。
我以为天下无敌，
却败在她的目光。

刀光破晓，血染月光，
琴影如梦，泪也滚烫。
儿女情长，不过一场，
你是我江湖里最难忘的伤。

东风吹乱少年的狂，
快意恩仇都写在刀上。
她在孤城西望天涯，
我在战场听雪落下。

郭靖的忠，杨过的伤，
情比剑锋更锋芒。
若问世间最难忘，
是情，是义，还是她的模样？

刀光破晓，血染月光，
琴影如梦，泪也滚烫。
儿女情长，不过一场，
你是我江湖里最难忘的伤。

剑归鞘，人未忘，
她的信封已泛黄。
我以为放下了，
却在梦中仍叫她的名字一场又一场。

刀光！映出梦的方向！
琴影！拨碎旧时光！
江湖太长，爱太狂，
我以一生换她半世芳！`,
    behindTheSong: {
      en: "Inspired by the world of Jin Yong's wuxia novels — where heroes must choose between love and duty, between the sword and the heart. This song asks: what if the greatest battle was never on the battlefield?",
      zh: "灵感来自金庸的武侠世界——英雄必须在爱与义之间、在刀与心之间做出选择。这首歌在问：如果最大的战役从来不在战场上呢？",
    },
  },
  {
    id: "tong-yi-shu-guang",
    releaseDate: "2026-01",
    title: { en: "The Same Light", zh: "同一束光" },
    subtitle: { en: "All paths lead to the same truth", zh: "万路同归" },
    category: "faith",
    description: {
      en: "A contemplative hymn about the unity beneath all faiths — that love, compassion, and light are universal.",
      zh: "一首沉思的赞歌，关于所有信仰之下的统一——爱、慈悲和光是普世的。",
    },
    coverImage: "/cover/同一束光.jpeg",
    duration: "5:03",
    originalLanguage: "zh",
    audioFile: "/songs/同一束光.mp3",
    lyrics: `无名的风
穿过沙漠与雪山
在夜空下
点亮同一颗心

万物如露
在晨光里显现
有形之相
终将归于无形

我放下名字
放下执念
当我不再抓紧
世界反而清晰

我们仰望的
不是不同的天
我们祈祷的
是同一份慈悲

若爱是真理
若光来自一处
那你与我之间
不该有界线

起初是光
照进混沌的深渊
黑暗退后
生命开始呼吸

爱不是审判
爱不是条件
当我看见你
我也看见自己

唯一的主
不在形象之中
祂比呼吸更近
比心跳更温柔

万名归一
众路同源
向善而行
即是朝向祂的方向

我们跪下
不是为了分离
我们低头
是为了彼此看见

若仁慈是道路
若谦卑是门
那所有名字
都指向同一真

Om ——
Amen ——
Salaam ——

当我放下"我"
你便不再陌生
当我拥抱差异
神性在其中诞生

世界有万种故事
却同一声心跳
我们都是旅人
在光中相遇、相认

同一束光
穿越万年
照亮你我
不分语言`,
    behindTheSong: {
      en: "I've always been fascinated by how different religions describe the same truths in different languages. Om, Amen, Salaam — different sounds, same yearning. This song is a prayer for unity.",
      zh: "我一直着迷于不同宗教如何用不同语言描述相同的真理。Om、Amen、Salaam——不同的声音，相同的渴望。这首歌是一个关于统一的祈祷。",
    },
  },
  {
    id: "man-man-zhang-da",
    releaseDate: "2025-06",
    title: { en: "Growing Up Slowly", zh: "慢慢长大" },
    subtitle: { en: "A father's letter to his child", zh: "写给孩子的信" },
    category: "family",
    description: {
      en: "A tender song from a father watching his child grow, knowing time won't wait.",
      zh: "一首温柔的歌，关于一个父亲看着孩子长大，知道时间不会等待。",
    },
    coverImage: "/cover/慢慢长大.jpeg",
    duration: "4:18",
    originalLanguage: "zh",
    audioFile: "/songs/慢慢长大.mp3",
    lyrics: `你还是学不会自己穿袜子
总是赖着我，说"爸爸帮一下"
清晨的阳光洒进小小的房间
我看着你揉眼睛，那副模样多傻

你说长大后要当个舞台的光
跳你最喜欢的体操和花样
我笑着说"别急，路还长"
心里却偷偷祈祷你别受伤

你慢慢长大，像春天发芽
我学着放手，却总怕你挣扎
这个世界不总温柔，不总回答
可你要记得，你有家，有个爸

你慢慢长大，有一天会远行
也许不再给我晚安的亲
但只要你想起，谁最懂你哭的声音
无论你在哪儿，我就在那儿回应

你偶尔也会问我，什么是爱
我吞了吞口水，说"以后你会明白"
其实我怕你学会太快
怕你太懂人心，也太容易被伤害

你画的那幅画，我一直留着
说那是你和我，在夕阳下拉着手呢
你说"爸爸你不要老变老"
我答应你，可心却偷偷颤抖

你慢慢长大，像风筝飞啦
我放线放到，心都在挣扎
这个世界啊，会给你谜题和真假
但请你相信，你一直是我牵挂

你慢慢长大，会有自己的梦
也许不再依赖我撑伞过风
但只要你回头，看见那个灯火通明
那是我一生，在等你回来的声音

等你慢慢长大
我就慢慢老去
但别怕
爸爸一直都在这儿`,
    behindTheSong: {
      en: "My daughter still can't put on her own socks. She asks me to help every morning. One day she won't need me for that anymore. This song is about trying to hold onto these small moments before they slip away.",
      zh: "我女儿还不会自己穿袜子。每天早上都要我帮忙。总有一天她不再需要我帮这个了。这首歌是关于在这些小时刻溜走之前，试图抓住它们。",
    },
  },
  {
    id: "tai-qi-tou-ji-xu-zou",
    releaseDate: "2025-07",
    title: { en: "Lift Your Head, Keep Walking", zh: "抬起头继续走" },
    subtitle: { en: "For everyone fighting their quiet battles", zh: "献给每个默默奋斗的人" },
    category: "resilience",
    description: {
      en: "An anthem for the ordinary heroes — those who carry heavy dreams on tired shoulders and still refuse to give up.",
      zh: "一首献给平凡英雄的歌——那些肩负沉重梦想却依然拒绝放弃的人。",
    },
    coverImage: "/cover/抬起头继续走.jpeg",
    duration: "4:05",
    originalLanguage: "zh",
    audioFile: "/songs/抬起头继续走.mp3",
    lyrics: `凌晨的灯还亮着光，
你独自走在回家的路上。
肩上的梦有些沉重，
可你从不肯放下希望。

地铁里默默看着窗，
人潮中你藏起了彷徨。
那些没人懂的委屈，
都藏进笑容里慢慢消化。

别怕，别哭，别说放弃太苦，
我们都在为了明天忙碌。
风再大，也吹不走心中的温度，
你已经很棒了，就继续走下去。

爸妈电话说"别太累"，
你却故作轻松说一切无所谓。
孩子的笑成了你的光，
再难也值得你扛。

别怕，别哭，别说命运太酷，
每一步都算数。
雨再冷，也浇不灭你眼里的温度，
你的路，会有光，继续走下去。

也许现在没什么人看见，
但你的坚持会被世界纪念。
转角那道光，会为你点燃，
不为别人，只为你自己勇敢。

继续走，不回头，
哪怕风再喧哗，夜再黑。
你不是一个人，
我们都在前行的路上，
继续走。`,
    behindTheSong: {
      en: "Written for the people who take the late train home, who pretend everything is fine on the phone with their parents, who use their children's smiles as fuel to keep going. You're not alone. Keep walking.",
      zh: "写给那些坐深夜地铁回家的人，给在电话里对父母假装一切都好的人，给用孩子的笑容当作继续前行动力的人。你不是一个人。继续走。",
    },
  },
  {
    id: "chang-ye-gu-zhou",
    releaseDate: "2025-07",
    title: { en: "Lone Boat in the Long Night", zh: "长夜孤舟" },
    subtitle: { en: "A poet's exile, a rebel's fury", zh: "诗人的流放，反叛者的怒火" },
    category: "wuxia",
    description: {
      en: "Inspired by the great exiled poets of Chinese history — those who were banished but never silenced, who wrote their greatest works in defiance.",
      zh: "灵感来自中国历史上伟大的流放诗人——他们被贬谪却从未沉默，在抗争中写下了最伟大的作品。",
    },
    coverImage: "/cover/长夜孤舟.jpeg",
    duration: "3:55",
    originalLanguage: "zh",
    audioFile: "/songs/长夜孤舟.mp3",
    lyrics: `谪居千里之外，孤影随江水漂
一纸诏书，碎我梦中画桥
星沉海底，谁听我长啸？
铁马冰河梦，换来囚笼鸟

我怒吼！蒿里残酒！
谁将忠骨掩埋泥后！
这江山不识我名，
我便在雷霆中，写我诗九首！

酒入愁肠，化作剑锋寒
明月照我影，空对万山澜
知己天涯散，何处共悲欢？
笑问蒼天老，何以负孤胆？

我怒吼！蒿里残酒！
谁将忠骨掩埋泥后！
这江山不识我名，
我便在雷霆中，写我诗九首！

鼓声如战鼓，琴音似裂风
贬我千里，我踏破长空
我不是囚徒，是流星的火种
放逐中重生，踏碎旧梦！

谁说被贬是终章？
我在怒火中高唱：
"天若弃我，我便逆天而上！"`,
    behindTheSong: {
      en: "Li Bai, Su Shi, Qu Yuan — China's greatest poets were all exiled. They turned banishment into brilliance. This rock-infused ballad channels their defiant spirit: 'If heaven abandons me, I'll rise against heaven itself.'",
      zh: "李白、苏轼、屈原——中国最伟大的诗人都曾被流放。他们将贬谪化为辉煌。这首融合摇滚的歌曲承载了他们不屈的精神：'天若弃我，我便逆天而上！'",
    },
  },
  {
    id: "chang-an-blues",
    releaseDate: "2025-06",
    title: { en: "Chang'an Blues", zh: "长安布鲁斯" },
    subtitle: { en: "A love letter to Xi'an, across the ocean", zh: "隔着大洋写给西安的情书" },
    category: "love",
    description: {
      en: "A blues-infused ode to the ancient city of Chang'an (Xi'an) — its walls, its streets, and the love left behind within them.",
      zh: "一首融合布鲁斯的颂歌，献给古城长安（西安）——它的城墙、街道，以及留在其中的爱。",
    },
    coverImage: "/cover/长安布鲁斯.jpeg",
    duration: "5:28",
    originalLanguage: "zh",
    audioFile: "/songs/长安布鲁斯  (Remastered).mp3",
    lyrics: `清晨醒来，又是异乡的床
清晨醒来，又是异乡的窗
梦里她还在长安，
笑得像斑驳的旧时光

城墙那么厚，挡不住心头的痛
城墙那么厚，挡不住思绪汹涌
她站在城门等你归来，
如今却早已无影踪

长安布鲁斯，一声低 一声慢
钟楼敲着我心上，像她当年说的晚安
长安布鲁斯，唱不尽这孤单
谁还记得鼓楼下那瓶啤酒 和说不尽的夜晚

西大街的风吹着尘土飞扬
西大街的风吹着桂花香
她站在小巷口，
衣角随风轻轻扬

回民街角的灯，深夜了还在亮
回民街角的灯，深夜了为谁亮
我路过却不敢走进，怕踏进回忆的伤

长安布鲁斯，
埋在城墙砖缝间
一半是她的笑，一半是我不敢说的思念
长安布鲁斯，离家已十年
她变成城的一部分，
我却被挡在城门前

她说："别总看海那边，长安有天也会变。"
我当时年少不懂，
可如今风吹落叶，我才知她早看穿。

长安布鲁斯，是我唱给梦听的歌
茶凉了，情淡了，碑文张的字却还是那么深刻
长安布鲁斯，是走不出的魂舍
一边是城墙，一边是没说出口的那句"再见"

你问我西安在哪？
我说那是让我心安的地方。`,
    behindTheSong: {
      en: "Xi'an was my home. Its walls, its streets, its midnight snack stalls — they're all woven into who I am. Ten years abroad, and the city has become more memory than place. This song is for everyone who carries a city inside them.",
      zh: "西安是我的家。它的城墙、街道、深夜小吃摊——都编织进了我的身份。出国十年，这座城市已经更像记忆而非地方。这首歌献给每一个心中装着一座城的人。",
    },
  },
];

export function getSongById(id: string): Song | undefined {
  return songs.find((s) => s.id === id);
}

export function getSongsByCategory(category: string): Song[] {
  if (category === "all") return songs;
  return songs.filter((s) => s.category === category);
}

export function getSongsChronological(): { label: string; songs: Song[] }[] {
  const sorted = [...songs].sort((a, b) => b.releaseDate.localeCompare(a.releaseDate));
  const groups: { label: string; songs: Song[] }[] = [];
  for (const song of sorted) {
    const [year, month] = song.releaseDate.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);
    const label = date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
    const existing = groups.find((g) => g.label === label);
    if (existing) {
      existing.songs.push(song);
    } else {
      groups.push({ label, songs: [song] });
    }
  }
  return groups;
}
