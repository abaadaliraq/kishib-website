import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Camera,
  FileText,
  Gem,
  Languages,
  Mail,
  ReceiptText,
  Scale,
  Share2,
  Smartphone,
  Store,
  UserRound,
} from "lucide-react";

export type Lang = "ar" | "en";

export type NavItem = {
  key: string;
  label: string;
  href: string;
};

export type StepItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type FeatureItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type KishibContent = {
  nav: NavItem[];
  langLabel: string;
  heroKicker: string;
  heroTitle: string;
  heroText: string;
  primary: string;
  secondary: string;
  stats: [string, string][];
  about: {
    title: string;
    lines: string[];
    readMore: string;
  };
  aboutPage: {
    title: string;
    sections: {
      title: string;
      paragraphs: string[];
      image: string;
      imageLabel: string;
    }[];
    quote: string;
  };
  usage: {
    title: string;
    steps: StepItem[];
    tips: string[];
  };
  features: {
    title: string;
    items: FeatureItem[];
  };
  download: {
    title: string;
    text: string;
    android: string;
    iphone: string;
    subscriptions: string;
  };
  footer: {
    contactTitle: string;
    linksTitle: string;
    formTitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    rights: string;
  };
};

const nav = {
  ar: [
    { key: "home", label: "الرئيسية", href: "#home" },
    { key: "about", label: "عن كيشيب", href: "#about" },
    { key: "how-to-use", label: "طريقة الاستخدام", href: "#how-to-use" },
    { key: "features", label: "المزايا", href: "#features" },
    { key: "download", label: "التحميل", href: "#download" },
    { key: "contact", label: "تواصل", href: "#contact" },
  ],
  en: [
    { key: "home", label: "Home", href: "#home" },
    { key: "about", label: "About", href: "#about" },
    { key: "how-to-use", label: "How to use", href: "#how-to-use" },
    { key: "features", label: "Features", href: "#features" },
    { key: "download", label: "Download", href: "#download" },
    { key: "contact", label: "Contact", href: "#contact" },
  ],
};

