import ProductCardSliderV1, { getProductCardSliderV1Code } from "../components/ui/product-card-slider/ProductCardSliderV1";
import ProductCardSliderV2, { getProductCardSliderV2Code } from "../components/ui/product-card-slider/ProductCardSliderV2";

const productCardSliderRegistry = {
  id: "product-card-slider",
  slug: "product-card-slider",
  title: "Product Card Slider",
  icon: "fa-layer-group",
  iconBg: "rgba(37,99,235,0.1)",
  iconColor: "#2563eb",
  tags: ["product", "slider", "tabs", "carousel", "collection", "grid", "horizontal scroll"],
  description:
    "Horizontal product card sliders with drag support, progress bar, tabbed collections, and responsive layouts.",
  variants: [

    // ── V1 — Tabbed Collections
    {
      id: "product-card-slider-v1",
      name: "Product Card Slider — Tabbed Collections",
      description:
        "Three-tab product slider with drag-to-scroll, prev/next navigation, counter, and quick-add buttons.",
      tags: ["tabs", "drag", "quick-add", "fashion", "minimal", "white"],
      component: ProductCardSliderV1,
      getCode: getProductCardSliderV1Code,
      defaultConfig: {
        bgColor: "#ffffff",
        eyebrowText: "NEW IN",
        eyebrowColor: "#111111",
        tab1Label: "MAIN SS26",
        tab2Label: "BEST SELLERS",
        tab3Label: "NEW ARRIVALS",
        tabActiveBg: "#111111",
        tabActiveColor: "#ffffff",
        tabInactiveColor: "rgba(17,17,17,0.4)",
        navColor: "#111111",
        cardBg: "#f4f4f4",
        textColor: "#111111",
        vendorName: "8PM",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Background, text, and card colors",
          controls: [
            { type: "color", label: "Section Background", key: "bgColor" },
            { type: "color", label: "Text & Nav Color", key: "textColor" },
            { type: "color", label: "Card Background", key: "cardBg" },
            { type: "color", label: "Nav Button Color", key: "navColor" },
          ],
        },
        {
          id: "eyebrow",
          icon: "fa-font",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Eyebrow",
          subtitle: "Small label above the tabs",
          controls: [
            { type: "text", label: "Eyebrow Text", key: "eyebrowText" },
            { type: "color", label: "Eyebrow Color", key: "eyebrowColor" },
          ],
        },
        {
          id: "tabs",
          icon: "fa-bars-staggered",
          iconBg: "#fef3c7",
          iconColor: "#d97706",
          title: "Tabs",
          subtitle: "Tab labels and active style",
          controls: [
            { type: "text", label: "Tab 1 Label", key: "tab1Label" },
            { type: "text", label: "Tab 2 Label", key: "tab2Label" },
            { type: "text", label: "Tab 3 Label", key: "tab3Label" },
            { type: "color", label: "Active Tab Background", key: "tabActiveBg" },
            { type: "color", label: "Active Tab Text", key: "tabActiveColor" },
          ],
        },
        {
          id: "brand",
          icon: "fa-tag",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "Brand",
          subtitle: "Vendor name shown on every card",
          controls: [
            { type: "text", label: "Vendor Name", key: "vendorName" },
          ],
        },
      ],
    },

    // ── V2 — Split Hero
    {
      id: "product-card-slider-v2",
      name: "Product Card Slider — Split Hero",
      description:
        "Left-panel hero image with a horizontal draggable product card slider, progress bar, and arrow navigation.",
      tags: ["split", "hero image", "draggable", "progress bar", "arrows"],
      component: ProductCardSliderV2,
      getCode: getProductCardSliderV2Code,
      defaultConfig: {
        bgColor: "#ffffff",
        textColor: "#111111",
        titleText: "TECHNOLOGY",
        viewAllText: "View all",
        viewAllUrl: "#",
        leftImageUrl: "https://picsum.photos/seed/bridal-hero/900/1200",
        leftImageAlt: "Featured collection",
        cardBg: "#f6f6f6",
        productNameColor: "#4a4a4a",
        productPriceColor: "#111111",
        progressBg: "#d8d8d8",
        progressColor: "#111111",
        arrowHoverBg: "#f2f2f2",
        products: [
          { name: "Ambre", price: "Rs.1,050,000", image: "https://picsum.photos/seed/bridal-1/600/900" },
          { name: "Nairah", price: "Rs.950,000", image: "https://picsum.photos/seed/bridal-2/600/900" },
          { name: "Mahe", price: "Rs.930,000", image: "https://picsum.photos/seed/bridal-3/600/900" },
          { name: "Azureh", price: "Rs.980,000", image: "https://picsum.photos/seed/bridal-4/600/900" },
          { name: "Salome", price: "Rs.900,000", image: "https://picsum.photos/seed/bridal-5/600/900" },
          { name: "Zelie", price: "Rs.1,020,000", image: "https://picsum.photos/seed/bridal-6/600/900" },
          { name: "Elara", price: "Rs.870,000", image: "https://picsum.photos/seed/bridal-7/600/900" },
          { name: "Meher", price: "Rs.910,000", image: "https://picsum.photos/seed/bridal-8/600/900" },
          { name: "Raniya", price: "Rs.1,140,000", image: "https://picsum.photos/seed/bridal-9/600/900" },
          { name: "Liyana", price: "Rs.965,000", image: "https://picsum.photos/seed/bridal-10/600/900" },
          { name: "Inaya", price: "Rs.890,000", image: "https://picsum.photos/seed/bridal-11/600/900" },
          { name: "Abeer", price: "Rs.1,090,000", image: "https://picsum.photos/seed/bridal-12/600/900" },
        ],
      },
      accordions: [
        {
          id: "content",
          icon: "fa-font",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Content",
          subtitle: "Section title and view-all link",
          controls: [
            { type: "text", label: "Section Title", key: "titleText" },
            { type: "text", label: "View All Label", key: "viewAllText" },
            { type: "text", label: "View All URL", key: "viewAllUrl" },
            { type: "text", label: "Left Image URL", key: "leftImageUrl" },
            { type: "text", label: "Left Image Alt", key: "leftImageAlt" },
          ],
        },
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Colors",
          subtitle: "Background, text, and accent colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Text Color", key: "textColor" },
            { type: "color", label: "Card Background", key: "cardBg" },
            { type: "color", label: "Product Name", key: "productNameColor" },
            { type: "color", label: "Product Price", key: "productPriceColor" },
            { type: "color", label: "Progress Track", key: "progressBg" },
            { type: "color", label: "Progress Fill", key: "progressColor" },
            { type: "color", label: "Arrow Hover Bg", key: "arrowHoverBg" },
          ],
        },
      ],
    },

  ],
};

export default productCardSliderRegistry;