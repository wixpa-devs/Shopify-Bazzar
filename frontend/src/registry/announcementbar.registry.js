import AnnouncementBarV1, { getAnnouncementBarV1Code } from "../components/ui/announcementbar/AnnouncementBarV1";
import AnnouncementBarV2, { getAnnouncementBarV2Code } from "../components/ui/announcementbar/AnnouncementBarV2";
import AnnouncementBarV3, { getAnnouncementBarV3Code } from "../components/ui/announcementbar/AnnouncementBarV3";
import AnnouncementBarV4, { getAnnouncementBarV4Code } from "../components/ui/announcementbar/AnnouncementBarV4";
import AnnouncementBarV5, { getAnnouncementBarV5Code } from "../components/ui/announcementbar/AnnouncementBarV5";

const announcementbarRegistry = {
  id: "announcementbar",
  slug: "announcementbar",
  title: "Announcement Bar",
  icon: "fa-bars-staggered",
  iconBg: "rgba(56,189,248,0.1)",
  iconColor: "#0284c7",
  tags: ["announcement", "banner", "ticker", "slider", "top bar", "promo"],
  description: "Sticky top announcement bars with rotating slides, navigation controls, and auto-play for promotions and alerts.",
  variants: [

    // ── V1 — Rotating Slider
    {
      id: "announcementbar-v1",
      name: "Announcement Bar — Rotating Slider",
      description: "Dark sticky bar with 3 rotating text slides, prev/next navigation, auto-play, pause on hover, and keyboard support.",
      tags: ["dark", "sticky", "rotating", "auto-play", "keyboard", "accessible"],
      component: AnnouncementBarV1,
      getCode: getAnnouncementBarV1Code,
      defaultConfig: {
        bgColor: "#0f172a",
        textColor: "#f8fafc",
        accentColor: "#38bdf8",
        height: "48px",
        fontSize: "14px",
        autoInterval: 4000,
        slide1Text: "Free shipping on orders over $50",
        slide2Text: "New summer collection just dropped",
        slide3Text: "Subscribe & save 15% on your first order",
      },
      accordions: [
        {
          id: "slides", icon: "fa-font", iconBg: "#dbeafe", iconColor: "#1d4ed8",
          title: "Slides", subtitle: "The three rotating announcement messages",
          controls: [
            { type: "text", label: "Slide 1 Text", key: "slide1Text" },
            { type: "text", label: "Slide 2 Text", key: "slide2Text" },
            { type: "text", label: "Slide 3 Text", key: "slide3Text" },
          ],
        },
        {
          id: "colors", icon: "fa-palette", iconBg: "#ede9fe", iconColor: "#7c3aed",
          title: "Colors", subtitle: "Background, text and accent colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Text Color", key: "textColor" },
            { type: "color", label: "Accent Color", key: "accentColor" },
          ],
        },
        {
          id: "layout", icon: "fa-layer-group", iconBg: "#dcfce7", iconColor: "#16a34a",
          title: "Layout", subtitle: "Bar height and font size",
          controls: [
            { type: "select", label: "Bar Height", key: "height", options: ["40px", "44px", "48px", "52px", "56px"] },
            { type: "select", label: "Font Size", key: "fontSize", options: ["12px", "13px", "14px", "15px", "16px"] },

          ],
        },
        {
          id: "timing", icon: "fa-bars-staggered", iconBg: "#fef3c7", iconColor: "#d97706",
          title: "Timing", subtitle: "Auto-play interval in milliseconds",
          controls: [
            { type: "select", label: "Auto-Play Speed", key: "autoInterval", options: [2000, 3000, 4000, 5000, 6000, 8000] },
          ],
        },
      ],
    },

    // ── V2 — Multi-Column + Mobile Carousel
    {
      id: "announcementbar-v2",
      name: "Announcement Bar — Multi-Column",
      description: "3-column desktop bar with icon + text links that collapses into a touch-swipeable auto-play carousel on mobile.",
      tags: ["dark", "3-column", "icons", "swipe", "mobile carousel", "links"],
      component: AnnouncementBarV2,
      getCode: getAnnouncementBarV2Code,
      defaultConfig: {
        bgColor: "#18181b",
        textColor: "#fafafa",
        borderColor: "#27272a",
        iconColor: "#a1a1aa",
        hoverBg: "#27272a",
        autoInterval: 3500,
        item1Text: "Free shipping over $50",
        item1Url: "#",
        item2Text: "30-day easy returns",
        item2Url: "#",
        item3Text: "24/7 customer support",
        item3Url: "#",
      },
      accordions: [
        {
          id: "items", icon: "fa-font", iconBg: "#dbeafe", iconColor: "#1d4ed8",
          title: "Items", subtitle: "Text and URL for each column",
          controls: [
            { type: "text", label: "Item 1 Text", key: "item1Text" },
            { type: "text", label: "Item 1 URL", key: "item1Url" },
            { type: "text", label: "Item 2 Text", key: "item2Text" },
            { type: "text", label: "Item 2 URL", key: "item2Url" },
            { type: "text", label: "Item 3 Text", key: "item3Text" },
            { type: "text", label: "Item 3 URL", key: "item3Url" },
          ],
        },
        {
          id: "colors", icon: "fa-palette", iconBg: "#ede9fe", iconColor: "#7c3aed",
          title: "Colors", subtitle: "Background, text, border and icon colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Text Color", key: "textColor" },
            { type: "color", label: "Border", key: "borderColor" },
            { type: "color", label: "Icon Color", key: "iconColor" },
            { type: "color", label: "Hover BG", key: "hoverBg" },
          ],
        },
        {
          id: "timing", icon: "fa-bars-staggered", iconBg: "#fef3c7", iconColor: "#d97706",
          title: "Mobile Timing", subtitle: "Auto-play speed on mobile carousel",
          controls: [
            { type: "select", label: "Auto-Play Speed", key: "autoInterval", options: [2000, 3000, 3500, 5000, 6000] },
          ],
        },
      ],
    },

    // ── V3 — Dismissible
    {
      id: "announcementbar-v3",
      name: "Announcement Bar — Dismissible",
      description: "Single-message sticky bar with a CTA link and an X close button. Animates out on dismiss and remembers state via localStorage.",
      tags: ["dark", "sticky", "dismissible", "cta", "localStorage", "single message"],
      component: AnnouncementBarV3,
      getCode: getAnnouncementBarV3Code,
      defaultConfig: {
        bgColor: "#0f172a",
        textColor: "#f8fafc",
        accentColor: "#38bdf8",
        accentHover: "#7dd3fc",
        iconColor: "#94a3b8",
        height: "48px",
        fontSize: "14px",
        messageText: "Free shipping on orders over $50",
        ctaText: "Shop Now",
        ctaUrl: "/shop",
      },
      accordions: [
        {
          id: "content", icon: "fa-font", iconBg: "#dbeafe", iconColor: "#1d4ed8",
          title: "Content", subtitle: "Message text and CTA link",
          controls: [
            { type: "text", label: "Message Text", key: "messageText" },
            { type: "text", label: "CTA Text", key: "ctaText" },
            { type: "text", label: "CTA URL", key: "ctaUrl" },
          ],
        },
        {
          id: "colors", icon: "fa-palette", iconBg: "#ede9fe", iconColor: "#7c3aed",
          title: "Colors", subtitle: "Background, text, accent and icon colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Text Color", key: "textColor" },
            { type: "color", label: "Accent Color", key: "accentColor" },
            { type: "color", label: "Accent Hover", key: "accentHover" },
            { type: "color", label: "Icon Color", key: "iconColor" },
          ],
        },
        {
          id: "layout", icon: "fa-layer-group", iconBg: "#dcfce7", iconColor: "#16a34a",
          title: "Layout", subtitle: "Bar height and font size",
          controls: [
            { type: "select", label: "Bar Height", key: "height", options: ["40px", "44px", "48px", "52px", "56px"] },
            { type: "select", label: "Font Size", key: "fontSize", options: ["12px", "13px", "14px", "15px", "16px"] },
          ],
        },
      ],
    },

    // ── V4 — Branded Top Bar
    {
      id: "announcementbar-v4",
      name: "Announcement Bar — Branded Top Bar",
      description: "Full-featured branded bar with left shipping note, center promo message, right quick-nav links, and social icons. Collapses to a touch-swipeable carousel on mobile.",
      tags: ["branded", "red", "social icons", "nav links", "mobile carousel", "swipe", "3-zone"],
      component: AnnouncementBarV4,
      getCode: getAnnouncementBarV4Code,
      defaultConfig: {
        bgColor: "#c8102e",
        textColor: "#ffffff",
        dividerColor: "rgba(255,255,255,0.3)",
        mutedOpacity: "0.8",
        height: "36px",
        autoInterval: 3500,
        leftText: "Free shipping above $100",
        desktopMessage: "Loved by thousands — over 1,200 five-star reviews <a href=\"#\">and counting</a>",
        slide1Text: "🚚 Free shipping above $100",
        slide2Text: "⭐ 1,200+ five-star reviews <a href=\"#\">and counting</a>",
        slide3Text: "👤 Men's Cosmetics for Daily Use",
        slide4Text: "📖 <a href=\"#\">Journal</a> &nbsp;·&nbsp; <a href=\"#\">Shopping Guide</a> &nbsp;·&nbsp; <a href=\"#\">Stores</a>",
        nav1Text: "Men's Cosmetics", nav1Url: "#",
        nav2Text: "Contact us", nav2Url: "#",
        nav3Text: "Journal", nav3Url: "#",
        nav4Text: "Shopping Guide", nav4Url: "#",
        nav5Text: "Stores", nav5Url: "#",
        facebookUrl: "#", instagramUrl: "#", tiktokUrl: "#", youtubeUrl: "#",
      },
      accordions: [
        {
          id: "left", icon: "fa-tag", iconBg: "#fef3c7", iconColor: "#d97706",
          title: "Left Zone", subtitle: "Shipping note on the left side",
          controls: [{ type: "text", label: "Left Text", key: "leftText" }],
        },
        {
          id: "center", icon: "fa-font", iconBg: "#dbeafe", iconColor: "#1d4ed8",
          title: "Center Message", subtitle: "Desktop promo message (supports HTML)",
          controls: [{ type: "text", label: "Desktop Message", key: "desktopMessage" }],
        },
        {
          id: "slides", icon: "fa-mobile", iconBg: "#dcfce7", iconColor: "#16a34a",
          title: "Mobile Slides", subtitle: "Four slides shown on mobile (supports HTML)",
          controls: [
            { type: "text", label: "Slide 1", key: "slide1Text" },
            { type: "text", label: "Slide 2", key: "slide2Text" },
            { type: "text", label: "Slide 3", key: "slide3Text" },
            { type: "text", label: "Slide 4", key: "slide4Text" },
          ],
        },
        {
          id: "nav", icon: "fa-link", iconBg: "#ede9fe", iconColor: "#7c3aed",
          title: "Nav Links", subtitle: "Five quick-nav links on the right",
          controls: [
            { type: "text", label: "Link 1 Text", key: "nav1Text" },
            { type: "text", label: "Link 1 URL", key: "nav1Url" },
            { type: "text", label: "Link 2 Text", key: "nav2Text" },
            { type: "text", label: "Link 2 URL", key: "nav2Url" },
            { type: "text", label: "Link 3 Text", key: "nav3Text" },
            { type: "text", label: "Link 3 URL", key: "nav3Url" },
            { type: "text", label: "Link 4 Text", key: "nav4Text" },
            { type: "text", label: "Link 4 URL", key: "nav4Url" },
            { type: "text", label: "Link 5 Text", key: "nav5Text" },
            { type: "text", label: "Link 5 URL", key: "nav5Url" },
          ],
        },
        {
          id: "social", icon: "fa-share-nodes", iconBg: "#fce7f3", iconColor: "#db2777",
          title: "Social Links", subtitle: "Facebook, Instagram, TikTok, YouTube URLs",
          controls: [
            { type: "text", label: "Facebook URL", key: "facebookUrl" },
            { type: "text", label: "Instagram URL", key: "instagramUrl" },
            { type: "text", label: "TikTok URL", key: "tiktokUrl" },
            { type: "text", label: "YouTube URL", key: "youtubeUrl" },
          ],
        },
        {
          id: "colors", icon: "fa-palette", iconBg: "#fef3c7", iconColor: "#d97706",
          title: "Colors", subtitle: "Background, text and divider colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Text Color", key: "textColor" },
            { type: "color", label: "Divider Color", key: "dividerColor" },
          ],
        },
        {
          id: "layout", icon: "fa-layer-group", iconBg: "#dcfce7", iconColor: "#16a34a",
          title: "Layout & Timing", subtitle: "Bar height and mobile auto-play speed",
          controls: [
            { type: "select", label: "Bar Height", key: "height", options: ["32px", "36px", "40px", "44px"] },
            { type: "select", label: "Auto-Play Speed", key: "autoInterval", options: [2000, 3000, 3500, 5000, 6000] },
          ],
        },
      ],
    },

    // ── V5 — Advanced: Gradient + Progress + Countdown + Dots + Dismiss
    {
      id: "announcementbar-v5",
      name: "Announcement Bar — Advanced",
      description: "Animated gradient background, progress bar, 4-slide carousel with dot navigation, live countdown timer on slide 2, dismiss with localStorage persistence.",
      tags: ["gradient", "progress bar", "countdown", "dots", "dismissible", "advanced", "dark"],
      component: AnnouncementBarV5,
      getCode: getAnnouncementBarV5Code,
      defaultConfig: {
        gradientStart: "#0f172a",
        gradientMid: "#1e3a5f",
        progressColor: "rgba(56,189,248,0.6)",
        accentColor: "#38bdf8",
        accentHover: "#7dd3fc",
        height: "46px",
        autoInterval: 4000,
        storageKey: "ab-v5-dismissed",
        countdownHours: 2,
        s1Icon: "🚚",
        s1Text: "<strong>Free shipping</strong> on all orders over $50",
        s1CtaText: "Shop Now",
        s1CtaUrl: "#",
        s2BadgeText: "Flash Sale",
        s2BadgeColor: "red",
        s2Text: "<strong>30% OFF</strong> sitewide &mdash; ends in",
        s2CtaText: "Grab Deal",
        s2CtaUrl: "#",
        s3BadgeText: "New",
        s3BadgeColor: "green",
        s3Text: "Summer collection <strong>just dropped</strong> &mdash; limited stock",
        s3CtaText: "View All",
        s3CtaUrl: "#",
        s4Icon: "⭐",
        s4Text: "Join rewards &amp; earn <strong>2x points</strong> this weekend only",
        s4CtaText: "Join Free",
        s4CtaUrl: "#",
      },
      accordions: [
        {
          id: "slide1", icon: "fa-font", iconBg: "#dbeafe", iconColor: "#1d4ed8",
          title: "Slide 1 — Shipping", subtitle: "Icon, message text and CTA",
          controls: [
            { type: "text", label: "Icon", key: "s1Icon" },
            { type: "text", label: "Text", key: "s1Text" },
            { type: "text", label: "CTA Text", key: "s1CtaText" },
            { type: "text", label: "CTA URL", key: "s1CtaUrl" },
          ],
        },
        {
          id: "slide2", icon: "fa-fire", iconBg: "#fee2e2", iconColor: "#ef4444",
          title: "Slide 2 — Flash Sale", subtitle: "Badge, text, countdown and CTA",
          controls: [
            { type: "text", label: "Badge Text", key: "s2BadgeText" },
            { type: "select", label: "Badge Color", key: "s2BadgeColor", options: ["red", "green", "blue"] },
            { type: "text", label: "Text", key: "s2Text" },
            { type: "select", label: "Countdown (hours)", key: "countdownHours", options: [1, 2, 3, 6, 12, 24] },
            { type: "text", label: "CTA Text", key: "s2CtaText" },
            { type: "text", label: "CTA URL", key: "s2CtaUrl" },
          ],
        },
        {
          id: "slide3", icon: "fa-tag", iconBg: "#dcfce7", iconColor: "#16a34a",
          title: "Slide 3 — New Arrival", subtitle: "Badge, text and CTA",
          controls: [
            { type: "text", label: "Badge Text", key: "s3BadgeText" },
            { type: "select", label: "Badge Color", key: "s3BadgeColor", options: ["green", "red", "blue"] },
            { type: "text", label: "Text", key: "s3Text" },
            { type: "text", label: "CTA Text", key: "s3CtaText" },
            { type: "text", label: "CTA URL", key: "s3CtaUrl" },
          ],
        },
        {
          id: "slide4", icon: "fa-star", iconBg: "#fef9c3", iconColor: "#eab308",
          title: "Slide 4 — Rewards", subtitle: "Icon, text and CTA",
          controls: [
            { type: "text", label: "Icon", key: "s4Icon" },
            { type: "text", label: "Text", key: "s4Text" },
            { type: "text", label: "CTA Text", key: "s4CtaText" },
            { type: "text", label: "CTA URL", key: "s4CtaUrl" },
          ],
        },
        {
          id: "colors", icon: "fa-palette", iconBg: "#ede9fe", iconColor: "#7c3aed",
          title: "Colors", subtitle: "Gradient and accent colors",
          controls: [
            { type: "color", label: "Gradient Start", key: "gradientStart" },
            { type: "color", label: "Gradient Mid", key: "gradientMid" },
            { type: "color", label: "Accent Color", key: "accentColor" },
            { type: "color", label: "Accent Hover", key: "accentHover" },
          ],
        },
        {
          id: "layout", icon: "fa-layer-group", iconBg: "#dcfce7", iconColor: "#16a34a",
          title: "Layout & Timing", subtitle: "Height, speed and storage key",
          controls: [
            { type: "select", label: "Bar Height", key: "height", options: ["40px", "44px", "46px", "50px", "54px"] },
            { type: "select", label: "Auto-Play Speed", key: "autoInterval", options: [2000, 3000, 4000, 5000, 6000] },
            { type: "text", label: "Storage Key", key: "storageKey" },
          ],
        },
      ],
    },

  ],
};

export default announcementbarRegistry;