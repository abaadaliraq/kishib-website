import type { LucideIcon } from "lucide-react";
import { Archive, Coins, FileText, Gem, Landmark, ScrollText } from "lucide-react";

import type { Lang } from "@/data/kishibContent";

export type PricingPlan = {
  title: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  cta: string;
  badge: string;
  recommended?: boolean;
  icon: LucideIcon;
};

export type UpcomingItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SubscriptionContent = {
  heroTitle: string;
  heroSubtitle: string;
  note: string;
  plans: PricingPlan[];
  upcomingTitle: string;
  upcoming: UpcomingItem[];
  closing: string;
};

export const subscriptionContent: Record<Lang, SubscriptionContent> = {
  ar: {
    heroTitle: "اشتراكات كيشيب",
    heroSubtitle:
      "اختر الخطة المناسبة لاستخدام كيشيب، سواء كنت هاوياً، جامع تحف، باحثاً، أو تحتاج إلى تقارير رقمية قابلة للحفظ والمشاركة والطباعة.",
    note:
      "الأسعار الحالية مبدئية وقد تتطور مع إطلاق خدمات البيع، المزادات، وبورصة المعادن.",
    plans: [
      {
        title: "الاشتراك الشهري",
        price: "$5",
        billing: "شهرياً",
        description:
          "مناسب للاستخدام الفردي وتجربة تقييم التحف والمقتنيات بشكل منتظم.",
        features: [
          "5 تقارير تقييم",
          "تقارير قابلة للطباعة",
          "حفظ التقرير بصيغة PDF",
          "مشاركة التقرير",
          "مناسب للهواة وجامعي التحف",
        ],
        cta: "ابدأ بالاشتراك الشهري",
        badge: "الأكثر بساطة",
        icon: FileText,
      },
      {
        title: "الاشتراك السنوي",
        price: "$45",
        billing: "سنوياً",
        description:
          "خطة مناسبة للمستخدمين الذين يحتاجون إلى استخدام مستمر وتقارير أكثر خلال السنة.",
        features: [
          "استخدام سنوي",
          "65 تقرير تقييم",
          "تقارير قابلة للطباعة",
          "حفظ ومشاركة بصيغة PDF",
          "قيمة أفضل للاستخدام المستمر",
        ],
        cta: "اختر الاشتراك السنوي",
        badge: "الأفضل قيمة",
        recommended: true,
        icon: Gem,
      },
      {
        title: "حزمة التقارير",
        price: "$19",
        billing: "دفعة واحدة",
        description:
          "حزمة تقارير مستقلة يمكن شراؤها بشكل منفصل عن اشتراك التقييم.",
        features: [
          "150 تقرير",
          "شراء منفصل عن الاشتراك",
          "مناسب للاستخدام المكثف",
          "حفظ التقارير",
          "مشاركة وطباعة PDF",
        ],
        cta: "شراء حزمة التقارير",
        badge: "للتقارير فقط",
        icon: Archive,
      },
    ],
    upcomingTitle: "قريباً على كيشيب",
    upcoming: [
      {
        title: "اشتراكات تقارير البيع",
        description:
          "تقارير مخصصة لمساعدة المستخدم على عرض القطعة للبيع بشكل أوضح وأكثر احترافية.",
        icon: ScrollText,
      },
      {
        title: "اشتراكات تقارير المزادات",
        description:
          "تقارير موجهة للقطع التي سيتم عرضها في المزادات، مع صياغة تناسب العرض والمقارنة.",
        icon: Landmark,
      },
      {
        title: "اشتراكات بورصة المعادن",
        description:
          "خدمات مرتبطة بمتابعة أسعار الذهب والفضة والنحاس والبلاتينيوم عند توفر بيانات المواد والمعادن.",
        icon: Coins,
      },
    ],
    closing:
      "كيشيب لا يقدّم مجرد تقارير، بل يبني تجربة رقمية تساعد على فهم قيمة القطعة وقصتها وسياقها التاريخي.",
  },
  en: {
    heroTitle: "KISHIB Subscriptions",
    heroSubtitle:
      "Choose the plan that fits your use of KISHIB, whether you are an enthusiast, collector, researcher, or need digital reports that can be saved, shared, and printed.",
    note:
      "Current prices are introductory and may evolve as selling reports, auction reports, and metals exchange services are launched.",
    plans: [
      {
        title: "Monthly Subscription",
        price: "$5",
        billing: "per month",
        description:
          "Ideal for individual use and regular evaluation of antiques and collectibles.",
        features: [
          "5 evaluation reports",
          "Printable reports",
          "Save reports as PDF",
          "Share reports",
          "Suitable for enthusiasts and collectors",
        ],
        cta: "Start Monthly Plan",
        badge: "Simple Start",
        icon: FileText,
      },
      {
        title: "Annual Subscription",
        price: "$45",
        billing: "per year",
        description:
          "A suitable plan for users who need continuous access and more reports throughout the year.",
        features: [
          "Annual access",
          "65 evaluation reports",
          "Printable reports",
          "Save and share as PDF",
          "Better value for continuous use",
        ],
        cta: "Choose Annual Plan",
        badge: "Best Value",
        recommended: true,
        icon: Gem,
      },
      {
        title: "Reports Pack",
        price: "$19",
        billing: "one-time payment",
        description:
          "A standalone reports package that can be purchased separately from the evaluation subscription.",
        features: [
          "150 reports",
          "Separate purchase from subscription",
          "Suitable for intensive use",
          "Save reports",
          "Share and print PDF reports",
        ],
        cta: "Buy Reports Pack",
        badge: "Reports Only",
        icon: Archive,
      },
    ],
    upcomingTitle: "Coming Soon to KISHIB",
    upcoming: [
      {
        title: "Selling Report Subscriptions",
        description:
          "Dedicated reports to help users present their items for sale in a clearer and more professional way.",
        icon: ScrollText,
      },
      {
        title: "Auction Report Subscriptions",
        description:
          "Reports designed for items intended for auction, with wording and structure suitable for presentation and comparison.",
        icon: Landmark,
      },
      {
        title: "Metals Exchange Subscriptions",
        description:
          "Services connected to gold, silver, copper, and platinum price tracking when material and metal data are available.",
        icon: Coins,
      },
    ],
    closing:
      "KISHIB does not only provide reports; it builds a digital experience that helps users understand the value, story, and historical context of each piece.",
  },
};