export const kishibContent: Record<Lang, KishibContent> = {
  ar: {
    nav: nav.ar,
    langLabel: "English",
    heroKicker: "منصة ذكية للتحف والقطع القيّمة",
    heroTitle: "كيشيب... قيّم، افهم، واحفظ قيمة القطع.",
    heroText:
      "منصة تساعدك على قراءة القطع القديمة والثمينة بتقرير أولي واضح ومباشر.",
    primary: "حمّل التطبيق",
    secondary: "كيف يعمل؟",
    stats: [
      ["AI", "قراءة أولية ذكية"],
      ["8", "لغات مدعومة"],
      ["Market", "سوق كيشيب قريباً"],
    ],
    about: {
      title: "عن تطبيق كيشيب",
      readMore: "اقرأ المزيد عن كيشيب",
      lines: [
        "كيشيب منصة تساعد المستخدم على قراءة القطع القديمة والثمينة بطريقة أوضح.",
        "يرفع المستخدم صورة القطعة ويضيف أي معلومة يعرفها عنها.",
        "يحصل بعدها على تقرير أولي يوضح الوصف، العمر التقريبي، المادة، والحالة.",
        "الهدف هو تقليل التخمين وتنظيم سوق التحف بطريقة أكثر ثقة.",
      ],
    },
    aboutPage: {
      title: "نبذة عن كيشيب",
      sections: [
        {
          title: "لماذا كيشيب؟",
          image: "/images/kishib-meaning.png",
          imageLabel: "KISHIB identity placeholder",
          paragraphs: [
            'استُلهم اسم "كيشيب" من الأختام الطينية التي استخدمها السومريون في بلاد الرافدين قبل آلاف السنين، حيث كانت تُستعمل لإثبات الملكية والتوقيع وحفظ الهوية. وقد أصبحت هذه الأختام اليوم من أهم الشواهد على الحضارات القديمة وتراثها العريق.',
            "استُوحي شعار كيشيب من هذه الأختام التاريخية، ليجسد فكرة الأصالة والثقة والارتباط بين الماضي والتكنولوجيا الحديثة.",
            "وُلدت فكرة كيشيب من شغف بعالم التحف والأنتيكات والإيمان بأهمية الحفاظ على المعرفة التاريخية وإتاحتها للجميع. لذلك لا يمثل كيشيب مجرد تطبيق، بل مشروعاً يسعى إلى بناء جسر يربط بين التراث الإنساني والتقنيات الحديثة.",
          ],
        },
        {
          title: "نبذة عن كيشيب",
          image: "/images/about-kishib.png",
          imageLabel: "KISHIB antique appraisal placeholder",
          paragraphs: [
            "كيشيب منصة رقمية متخصصة في عالم التحف والأنتيكات والمقتنيات التاريخية، تهدف إلى مساعدة الهواة والباحثين وجامعي التحف على التعرف على القطع الأثرية وفهم تاريخها وخصائصها من خلال التقنيات الحديثة والمصادر المتخصصة.",
            "تسعى المنصة إلى تقديم تجربة تجمع بين المعرفة والتكنولوجيا، مع التركيز على نشر الثقافة التاريخية وتعزيز الوعي بقيمة التراث والمقتنيات النادرة.",
            "ويطمح كيشيب إلى بناء منظومة متكاملة تخدم المهتمين بعالم التحف حول العالم.",
          ],
        },
        {
          title: "رؤيتنا",
          image: "/images/kishib-guide-bg.jpg",
          imageLabel: "KISHIB vision placeholder",
          paragraphs: [
            "أن يصبح كيشيب مرجعاً رقمياً عالمياً في مجال التحف والأنتيكات، يجمع بين التكنولوجيا والمعرفة والخبرة المتخصصة للحفاظ على التراث الإنساني ونقله إلى الأجيال القادمة.",
            "ونسعى من خلال تطوير موسوعة كيشيب، والتعاون مع الباحثين والخبراء، وتوفير أدوات تحليل متقدمة، إلى إنشاء مصدر موثوق يخدم الهواة وجامعي التحف والمؤرخين والمهتمين بالتراث في مختلف أنحاء العالم.",
            "إيماننا بأن لكل قطعة قصة، ولكل أثر قيمة تتجاوز الزمن، هو ما يقود رؤيتنا نحو المستقبل.",
          ],
        },
      ],
      quote:
        "وُلد كيشيب في بغداد، واستُلهم من إرث بلاد الرافدين، وصُمم لخدمة عشاق التحف حول العالم.",
    },
    usage: {
      title: "كيف تستخدم التطبيق؟",
      steps: [
        {
          icon: Camera,
          title: "التقط أو ارفع صورة",
          text: "صوّر القطعة بوضوح ومن أكثر من زاوية إذا أمكن.",
        },
        {
          icon: FileText,
          title: "اقرأ التقييم",
          text: "راجع الوصف، المادة، العمر التقريبي، الحالة، والسعر المقترح.",
        },
        {
          icon: Share2,
          title: "احفظ أو شارك التقرير",
          text: "يمكنك حفظ التقرير أو مشاركته أو طباعته عند الحاجة.",
        },
      ],
      tips: [
        "استخدم إضاءة واضحة وخلفية بسيطة.",
        "صوّر الختم، التوقيع، الكسور، أو أي تفاصيل مهمة عن قرب.",
      ],
    },
    features: {
      title: "مزايا كيشيب",
      items: [
        {
          icon: Languages,
          title: "يدعم 8 لغات",
          text: "قراءة أوضح لأسواق متعددة.",
        },
        {
          icon: Store,
          title: "سوق كيشيب قريباً",
          text: "مساحة منظمة لعرض القطع.",
        },
        {
          icon: Scale,
          title: "مرتبط ببورصة الذهب والفضة",
          text: "عند توفر بيانات المعدن.",
        },
        {
          icon: UserRound,
          title: "تواصل مباشر مع مختص",
          text: "للقطع التي تحتاج مراجعة أدق.",
        },
        {
          icon: ReceiptText,
          title: "قراءة الرقم التسلسلي للفواتير",
          text: "لتوثيق بيانات الشراء.",
        },
        {
          icon: BadgeCheck,
          title: "تقارير مزادات قريباً",
          text: "صياغة خاصة لعرض القطع.",
        },
      ],
    },
    download: {
      title: "حمّل تطبيق كيشيب",
      text: "سيكون تطبيق كيشيب متاحاً على Android و iPhone لتقييم القطع، حفظ التقارير، ومتابعة السوق بسهولة.",
      android: "Android",
      iphone: "iPhone",
      subscriptions: "عرض الاشتراكات",
    },
    footer: {
      contactTitle: "تواصل",
      linksTitle: "روابط",
      formTitle: "راسلنا",
      name: "الاسم",
      email: "البريد الإلكتروني",
      message: "الرسالة",
      send: "إرسال",
      rights: "© KISHIB. جميع الحقوق محفوظة.",
    },
  },
  en: {
    nav: nav.en,
    langLabel: "العربية",
    heroKicker: "An intelligent platform for antiques and valuable items",
    heroTitle: "KISHIB... evaluate, understand, and preserve value.",
    heroText:
      "KISHIB helps users understand antiques and valuable items through clear initial reports.",
    primary: "Download app",
    secondary: "How it works",
    stats: [
      ["AI", "Smart initial reading"],
      ["8", "Supported languages"],
      ["Market", "KISHIB Market soon"],
    ],
    about: {
      title: "About KISHIB",
      readMore: "Read more about KISHIB",
      lines: [
        "KISHIB helps users understand antiques and valuable items more clearly.",
        "The user uploads a photo and adds any known details about the piece.",
        "The platform generates an initial report with description, estimated age, material, and condition.",
        "The goal is to reduce guessing and make the antiques market more trusted.",
      ],
    },
    aboutPage: {
      title: "About KISHIB",
      sections: [
        {
          title: "Why KISHIB?",
          image: "/images/kishib-meaning.png",
          imageLabel: "KISHIB identity placeholder",
          paragraphs: [
            'The name "KISHIB" was inspired by the clay seals used by the Sumerians in Mesopotamia thousands of years ago. These seals were used to prove ownership, sign documents, and preserve identity. Today, they stand among the most important witnesses to ancient civilizations and their rich heritage.',
            "The KISHIB logo was inspired by these historic seals, reflecting the ideas of authenticity, trust, and the connection between the past and modern technology.",
            "KISHIB was born from a passion for antiques and historical objects, and from a belief in the importance of preserving historical knowledge and making it accessible to everyone. KISHIB is not just an application; it is a project that seeks to build a bridge between human heritage and modern technologies.",
          ],
        },
        {
          title: "About KISHIB",
          image: "/images/about-kishib.png",
          imageLabel: "KISHIB antique appraisal placeholder",
          paragraphs: [
            "KISHIB is a digital platform specialized in the world of antiques, collectibles, and historical objects. It aims to help enthusiasts, researchers, and collectors identify historical pieces and understand their background, characteristics, and value through modern technologies and specialized sources.",
            "The platform seeks to offer an experience that combines knowledge and technology, with a focus on spreading historical culture and raising awareness of the value of heritage and rare collectibles.",
            "KISHIB aspires to build an integrated ecosystem that serves antique enthusiasts around the world.",
          ],
        },
        {
          title: "Our Vision",
          image: "/images/",
          imageLabel: "KISHIB vision placeholder",
          paragraphs: [
            "To become a global digital reference in the field of antiques and historical collectibles, combining technology, knowledge, and specialized expertise to preserve human heritage and pass it on to future generations.",
            "Through the development of the KISHIB Encyclopedia, collaboration with researchers and experts, and the introduction of advanced analysis tools, we aim to create a trusted source that serves enthusiasts, collectors, historians, and heritage lovers around the world.",
            "Our belief that every piece has a story, and every artifact carries a value beyond time, is what guides our vision for the future.",
          ],
        },
      ],
      quote:
        "KISHIB was born in Baghdad, inspired by the legacy of Mesopotamia, and designed to serve antique lovers around the world.",
    },
    usage: {
      title: "How to use the app?",
      steps: [
        {
          icon: Camera,
          title: "Capture or upload a photo",
          text: "Take a clear photo from more than one angle when possible.",
        },
        {
          icon: FileText,
          title: "Read the appraisal",
          text: "Review description, material, estimated age, condition, and suggested value.",
        },
        {
          icon: Share2,
          title: "Save or share the report",
          text: "Save, share, or print the report whenever needed.",
        },
      ],
      tips: [
        "Use clear lighting and a simple background.",
        "Take close-ups of stamps, signatures, cracks, or important details.",
      ],
    },
    features: {
      title: "KISHIB features",
      items: [
        {
          icon: Languages,
          title: "Supports 8 languages",
          text: "Clearer reading for multiple markets.",
        },
        {
          icon: Store,
          title: "KISHIB Market soon",
          text: "A trusted place to list pieces.",
        },
        {
          icon: Scale,
          title: "Linked to gold and silver exchange",
          text: "When metal data is available.",
        },
        {
          icon: UserRound,
          title: "Direct expert contact",
          text: "For pieces needing closer review.",
        },
        {
          icon: ReceiptText,
          title: "Invoice serial number reading",
          text: "For purchase documentation.",
        },
        {
          icon: BadgeCheck,
          title: "Auction reports soon",
          text: "Special wording for item listings.",
        },
      ],
    },
    download: {
      title: "Download KISHIB App",
      text: "KISHIB will be available on Android and iPhone to appraise items, save reports, and follow the market easily.",
      android: "Android",
      iphone: "iPhone",
      subscriptions: "View Subscriptions",
    },
    footer: {
      contactTitle: "Contact",
      linksTitle: "Links",
      formTitle: "Message us",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
      rights: "© KISHIB. All rights reserved.",
    },
  },
};

export const footerUtilityLinks = [
  { label: { ar: "الاشتراكات", en: "Subscriptions" }, href: "/subscriptions" },
  { label: { ar: "Terms and Conditions", en: "Terms and Conditions" }, href: "/terms" },
  { label: { ar: "Privacy Policy", en: "Privacy Policy" }, href: "/privacy" },
  { label: { ar: "Cookie Policy", en: "Cookie Policy" }, href: "/cookies" },
  {
    label: { ar: "Delete Account Request", en: "Delete Account Request" },
    href: "/account-deletion",
  },
];
export const socialLinks = [
  { label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@kishibapp.com", icon: "email" },
  { label: "Instagram", href: "https://www.instagram.com/kishib.app/?__pwa=1", icon: "instagram" },
  { label: "Facebook", href: "https://web.facebook.com/profile.php?id=61590564198003", icon: "facebook" },
];

export const officialEmails = [
  { label: "Info", email: "info@kishibapp.com" },
  { label: "Support", email: "support@kishibapp.com" },
  { label: "Contact", email: "contact@kishibapp.com" },
];

export const downloadIcons = {
  android: Smartphone,
  iphone: Gem,
  mail: Mail,
};
