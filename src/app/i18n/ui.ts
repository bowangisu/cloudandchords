const ui = {
  nav: {
    songs:   { en: "Songs",   zh: "歌曲" },
    blog:    { en: "Blog",    zh: "博客" },
    about:   { en: "About",   zh: "关于" },
    support: { en: "Support", zh: "支持" },
  },
  home: {
    tagline:  { en: "Bo Wang — AI Songs & Reflections", zh: "Bo Wang — AI 音乐与思考" },
    hero1:    { en: "Songs written between", zh: "写于代码与" },
    hero2:    { en: "code and quiet nights.", zh: "静夜之间的歌。" },
    heroDesc: {
      en: "AI-assisted music exploring ambition, love, and becoming.\nA personal creative home at the intersection of technology and tenderness.",
      zh: "AI辅助音乐，探索梦想、爱与成长。\n一个在科技与人心交汇处的个人创作空间。",
    },
    noSongs:        { en: "No songs in this category yet.", zh: "该分类暂无歌曲。" },
    viewByCategory: { en: "By Category",   zh: "按分类" },
    viewByTime:     { en: "By Timeline",   zh: "按时间" },
    usageRights:    { en: "Usage & Rights", zh: "使用与版权" },
    disclaimer: {
      en: "All songs, lyrics, and original content on this site are created by Bo Wang and are protected under applicable copyright laws. You are welcome to listen, share, and enjoy this music for personal, non-commercial purposes. If you wish to use any material for commercial purposes — including but not limited to licensing, sampling, redistribution, synchronization, or public performance — please contact me in advance to obtain written permission. Unauthorized commercial use is prohibited. By accessing this site, you acknowledge and agree to these terms.",
      zh: "本站所有歌曲、歌词和原创内容均由Bo Wang创作，受适用版权法保护。欢迎您出于个人非商业目的收听、分享和欣赏这些音乐。如果您希望将任何材料用于商业目的——包括但不限于授权、采样、再分发、同步或公开表演——请提前联系我以获得书面许可。未经授权的商业使用是被禁止的。访问本站即表示您承认并同意这些条款。",
    },
    disclaimerNote: {
      en: "For inquiries, reach out via the Support page or email directly.",
      zh: "如有疑问，请通过支持页面或直接发送邮件联系。bowang828@gmail.com",
    },
  },
  song: {
    backToSongs:  { en: "Back to songs",                                    zh: "返回歌曲" },
    lyrics:       { en: "Lyrics",                                           zh: "歌词" },
    behindTheSong:{ en: "Behind the Song",                                  zh: "创作故事" },
    share:        { en: "Share",                                            zh: "分享" },
    linkCopied:   { en: "Link copied!",                                     zh: "链接已复制！" },
    nowPlaying:   { en: "Now playing",                                      zh: "正在播放" },
    play:         { en: "Play",                                             zh: "播放" },
    demoPlayback: { en: "Demo playback — full audio coming soon",           zh: "演示播放 — 完整音频即将上线" },
    notFound:     { en: "Song not found.",                                  zh: "未找到歌曲。" },
    support:      { en: "Support",                                          zh: "支持" },
    like:         { en: "Like",                                             zh: "喜欢" },
    liked:        { en: "Liked",                                            zh: "已喜欢" },
    plays:        { en: "plays",                                            zh: "次播放" },
    originalEn:   { en: "",                                                 zh: "原文为英文歌词" },
    originalZh:   { en: "Original lyrics in Chinese",                       zh: "" },
  },
  blog: {
    label:       { en: "Blog",                                              zh: "博客" },
    title:       { en: "Thoughts & Reflections",                            zh: "思考与感悟" },
    description: {
      en: "On AI, meaning, identity, fatherhood, and the things that keep me awake. Not essays — just honest thinking, written down.",
      zh: "关于AI、意义、身份、父亲身份，以及那些让我夜不能寐的事。不是论文——只是诚实的思考，写下来。",
    },
    read:        { en: "Read",                                              zh: "阅读" },
    readSuffix:  { en: "read",                                              zh: "阅读" },
    backToBlog:  { en: "Back to blog",                                      zh: "返回博客" },
    noPosts:     { en: "No posts in this category yet.",                    zh: "该分类暂无文章。" },
    notFound:    { en: "Post not found.",                                   zh: "未找到文章。" },
    copied:      { en: "Copied!",                                          zh: "已复制！" },
    fin:         { en: "fin",                                               zh: "终" },
  },
  about: {
    label:   { en: "About",  zh: "关于" },
    title:   { en: "Who I Am", zh: "关于我" },
    section1: {
      en: "Hello, this is Bo. I build things in AI during the day, leading teams, shipping products, navigating the strange frontier of what machines can and cannot understand. When I have time and inspiration, I write songs with AI, exploring the intersection of technology and tenderness.",
      zh: "你好，我是王博。白天我在AI领域工作，带领团队，发布产品，探索机器能理解和不能理解的奇妙边界。当有时间和灵感时，我用AI写歌，探索科技与人性的交汇点。",
    },
    section2: {
      en: "Not the kind of music that charts or goes viral. The kind that exists at the intersection of",
      zh: "不是那种能上排行榜或爆红的音乐。而是存在于",
    },
    section2Highlight: {
      en: "technology, ambition, and meaning of life",
      zh: "科技、野心和生命意义",
    },
    whyAiMusic: { en: "Why AI Music", zh: "为什么是AI音乐" },
    section3a: {
      en: "I'm not a trained musician. I played a bit of guitar in the past, but it was mostly fumbling through a few chords and solos. But I've always had melodies in my head and words that needed somewhere to go. AI gave me the ability to express myself otherwise I can't.",
      zh: "我不是专业音乐人。过去弹过一点吉他，但大多是笨拙地摸索几个和弦和独奏。但我脑海里一直有旋律，心里一直有需要表达的话。AI给了我一种表达自我的能力，否则我做不到。",
    },
    section3b: {
      en: "These tools don't replace artistry — they democratize access to it. What I bring is the intention, the lived experience, the vulnerability. What AI brings is the musical canvas I never had. The result is something neither of us could make alone. I feel looking myself in the mirror and help see my own reflection.",
      zh: "这些工具不是取代艺术——而是让更多人能够接触艺术。我带来的是意图、人生经验和脆弱。AI带来的是我从未拥有的音乐画布。结果是我们双方都无法独自完成的作品。我感觉像是在照镜子，帮助自己看到真实的倒影。",
    },
    whyPublish: { en: "Why I Publish Publicly", zh: "为什么公开发布" },
    section4: {
      en: "Because the things we make in private tend to stay unfinished. Because there's something honest about sharing work that isn't perfect. Because somewhere, someone who also builds AI by day and feels things deeply by night might hear one of these songs and think:",
      zh: "因为私下里做的东西往往不了了之。因为分享不完美的作品本身就是一种诚实的面对自己。因为在某个地方，某个人，某个夜晚夜晚也深有感触的可能会听到这些歌，然后想：",
    },
    section4Quote: {
      en: "\"I'm not the only one.\"",
      zh: "\"原来不只我一个人。\"",
    },
    noteTitle: { en: "A Note to My Daughters", zh: "写给女儿们的话" },
    section5: {
      en: "If you're reading this someday — hi. These songs are timestamps. Proof that your dad wasn't just building companies and attending meetings. He was also trying to make sense of the world, of himself, of the extraordinary luck of being your father. Every lyric is a small letter to the future. I hope at least one of them makes you smile.",
      zh: "如果你们有一天读到这些——嗨。这些歌是时间戳。证明你们的爸爸不只是在创建公司和参加会议。他也在试图理解这个世界，理解自己，理解成为你们父亲这份非凡的幸运。每一句歌词都是写给未来的一封小信。我希望至少有一句能让你们微笑。",
    },
  },
  support: {
    label:      { en: "Support",              zh: "支持" },
    title:      { en: "Keep the Music Going", zh: "让音乐继续" },
    description: {
      en: "This is a personal project, not a business. If a song moved you, made you think, or simply accompanied a quiet moment — that's enough. But if you'd like to support the work, here are some ways.",
      zh: "这是一个个人项目，不是商业行为。如果一首歌感动了你，让你思考，或者只是陪伴了一个安静的时刻——那就足够了。但如果你想支持这个项目，这里有一些方式。",
    },
    coffee:      { en: "Buy Me a Coffee",                                    zh: "请我喝杯咖啡" },
    coffeeDesc:  { en: "A small gesture that means the world. No account required.", zh: "一个小小的举动，却意味着整个世界。无需注册。" },
    coffeeAction:{ en: "Buy a Coffee — $5",                                  zh: "请喝咖啡 — $5" },
    personalNote: {
      en: "\"The best thing you can do is listen, and share a song with someone who might need it. That's support enough.\"",
      zh: "\"你能做的最好的事就是聆听，并把一首歌分享给可能需要它的人。这就是最好的支持。\"",
    },
  },
  notFound: {
    title:    { en: "This page doesn't exist yet.",          zh: "这个页面还不存在。" },
    subtitle: { en: "Like a song still waiting to be written.", zh: "就像一首等待谱写的歌。" },
    back:     { en: "Back to songs",                          zh: "返回歌曲" },
  },
  footer: {
    tagline:  { en: "Bo Wang — AI Songs & Reflections",      zh: "Bo Wang — AI 音乐与思考" },
    subtitle: { en: "Written between code and quiet nights",  zh: "写于代码与静夜之间" },
  },
  siteName: { en: "Between Cloud & Chords", zh: "云和弦之间" },
} as const;

export default ui;
