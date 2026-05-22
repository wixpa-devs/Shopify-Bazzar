import MarqueeV1, { getMarqueeV1Code } from "../components/ui/marquee/MarqueeV1";
import MarqueeV2, { getMarqueeV2Code } from "../components/ui/marquee/MarqueeV2";
import MarqueeV3, { getMarqueeV3Code } from "../components/ui/marquee/MarqueeV3";
import MarqueeV4, { getMarqueeV4Code } from "../components/ui/marquee/MarqueeV4";
import MarqueeV5, { getMarqueeV5Code } from "../components/ui/marquee/MarqueeV5";

const marqueeRegistry = {
  id: "marquee",
  slug: "marquee",
  title: "Marquee",
  icon: "fa-image",
  iconBg: "rgba(16,185,129,0.1)",
  iconColor: "#10b981",
  tags: ["marquee", "brands", "logos", "scrolling", "partners"],
  description:
    "Infinitely scrolling brand logo strips that build social proof and highlight partner or client relationships.",
  variants: [

    // ── Marquee V1 — Brands Scroll
    {
      id: "marquee-v1",
      name: "Marquee — Brands Scroll",
      description: "Auto-scrolling grayscale brand logos with fade edges, hover-to-pause, and reduced-motion support.",
      tags: ["brands", "logos", "grayscale", "auto-scroll", "partners"],
      component: MarqueeV1,
      getCode: getMarqueeV1Code,
      defaultConfig: {
        bgColor: "#ffffff", borderColor: "#e8e8e8", separatorColor: "#d0d0d0",
        speed: "40s", sectionGapTop: "20px", sectionGapBottom: "0px",
        brand1Url: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/acure_34eec53a-de6d-4717-9e48-ee4137067bc5.png?v=1727383304&width=280", brand1Label: "Acure", brand1Href: "#",
        brand2Url: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/keeko_860e46a1-b765-4f97-9d31-a29328decefc.png?v=1727383316&width=280", brand2Label: "Keeko", brand2Href: "#",
        brand3Url: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/bkind_a45822b8-662c-4d5c-bdaf-6470bdfa9d96.png?v=1727383329&width=280", brand3Label: "Bkind", brand3Href: "#",
        brand4Url: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/herbi_f4fc6530-ee64-4cb8-8620-eac55c6746ef.png?v=1727383343&width=280", brand4Label: "Herbivore", brand4Href: "#",
        brand5Url: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/ilia_c29907a2-c6f9-410c-bbc3-1d4debd9e041.png?v=1727383362&width=280", brand5Label: "ILIA", brand5Href: "#",
        brand6Url: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/mokosh_1c744388-d073-4284-b6af-77229e000f0b.png?v=1727383374&width=280", brand6Label: "Mokosh", brand6Href: "#",
        brand7Url: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/odacite_6c8c52af-f8ae-4260-8725-8e7119df3aad.png?v=1727383387&width=280", brand7Label: "Odacite", brand7Href: "#",
        brand8Url: "https://wonder-theme-beauty.myshopify.com/cdn/shop/files/osea_249c4ef0-4671-4810-910a-54461c1a863d.png?v=1727383398&width=280", brand8Label: "OSEA", brand8Href: "#",
      },
      accordions: [
        { id: "background", icon: "fa-fill-drip", iconBg: "#fce7f3", iconColor: "#db2777", title: "Background & Borders", subtitle: "Section background and border colors", controls: [{ type: "color", label: "Background Color", key: "bgColor" }, { type: "color", label: "Border Color", key: "borderColor" }, { type: "color", label: "Separator Dot Color", key: "separatorColor" }] },
        { id: "animation", icon: "fa-layer-group", iconBg: "#dbeafe", iconColor: "#1d4ed8", title: "Animation", subtitle: "Scroll speed and section spacing", controls: [{ type: "select", label: "Scroll Speed", key: "speed", options: ["20s", "28s", "40s", "55s", "70s"] }, { type: "text", label: "Gap Top", key: "sectionGapTop" }, { type: "text", label: "Gap Bottom", key: "sectionGapBottom" }] },
        { id: "brand1", icon: "fa-image", iconBg: "#f0fdf4", iconColor: "#16a34a", title: "Brand 1", subtitle: "Acure", controls: [{ type: "text", label: "Image URL", key: "brand1Url" }, { type: "text", label: "Brand Name", key: "brand1Label" }, { type: "text", label: "Link URL", key: "brand1Href" }] },
        { id: "brand2", icon: "fa-image", iconBg: "#f0fdf4", iconColor: "#16a34a", title: "Brand 2", subtitle: "Keeko", controls: [{ type: "text", label: "Image URL", key: "brand2Url" }, { type: "text", label: "Brand Name", key: "brand2Label" }, { type: "text", label: "Link URL", key: "brand2Href" }] },
        { id: "brand3", icon: "fa-image", iconBg: "#f0fdf4", iconColor: "#16a34a", title: "Brand 3", subtitle: "Bkind", controls: [{ type: "text", label: "Image URL", key: "brand3Url" }, { type: "text", label: "Brand Name", key: "brand3Label" }, { type: "text", label: "Link URL", key: "brand3Href" }] },
        { id: "brand4", icon: "fa-image", iconBg: "#f0fdf4", iconColor: "#16a34a", title: "Brand 4", subtitle: "Herbivore", controls: [{ type: "text", label: "Image URL", key: "brand4Url" }, { type: "text", label: "Brand Name", key: "brand4Label" }, { type: "text", label: "Link URL", key: "brand4Href" }] },
        { id: "brand5", icon: "fa-image", iconBg: "#f0fdf4", iconColor: "#16a34a", title: "Brand 5", subtitle: "ILIA", controls: [{ type: "text", label: "Image URL", key: "brand5Url" }, { type: "text", label: "Brand Name", key: "brand5Label" }, { type: "text", label: "Link URL", key: "brand5Href" }] },
        { id: "brand6", icon: "fa-image", iconBg: "#f0fdf4", iconColor: "#16a34a", title: "Brand 6", subtitle: "Mokosh", controls: [{ type: "text", label: "Image URL", key: "brand6Url" }, { type: "text", label: "Brand Name", key: "brand6Label" }, { type: "text", label: "Link URL", key: "brand6Href" }] },
        { id: "brand7", icon: "fa-image", iconBg: "#f0fdf4", iconColor: "#16a34a", title: "Brand 7", subtitle: "Odacite", controls: [{ type: "text", label: "Image URL", key: "brand7Url" }, { type: "text", label: "Brand Name", key: "brand7Label" }, { type: "text", label: "Link URL", key: "brand7Href" }] },
        { id: "brand8", icon: "fa-image", iconBg: "#f0fdf4", iconColor: "#16a34a", title: "Brand 8", subtitle: "OSEA", controls: [{ type: "text", label: "Image URL", key: "brand8Url" }, { type: "text", label: "Brand Name", key: "brand8Label" }, { type: "text", label: "Link URL", key: "brand8Href" }] },
      ],
    },

    // ── Marquee V2 — Text & Images
    {
      id: "marquee-v2",
      name: "Marquee — Text & Images",
      description: "Elegant serif italic text phrases alternating with circular product images on a warm background.",
      tags: ["text", "images", "serif", "italic", "elegant", "beauty"],
      component: MarqueeV2,
      getCode: getMarqueeV2Code,
      defaultConfig: {
        bgColor: "#f7f5f0", textColor: "#1a1a1a", speed: "28s",
        sectionPaddingTop: "clamp(32px, 4vw, 36px)", sectionPaddingBottom: "clamp(32px, 4vw, 36px)",
        text1: "For all skin types", text2: "Beauty in simplicity.", text3: "Glow with confidence",
        img1Url: "https://smootify-theme-pralise.myshopify.com/cdn/shop/files/pralise-scrolltext-2.jpg?v=1743565193&width=232", img1Alt: "Skin care product",
        img2Url: "https://smootify-theme-pralise.myshopify.com/cdn/shop/files/pralise-scrolltext-1.jpg?v=1743565142&width=232", img2Alt: "Beauty product",
        img3Url: "https://smootify-theme-pralise.myshopify.com/cdn/shop/files/pralise-test.jpg?v=1743565620&width=232", img3Alt: "Glow product",
      },
      accordions: [
        { id: "colors", icon: "fa-fill-drip", iconBg: "#fce7f3", iconColor: "#db2777", title: "Colors", subtitle: "Background and text colors", controls: [{ type: "color", label: "Background Color", key: "bgColor" }, { type: "color", label: "Text Color", key: "textColor" }] },
        { id: "animation", icon: "fa-layer-group", iconBg: "#dbeafe", iconColor: "#1d4ed8", title: "Animation & Spacing", subtitle: "Scroll speed and vertical padding", controls: [{ type: "select", label: "Scroll Speed", key: "speed", options: ["18s", "28s", "40s", "55s", "70s"] }, { type: "text", label: "Padding Top", key: "sectionPaddingTop" }, { type: "text", label: "Padding Bottom", key: "sectionPaddingBottom" }] },
        { id: "texts", icon: "fa-font", iconBg: "#ede9fe", iconColor: "#7c3aed", title: "Text Phrases", subtitle: "The three scrolling italic phrases", controls: [{ type: "text", label: "Phrase 1", key: "text1" }, { type: "text", label: "Phrase 2", key: "text2" }, { type: "text", label: "Phrase 3", key: "text3" }] },
        { id: "images", icon: "fa-image", iconBg: "#f0fdf4", iconColor: "#16a34a", title: "Images", subtitle: "Circular image URLs and alt text", controls: [{ type: "text", label: "Image 1 URL", key: "img1Url" }, { type: "text", label: "Image 1 Alt", key: "img1Alt" }, { type: "text", label: "Image 2 URL", key: "img2Url" }, { type: "text", label: "Image 2 Alt", key: "img2Alt" }, { type: "text", label: "Image 3 URL", key: "img3Url" }, { type: "text", label: "Image 3 Alt", key: "img3Alt" }] },
      ],
    },

    // ── Marquee V3 — Tilted Text Rows
    {
      id: "marquee-v3",
      name: "Marquee — Tilted Text Rows",
      description: "Four bold tilted text rows over a darkened background image, alternating LTR/RTL scroll with mix-blend-mode screen effect.",
      tags: ["bold", "tilted", "dark", "background image", "bebas neue", "cinematic"],
      component: MarqueeV3,
      getCode: getMarqueeV3Code,
      defaultConfig: {
        accentColor: "#f3bb0b",
        bgImageUrl: "https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?q=80&w=1587&auto=format&fit=crop",
        bgBrightness: "0.25",
        row1Text: "You have brains in your head", row1CharCount: "28",
        row2Text: "You have feet in your shoes", row2CharCount: "30",
        row3Text: "You can steer yourself", row3CharCount: "22",
        row4Text: "Any direction you choose", row4CharCount: "24",
      },
      accordions: [
        { id: "style", icon: "fa-palette", iconBg: "#ede9fe", iconColor: "#7c3aed", title: "Style", subtitle: "Accent color and background image", controls: [{ type: "color", label: "Accent Color", key: "accentColor" }, { type: "text", label: "Background Image URL", key: "bgImageUrl" }, { type: "select", label: "Background Brightness", key: "bgBrightness", options: ["0.1", "0.15", "0.25", "0.35", "0.5"] }] },
        { id: "row1", icon: "fa-font", iconBg: "#fef3c7", iconColor: "#d97706", title: "Row 1 (LTR)", subtitle: "Top-left tilted row, scrolls left to right", controls: [{ type: "text", label: "Text", key: "row1Text" }, { type: "text", label: "Char Count (speed)", key: "row1CharCount" }] },
        { id: "row2", icon: "fa-font", iconBg: "#fef3c7", iconColor: "#d97706", title: "Row 2 (LTR)", subtitle: "Second row, scrolls left to right", controls: [{ type: "text", label: "Text", key: "row2Text" }, { type: "text", label: "Char Count (speed)", key: "row2CharCount" }] },
        { id: "row3", icon: "fa-font", iconBg: "#dbeafe", iconColor: "#1d4ed8", title: "Row 3 (RTL)", subtitle: "Third row, scrolls right to left", controls: [{ type: "text", label: "Text", key: "row3Text" }, { type: "text", label: "Char Count (speed)", key: "row3CharCount" }] },
        { id: "row4", icon: "fa-font", iconBg: "#dbeafe", iconColor: "#1d4ed8", title: "Row 4 (RTL)", subtitle: "Bottom row, scrolls right to left", controls: [{ type: "text", label: "Text", key: "row4Text" }, { type: "text", label: "Char Count (speed)", key: "row4CharCount" }] },
      ],
    },

    // ── Marquee V4 — Scroll Velocity
    {
      id: "marquee-v4",
      name: "Marquee — Scroll Velocity",
      description: "Fixed viewport marquee driven by GSAP — scroll down to speed up leftward, scroll up to reverse. Smooth velocity lerp with hover-pause.",
      tags: ["gsap", "scroll", "velocity", "sticky", "outline text", "dark", "interactive"],
      component: MarqueeV4,
      getCode: getMarqueeV4Code,
      defaultConfig: {
        bgColor: "#000000",
        textColor: "#ffffff",
        strokeColor: "#ffffff",
        borderColor: "rgba(255,255,255,0.1)",
        baseSpeed: "1.2",
        scrollBoost: "18",
        lerpSpeed: "0.07",
        item1Text: "We do a little Trolling",
        item2Text: "We do a little Scrolling",
        item3Text: "We do a little Trolling",
        item4Text: "We do a little Scrolling",
        item5Text: "We do a little Trolling",
        item6Text: "We do a little Scrolling",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#1e1e1e",
          iconColor: "#a3a3a3",
          title: "Colors",
          subtitle: "Marquee strip, text stroke, dot, and border",
          controls: [
            { type: "color", label: "Marquee Background", key: "bgColor" },
            { type: "color", label: "Text / Stroke Color", key: "strokeColor" },
            { type: "color", label: "Dot Color", key: "textColor" },
            { type: "text", label: "Border Color", key: "borderColor" },
          ],
        },
        {
          id: "physics",
          icon: "fa-layer-group",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Scroll Physics",
          subtitle: "Speed, boost, and smoothing",
          controls: [
            { type: "select", label: "Base Speed (px/frame)", key: "baseSpeed", options: ["0.5", "1.2", "2.0", "3.0", "4.0"] },
            { type: "select", label: "Scroll Boost", key: "scrollBoost", options: ["8", "18", "28", "40"] },
            { type: "select", label: "Lerp Smoothing", key: "lerpSpeed", options: ["0.03", "0.07", "0.12", "0.2"] },
          ],
        },
        {
          id: "items",
          icon: "fa-font",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Marquee Text",
          subtitle: "The six scrolling text items",
          controls: [
            { type: "text", label: "Item 1", key: "item1Text" },
            { type: "text", label: "Item 2", key: "item2Text" },
            { type: "text", label: "Item 3", key: "item3Text" },
            { type: "text", label: "Item 4", key: "item4Text" },
            { type: "text", label: "Item 5", key: "item5Text" },
            { type: "text", label: "Item 6", key: "item6Text" },
          ],
        },
      ],
    },

    // ── Marquee V5 — Image Clip Text
    {
      id: "marquee-v5",
      name: "Marquee — Image Clip Text",
      description:
        "Three-layer text masking effect — black text behind, a clipping image window in the middle, and cream text visible only through the image.",
      tags: ["image clip", "mask", "text reveal", "portfolio", "creative", "work sans"],
      component: MarqueeV5,
      getCode: getMarqueeV5Code,
      defaultConfig: {
        bgColor: "#ffffff",
        backTextColor: "#000000",
        frontTextColor: "wheat",
        marqueeText: "Recent Work",
        separatorChar: "—",
        imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1260&fit=crop",
        animDuration: "20s",
        sceneHeight: "100vh",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Background, back text, and front text",
          controls: [
            { type: "color", label: "Background Color", key: "bgColor" },
            { type: "color", label: "Back Text Color", key: "backTextColor" },
            { type: "text", label: "Front Text Color", key: "frontTextColor" },
          ],
        },
        {
          id: "content",
          icon: "fa-font",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Text Content",
          subtitle: "Marquee phrase and separator",
          controls: [
            { type: "text", label: "Marquee Text", key: "marqueeText" },
            { type: "text", label: "Separator Char", key: "separatorChar" },
          ],
        },
        {
          id: "image",
          icon: "fa-image",
          iconBg: "#f0fdf4",
          iconColor: "#16a34a",
          title: "Clip Image",
          subtitle: "Image shown in the clipping window",
          controls: [
            { type: "text", label: "Image URL", key: "imageUrl" },
          ],
        },
        {
          id: "animation",
          icon: "fa-layer-group",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Animation & Layout",
          subtitle: "Speed and scene height",
          controls: [
            { type: "select", label: "Animation Duration", key: "animDuration", options: ["10s", "15s", "20s", "30s", "40s"] },
            { type: "select", label: "Scene Height", key: "sceneHeight", options: ["60vh", "80vh", "100vh", "50vw"] },
          ],
        },

      ],
    },

  ],
};

export default marqueeRegistry;