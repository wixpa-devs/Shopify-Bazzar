import HeaderV1, { getHeaderV1Code } from "../components/ui/headers/HeaderV1";
import HeaderV2, { getHeaderV2Code } from "../components/ui/headers/HeaderV2";
import HeaderV3, { getHeaderV3Code } from "../components/ui/headers/HeaderV3";
import HeaderV4, { getHeaderV4Code } from "../components/ui/headers/HeaderV4";
import HeaderV5, { getHeaderV5Code } from "../components/ui/headers/HeaderV5";
import HeaderV6, { getHeaderV6Code } from "../components/ui/headers/HeaderV6";
import HeaderV7, { getHeaderV7Code } from "../components/ui/headers/HeaderV7";
import HeaderV8, { getHeaderV8Code } from "../components/ui/headers/HeaderV8";
import HeaderV9, { getHeaderV9Code } from "../components/ui/headers/HeaderV9";
import HeaderV10, { getHeaderV10Code } from "../components/ui/headers/HeaderV10";

const headersRegistry = {
  slug: "headers",
  title: "Headers",
  variants: [
    {
      id: "header-v1",
      name: "Header — Little Pebble Mega Menu",
      description:
        "Centered logo header with full-width mega menu dropdown and mobile sidebar",
      tags: [
        "mega-menu",
        "centered-logo",
        "sticky",
        "mobile-toggle",
        "dropdown",
      ],
      component: HeaderV1,
      getCode: getHeaderV1Code,
      defaultConfig: {
        // Layout
        sidePadding: "8%",
        headerTopOffset: "25px",
        headerHeight: "75px",
        headerScrolledHeight: "85px",
        headerBorderRadius: "12px",
        headerShadow: "0 10px 30px rgba(0,0,0,0.08)",
        megaMenuShadow: "0 25px 50px rgba(0,0,0,0.1)",

        // Colors
        primaryBg: "#C8A48D",
        headerBg: "#ffffff",
        headerText: "#1a1a1a",
        headerTextHover: "#C8A48D",
        megaMenuBg: "#ffffff",
        megaMenuText: "#666666",
        megaMenuTextHover: "#C8A48D",
        mobileMenuBg: "#ffffff",
        mobileMenuText: "#1a1a1a",
        overlayColor: "rgba(0,0,0,0.4)",
        bodyBg: "#f9f9f9",

        // Logo
        logoScriptText: "little",
        logoScriptSize: "28px",
        logoScriptColor: "#1a1a1a",
        logoBoldText: "PEBBLE",
        logoBoldSize: "20px",
        logoBoldColor: "#1a1a1a",
        logoUrl: "/",
        logoImageUrl: "",

        // Navigation
        shopLinkText: "Shop",
        shopLinkUrl: "#",
        collectionsLinkText: "Collections",
        collectionsLinkUrl: "#",
        aboutLinkText: "About Us",
        aboutLinkUrl: "#",

        // Mega Menu Column 1
        megaCol1Heading: "New In",
        megaCol1Link1Text: "Winter Jackets",
        megaCol1Link1Url: "#",
        megaCol1Link2Text: "Cozy Sweaters",
        megaCol1Link2Url: "#",
        megaCol1Link3Text: "Baby Suits",
        megaCol1Link3Url: "#",
        megaCol1Link4Text: "Woolen Caps",
        megaCol1Link4Url: "#",

        // Mega Menu Column 2
        megaCol2Heading: "Shop By Age",
        megaCol2Link1Text: "0-6 Months",
        megaCol2Link1Url: "#",
        megaCol2Link2Text: "6-12 Months",
        megaCol2Link2Url: "#",
        megaCol2Link3Text: "1-3 Years",
        megaCol2Link3Url: "#",

        // Mega Menu Cards
        megaCard1Image:
          "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600",
        megaCard1Alt: "Winter",
        megaCard1Text: "Winter Collection",
        megaCard2Image:
          "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=600",
        megaCard2Alt: "Toys",
        megaCard2Text: "Gift Ideas",

        // Mobile Menu
        closeMenuText: "CLOSE MENU",
        mobileLink1Text: "Shop",
        mobileLink1Url: "#",
        mobileLink2Text: "Collections",
        mobileLink2Url: "#",
        mobileLink3Text: "About Us",
        mobileLink3Url: "#",
        mobileLink4Text: "Contact",
        mobileLink4Url: "#",

        // Header Actions
        searchUrl: "/search",
        accountUrl: "/account",
        cartUrl: "/cart",

        // Hero Section
        heroSubtitle: "Premium Kids Wear",
        heroHeading: "Winter Cuddles<br>Only For You",

        // Spacer
        spacerHeading: "Aligned For Perfection",
        spacerText:
          "Scroll down to see the header transform into full-width sticky mode.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Colors",
          subtitle: "Header, text, and menu colors",
          controls: [
            { type: "color", label: "Primary Accent", key: "primaryBg" },
            { type: "color", label: "Header Background", key: "headerBg" },
            { type: "color", label: "Header Text", key: "headerText" },
            {
              type: "color",
              label: "Header Text Hover",
              key: "headerTextHover",
            },
            { type: "color", label: "Mega Menu Background", key: "megaMenuBg" },
            { type: "color", label: "Mega Menu Text", key: "megaMenuText" },
            {
              type: "color",
              label: "Mega Menu Text Hover",
              key: "megaMenuTextHover",
            },
            {
              type: "color",
              label: "Mobile Menu Background",
              key: "mobileMenuBg",
            },
            { type: "color", label: "Mobile Menu Text", key: "mobileMenuText" },
            { type: "color", label: "Overlay Color", key: "overlayColor" },
            { type: "color", label: "Body Background", key: "bodyBg" },
          ],
        },
        {
          id: "logo",
          icon: "fa-tag",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Logo",
          subtitle: "Logo text and styling",
          controls: [
            { type: "text", label: "Logo URL", key: "logoUrl" },
            { type: "image-upload", label: "Logo Image Upload", key: "logoImageUrl" },
          ],
        },
        {
          id: "navigation",
          icon: "fa-bars-staggered",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Navigation",
          subtitle: "Main navigation links",
          controls: [
            { type: "text", label: "Shop Link Text", key: "shopLinkText" },
            { type: "text", label: "Shop Link URL", key: "shopLinkUrl" },
            {
              type: "text",
              label: "Collections Link Text",
              key: "collectionsLinkText",
            },
            {
              type: "text",
              label: "Collections Link URL",
              key: "collectionsLinkUrl",
            },
            { type: "text", label: "About Link Text", key: "aboutLinkText" },
            { type: "text", label: "About Link URL", key: "aboutLinkUrl" },
          ],
        },
        {
          id: "mega-menu-col1",
          icon: "fa-layer-group",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Mega Menu - Column 1",
          subtitle: "New In links",
          controls: [
            { type: "text", label: "Column Heading", key: "megaCol1Heading" },
            { type: "text", label: "Link 1 Text", key: "megaCol1Link1Text" },
            { type: "text", label: "Link 1 URL", key: "megaCol1Link1Url" },
            { type: "text", label: "Link 2 Text", key: "megaCol1Link2Text" },
            { type: "text", label: "Link 2 URL", key: "megaCol1Link2Url" },
            { type: "text", label: "Link 3 Text", key: "megaCol1Link3Text" },
            { type: "text", label: "Link 3 URL", key: "megaCol1Link3Url" },
            { type: "text", label: "Link 4 Text", key: "megaCol1Link4Text" },
            { type: "text", label: "Link 4 URL", key: "megaCol1Link4Url" },
          ],
        },
        {
          id: "mega-menu-col2",
          icon: "fa-layer-group",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Mega Menu - Column 2",
          subtitle: "Shop By Age links",
          controls: [
            { type: "text", label: "Column Heading", key: "megaCol2Heading" },
            { type: "text", label: "Link 1 Text", key: "megaCol2Link1Text" },
            { type: "text", label: "Link 1 URL", key: "megaCol2Link1Url" },
            { type: "text", label: "Link 2 Text", key: "megaCol2Link2Text" },
            { type: "text", label: "Link 2 URL", key: "megaCol2Link2Url" },
            { type: "text", label: "Link 3 Text", key: "megaCol2Link3Text" },
            { type: "text", label: "Link 3 URL", key: "megaCol2Link3Url" },
          ],
        },
        {
          id: "mega-cards",
          icon: "fa-image",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Mega Menu Cards",
          subtitle: "Image cards in mega menu",
          controls: [
            { type: "text", label: "Card 1 Image URL", key: "megaCard1Image" },
            { type: "text", label: "Card 1 Alt Text", key: "megaCard1Alt" },
            { type: "text", label: "Card 1 Text", key: "megaCard1Text" },
            { type: "text", label: "Card 2 Image URL", key: "megaCard2Image" },
            { type: "text", label: "Card 2 Alt Text", key: "megaCard2Alt" },
            { type: "text", label: "Card 2 Text", key: "megaCard2Text" },
          ],
        },
        {
          id: "mobile",
          icon: "fa-mobile-screen",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Mobile Menu",
          subtitle: "Sidebar links and text",
          controls: [
            { type: "text", label: "Close Menu Text", key: "closeMenuText" },
            {
              type: "text",
              label: "Mobile Link 1 Text",
              key: "mobileLink1Text",
            },
            { type: "text", label: "Mobile Link 1 URL", key: "mobileLink1Url" },
            {
              type: "text",
              label: "Mobile Link 2 Text",
              key: "mobileLink2Text",
            },
            { type: "text", label: "Mobile Link 2 URL", key: "mobileLink2Url" },
            {
              type: "text",
              label: "Mobile Link 3 Text",
              key: "mobileLink3Text",
            },
            { type: "text", label: "Mobile Link 3 URL", key: "mobileLink3Url" },
            {
              type: "text",
              label: "Mobile Link 4 Text",
              key: "mobileLink4Text",
            },
            { type: "text", label: "Mobile Link 4 URL", key: "mobileLink4Url" },
          ],
        },
        {
          id: "actions",
          icon: "fa-cart-shopping",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Header Actions",
          subtitle: "Search, account and cart URLs",
          controls: [
            { type: "text", label: "Search URL", key: "searchUrl" },
            { type: "text", label: "Account URL", key: "accountUrl" },
            { type: "text", label: "Cart URL", key: "cartUrl" },
          ],
        },
        {
          id: "hero",
          icon: "fa-star",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Hero Section",
          subtitle: "Hero text content",
          controls: [
            { type: "text", label: "Hero Subtitle", key: "heroSubtitle" },
            {
              type: "textarea",
              label: "Hero Heading (HTML allowed)",
              key: "heroHeading",
            },
          ],
        },
        {
          id: "layout",
          icon: "fa-layer-group",
          iconBg: "#C8A48D",
          iconColor: "#FFFFFF",
          title: "Layout",
          subtitle: "Header dimensions and padding",
          controls: [
            { type: "text", label: "Side Padding", key: "sidePadding" },
            {
              type: "text",
              label: "Header Top Offset",
              key: "headerTopOffset",
            },
            { type: "text", label: "Header Height", key: "headerHeight" },
            {
              type: "text",
              label: "Header Scrolled Height",
              key: "headerScrolledHeight",
            },
            {
              type: "text",
              label: "Header Border Radius",
              key: "headerBorderRadius",
            },
          ],
        },
      ],
    },
    {
      id: "header-v2",
      name: "Header — Vision Smart Security",
      description:
        "Tech-focused header with mega menu, search bar, and mobile accordion",
      tags: [
        "mega-menu",
        "badge-new",
        "search-bar",
        "mobile-accordion",
        "dual-nav",
      ],
      component: HeaderV2,
      getCode: getHeaderV2Code,
      defaultConfig: {
        // Colors
        bgColor: "#f3f4f6",
        textPrimary: "#111827",
        textSecondary: "#4b5563",
        accentYellow: "#fde047",
        accentGreenBg: "#d1fae5",
        accentGreenText: "#065f46",
        searchBg: "#e5e7eb",
        navHover: "#000000",

        // Layout
        borderRadius: "8px",
        containerWidth: "1440px",
        headerPaddingTop: "24px",
        headerPaddingBottom: "16px",
        headerPaddingSides: "40px",

        // Logo
        logoPrefix: "VISI",
        logoSuffix: "N",
        logoUrl: "/",
        logoWeight: "800",
        logoSize: "28px",
        logoColor: "#000000",
        cameraBgColor: "#fef08a",
        cameraBorderColor: "#000000",
        cameraDotColor: "#000000",

        // Logo image
        logoImageUrl: "",
        logoAlt: "VISION",
        logoImageMaxHeight: "32px",

        // Icons & badges
        iconColor: "#111827",
        cartBadgeBg: "#1f2937",
        cartBadgeText: "white",
        cartBadgeCount: "0",

        // Search (Shopify search page)
        searchPlaceholder: "Search",
        searchPadding: "10px 40px 10px 16px",
        searchUrl: "/search",

        // Mega Dropdown
        megaDropdownWidth: "650px",
        megaDropdownColumns: "1fr 1fr 1.5fr",
        megaDropdownBg: "#ffffff",
        megaDropdownShadow: "0 20px 40px rgba(0,0,0,0.12)",
        dropdownHeadingColor: "#9ca3af",
        dropdownCardBg: "#f8f9fa",
        dropdownCardText: "#111827",

        // Navigation Links - Main
        featuresLinkText: "Features",
        featuresLinkUrl: "#",
        shopLinkText: "Shop",
        shopLinkUrl: "#",
        doorbellsText: "Doorbells",
        doorbellsUrl: "#",
        journalText: "Journal",
        journalUrl: "#",

        // Navigation Links - Secondary
        aboutText: "About",
        aboutUrl: "#",
        supportText: "Support",
        supportUrl: "#",

        // Badges
        shopBadgeText: "NEW",

        // Dropdown 1 (Features)
        dropdown1Heading: "Hardware",
        dropdown1Link1Text: "4K Cameras",
        dropdown1Link1Url: "#",
        dropdown1Link2Text: "Night Vision",
        dropdown1Link2Url: "#",

        dropdown2Heading: "Software",
        dropdown2Link1Text: "Mobile App",
        dropdown2Link1Url: "#",
        dropdown2Link2Text: "AI Tracking",
        dropdown2Link2Url: "#",

        dropdownCardText: "Latest Security Kit 2024",

        // Dropdown 2 (Shop)
        shopDropdownHeading: "Category",
        shopDropdownLink1Text: "Indoor",
        shopDropdownLink1Url: "#",
        shopDropdownLink2Text: "Outdoor",
        shopDropdownLink2Url: "#",
        shopDropdownCardText: "Save 20% on Bundles",

        // Account & Cart (Shopify defaults)
        accountUrl: "/account",
        cartUrl: "/cart",

        // Mobile Sidebar
        mobileSidebarBg: "#ffffff",
        sidebarOverlay: "rgba(0,0,0,0.5)",
        mobileToggleColor: "#111827",
        mobileLogoText: "VISION",
        mobileLogoColor: "#000000",
        closeIconColor: "#111827",
        mobileNavHeadColor: "#111827",
        mobileNavLinkColor: "#6b7280",

        // Mobile Navigation
        mobileFeaturesText: "FEATURES",
        mobileFeaturesLink1Text: "AI Recognition",
        mobileFeaturesLink1Url: "#",
        mobileFeaturesLink2Text: "Cloud Storage",
        mobileFeaturesLink2Url: "#",

        mobileShopText: "SHOP",
        mobileShopBadge: "NEW",
        mobileShopLink1Text: "Cameras",
        mobileShopLink1Url: "#",
        mobileShopLink2Text: "Doorbells",
        mobileShopLink2Url: "#",

        mobileSupportText: "SUPPORT",
        mobileSupportUrl: "#",
        mobileSupportColor: "#000000",

        // Demo text
        demoText: "Scroll or Hover to see the updated badge alignment.",
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Colors",
          subtitle: "Background, text, and accent colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Text Primary", key: "textPrimary" },
            { type: "color", label: "Text Secondary", key: "textSecondary" },
            { type: "color", label: "Accent Yellow", key: "accentYellow" },
            { type: "color", label: "Accent Green BG", key: "accentGreenBg" },
            { type: "color", label: "Accent Green Text", key: "accentGreenText" },
            { type: "color", label: "Search Background", key: "searchBg" },
            { type: "color", label: "Nav Hover", key: "navHover" },
          ],
        },
        {
          id: "logo",
          icon: "fa-tag",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Logo",
          subtitle: "Logo text, image, and camera icon",
          controls: [
            { type: "text", label: "Logo URL", key: "logoUrl" },
            { type: "image-upload", label: "Logo Image Upload", key: "logoImageUrl" },
          ],
        },
        {
          id: "header-layout",
          icon: "fa-layer-group",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Header Layout",
          subtitle: "Padding and dimensions",
          controls: [
            { type: "text", label: "Padding Top", key: "headerPaddingTop" },
            { type: "text", label: "Padding Bottom", key: "headerPaddingBottom" },
            { type: "text", label: "Padding Sides", key: "headerPaddingSides" },
            { type: "text", label: "Border Radius", key: "borderRadius" },
            { type: "text", label: "Container Width", key: "containerWidth" },
          ],
        },
        {
          id: "search",
          icon: "fa-magnifying-glass",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Search Bar",
          subtitle: "Search input styling",
          controls: [
            { type: "text", label: "Placeholder", key: "searchPlaceholder" },
            { type: "text", label: "Input Padding", key: "searchPadding" },
            { type: "text", label: "Search URL", key: "searchUrl" },
          ],
        },
        {
          id: "icons",
          icon: "fa-cart-shopping",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Icons",
          subtitle: "Account, cart, and badges",
          controls: [
            { type: "color", label: "Icon Color", key: "iconColor" },
            { type: "color", label: "Cart Badge BG", key: "cartBadgeBg" },
            { type: "color", label: "Cart Badge Text", key: "cartBadgeText" },
            { type: "text", label: "Cart Badge Count", key: "cartBadgeCount" },
            { type: "text", label: "Account URL", key: "accountUrl" },
            { type: "text", label: "Cart URL", key: "cartUrl" },
          ],
        },
        {
          id: "mega-menu",
          icon: "fa-bars-staggered",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Mega Menu",
          subtitle: "Dropdown styling",
          controls: [
            { type: "text", label: "Dropdown Width", key: "megaDropdownWidth" },
            { type: "text", label: "Grid Columns", key: "megaDropdownColumns" },
            { type: "color", label: "Dropdown BG", key: "megaDropdownBg" },
            { type: "text", label: "Dropdown Shadow", key: "megaDropdownShadow" },
            { type: "color", label: "Heading Color", key: "dropdownHeadingColor" },
            { type: "color", label: "Card BG", key: "dropdownCardBg" },
            { type: "color", label: "Card Text", key: "dropdownCardText" },
          ],
        },
        {
          id: "nav-links-main",
          icon: "fa-link",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Main Navigation",
          subtitle: "Primary nav links",
          controls: [
            { type: "text", label: "Features Text", key: "featuresLinkText" },
            { type: "text", label: "Features URL", key: "featuresLinkUrl" },
            { type: "text", label: "Shop Text", key: "shopLinkText" },
            { type: "text", label: "Shop URL", key: "shopLinkUrl" },
            { type: "text", label: "Doorbells Text", key: "doorbellsText" },
            { type: "text", label: "Doorbells URL", key: "doorbellsUrl" },
            { type: "text", label: "Journal Text", key: "journalText" },
            { type: "text", label: "Journal URL", key: "journalUrl" },
            { type: "text", label: "Shop Badge Text", key: "shopBadgeText" },
          ],
        },
        {
          id: "nav-links-secondary",
          icon: "fa-link",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Secondary Navigation",
          subtitle: "About and Support links",
          controls: [
            { type: "text", label: "About Text", key: "aboutText" },
            { type: "text", label: "About URL", key: "aboutUrl" },
            { type: "text", label: "Support Text", key: "supportText" },
            { type: "text", label: "Support URL", key: "supportUrl" },
          ],
        },
        {
          id: "dropdown-content-1",
          icon: "fa-layer-group",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Features Dropdown",
          subtitle: "Hardware & Software links",
          controls: [
            { type: "text", label: "Hardware Heading", key: "dropdown1Heading" },
            { type: "text", label: "Hardware Link 1 Text", key: "dropdown1Link1Text" },
            { type: "text", label: "Hardware Link 1 URL", key: "dropdown1Link1Url" },
            { type: "text", label: "Hardware Link 2 Text", key: "dropdown1Link2Text" },
            { type: "text", label: "Hardware Link 2 URL", key: "dropdown1Link2Url" },
            { type: "text", label: "Software Heading", key: "dropdown2Heading" },
            { type: "text", label: "Software Link 1 Text", key: "dropdown2Link1Text" },
            { type: "text", label: "Software Link 1 URL", key: "dropdown2Link1Url" },
            { type: "text", label: "Software Link 2 Text", key: "dropdown2Link2Text" },
            { type: "text", label: "Software Link 2 URL", key: "dropdown2Link2Url" },
            { type: "text", label: "Card Text", key: "dropdownCardText" },
          ],
        },
        {
          id: "dropdown-content-2",
          icon: "fa-layer-group",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Shop Dropdown",
          subtitle: "Category links",
          controls: [
            { type: "text", label: "Category Heading", key: "shopDropdownHeading" },
            { type: "text", label: "Indoor Text", key: "shopDropdownLink1Text" },
            { type: "text", label: "Indoor URL", key: "shopDropdownLink1Url" },
            { type: "text", label: "Outdoor Text", key: "shopDropdownLink2Text" },
            { type: "text", label: "Outdoor URL", key: "shopDropdownLink2Url" },
            { type: "text", label: "Card Text", key: "shopDropdownCardText" },
          ],
        },
        {
          id: "mobile",
          icon: "fa-mobile-screen",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Mobile Sidebar",
          subtitle: "Colors and navigation",
          controls: [
            { type: "color", label: "Sidebar BG", key: "mobileSidebarBg" },
            { type: "color", label: "Overlay", key: "sidebarOverlay" },
            { type: "color", label: "Toggle Color", key: "mobileToggleColor" },
            { type: "text", label: "Mobile Logo Text", key: "mobileLogoText" },
            { type: "color", label: "Mobile Logo Color", key: "mobileLogoColor" },
            { type: "color", label: "Close Icon Color", key: "closeIconColor" },
            { type: "color", label: "Nav Head Color", key: "mobileNavHeadColor" },
            { type: "color", label: "Nav Link Color", key: "mobileNavLinkColor" },
          ],
        },
        {
          id: "mobile-nav",
          icon: "fa-bars",
          iconBg: "#fde047",
          iconColor: "#000000",
          title: "Mobile Navigation",
          subtitle: "Sidebar links",
          controls: [
            { type: "text", label: "Features Text", key: "mobileFeaturesText" },
            { type: "text", label: "Features Link 1 Text", key: "mobileFeaturesLink1Text" },
            { type: "text", label: "Features Link 1 URL", key: "mobileFeaturesLink1Url" },
            { type: "text", label: "Features Link 2 Text", key: "mobileFeaturesLink2Text" },
            { type: "text", label: "Features Link 2 URL", key: "mobileFeaturesLink2Url" },
            { type: "text", label: "Shop Text", key: "mobileShopText" },
            { type: "text", label: "Shop Badge", key: "mobileShopBadge" },
            { type: "text", label: "Shop Link 1 Text", key: "mobileShopLink1Text" },
            { type: "text", label: "Shop Link 1 URL", key: "mobileShopLink1Url" },
            { type: "text", label: "Shop Link 2 Text", key: "mobileShopLink2Text" },
            { type: "text", label: "Shop Link 2 URL", key: "mobileShopLink2Url" },
            { type: "text", label: "Support Text", key: "mobileSupportText" },
            { type: "text", label: "Support URL", key: "mobileSupportUrl" },
            { type: "color", label: "Support Color", key: "mobileSupportColor" },
          ],
        },
      ],
    },
    {
      id: "header-v3",
      name: "Header — Rounded Pill Navbar",
      description:
        "Floating pill-shaped navbar with gradient background, dropdown menu, CTA button, and mobile hamburger drawer.",
      tags: ["rounded", "pill", "gradient", "dropdown", "hamburger", "mobile"],
      component: HeaderV3,
      getCode: getHeaderV3Code,
      defaultConfig: {
        bgGradientFrom: "#f5f7fa",
        bgGradientTo: "#ffffff",

        logoUrl: "#",
        logoImageUrl: "",
        logoIconBg: "#ff2d2d",
        logoIconColor: "#ffffff",
        logoIconText: "W",
        logoText: "Wixpa",
        logoTextColor: "#111111",

        linkColor: "#333333",
        linkHoverColor: "#ff2d2d",

        nav1Label: "Home",
        nav1Url: "#",

        nav2Label: "Shopify Apps",
        nav2Url: "#",
        nav2Drop1Label: "App 1",
        nav2Drop1Url: "#",
        nav2Drop2Label: "App 2",
        nav2Drop2Url: "#",
        nav2Drop3Label: "App 3",
        nav2Drop3Url: "#",

        nav3Label: "Portfolio",
        nav3Url: "#",
        nav4Label: "About",
        nav4Url: "#",
        nav5Label: "Blog",
        nav5Url: "#",
        nav6Label: "Contact",
        nav6Url: "#",

        btnLabel: "Try Our Apps",
        btnUrl: "#",
        btnBg: "#ff2d2d",
        btnHoverBg: "#e60000",
        btnColor: "#ffffff",
      },

      accordions: [
        {
          id: "logo",
          icon: "fa-tag",
          iconBg: "#fef3c7",
          iconColor: "#d97706",
          title: "Logo",
          subtitle: "Brand icon, name, and URL",
          controls: [
            { type: "text", label: "Logo URL", key: "logoUrl" },
            { type: "image-upload", label: "Logo Image Upload", key: "logoImageUrl" },
          ],
        },
        {
          id: "nav-links",
          icon: "fa-bars-staggered",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Navigation Links",
          subtitle: "Labels and URLs for all nav items",
          controls: [
            { type: "text", label: "Link 1 Label", key: "nav1Label" },
            { type: "text", label: "Link 1 URL", key: "nav1Url" },

            { type: "text", label: "Dropdown Label", key: "nav2Label" },
            { type: "text", label: "Dropdown URL", key: "nav2Url" },

            { type: "text", label: "Drop Item 1 Label", key: "nav2Drop1Label" },
            { type: "text", label: "Drop Item 1 URL", key: "nav2Drop1Url" },

            { type: "text", label: "Drop Item 2 Label", key: "nav2Drop2Label" },
            { type: "text", label: "Drop Item 2 URL", key: "nav2Drop2Url" },

            { type: "text", label: "Drop Item 3 Label", key: "nav2Drop3Label" },
            { type: "text", label: "Drop Item 3 URL", key: "nav2Drop3Url" },

            { type: "text", label: "Link 3 Label", key: "nav3Label" },
            { type: "text", label: "Link 3 URL", key: "nav3Url" },

            { type: "text", label: "Link 4 Label", key: "nav4Label" },
            { type: "text", label: "Link 4 URL", key: "nav4Url" },

            { type: "text", label: "Link 5 Label", key: "nav5Label" },
            { type: "text", label: "Link 5 URL", key: "nav5Url" },

            { type: "text", label: "Link 6 Label", key: "nav6Label" },
            { type: "text", label: "Link 6 URL", key: "nav6Url" },
          ],
        },
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Link and hover colors",
          controls: [
            { type: "color", label: "Link Color", key: "linkColor" },
            { type: "color", label: "Link Hover Color", key: "linkHoverColor" },
          ],
        },
        {
          id: "button",
          icon: "fa-square",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "CTA Button",
          subtitle: "Button label, URL, and colors",
          controls: [
            { type: "text", label: "Button Label", key: "btnLabel" },
            { type: "text", label: "Button URL", key: "btnUrl" },
            { type: "color", label: "Button Background", key: "btnBg" },
            { type: "color", label: "Button Hover Color", key: "btnHoverBg" },
            { type: "color", label: "Button Text Color", key: "btnColor" },
          ],
        },
        {
          id: "background",
          icon: "fa-fill-drip",
          iconBg: "#fce7f3",
          iconColor: "#db2777",
          title: "Background",
          subtitle: "Navbar gradient colors",
          controls: [
            { type: "color", label: "Gradient From", key: "bgGradientFrom" },
            { type: "color", label: "Gradient To", key: "bgGradientTo" },
          ],
        },
      ],
    },
    {
      id: "header-v4",
      name: "Header — Animated Selector Navbar",
      description:
        "Full-width dark navbar with a smooth sliding white selector pill that animates between active nav items, with mobile collapse support.",
      tags: ["animated", "selector", "dark", "icon", "mobile", "slide"],
      component: HeaderV4,
      getCode: getHeaderV4Code,
      defaultConfig: {
        navBg: "#5161ce",

        logoText: "Navbar",
        logoColor: "#ffffff",
        logoUrl: "#",
        logoImageUrl: "",

        linkColor: "rgba(255,255,255,0.5)",
        activeLinkColor: "#5161ce",
        selectorBg: "#ffffff",

        nav1Label: "Dashboard",
        nav1Url: "#",
        nav1Icon: "fas fa-tachometer-alt",

        nav2Label: "Address Book",
        nav2Url: "#",
        nav2Icon: "far fa-address-book",

        nav3Label: "Components",
        nav3Url: "#",
        nav3Icon: "far fa-clone",

        nav4Label: "Calendar",
        nav4Url: "#",
        nav4Icon: "far fa-calendar-alt",

        nav5Label: "Charts",
        nav5Url: "#",
        nav5Icon: "far fa-chart-bar",

        nav6Label: "Documents",
        nav6Url: "#",
        nav6Icon: "far fa-copy",
      },
      accordions: [
        {
          id: "logo",
          icon: "fa-tag",
          iconBg: "#fef3c7",
          iconColor: "#d97706",
          title: "Logo",
          subtitle: "Brand name, URL, and image",
          controls: [
            { type: "text", label: "Logo URL", key: "logoUrl" },
            { type: "image-upload", label: "Logo Image Upload", key: "logoImageUrl" },
          ],
        },
        {
          id: "nav-links",
          icon: "fa-bars-staggered",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Navigation Links",
          subtitle: "Labels and URLs for all nav items",
          controls: [
            { type: "text", label: "Link 1 Label", key: "nav1Label" },
            { type: "text", label: "Link 1 URL", key: "nav1Url" },
            { type: "text", label: "Link 2 Label", key: "nav2Label" },
            { type: "text", label: "Link 2 URL", key: "nav2Url" },
            { type: "text", label: "Link 3 Label", key: "nav3Label" },
            { type: "text", label: "Link 3 URL", key: "nav3Url" },
            { type: "text", label: "Link 4 Label", key: "nav4Label" },
            { type: "text", label: "Link 4 URL", key: "nav4Url" },
            { type: "text", label: "Link 5 Label", key: "nav5Label" },
            { type: "text", label: "Link 5 URL", key: "nav5Url" },
            { type: "text", label: "Link 6 Label", key: "nav6Label" },
            { type: "text", label: "Link 6 URL", key: "nav6Url" },
          ],
        },
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Navbar, link, and selector colors",
          controls: [
            { type: "color", label: "Navbar Background", key: "navBg" },
            { type: "color", label: "Link Color", key: "linkColor" },
            { type: "color", label: "Active Link Color", key: "activeLinkColor" },
            { type: "color", label: "Selector Background", key: "selectorBg" },
          ],
        },
      ],
    },
    {
      id: "header-v5",
      name: "Header — Admin Mega-Menu + Sidebar",
      description:
        "Full admin dashboard layout with a fixed top navbar, mega-menu drawer, notification/avatar dropdowns, and a collapsible icon sidebar with fly-out sub-menus.",
      tags: ["admin", "mega-menu", "sidebar", "dashboard", "flyout", "dark"],
      component: HeaderV5,
      getCode: getHeaderV5Code,
      defaultConfig: {
        navBg: "#ffffff",
        brandBg: "#009fff",
        brandColor: "#ffffff",
        brandText: "AF",
        accentColor: "#009fff",
        darkBg: "#292a2c",
        megaMenuBg: "#eeeeee",
        notifCount: "10",
        avatarUrl: "https://www.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g",
        togglerLabel: "Advanced",
        col1Title: "Slider Revolution",
        col1Link1: "Slider Revolution",
        col1Link2: "Navigation Editor",
        col1Link3: "Add-Ons",
        col2Title: "Flyouts",
        col2Link1: "All Flyouts",
        col2Link2: "Add New Flyout",
        col2Link3: "Re-Order",
        col3Title: "Cornerstone",
        col3Link1: "Cornerstone",
        col3Link2: "Cornerstone",
        col3Link3: "Cornerstone",
        col4Title: "Ess. Grid",
        col4Link1: "Essential Grid",
        col4Link2: "Item Skin Editor",
        col4Link3: "Meta Data Handling",
        sb1Label: "Reporting",
        sb2Label: "Content",
        sb3Label: "Engagement",
        sb4Label: "Image Center",
        sb5Label: "Settings",
        sb6Label: "Support",
      },
      accordions: [
        {
          id: "brand",
          icon: "fa-tag",
          iconBg: "#fef3c7",
          iconColor: "#d97706",
          title: "Brand",
          subtitle: "Logo box text and colors",
          controls: [
            { type: "text", label: "Brand Text", key: "brandText" },
            { type: "color", label: "Brand Background", key: "brandBg" },
            { type: "color", label: "Brand Text Color", key: "brandColor" },
          ],
        },
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Accent, dark, and surface colors",
          controls: [
            { type: "color", label: "Navbar Background", key: "navBg" },
            { type: "color", label: "Accent Color", key: "accentColor" },
            { type: "color", label: "Dark Background", key: "darkBg" },
            { type: "color", label: "Mega Menu Background", key: "megaMenuBg" },
          ],
        },
        {
          id: "megamenu",
          icon: "fa-layer-group",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Mega Menu",
          subtitle: "Column headings and link labels",
          controls: [
            { type: "text", label: "Toggler Label", key: "togglerLabel" },
            { type: "text", label: "Col 1 Title", key: "col1Title" },
            { type: "text", label: "Col 1 Link 1", key: "col1Link1" },
            { type: "text", label: "Col 1 Link 2", key: "col1Link2" },
            { type: "text", label: "Col 1 Link 3", key: "col1Link3" },
            { type: "text", label: "Col 2 Title", key: "col2Title" },
            { type: "text", label: "Col 2 Link 1", key: "col2Link1" },
            { type: "text", label: "Col 2 Link 2", key: "col2Link2" },
            { type: "text", label: "Col 2 Link 3", key: "col2Link3" },
            { type: "text", label: "Col 3 Title", key: "col3Title" },
            { type: "text", label: "Col 3 Link 1", key: "col3Link1" },
            { type: "text", label: "Col 3 Link 2", key: "col3Link2" },
            { type: "text", label: "Col 3 Link 3", key: "col3Link3" },
            { type: "text", label: "Col 4 Title", key: "col4Title" },
            { type: "text", label: "Col 4 Link 1", key: "col4Link1" },
            { type: "text", label: "Col 4 Link 2", key: "col4Link2" },
            { type: "text", label: "Col 4 Link 3", key: "col4Link3" },
          ],
        },
        {
          id: "sidebar",
          icon: "fa-bars-staggered",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "Sidebar",
          subtitle: "Section labels in the icon sidebar",
          controls: [
            { type: "text", label: "Section 1", key: "sb1Label" },
            { type: "text", label: "Section 2", key: "sb2Label" },
            { type: "text", label: "Section 3", key: "sb3Label" },
            { type: "text", label: "Section 4", key: "sb4Label" },
            { type: "text", label: "Section 5", key: "sb5Label" },
            { type: "text", label: "Section 6", key: "sb6Label" },
          ],
        },
        {
          id: "topbar",
          icon: "fa-image",
          iconBg: "#fce7f3",
          iconColor: "#db2777",
          title: "Top Bar",
          subtitle: "Avatar and notification badge",
          controls: [
            { type: "text", label: "Notification Count", key: "notifCount" },
            { type: "text", label: "Avatar Image URL", key: "avatarUrl" },
          ],
        },
      ],
    },
    {
      id: "header-v6",
      name: "Header — Hyper Mega Nav",
      description:
        "Two-row furniture-style mega-menu header with search, utility links, dropdown mega menus, and mobile drawer.",
      tags: ["mega menu", "hyper", "furniture", "search bar", "drawer"],
      component: HeaderV6,
      getCode: getHeaderV6Code,

      defaultConfig: {
        // Branding
        logoText: "HYPER",
        logoColor: "#111111",
        logoUrl: "/",
        logoImageUrl: "",
        logoImageAlt: "HYPER",

        // Colors
        bgColor: "#ffffff",
        borderColor: "#e5e5e5",
        navTextColor: "#222222",
        saleColor: "#e0001a",
        accentColor: "#e0001a",
        searchBg: "#f2f2f2",

        // Search & utility
        searchPlaceholder: "What are you looking for?",
        searchFormAction: "/search",
        findStoreText: "Find a store",
        findStoreUrl: "/pages/store-locator",
        signInText: "Sign in / Register",
        signInUrl: "/account/login",
        accountUrl: "/account",
        cartUrl: "/cart",

        // Main nav
        nav1Label: "Shop By Categories",
        nav1Url: "/collections/all",
        nav2Label: "Shop By Room",
        nav2Url: "/collections/rooms",
        nav3Label: "Tables & Desks",
        nav3Url: "/collections/tables-desks",
        nav4Label: "Chairs & Stools",
        nav4Url: "/collections/chairs-stools",
        nav5Label: "Pages",
        nav5Url: "/pages/about",
        nav6Label: "Theme Features",
        nav6Url: "/pages/theme-features",
        saleLabel: "On Sale",
        saleUrl: "/collections/sale",

        // Feature images
        feat1Img: "https://picsum.photos/seed/furniture1/400/220",
        feat2Img: "https://picsum.photos/seed/room22/400/220",
        feat3Img: "https://picsum.photos/seed/desk99/400/220",
        feat4Img: "https://picsum.photos/seed/chair77/400/220",

        // Nav 1
        nav1Col1Title: "Living Room",
        nav1Col1Item1Label: "Sofas & Couches",
        nav1Col1Item1Url: "/collections/sofas",
        nav1Col1Item2Label: "Coffee Tables",
        nav1Col1Item2Url: "/collections/coffee-tables",
        nav1Col1Item3Label: "TV Stands",
        nav1Col1Item3Url: "/collections/tv-stands",

        nav1Col2Title: "Bedroom",
        nav1Col2Item1Label: "Beds & Frames",
        nav1Col2Item1Url: "/collections/beds",
        nav1Col2Item2Label: "Wardrobes",
        nav1Col2Item2Url: "/collections/wardrobes",
        nav1Col2Item3Label: "Nightstands",
        nav1Col2Item3Url: "/collections/nightstands",

        nav1FeatureLabel: "New Arrival",
        nav1FeatureTitle: "Spring Collection 2026",
        nav1FeatureLinkText: "Shop Now →",
        nav1FeatureLinkUrl: "/collections/new-arrivals",

        // Nav 2
        nav2Col1Title: "By Room",
        nav2Col1Item1Label: "Living Room",
        nav2Col1Item1Url: "/collections/living-room",
        nav2Col1Item2Label: "Bedroom",
        nav2Col1Item2Url: "/collections/bedroom",
        nav2Col1Item3Label: "Home Office",
        nav2Col1Item3Url: "/collections/home-office",

        nav2Col2Title: "By Style",
        nav2Col2Item1Label: "Scandinavian",
        nav2Col2Item1Url: "/collections/scandinavian",
        nav2Col2Item2Label: "Industrial",
        nav2Col2Item2Url: "/collections/industrial",
        nav2Col2Item3Label: "Minimalist",
        nav2Col2Item3Url: "/collections/minimalist",

        nav2FeatureLabel: "Inspiration",
        nav2FeatureTitle: "Design Your Perfect Space",
        nav2FeatureLinkText: "Explore Rooms →",
        nav2FeatureLinkUrl: "/pages/room-inspiration",

        // Nav 3
        nav3Col1Title: "Dining Tables",
        nav3Col1Item1Label: "Round Tables",
        nav3Col1Item1Url: "/collections/round-tables",
        nav3Col1Item2Label: "Rectangular Tables",
        nav3Col1Item2Url: "/collections/rectangular-tables",
        nav3Col1Item3Label: "Extendable Tables",
        nav3Col1Item3Url: "/collections/extendable-tables",

        nav3Col2Title: "Desks",
        nav3Col2Item1Label: "Standing Desks",
        nav3Col2Item1Url: "/collections/standing-desks",
        nav3Col2Item2Label: "Corner Desks",
        nav3Col2Item2Url: "/collections/corner-desks",
        nav3Col2Item3Label: "Gaming Desks",
        nav3Col2Item3Url: "/collections/gaming-desks",

        nav3FeatureLabel: "Trending",
        nav3FeatureTitle: "Height-Adjustable Standing Desks",
        nav3FeatureLinkText: "View All →",
        nav3FeatureLinkUrl: "/collections/standing-desks",

        // Nav 4
        nav4Col1Title: "Chairs",
        nav4Col1Item1Label: "Dining Chairs",
        nav4Col1Item1Url: "/collections/dining-chairs",
        nav4Col1Item2Label: "Accent Chairs",
        nav4Col1Item2Url: "/collections/accent-chairs",
        nav4Col1Item3Label: "Lounge Chairs",
        nav4Col1Item3Url: "/collections/lounge-chairs",

        nav4Col2Title: "Office Seating",
        nav4Col2Item1Label: "Ergonomic Chairs",
        nav4Col2Item1Url: "/collections/ergonomic-chairs",
        nav4Col2Item2Label: "Mesh Back Chairs",
        nav4Col2Item2Url: "/collections/mesh-chairs",
        nav4Col2Item3Label: "Task Chairs",
        nav4Col2Item3Url: "/collections/task-chairs",

        nav4FeatureLabel: "Best Seller",
        nav4FeatureTitle: "Ergonomic Pro Mesh Chair",
        nav4FeatureLinkText: "Shop Now →",
        nav4FeatureLinkUrl: "/products/ergonomic-pro-mesh-chair",

        // Nav 5
        nav5Col1Title: "Company",
        nav5Col1Item1Label: "About Us",
        nav5Col1Item1Url: "/pages/about",
        nav5Col1Item2Label: "Careers",
        nav5Col1Item2Url: "/pages/careers",
        nav5Col1Item3Label: "Sustainability",
        nav5Col1Item3Url: "/pages/sustainability",

        nav5Col2Title: "Support",
        nav5Col2Item1Label: "Contact Us",
        nav5Col2Item1Url: "/pages/contact",
        nav5Col2Item2Label: "FAQ",
        nav5Col2Item2Url: "/pages/faq",
        nav5Col2Item3Label: "Track My Order",
        nav5Col2Item3Url: "/pages/track-order",

        // Nav 6
        nav6Col1Title: "Sections",
        nav6Col1Item1Label: "Hero Banners",
        nav6Col1Item1Url: "#",
        nav6Col1Item2Label: "Product Grid",
        nav6Col1Item2Url: "#",
        nav6Col1Item3Label: "Testimonials",
        nav6Col1Item3Url: "#",

        nav6Col2Title: "Elements",
        nav6Col2Item1Label: "Mega Menu",
        nav6Col2Item1Url: "#",
        nav6Col2Item2Label: "Sticky Header",
        nav6Col2Item2Url: "#",
        nav6Col2Item3Label: "Cart Drawer",
        nav6Col2Item3Url: "#"
      },

      accordions: [
        {
          id: "branding",
          icon: "fa-tag",
          iconBg: "#fef3c7",
          iconColor: "#d97706",
          title: "Branding",
          subtitle: "Logo content and destination",
          controls: [
            { type: "text", label: "Logo URL", key: "logoUrl" },
            { type: "image-upload", label: "Logo Image Upload", key: "logoImageUrl" },
          ]
        },

        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Header palette and accents",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Border", key: "borderColor" },
            { type: "color", label: "Nav Text", key: "navTextColor" },
            { type: "color", label: "Sale Color", key: "saleColor" },
            { type: "color", label: "Accent Color", key: "accentColor" },
            { type: "color", label: "Search Background", key: "searchBg" }
          ]
        },

        {
          id: "utility",
          icon: "fa-magnifying-glass",
          iconBg: "#dbeafe",
          iconColor: "#2563eb",
          title: "Search & utility",
          subtitle: "Search and top action links",
          controls: [
            { type: "text", label: "Search Placeholder", key: "searchPlaceholder" },
            { type: "text", label: "Search Form Action", key: "searchFormAction" },
            { type: "text", label: "Find Store Text", key: "findStoreText" },
            { type: "text", label: "Find Store URL", key: "findStoreUrl" },
            { type: "text", label: "Sign In Text", key: "signInText" },
            { type: "text", label: "Sign In URL", key: "signInUrl" },
            { type: "text", label: "Account URL", key: "accountUrl" },
            { type: "text", label: "Cart URL", key: "cartUrl" }
          ]
        },

        {
          id: "main-nav",
          icon: "fa-bars",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "Main navigation",
          subtitle: "Top-level nav labels and links",
          controls: [
            { type: "text", label: "Nav 1 Label", key: "nav1Label" },
            { type: "text", label: "Nav 1 URL", key: "nav1Url" },
            { type: "text", label: "Nav 2 Label", key: "nav2Label" },
            { type: "text", label: "Nav 2 URL", key: "nav2Url" },
            { type: "text", label: "Nav 3 Label", key: "nav3Label" },
            { type: "text", label: "Nav 3 URL", key: "nav3Url" },
            { type: "text", label: "Nav 4 Label", key: "nav4Label" },
            { type: "text", label: "Nav 4 URL", key: "nav4Url" },
            { type: "text", label: "Nav 5 Label", key: "nav5Label" },
            { type: "text", label: "Nav 5 URL", key: "nav5Url" },
            { type: "text", label: "Nav 6 Label", key: "nav6Label" },
            { type: "text", label: "Nav 6 URL", key: "nav6Url" },
            { type: "text", label: "Sale Label", key: "saleLabel" },
            { type: "text", label: "Sale URL", key: "saleUrl" }
          ]
        },

        {
          id: "featured-images",
          icon: "fa-image",
          iconBg: "#fee2e2",
          iconColor: "#dc2626",
          title: "Feature images",
          subtitle: "Images for mega menu cards",
          controls: [
            { type: "text", label: "Feature Image 1", key: "feat1Img" },
            { type: "text", label: "Feature Image 2", key: "feat2Img" },
            { type: "text", label: "Feature Image 3", key: "feat3Img" },
            { type: "text", label: "Feature Image 4", key: "feat4Img" }
          ]
        },

        {
          id: "nav1-dropdown",
          icon: "fa-layer-group",
          iconBg: "#f3e8ff",
          iconColor: "#9333ea",
          title: "Nav 1 dropdown",
          subtitle: "Shop By Categories menu",
          controls: [
            { type: "text", label: "Column 1 Title", key: "nav1Col1Title" },
            { type: "text", label: "Column 1 Item 1 Label", key: "nav1Col1Item1Label" },
            { type: "text", label: "Column 1 Item 1 URL", key: "nav1Col1Item1Url" },
            { type: "text", label: "Column 1 Item 2 Label", key: "nav1Col1Item2Label" },
            { type: "text", label: "Column 1 Item 2 URL", key: "nav1Col1Item2Url" },
            { type: "text", label: "Column 1 Item 3 Label", key: "nav1Col1Item3Label" },
            { type: "text", label: "Column 1 Item 3 URL", key: "nav1Col1Item3Url" },

            { type: "text", label: "Column 2 Title", key: "nav1Col2Title" },
            { type: "text", label: "Column 2 Item 1 Label", key: "nav1Col2Item1Label" },
            { type: "text", label: "Column 2 Item 1 URL", key: "nav1Col2Item1Url" },
            { type: "text", label: "Column 2 Item 2 Label", key: "nav1Col2Item2Label" },
            { type: "text", label: "Column 2 Item 2 URL", key: "nav1Col2Item2Url" },
            { type: "text", label: "Column 2 Item 3 Label", key: "nav1Col2Item3Label" },
            { type: "text", label: "Column 2 Item 3 URL", key: "nav1Col2Item3Url" },

            { type: "text", label: "Feature Label", key: "nav1FeatureLabel" },
            { type: "text", label: "Feature Title", key: "nav1FeatureTitle" },
            { type: "text", label: "Feature Link Text", key: "nav1FeatureLinkText" },
            { type: "text", label: "Feature Link URL", key: "nav1FeatureLinkUrl" }
          ]
        },

        {
          id: "nav2-dropdown",
          icon: "fa-layer-group",
          iconBg: "#f3e8ff",
          iconColor: "#9333ea",
          title: "Nav 2 dropdown",
          subtitle: "Shop By Room menu",
          controls: [
            { type: "text", label: "Column 1 Title", key: "nav2Col1Title" },
            { type: "text", label: "Column 1 Item 1 Label", key: "nav2Col1Item1Label" },
            { type: "text", label: "Column 1 Item 1 URL", key: "nav2Col1Item1Url" },
            { type: "text", label: "Column 1 Item 2 Label", key: "nav2Col1Item2Label" },
            { type: "text", label: "Column 1 Item 2 URL", key: "nav2Col1Item2Url" },
            { type: "text", label: "Column 1 Item 3 Label", key: "nav2Col1Item3Label" },
            { type: "text", label: "Column 1 Item 3 URL", key: "nav2Col1Item3Url" },

            { type: "text", label: "Column 2 Title", key: "nav2Col2Title" },
            { type: "text", label: "Column 2 Item 1 Label", key: "nav2Col2Item1Label" },
            { type: "text", label: "Column 2 Item 1 URL", key: "nav2Col2Item1Url" },
            { type: "text", label: "Column 2 Item 2 Label", key: "nav2Col2Item2Label" },
            { type: "text", label: "Column 2 Item 2 URL", key: "nav2Col2Item2Url" },
            { type: "text", label: "Column 2 Item 3 Label", key: "nav2Col2Item3Label" },
            { type: "text", label: "Column 2 Item 3 URL", key: "nav2Col2Item3Url" },

            { type: "text", label: "Feature Label", key: "nav2FeatureLabel" },
            { type: "text", label: "Feature Title", key: "nav2FeatureTitle" },
            { type: "text", label: "Feature Link Text", key: "nav2FeatureLinkText" },
            { type: "text", label: "Feature Link URL", key: "nav2FeatureLinkUrl" }
          ]
        },

        {
          id: "nav3-dropdown",
          icon: "fa-layer-group",
          iconBg: "#f3e8ff",
          iconColor: "#9333ea",
          title: "Nav 3 dropdown",
          subtitle: "Tables & Desks menu",
          controls: [
            { type: "text", label: "Column 1 Title", key: "nav3Col1Title" },
            { type: "text", label: "Column 1 Item 1 Label", key: "nav3Col1Item1Label" },
            { type: "text", label: "Column 1 Item 1 URL", key: "nav3Col1Item1Url" },
            { type: "text", label: "Column 1 Item 2 Label", key: "nav3Col1Item2Label" },
            { type: "text", label: "Column 1 Item 2 URL", key: "nav3Col1Item2Url" },
            { type: "text", label: "Column 1 Item 3 Label", key: "nav3Col1Item3Label" },
            { type: "text", label: "Column 1 Item 3 URL", key: "nav3Col1Item3Url" },

            { type: "text", label: "Column 2 Title", key: "nav3Col2Title" },
            { type: "text", label: "Column 2 Item 1 Label", key: "nav3Col2Item1Label" },
            { type: "text", label: "Column 2 Item 1 URL", key: "nav3Col2Item1Url" },
            { type: "text", label: "Column 2 Item 2 Label", key: "nav3Col2Item2Label" },
            { type: "text", label: "Column 2 Item 2 URL", key: "nav3Col2Item2Url" },
            { type: "text", label: "Column 2 Item 3 Label", key: "nav3Col2Item3Label" },
            { type: "text", label: "Column 2 Item 3 URL", key: "nav3Col2Item3Url" },

            { type: "text", label: "Feature Label", key: "nav3FeatureLabel" },
            { type: "text", label: "Feature Title", key: "nav3FeatureTitle" },
            { type: "text", label: "Feature Link Text", key: "nav3FeatureLinkText" },
            { type: "text", label: "Feature Link URL", key: "nav3FeatureLinkUrl" }
          ]
        },

        {
          id: "nav4-dropdown",
          icon: "fa-layer-group",
          iconBg: "#f3e8ff",
          iconColor: "#9333ea",
          title: "Nav 4 dropdown",
          subtitle: "Chairs & Stools menu",
          controls: [
            { type: "text", label: "Column 1 Title", key: "nav4Col1Title" },
            { type: "text", label: "Column 1 Item 1 Label", key: "nav4Col1Item1Label" },
            { type: "text", label: "Column 1 Item 1 URL", key: "nav4Col1Item1Url" },
            { type: "text", label: "Column 1 Item 2 Label", key: "nav4Col1Item2Label" },
            { type: "text", label: "Column 1 Item 2 URL", key: "nav4Col1Item2Url" },
            { type: "text", label: "Column 1 Item 3 Label", key: "nav4Col1Item3Label" },
            { type: "text", label: "Column 1 Item 3 URL", key: "nav4Col1Item3Url" },

            { type: "text", label: "Column 2 Title", key: "nav4Col2Title" },
            { type: "text", label: "Column 2 Item 1 Label", key: "nav4Col2Item1Label" },
            { type: "text", label: "Column 2 Item 1 URL", key: "nav4Col2Item1Url" },
            { type: "text", label: "Column 2 Item 2 Label", key: "nav4Col2Item2Label" },
            { type: "text", label: "Column 2 Item 2 URL", key: "nav4Col2Item2Url" },
            { type: "text", label: "Column 2 Item 3 Label", key: "nav4Col2Item3Label" },
            { type: "text", label: "Column 2 Item 3 URL", key: "nav4Col2Item3Url" },

            { type: "text", label: "Feature Label", key: "nav4FeatureLabel" },
            { type: "text", label: "Feature Title", key: "nav4FeatureTitle" },
            { type: "text", label: "Feature Link Text", key: "nav4FeatureLinkText" },
            { type: "text", label: "Feature Link URL", key: "nav4FeatureLinkUrl" }
          ]
        },

        {
          id: "nav5-dropdown",
          icon: "fa-file-lines",
          iconBg: "#e0f2fe",
          iconColor: "#0284c7",
          title: "Nav 5 dropdown",
          subtitle: "Pages menu",
          controls: [
            { type: "text", label: "Column 1 Title", key: "nav5Col1Title" },
            { type: "text", label: "Column 1 Item 1 Label", key: "nav5Col1Item1Label" },
            { type: "text", label: "Column 1 Item 1 URL", key: "nav5Col1Item1Url" },
            { type: "text", label: "Column 1 Item 2 Label", key: "nav5Col1Item2Label" },
            { type: "text", label: "Column 1 Item 2 URL", key: "nav5Col1Item2Url" },
            { type: "text", label: "Column 1 Item 3 Label", key: "nav5Col1Item3Label" },
            { type: "text", label: "Column 1 Item 3 URL", key: "nav5Col1Item3Url" },

            { type: "text", label: "Column 2 Title", key: "nav5Col2Title" },
            { type: "text", label: "Column 2 Item 1 Label", key: "nav5Col2Item1Label" },
            { type: "text", label: "Column 2 Item 1 URL", key: "nav5Col2Item1Url" },
            { type: "text", label: "Column 2 Item 2 Label", key: "nav5Col2Item2Label" },
            { type: "text", label: "Column 2 Item 2 URL", key: "nav5Col2Item2Url" },
            { type: "text", label: "Column 2 Item 3 Label", key: "nav5Col2Item3Label" },
            { type: "text", label: "Column 2 Item 3 URL", key: "nav5Col2Item3Url" }
          ]
        },

        {
          id: "nav6-dropdown",
          icon: "fa-wand-magic-sparkles",
          iconBg: "#fef3c7",
          iconColor: "#ca8a04",
          title: "Nav 6 dropdown",
          subtitle: "Theme Features menu",
          controls: [
            { type: "text", label: "Column 1 Title", key: "nav6Col1Title" },
            { type: "text", label: "Column 1 Item 1 Label", key: "nav6Col1Item1Label" },
            { type: "text", label: "Column 1 Item 1 URL", key: "nav6Col1Item1Url" },
            { type: "text", label: "Column 1 Item 2 Label", key: "nav6Col1Item2Label" },
            { type: "text", label: "Column 1 Item 2 URL", key: "nav6Col1Item2Url" },
            { type: "text", label: "Column 1 Item 3 Label", key: "nav6Col1Item3Label" },
            { type: "text", label: "Column 1 Item 3 URL", key: "nav6Col1Item3Url" },

            { type: "text", label: "Column 2 Title", key: "nav6Col2Title" },
            { type: "text", label: "Column 2 Item 1 Label", key: "nav6Col2Item1Label" },
            { type: "text", label: "Column 2 Item 1 URL", key: "nav6Col2Item1Url" },
            { type: "text", label: "Column 2 Item 2 Label", key: "nav6Col2Item2Label" },
            { type: "text", label: "Column 2 Item 2 URL", key: "nav6Col2Item2Url" },
            { type: "text", label: "Column 2 Item 3 Label", key: "nav6Col2Item3Label" },
            { type: "text", label: "Column 2 Item 3 URL", key: "nav6Col2Item3Url" }
          ]
        }
      ]
    },
    {
      id: "header-v7",
      name: "Header — Xtra Nav",
      description:
        "Wide ecommerce header with logo, catalog CTA, search, account/cart actions, horizontal nav, and mobile drawer.",
      tags: [
        "ecommerce",
        "header",
        "search",
        "nav",
        "storefront",
        "drawer",
        "shopify",
        "xtra"
      ],
      component: HeaderV7,
      getCode: getHeaderV7Code,

      defaultConfig: {
        logoX: "x",
        logoTra: "tra",
        logoXColor: "#1a56db",
        logoTraColor: "#111111",
        logoImageUrl: "",
        logoImageAlt: "xtra",
        logoUrl: "/",

        bgColor: "#ffffff",
        borderColor: "#e8e8e8",
        navTextColor: "#222222",
        accentColor: "#1a56db",
        tpColor: "#00b67a",

        catalogBtnBg: "#f5c518",
        catalogBtnColor: "#111111",
        catalogBtnText: "View catalog",
        catalogBtnUrl: "#",

        searchPlaceholder: "What are you looking for?",
        searchUrl: "/search",

        instaLabel: "#Xtra Insta",
        instaUrl: "#",
        accountUrl: "/account",
        cartUrl: "/cart",
        cartCount: "0",

        saleBg: "#e0001a",
        saleLabel: "Sale",
        saleUrl: "#",

        themeBg: "#1a2980",
        themeLabel: "Theme features",
        themeUrl: "#",

        nav1Label: "Beauty",
        nav1Url: "#",
        nav2Label: "Hair Care",
        nav2Url: "#",
        nav3Label: "Fashion",
        nav3Url: "#",
        nav4Label: "Living & Sleeping",
        nav4Url: "#",
        nav5Label: "Electronics",
        nav5Url: "#",
        nav6Label: "Gifts",
        nav6Url: "#",
        nav7Label: "Plants & Garden",
        nav7Url: "#",
        nav8Label: "Pets",
        nav8Url: "#",
        nav9Label: "Events",
        nav9Url: "#"
      },

      accordions: [
        {
          id: "brand",
          icon: "fa-tag",
          iconBg: "#fef3c7",
          iconColor: "#d97706",
          title: "Brand",
          subtitle: "Logo text, image, URL, and colors",
          controls: [
            { type: "image-upload", label: "Logo Image Upload", key: "logoImageUrl" },
            { type: "text", label: "Logo URL", key: "logoUrl" },
          ]
        },

        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Backgrounds, borders, accents",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Border", key: "borderColor" },
            { type: "color", label: "Nav Text", key: "navTextColor" },
            { type: "color", label: "Accent / Link", key: "accentColor" },
            { type: "color", label: "Trustpilot", key: "tpColor" },
            { type: "color", label: "Sale BG", key: "saleBg" },
            { type: "color", label: "Theme BG", key: "themeBg" },
            { type: "color", label: "Catalog Button BG", key: "catalogBtnBg" },
            { type: "color", label: "Catalog Button Text", key: "catalogBtnColor" }
          ]
        },

        {
          id: "catalog",
          icon: "fa-square",
          iconBg: "#fef9c3",
          iconColor: "#ca8a04",
          title: "Catalog Button",
          subtitle: "CTA button in top bar and drawer",
          controls: [
            { type: "text", label: "Button Label", key: "catalogBtnText" },
            { type: "text", label: "Button URL", key: "catalogBtnUrl" }
          ]
        },

        {
          id: "search",
          icon: "fa-magnifying-glass",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Search",
          subtitle: "Search input and destination page",
          controls: [
            { type: "text", label: "Placeholder", key: "searchPlaceholder" },
            { type: "text", label: "Search URL", key: "searchUrl" }
          ]
        },

        {
          id: "topactions",
          icon: "fa-user",
          iconBg: "#fce7f3",
          iconColor: "#db2777",
          title: "Top Actions",
          subtitle: "Instagram, account, and cart links",
          controls: [
            { type: "text", label: "Instagram Label", key: "instaLabel" },
            { type: "text", label: "Instagram URL", key: "instaUrl" },
            { type: "text", label: "Account URL", key: "accountUrl" },
            { type: "text", label: "Cart URL", key: "cartUrl" },
            { type: "text", label: "Cart Count", key: "cartCount" }
          ]
        },

        {
          id: "navlabels",
          icon: "fa-bars-staggered",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "Navigation",
          subtitle: "Desktop nav and drawer links",
          controls: [
            { type: "text", label: "Menu 1 Label", key: "nav1Label" },
            { type: "text", label: "Menu 1 URL", key: "nav1Url" },

            { type: "text", label: "Menu 2 Label", key: "nav2Label" },
            { type: "text", label: "Menu 2 URL", key: "nav2Url" },

            { type: "text", label: "Menu 3 Label", key: "nav3Label" },
            { type: "text", label: "Menu 3 URL", key: "nav3Url" },

            { type: "text", label: "Menu 4 Label", key: "nav4Label" },
            { type: "text", label: "Menu 4 URL", key: "nav4Url" },

            { type: "text", label: "Menu 5 Label", key: "nav5Label" },
            { type: "text", label: "Menu 5 URL", key: "nav5Url" },

            { type: "text", label: "Menu 6 Label", key: "nav6Label" },
            { type: "text", label: "Menu 6 URL", key: "nav6Url" },

            { type: "text", label: "Menu 7 Label", key: "nav7Label" },
            { type: "text", label: "Menu 7 URL", key: "nav7Url" },

            { type: "text", label: "Menu 8 Label", key: "nav8Label" },
            { type: "text", label: "Menu 8 URL", key: "nav8Url" },

            { type: "text", label: "Menu 9 Label", key: "nav9Label" },
            { type: "text", label: "Menu 9 URL", key: "nav9Url" },

            { type: "text", label: "Sale Label", key: "saleLabel" },
            { type: "text", label: "Sale URL", key: "saleUrl" },

            { type: "text", label: "Theme Label", key: "themeLabel" },
            { type: "text", label: "Theme URL", key: "themeUrl" }
          ]
        }
      ]
    },
    {
      id: "header-v8",
      name: "Header — Centered Logo with Search",
      description:
        "Minimal centered-logo header with configurable nav links, Shopify search, account/cart actions, mobile drawer, and theme font inheritance.",
      tags: [
        "centered logo",
        "simple nav",
        "minimal",
        "fashion",
        "mobile drawer",
        "no dropdown",
        "search"
      ],
      component: HeaderV8,
      getCode: getHeaderV8Code,
      defaultConfig: {
        bgColor: "#ffffff",
        borderColor: "#e5e5e5",

        logoText: "Palo Alto",
        logoColor: "#111111",
        logoUrl: "{{ routes.root_url }}",
        logoImageUrl: "",
        logoImageAlt: "Palo Alto",

        navTextColor: "#111111",
        navHoverColor: "#555555",
        saleColor: "#c0392b",
        saleBadgeBg: "#c0392b",
        saleBadgeText: "15% OFF",

        nav1Label: "Apparel",
        nav1Url: "#",
        nav2Label: "New",
        nav2Url: "#",
        nav3Label: "Sale",
        nav3Url: "#",
        nav4Label: "About",
        nav4Url: "#",
        nav5Label: "Theme Features",
        nav5Url: "#",

        searchPlaceholder: "What are you searching for?",
        searchFormAction: "{{ routes.search_url }}",
        searchCategoryLabel: "All categories",
        searchCategoryUrl: "#",
        voiceSearchUrl: "#",

        accountUrl:
          "{% if shop.customer_accounts_enabled %}{% if customer %}{{ routes.account_url }}{% else %}{{ routes.account_login_url }}{% endif %}{% else %}# {% endif %}",
        cartUrl: "{{ routes.cart_url }}",

        mobileAccountUrl:
          "{% if shop.customer_accounts_enabled %}{% if customer %}{{ routes.account_url }}{% else %}{{ routes.account_login_url }}{% endif %}{% else %}# {% endif %}",
        mobileCartUrl: "{{ routes.cart_url }}",
        mobileSearchFormAction: "{{ routes.search_url }}",
        mobileVoiceSearchUrl: "#",

        drawerAccountUrl:
          "{% if shop.customer_accounts_enabled %}{% if customer %}{{ routes.account_url }}{% else %}{{ routes.account_login_url }}{% endif %}{% else %}# {% endif %}",
        drawerCartUrl: "{{ routes.cart_url }}"
      },
      accordions: [
        {
          id: "branding",
          icon: "fa-tag",
          iconBg: "#fef3c7",
          iconColor: "#d97706",
          title: "Branding",
          subtitle: "Logo text, image and destination",
          controls: [
            { type: "text", label: "Logo URL", key: "logoUrl" },
            { type: "image-upload", label: "Logo Image Upload", key: "logoImageUrl" },
          ]
        },
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Background, nav, badge and accent styling",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Border", key: "borderColor" },
            { type: "color", label: "Nav Text", key: "navTextColor" },
            { type: "color", label: "Nav Hover", key: "navHoverColor" },
            { type: "color", label: "Sale Text", key: "saleColor" },
            { type: "color", label: "Sale Badge BG", key: "saleBadgeBg" }
          ]
        },
        {
          id: "nav-links",
          icon: "fa-link",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Nav Links",
          subtitle: "Top-level navigation labels and destinations",
          controls: [
            { type: "text", label: "Nav 1 Label", key: "nav1Label" },
            { type: "text", label: "Nav 1 URL", key: "nav1Url" },
            { type: "text", label: "Nav 2 Label", key: "nav2Label" },
            { type: "text", label: "Nav 2 URL", key: "nav2Url" },
            { type: "text", label: "Nav 3 Label", key: "nav3Label" },
            { type: "text", label: "Nav 3 URL", key: "nav3Url" },
            { type: "text", label: "Sale Badge Text", key: "saleBadgeText" },
            { type: "text", label: "Nav 4 Label", key: "nav4Label" },
            { type: "text", label: "Nav 4 URL", key: "nav4Url" },
            { type: "text", label: "Nav 5 Label", key: "nav5Label" },
            { type: "text", label: "Nav 5 URL", key: "nav5Url" }
          ]
        },
        {
          id: "search",
          icon: "fa-magnifying-glass",
          iconBg: "#fce7f3",
          iconColor: "#be185d",
          title: "Search",
          subtitle: "Desktop and mobile search configuration",
          controls: [
            { type: "text", label: "Search Placeholder", key: "searchPlaceholder" },
            { type: "text", label: "Search Form Action", key: "searchFormAction" },
            { type: "text", label: "Search Category Label", key: "searchCategoryLabel" },
            { type: "text", label: "Search Category URL", key: "searchCategoryUrl" },
            { type: "text", label: "Voice Search URL", key: "voiceSearchUrl" },
            { type: "text", label: "Mobile Search Form Action", key: "mobileSearchFormAction" },
            { type: "text", label: "Mobile Voice Search URL", key: "mobileVoiceSearchUrl" }
          ]
        },
        {
          id: "icons",
          icon: "fa-icons",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "Account & Cart",
          subtitle: "Desktop, mobile and drawer account/cart links",
          controls: [
            { type: "text", label: "Account URL", key: "accountUrl" },
            { type: "text", label: "Cart URL", key: "cartUrl" },
            { type: "text", label: "Mobile Account URL", key: "mobileAccountUrl" },
            { type: "text", label: "Mobile Cart URL", key: "mobileCartUrl" },
            { type: "text", label: "Drawer Account URL", key: "drawerAccountUrl" },
            { type: "text", label: "Drawer Cart URL", key: "drawerCartUrl" }
          ]
        }
      ]
    },
    {
      id: "header-v9",
      name: "Header — Dark Enterprise Store-Aware",
      description:
        "Dark three-tier header with announcement bar, logo + search row, simple nav bar, Shopify-aware links, localization support, and mobile drawer.",
      tags: [
        "dark",
        "enterprise",
        "simple nav",
        "search",
        "announcement bar",
        "mobile drawer",
        "localization",
        "shopify"
      ],
      component: HeaderV9,
      getCode: getHeaderV9Code,
      defaultConfig: {
        bgColor: "#1e1e1e",
        announceBg: "#111111",
        borderColor: "#2a2a2a",

        logoText: "ENTERPRISE",
        logoColor: "#ffffff",
        logoUrl: "{{ routes.root_url }}",
        logoImageUrl: "",
        logoImageAlt: "ENTERPRISE",

        navTextColor: "#cccccc",
        navHoverColor: "#ffffff",
        navMutedColor: "#888888",
        searchBg: "#2c2c2c",
        searchBorder: "#3a3a3a",
        accentColor: "#888888",

        announceText: "Gift cards now available",
        announceLinkText: "Learn more",
        announceLinkUrl: "#",

        announceBrandsLabel: "Brands",
        announceFaqLabel: "FAQ",
        announceBrandsUrl: "#",
        announceFaqUrl: "#",

        nav1Label: "Shop",
        nav1Url: "#",
        nav2Label: "Digital Cameras",
        nav2Url: "#",
        nav3Label: "Computing",
        nav3Url: "#",
        nav4Label: "Presets",
        nav4Url: "#",
        nav5Label: "Theme Features",
        nav5Url: "#",
        nav6Label: "Advice & Reviews",
        nav6Url: "#",
        nav7Label: "Gift Cards",
        nav7Url: "#",

        searchPlaceholder: "Search for products...",
        searchAction: "{{ routes.search_url }}",
        searchCategoryLabel: "All",

        desktopAccountUrl:
          "{% if shop.customer_accounts_enabled %}{% if customer %}{{ routes.account_url }}{% else %}{{ routes.account_login_url }}{% endif %}{% else %}# {% endif %}",
        desktopCartUrl: "{{ routes.cart_url }}",
        desktopSearchUrl: "{{ routes.search_url }}",

        mobileAccountUrl:
          "{% if shop.customer_accounts_enabled %}{% if customer %}{{ routes.account_url }}{% else %}{{ routes.account_login_url }}{% endif %}{% else %}# {% endif %}",
        mobileCartUrl: "{{ routes.cart_url }}",

        drawerAccountUrl:
          "{% if shop.customer_accounts_enabled %}{% if customer %}{{ routes.account_url }}{% else %}{{ routes.account_login_url }}{% endif %}{% else %}# {% endif %}",
        drawerCartUrl: "{{ routes.cart_url }}",

        expertBtnLabel: "Expert help",
        expertBtnUrl: "#",

        localizationEnable: true,
        localizationFormAction: "/localization",
        countryCode: "{{ localization.country.iso_code }}",
        localeCode: "{{ localization.language.iso_code }}",

        announceRegionLabel:
          "{{ localization.country.name }} ({{ localization.country.currency.iso_code }} {{ localization.country.currency.symbol }})",
        announceLanguageLabel:
          "{{ localization.language.endonym_name | capitalize }}",

        announceRegionShort:
          "{{ localization.country.currency.iso_code }} {{ localization.country.currency.symbol }}",
        announceLanguageShort:
          "{{ localization.language.iso_code | upcase }}"
      },
      accordions: [
        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#1e1e2e",
          iconColor: "#818cf8",
          title: "Colors",
          subtitle: "Background, text and search styling",
          controls: [
            { type: "color", label: "Header Background", key: "bgColor" },
            { type: "color", label: "Announce Bar Background", key: "announceBg" },
            { type: "color", label: "Border Color", key: "borderColor" },
            { type: "color", label: "Nav Text Color", key: "navTextColor" },
            { type: "color", label: "Nav Hover Color", key: "navHoverColor" },
            { type: "color", label: "Nav Muted Color", key: "navMutedColor" },
            { type: "color", label: "Accent Color", key: "accentColor" },
            { type: "color", label: "Search Bar Background", key: "searchBg" },
            { type: "color", label: "Search Border", key: "searchBorder" }
          ]
        },
        {
          id: "brand",
          icon: "fa-tag",
          iconBg: "#fef3c7",
          iconColor: "#d97706",
          title: "Brand & Announcement",
          subtitle: "Logo, image and announcement links",
          controls: [
            { type: "text", label: "Logo URL", key: "logoUrl" },
            { type: "image-upload", label: "Logo Image Upload", key: "logoImageUrl" },

            { type: "text", label: "Announcement Text", key: "announceText" },
            { type: "text", label: "Announcement Link Text", key: "announceLinkText" },
            { type: "text", label: "Announcement Link URL", key: "announceLinkUrl" },

            { type: "text", label: "Brands Label", key: "announceBrandsLabel" },
            { type: "text", label: "Brands URL", key: "announceBrandsUrl" },
            { type: "text", label: "FAQ Label", key: "announceFaqLabel" },
            { type: "text", label: "FAQ URL", key: "announceFaqUrl" }
          ]
        },
        {
          id: "nav",
          icon: "fa-bars-staggered",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Navigation Links",
          subtitle: "Nav labels and URLs",
          controls: [
            { type: "text", label: "Nav 1 Label", key: "nav1Label" },
            { type: "text", label: "Nav 1 URL", key: "nav1Url" },
            { type: "text", label: "Nav 2 Label", key: "nav2Label" },
            { type: "text", label: "Nav 2 URL", key: "nav2Url" },
            { type: "text", label: "Nav 3 Label", key: "nav3Label" },
            { type: "text", label: "Nav 3 URL", key: "nav3Url" },
            { type: "text", label: "Nav 4 Label", key: "nav4Label" },
            { type: "text", label: "Nav 4 URL", key: "nav4Url" },
            { type: "text", label: "Nav 5 Label", key: "nav5Label" },
            { type: "text", label: "Nav 5 URL", key: "nav5Url" },
            { type: "text", label: "Nav 6 Label", key: "nav6Label" },
            { type: "text", label: "Nav 6 URL", key: "nav6Url" },
            { type: "text", label: "Nav 7 Label", key: "nav7Label" },
            { type: "text", label: "Nav 7 URL", key: "nav7Url" }
          ]
        },
        {
          id: "search",
          icon: "fa-magnifying-glass",
          iconBg: "#fce7f3",
          iconColor: "#be185d",
          title: "Search",
          subtitle: "Desktop and mobile search settings",
          controls: [
            { type: "text", label: "Search Placeholder", key: "searchPlaceholder" },
            { type: "text", label: "Search Action", key: "searchAction" },
            { type: "text", label: "Search Category Label", key: "searchCategoryLabel" }
          ]
        },
        {
          id: "account-cart",
          icon: "fa-icons",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "Account & Cart",
          subtitle: "Desktop, mobile and drawer action links",
          controls: [
            { type: "text", label: "Desktop Account URL", key: "desktopAccountUrl" },
            { type: "text", label: "Desktop Cart URL", key: "desktopCartUrl" },
            { type: "text", label: "Desktop Search URL", key: "desktopSearchUrl" },
            { type: "text", label: "Mobile Account URL", key: "mobileAccountUrl" },
            { type: "text", label: "Mobile Cart URL", key: "mobileCartUrl" },
            { type: "text", label: "Drawer Account URL", key: "drawerAccountUrl" },
            { type: "text", label: "Drawer Cart URL", key: "drawerCartUrl" },
            { type: "text", label: "Expert Button Label", key: "expertBtnLabel" },
            { type: "text", label: "Expert Button URL", key: "expertBtnUrl" }
          ]
        },
        {
          id: "localization",
          icon: "fa-earth-asia",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Localization",
          subtitle: "Country and language display/settings",
          controls: [
            { type: "checkbox", label: "Enable Localization Forms", key: "localizationEnable" },
            { type: "text", label: "Localization Form Action", key: "localizationFormAction" },
            { type: "text", label: "Country Code", key: "countryCode" },
            { type: "text", label: "Locale Code", key: "localeCode" },
            { type: "text", label: "Region Full Label", key: "announceRegionLabel" },
            { type: "text", label: "Language Full Label", key: "announceLanguageLabel" },
            { type: "text", label: "Region Short Label", key: "announceRegionShort" },
            { type: "text", label: "Language Short Label", key: "announceLanguageShort" }
          ]
        }
      ]
    },
    {
      id: "header-v10",
      name: "Header — No Dropdown",
      description:
        "Clean responsive header with a single top utility bar, search, simple navbar links, icon links, and mobile drawer. No dropdown menus on any screen.",
      tags: ["header", "no dropdown", "simple nav", "responsive", "shopify", "search"],
      component: HeaderV10,
      getCode: getHeaderV10Code,

      defaultConfig: {
        bgColor: "#ffffff",
        borderColor: "#e8e8e8",
        textColor: "#111111",
        textMuted: "#555555",
        accentColor: "#1a56db",
        accentHover: "#1446c0",
        navHoverColor: "#1a56db",
        searchBg: "#f5f5f5",
        searchBorder: "#e8e8e8",

        logoText: "Maximize",
        logoIcon: "M",
        logoUrl: "/",
        logoImageUrl: "",
        logoImageAlt: "Maximize",

        searchPlaceholder: "What are you searching for?",
        searchFormAction: "/search",
        searchCategoryLabel: "All categories",
        searchCategoryUrl: "#",
        voiceSearchUrl: "#",

        emailAddress: "example@shopify.com",
        phoneNumber: "(+1) 2345678901",
        languageLabel: "English (USD $)",
        languageUrl: "#",

        locationUrl: "#",
        accountUrl: "/account",
        cartUrl: "/cart",

        announceLink1Label: "Returns & Exchange",
        announceLink1Url: "#",
        announceLink2Label: "FAQs",
        announceLink2Url: "#",
        announceLink3Label: "Track Order",
        announceLink3Url: "#",
        announceLink4Label: "Help & Support",
        announceLink4Url: "#",

        contactUsLabel: "Contact Us",
        contactUsUrl: "#",

        nav1Label: "Deals & Promotions",
        nav1Url: "#",
        nav1Badge: "Offer",

        nav2Label: "Bundle & Tech",
        nav2Url: "#",

        nav3Label: "Shop-By-Brands",
        nav3Url: "#",

        nav4Label: "Presets",
        nav4Url: "#",

        nav5Label: "Templates",
        nav5Url: "#",
        nav5Badge: "New",

        nav6Label: "All Electronics",
        nav6Url: "#",

        nav7Label: "Trending",
        nav7Url: "#",

        nav8Label: "About Us",
        nav8Url: "#",

        nav9Label: "Contact Us",
        nav9Url: "#"
      },

      accordions: [
        {
          id: "branding",
          icon: "fa-signature",
          iconBg: "#fef3c7",
          iconColor: "#d97706",
          title: "Branding",
          subtitle: "Logo text, logo image and logo link",
          controls: [
            { type: "text", label: "Logo URL", key: "logoUrl" },
            { type: "image-upload", label: "Logo Image Upload", key: "logoImageUrl" },
          ]
        },

        {
          id: "colors",
          icon: "fa-palette",
          iconBg: "#ede9fe",
          iconColor: "#7c3aed",
          title: "Colors",
          subtitle: "Header, text and search colors",
          controls: [
            { type: "color", label: "Background", key: "bgColor" },
            { type: "color", label: "Border", key: "borderColor" },
            { type: "color", label: "Text Color", key: "textColor" },
            { type: "color", label: "Muted Text", key: "textMuted" },
            { type: "color", label: "Accent Color", key: "accentColor" },
            { type: "color", label: "Accent Hover", key: "accentHover" },
            { type: "color", label: "Nav Hover", key: "navHoverColor" },
            { type: "color", label: "Search Background", key: "searchBg" },
            { type: "color", label: "Search Border", key: "searchBorder" }
          ]
        },

        {
          id: "search",
          icon: "fa-magnifying-glass",
          iconBg: "#dbeafe",
          iconColor: "#1d4ed8",
          title: "Search",
          subtitle: "Search form, category and voice link",
          controls: [
            { type: "text", label: "Search Placeholder", key: "searchPlaceholder" },
            { type: "text", label: "Search Form Action", key: "searchFormAction" },
            { type: "text", label: "Search Category Label", key: "searchCategoryLabel" },
            { type: "text", label: "Search Category URL", key: "searchCategoryUrl" },
            { type: "text", label: "Voice Search URL", key: "voiceSearchUrl" }
          ]
        },

        {
          id: "header-icons",
          icon: "fa-icons",
          iconBg: "#dcfce7",
          iconColor: "#16a34a",
          title: "Header Icons",
          subtitle: "Location, account and cart links",
          controls: [
            { type: "text", label: "Location URL", key: "locationUrl" },
            { type: "text", label: "Account URL", key: "accountUrl" },
            { type: "text", label: "Cart URL", key: "cartUrl" }
          ]
        },

        {
          id: "announcement-bar",
          icon: "fa-bullhorn",
          iconBg: "#fee2e2",
          iconColor: "#dc2626",
          title: "Top Utility Bar",
          subtitle: "Announcement links and contact details",
          controls: [
            { type: "text", label: "Top Link 1 Label", key: "announceLink1Label" },
            { type: "text", label: "Top Link 1 URL", key: "announceLink1Url" },

            { type: "text", label: "Top Link 2 Label", key: "announceLink2Label" },
            { type: "text", label: "Top Link 2 URL", key: "announceLink2Url" },

            { type: "text", label: "Top Link 3 Label", key: "announceLink3Label" },
            { type: "text", label: "Top Link 3 URL", key: "announceLink3Url" },

            { type: "text", label: "Top Link 4 Label", key: "announceLink4Label" },
            { type: "text", label: "Top Link 4 URL", key: "announceLink4Url" },

            { type: "text", label: "Email Address", key: "emailAddress" },
            { type: "text", label: "Phone Number", key: "phoneNumber" },
            { type: "text", label: "Language Label", key: "languageLabel" },
            { type: "text", label: "Language URL", key: "languageUrl" }
          ]
        },

        {
          id: "navbar-links",
          icon: "fa-link",
          iconBg: "#e0f2fe",
          iconColor: "#0284c7",
          title: "Navbar Links",
          subtitle: "Main navigation labels, badges and URLs",
          controls: [
            { type: "text", label: "Nav 1 Label", key: "nav1Label" },
            { type: "text", label: "Nav 1 URL", key: "nav1Url" },
            { type: "text", label: "Nav 1 Badge", key: "nav1Badge" },

            { type: "text", label: "Nav 2 Label", key: "nav2Label" },
            { type: "text", label: "Nav 2 URL", key: "nav2Url" },

            { type: "text", label: "Nav 3 Label", key: "nav3Label" },
            { type: "text", label: "Nav 3 URL", key: "nav3Url" },

            { type: "text", label: "Nav 4 Label", key: "nav4Label" },
            { type: "text", label: "Nav 4 URL", key: "nav4Url" },

            { type: "text", label: "Nav 5 Label", key: "nav5Label" },
            { type: "text", label: "Nav 5 URL", key: "nav5Url" },
            { type: "text", label: "Nav 5 Badge", key: "nav5Badge" },

            { type: "text", label: "Nav 6 Label", key: "nav6Label" },
            { type: "text", label: "Nav 6 URL", key: "nav6Url" },

            { type: "text", label: "Nav 7 Label", key: "nav7Label" },
            { type: "text", label: "Nav 7 URL", key: "nav7Url" },

            { type: "text", label: "Nav 8 Label", key: "nav8Label" },
            { type: "text", label: "Nav 8 URL", key: "nav8Url" },

            { type: "text", label: "Nav 9 Label", key: "nav9Label" },
            { type: "text", label: "Nav 9 URL", key: "nav9Url" }
          ]
        },

        {
          id: "contact-link",
          icon: "fa-envelope",
          iconBg: "#fce7f3",
          iconColor: "#db2777",
          title: "Contact Link",
          subtitle: "Extra contact link used in the drawer",
          controls: [
            { type: "text", label: "Contact Label", key: "contactUsLabel" },
            { type: "text", label: "Contact URL", key: "contactUsUrl" }
          ]
        }
      ]
    }
  ],
};

export default headersRegistry;
