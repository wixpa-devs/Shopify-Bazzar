import React from "react";

export function getHeaderV6Code(config = {}) {
  const safeUrl = (url) => {
    if (typeof url !== "string") return "#";
    const trimmed = url.trim();
    return trimmed || "#";
  };

  const safeValue = (value, fallback) => {
    if (value === undefined || value === null) return fallback;
    if (typeof value !== "string") return value;
    const trimmed = value.trim();
    return trimmed || fallback;
  };

  const logoText = safeValue(config.logoText, "HYPER");
  const logoColor = safeValue(config.logoColor, "#111111");
  const logoUrl = safeUrl(config.logoUrl || "#");
  const logoImageUrl = safeValue(config.logoImageUrl, "");
  const logoImageAlt = safeValue(config.logoImageAlt, logoText);

  const bgColor = safeValue(config.bgColor, "#ffffff");
  const borderColor = safeValue(config.borderColor, "#e5e5e5");
  const navTextColor = safeValue(config.navTextColor, "#222222");
  const saleColor = safeValue(config.saleColor, "#e0001a");
  const accentColor = safeValue(config.accentColor, "#e0001a");
  const searchBg = safeValue(config.searchBg, "#f2f2f2");

  const searchPlaceholder = safeValue(
    config.searchPlaceholder,
    "What are you looking for?"
  );
  const searchFormAction = safeUrl(config.searchFormAction || "/search");

  const findStoreText = safeValue(config.findStoreText, "Find a store");
  const findStoreUrl = safeUrl(config.findStoreUrl || "#");

  const signInText = safeValue(config.signInText, "Sign in / Register");
  const signInUrl = safeUrl(config.signInUrl || "#");
  const accountUrl = safeUrl(config.accountUrl || "#");
  const cartUrl = safeUrl(config.cartUrl || "#");

  const nav1Label = safeValue(config.nav1Label, "Shop By Categories");
  const nav1Url = safeUrl(config.nav1Url || "#");
  const nav2Label = safeValue(config.nav2Label, "Shop By Room");
  const nav2Url = safeUrl(config.nav2Url || "#");
  const nav3Label = safeValue(config.nav3Label, "Tables & Desks");
  const nav3Url = safeUrl(config.nav3Url || "#");
  const nav4Label = safeValue(config.nav4Label, "Chairs & Stools");
  const nav4Url = safeUrl(config.nav4Url || "#");
  const nav5Label = safeValue(config.nav5Label, "Pages");
  const nav5Url = safeUrl(config.nav5Url || "#");
  const nav6Label = safeValue(config.nav6Label, "Theme Features");
  const nav6Url = safeUrl(config.nav6Url || "#");
  const saleLabel = safeValue(config.saleLabel, "On Sale");
  const saleUrl = safeUrl(config.saleUrl || "#");

  const feat1Img = safeValue(
    config.feat1Img,
    "https://picsum.photos/seed/furniture1/400/220"
  );
  const feat2Img = safeValue(
    config.feat2Img,
    "https://picsum.photos/seed/room22/400/220"
  );
  const feat3Img = safeValue(
    config.feat3Img,
    "https://picsum.photos/seed/desk99/400/220"
  );
  const feat4Img = safeValue(
    config.feat4Img,
    "https://picsum.photos/seed/chair77/400/220"
  );

  const nav1Col1Title = safeValue(config.nav1Col1Title, "Living Room");
  const nav1Col1Item1Label = safeValue(
    config.nav1Col1Item1Label,
    "Sofas & Couches"
  );
  const nav1Col1Item1Url = safeUrl(config.nav1Col1Item1Url || "#");
  const nav1Col1Item2Label = safeValue(
    config.nav1Col1Item2Label,
    "Coffee Tables"
  );
  const nav1Col1Item2Url = safeUrl(config.nav1Col1Item2Url || "#");
  const nav1Col1Item3Label = safeValue(config.nav1Col1Item3Label, "TV Stands");
  const nav1Col1Item3Url = safeUrl(config.nav1Col1Item3Url || "#");

  const nav1Col2Title = safeValue(config.nav1Col2Title, "Bedroom");
  const nav1Col2Item1Label = safeValue(
    config.nav1Col2Item1Label,
    "Beds & Frames"
  );
  const nav1Col2Item1Url = safeUrl(config.nav1Col2Item1Url || "#");
  const nav1Col2Item2Label = safeValue(config.nav1Col2Item2Label, "Wardrobes");
  const nav1Col2Item2Url = safeUrl(config.nav1Col2Item2Url || "#");
  const nav1Col2Item3Label = safeValue(
    config.nav1Col2Item3Label,
    "Nightstands"
  );
  const nav1Col2Item3Url = safeUrl(config.nav1Col2Item3Url || "#");

  const nav1FeatureLabel = safeValue(config.nav1FeatureLabel, "New Arrival");
  const nav1FeatureTitle = safeValue(
    config.nav1FeatureTitle,
    "Spring Collection 2026"
  );
  const nav1FeatureLinkText = safeValue(
    config.nav1FeatureLinkText,
    "Shop Now →"
  );
  const nav1FeatureLinkUrl = safeUrl(config.nav1FeatureLinkUrl || "#");

  const nav2Col1Title = safeValue(config.nav2Col1Title, "By Room");
  const nav2Col1Item1Label = safeValue(config.nav2Col1Item1Label, "Living Room");
  const nav2Col1Item1Url = safeUrl(config.nav2Col1Item1Url || "#");
  const nav2Col1Item2Label = safeValue(config.nav2Col1Item2Label, "Bedroom");
  const nav2Col1Item2Url = safeUrl(config.nav2Col1Item2Url || "#");
  const nav2Col1Item3Label = safeValue(
    config.nav2Col1Item3Label,
    "Home Office"
  );
  const nav2Col1Item3Url = safeUrl(config.nav2Col1Item3Url || "#");

  const nav2Col2Title = safeValue(config.nav2Col2Title, "By Style");
  const nav2Col2Item1Label = safeValue(
    config.nav2Col2Item1Label,
    "Scandinavian"
  );
  const nav2Col2Item1Url = safeUrl(config.nav2Col2Item1Url || "#");
  const nav2Col2Item2Label = safeValue(config.nav2Col2Item2Label, "Industrial");
  const nav2Col2Item2Url = safeUrl(config.nav2Col2Item2Url || "#");
  const nav2Col2Item3Label = safeValue(config.nav2Col2Item3Label, "Minimalist");
  const nav2Col2Item3Url = safeUrl(config.nav2Col2Item3Url || "#");

  const nav2FeatureLabel = safeValue(config.nav2FeatureLabel, "Inspiration");
  const nav2FeatureTitle = safeValue(
    config.nav2FeatureTitle,
    "Design Your Perfect Space"
  );
  const nav2FeatureLinkText = safeValue(
    config.nav2FeatureLinkText,
    "Explore Rooms →"
  );
  const nav2FeatureLinkUrl = safeUrl(config.nav2FeatureLinkUrl || "#");

  const nav3Col1Title = safeValue(config.nav3Col1Title, "Dining Tables");
  const nav3Col1Item1Label = safeValue(config.nav3Col1Item1Label, "Round Tables");
  const nav3Col1Item1Url = safeUrl(config.nav3Col1Item1Url || "#");
  const nav3Col1Item2Label = safeValue(
    config.nav3Col1Item2Label,
    "Rectangular Tables"
  );
  const nav3Col1Item2Url = safeUrl(config.nav3Col1Item2Url || "#");
  const nav3Col1Item3Label = safeValue(
    config.nav3Col1Item3Label,
    "Extendable Tables"
  );
  const nav3Col1Item3Url = safeUrl(config.nav3Col1Item3Url || "#");

  const nav3Col2Title = safeValue(config.nav3Col2Title, "Desks");
  const nav3Col2Item1Label = safeValue(
    config.nav3Col2Item1Label,
    "Standing Desks"
  );
  const nav3Col2Item1Url = safeUrl(config.nav3Col2Item1Url || "#");
  const nav3Col2Item2Label = safeValue(config.nav3Col2Item2Label, "Corner Desks");
  const nav3Col2Item2Url = safeUrl(config.nav3Col2Item2Url || "#");
  const nav3Col2Item3Label = safeValue(config.nav3Col2Item3Label, "Gaming Desks");
  const nav3Col2Item3Url = safeUrl(config.nav3Col2Item3Url || "#");

  const nav3FeatureLabel = safeValue(config.nav3FeatureLabel, "Trending");
  const nav3FeatureTitle = safeValue(
    config.nav3FeatureTitle,
    "Height-Adjustable Standing Desks"
  );
  const nav3FeatureLinkText = safeValue(
    config.nav3FeatureLinkText,
    "View All →"
  );
  const nav3FeatureLinkUrl = safeUrl(config.nav3FeatureLinkUrl || "#");

  const nav4Col1Title = safeValue(config.nav4Col1Title, "Chairs");
  const nav4Col1Item1Label = safeValue(
    config.nav4Col1Item1Label,
    "Dining Chairs"
  );
  const nav4Col1Item1Url = safeUrl(config.nav4Col1Item1Url || "#");
  const nav4Col1Item2Label = safeValue(
    config.nav4Col1Item2Label,
    "Accent Chairs"
  );
  const nav4Col1Item2Url = safeUrl(config.nav4Col1Item2Url || "#");
  const nav4Col1Item3Label = safeValue(
    config.nav4Col1Item3Label,
    "Lounge Chairs"
  );
  const nav4Col1Item3Url = safeUrl(config.nav4Col1Item3Url || "#");

  const nav4Col2Title = safeValue(config.nav4Col2Title, "Office Seating");
  const nav4Col2Item1Label = safeValue(
    config.nav4Col2Item1Label,
    "Ergonomic Chairs"
  );
  const nav4Col2Item1Url = safeUrl(config.nav4Col2Item1Url || "#");
  const nav4Col2Item2Label = safeValue(
    config.nav4Col2Item2Label,
    "Mesh Back Chairs"
  );
  const nav4Col2Item2Url = safeUrl(config.nav4Col2Item2Url || "#");
  const nav4Col2Item3Label = safeValue(config.nav4Col2Item3Label, "Task Chairs");
  const nav4Col2Item3Url = safeUrl(config.nav4Col2Item3Url || "#");

  const nav4FeatureLabel = safeValue(config.nav4FeatureLabel, "Best Seller");
  const nav4FeatureTitle = safeValue(
    config.nav4FeatureTitle,
    "Ergonomic Pro Mesh Chair"
  );
  const nav4FeatureLinkText = safeValue(
    config.nav4FeatureLinkText,
    "Shop Now →"
  );
  const nav4FeatureLinkUrl = safeUrl(config.nav4FeatureLinkUrl || "#");

  const nav5Col1Title = safeValue(config.nav5Col1Title, "Company");
  const nav5Col1Item1Label = safeValue(config.nav5Col1Item1Label, "About Us");
  const nav5Col1Item1Url = safeUrl(config.nav5Col1Item1Url || "#");
  const nav5Col1Item2Label = safeValue(config.nav5Col1Item2Label, "Careers");
  const nav5Col1Item2Url = safeUrl(config.nav5Col1Item2Url || "#");
  const nav5Col1Item3Label = safeValue(
    config.nav5Col1Item3Label,
    "Sustainability"
  );
  const nav5Col1Item3Url = safeUrl(config.nav5Col1Item3Url || "#");

  const nav5Col2Title = safeValue(config.nav5Col2Title, "Support");
  const nav5Col2Item1Label = safeValue(config.nav5Col2Item1Label, "Contact Us");
  const nav5Col2Item1Url = safeUrl(config.nav5Col2Item1Url || "#");
  const nav5Col2Item2Label = safeValue(config.nav5Col2Item2Label, "FAQ");
  const nav5Col2Item2Url = safeUrl(config.nav5Col2Item2Url || "#");
  const nav5Col2Item3Label = safeValue(
    config.nav5Col2Item3Label,
    "Track My Order"
  );
  const nav5Col2Item3Url = safeUrl(config.nav5Col2Item3Url || "#");

  const nav6Col1Title = safeValue(config.nav6Col1Title, "Sections");
  const nav6Col1Item1Label = safeValue(
    config.nav6Col1Item1Label,
    "Hero Banners"
  );
  const nav6Col1Item1Url = safeUrl(config.nav6Col1Item1Url || "#");
  const nav6Col1Item2Label = safeValue(
    config.nav6Col1Item2Label,
    "Product Grid"
  );
  const nav6Col1Item2Url = safeUrl(config.nav6Col1Item2Url || "#");
  const nav6Col1Item3Label = safeValue(
    config.nav6Col1Item3Label,
    "Testimonials"
  );
  const nav6Col1Item3Url = safeUrl(config.nav6Col1Item3Url || "#");

  const nav6Col2Title = safeValue(config.nav6Col2Title, "Elements");
  const nav6Col2Item1Label = safeValue(config.nav6Col2Item1Label, "Mega Menu");
  const nav6Col2Item1Url = safeUrl(config.nav6Col2Item1Url || "#");
  const nav6Col2Item2Label = safeValue(
    config.nav6Col2Item2Label,
    "Sticky Header"
  );
  const nav6Col2Item2Url = safeUrl(config.nav6Col2Item2Url || "#");
  const nav6Col2Item3Label = safeValue(
    config.nav6Col2Item3Label,
    "Cart Drawer"
  );
  const nav6Col2Item3Url = safeUrl(config.nav6Col2Item3Url || "#");

  return `<!-- Header V6 — Hyper Mega Nav -->
<style>
  .hv6,
  .hv6 *,
  .hv6 *::before,
  .hv6 *::after {
    box-sizing: border-box;
  }

  .hv6 * {
    margin: 0;
    padding: 0;
  }

  .hv6 {
    --hv6-bg: ${bgColor};
    --hv6-border: ${borderColor};
    --hv6-nav-color: ${navTextColor};
    --hv6-sale-color: ${saleColor};
    --hv6-accent-color: ${accentColor};
    --hv6-search-bg: ${searchBg};
    --hv6-logo-color: ${logoColor};

    position: relative;
    z-index: 999;
    font-family: inherit;
    color: #1a1a1a;
    background: var(--hv6-bg, #ffffff);
    -webkit-font-smoothing: antialiased;
  }

  .hv6__top-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-bottom: 1px solid var(--hv6-border, #e5e5e5);
    position: relative;
    z-index: 1001;
    background: var(--hv6-bg, #ffffff);
  }

  .hv6__logo,
  .hv6__drawer-logo {
    font-family: inherit;
    color: var(--hv6-logo-color, #111111);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    min-width: 0;
    flex-shrink: 0;
    letter-spacing: -0.03em;
    font-weight: 700;
  }

  .hv6__logo {
    font-size: 1.35rem;
  }

  .hv6__drawer-logo {
    font-size: 1.2rem;
  }

  .hv6__logo img,
  .hv6__drawer-logo img {
    display: block;
    width: auto;
    max-height: 34px;
  }

  .hv6__search-form {
    flex: 1;
    min-width: 0;
  }

  .hv6__search-wrap {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    min-width: 0;
    overflow: hidden;
    border-radius: 999px;
    background: var(--hv6-search-bg, #f2f2f2);
  }

  .hv6__search-category {
    display: none;
    align-items: center;
    gap: 6px;
    height: 40px;
    padding: 0 14px;
    border: none;
    border-right: 1px solid #d9d9d9;
    background: transparent;
    color: #333333;
    cursor: pointer;
    white-space: nowrap;
    font-size: 0.85rem;
    font-weight: 500;
    font-family: inherit;
  }

  .hv6__search-input {
    flex: 1;
    min-width: 0;
    height: 40px;
    border: none;
    outline: none;
    background: transparent;
    color: #333333;
    padding: 0 12px;
    font-size: 0.875rem;
    font-family: inherit;
  }

  .hv6__search-input::placeholder {
    color: #999999;
  }

  .hv6__search-btn {
    width: 40px;
    height: 40px;
    border: none;
    background: transparent;
    color: #555555;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .hv6__top-actions {
    display: none;
    align-items: center;
    gap: 16px;
    margin-left: auto;
    flex-shrink: 0;
  }

  .hv6__action-item {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #333333;
    text-decoration: none;
    white-space: nowrap;
    transition: color 150ms ease;
    font-size: 0.82rem;
    font-family: inherit;
  }

  .hv6__action-item:hover {
    color: #000000;
  }

  .hv6__cart-link {
    text-decoration: none;
    color: inherit;
  }

  .hv6__cart-icon {
    width: 36px;
    height: 36px;
    border: 1.5px solid #dddddd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 150ms ease;
    cursor: pointer;
    flex-shrink: 0;
  }

  .hv6__cart-icon:hover {
    border-color: #aaaaaa;
  }

  .hv6__mobile-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
    flex-shrink: 0;
  }

  .hv6__mobile-action-btn,
  .hv6__mobile-action-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: none;
    background: none;
    color: #333333;
    cursor: pointer;
    font-family: inherit;
    text-decoration: none;
  }

  .hv6__hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 4px;
    border: none;
    background: none;
    cursor: pointer;
  }

  .hv6__hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 2px;
    background: #333333;
    transition: all 250ms ease;
  }

  .hv6__hamburger.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .hv6__hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hv6__hamburger.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  .hv6__nav-bar {
    display: none;
    align-items: center;
    gap: 0;
    height: 44px;
    padding: 0 20px;
    position: relative;
    z-index: 1000;
    border-bottom: 1px solid var(--hv6-border, #e5e5e5);
    background: var(--hv6-bg, #ffffff);
    overflow: visible;
  }

  .hv6__nav-item-wrap {
    position: relative;
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
  }

  .hv6__nav-item {
    display: flex;
    align-items: center;
    gap: 4px;
    height: 44px;
    padding: 0 11px;
    border: none;
    background: none;
    color: var(--hv6-nav-color, #222222);
    text-decoration: none;
    white-space: nowrap;
    transition: color 150ms ease;
    cursor: pointer;
    font-size: 0.82rem;
    font-weight: 500;
    font-family: inherit;
  }

  .hv6__nav-item:hover {
    color: #000000;
  }

  .hv6__nav-item.hv6--sale {
    color: var(--hv6-sale-color, #e0001a);
    font-weight: 600;
  }

  .hv6__nav-item.hv6--sale:hover {
    color: #b50015;
  }

  .hv6__chevron {
    display: block;
    flex-shrink: 0;
    transition: transform 200ms ease;
  }

  .hv6__nav-item-wrap:hover .hv6__chevron,
  .hv6__nav-item-wrap.open .hv6__chevron {
    transform: rotate(180deg);
  }

  .hv6__dropdown {
    display: none;
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    min-width: 640px;
    max-width: 900px;
    padding: 24px;
    border: 1px solid var(--hv6-border, #e5e5e5);
    border-radius: 10px;
    background: #ffffff;
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.1),
      0 2px 8px rgba(0, 0, 0, 0.06);
    z-index: 9999;
  }

  .hv6__nav-item-wrap:hover .hv6__dropdown,
  .hv6__nav-item-wrap.open .hv6__dropdown {
    display: flex;
    gap: 24px;
  }

  .hv6__dropdown-col {
    flex: 1;
    min-width: 120px;
  }

  .hv6__dropdown-col-title {
    margin-bottom: 10px;
    padding-bottom: 8px;
    border-bottom: 1px solid #f0f0f0;
    color: #999999;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .hv6__dropdown-col ul {
    list-style: none;
  }

  .hv6__dropdown-col ul li {
    margin-bottom: 1px;
  }

  .hv6__dropdown-col ul li a {
    display: block;
    padding: 6px 8px;
    border-radius: 6px;
    color: #333333;
    text-decoration: none;
    transition: background 140ms ease, color 140ms ease;
    font-size: 0.84rem;
    font-family: inherit;
  }

  .hv6__dropdown-col ul li a:hover {
    background: #f5f5f5;
    color: #111111;
  }

  .hv6__dropdown-feature {
    width: 180px;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 8px;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
  }

  .hv6__dropdown-feature img {
    display: block;
    width: 100%;
    height: 110px;
    object-fit: cover;
  }

  .hv6__dropdown-feature-body {
    padding: 12px;
  }

  .hv6__dropdown-feature-label {
    margin-bottom: 4px;
    color: var(--hv6-accent-color, #e0001a);
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .hv6__dropdown-feature-title {
    margin-bottom: 6px;
    color: #111111;
    font-size: 0.82rem;
    font-weight: 600;
    line-height: 1.3;
  }

  .hv6__dropdown-feature-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #555555;
    text-decoration: none;
    transition: color 150ms ease;
    font-size: 0.78rem;
    font-family: inherit;
  }

  .hv6__dropdown-feature-link:hover {
    color: #111111;
  }

  .hv6__mobile-drawer {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 9999;
  }

  .hv6__mobile-drawer.open {
    display: block;
  }

  .hv6__drawer-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  .hv6__drawer-panel {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 340px;
    max-width: 92vw;
    background: #ffffff;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .hv6__drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    position: sticky;
    top: 0;
    z-index: 1;
    border-bottom: 1px solid var(--hv6-border, #e5e5e5);
    background: #ffffff;
  }

  .hv6__drawer-close {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border: none;
    background: none;
    color: #555555;
    cursor: pointer;
  }

  .hv6__drawer-nav {
    flex: 1;
    padding: 8px 0;
  }

  .hv6__drawer-nav-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 20px;
    border: none;
    background: none;
    color: var(--hv6-nav-color, #222222);
    text-decoration: none;
    text-align: left;
    cursor: pointer;
    transition: background 140ms ease;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: inherit;
  }

  .hv6__drawer-nav-item:hover {
    background: #f5f5f5;
  }

  .hv6__drawer-nav-item.hv6--sale {
    color: var(--hv6-sale-color, #e0001a);
  }

  .hv6__drawer-chevron {
    flex-shrink: 0;
    transition: transform 200ms ease;
  }

  .hv6__drawer-nav-item.active .hv6__drawer-chevron {
    transform: rotate(180deg);
  }

  .hv6__drawer-submenu {
    display: none;
    padding: 4px 0 8px 20px;
    border-bottom: 1px solid #f0f0f0;
  }

  .hv6__drawer-submenu.open {
    display: block;
  }

  .hv6__drawer-submenu-title {
    padding: 10px 16px 4px;
    color: #bbbbbb;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .hv6__drawer-submenu a {
    display: block;
    padding: 8px 16px;
    border-radius: 6px;
    color: #555555;
    text-decoration: none;
    transition: background 140ms ease, color 140ms ease;
    font-size: 0.875rem;
    font-family: inherit;
  }

  .hv6__drawer-submenu a:hover {
    background: #f5f5f5;
    color: #111111;
  }

  .hv6__drawer-footer {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 16px 20px;
    border-top: 1px solid var(--hv6-border, #e5e5e5);
  }

  .hv6__drawer-footer a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #333333;
    text-decoration: none;
    font-size: 0.875rem;
    font-family: inherit;
  }

  .hv6__drawer-footer a:hover {
    color: #000000;
  }

  @media (min-width: 480px) {
    .hv6__top-bar {
      padding: 12px 20px;
      gap: 14px;
    }
  }

  @media (min-width: 640px) {
    .hv6__search-category {
      display: flex;
    }
  }

  @media (min-width: 768px) {
    .hv6__top-bar {
      padding: 12px 28px;
      gap: 16px;
    }

    .hv6__top-actions {
      display: flex;
      gap: 12px;
    }

    .hv6__action-item .hv6__action-text {
      display: none;
    }

    .hv6__mobile-actions {
      gap: 10px;
    }

    .hv6__mobile-action-btn {
      display: none;
    }

    .hv6__hamburger {
      display: flex;
    }
  }

  @media (min-width: 1024px) {
    .hv6__top-bar {
      padding: 14px 40px;
      gap: 20px;
    }

    .hv6__nav-bar {
      display: flex;
      padding: 0 40px;
    }

    .hv6__top-actions {
      gap: 20px;
    }

    .hv6__action-item .hv6__action-text {
      display: inline;
    }

    .hv6__mobile-actions {
      display: none;
    }

    .hv6__nav-item {
      padding: 0 14px;
      font-size: 0.875rem;
    }

    .hv6__dropdown-col ul li a {
      font-size: 0.875rem;
    }
  }

  @media (min-width: 1280px) {
    .hv6__top-bar {
      padding: 14px 56px;
    }

    .hv6__nav-bar {
      padding: 0 56px;
    }

    .hv6__search-form {
      max-width: 520px;
    }
  }
</style>

<div class="hv6">
  <header class="hv6__top-bar">
    <a href="${logoUrl}" class="hv6__logo">
      ${logoImageUrl
      ? `<img src="${logoImageUrl}" alt="${logoImageAlt}" width="160" height="34" loading="lazy" />`
      : `${logoText}`
    }
    </a>

    <form class="hv6__search-form" action="${searchFormAction}" method="get">
      <div class="hv6__search-wrap">
        <button type="button" class="hv6__search-category" aria-haspopup="listbox" aria-expanded="false">
          All Categories
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="#555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <input class="hv6__search-input" type="text" name="q" placeholder="${searchPlaceholder}" />
        <button type="submit" class="hv6__search-btn" aria-label="Search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
      </div>
    </form>

    <div class="hv6__top-actions">
      <a href="${findStoreUrl}" class="hv6__action-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
        </svg>
        <span class="hv6__action-text">${findStoreText}</span>
      </a>

      <a href="${signInUrl}" class="hv6__action-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
        </svg>
        <span class="hv6__action-text">${signInText}</span>
      </a>

      <a href="${cartUrl}" class="hv6__cart-link" aria-label="Shopping cart">
        <div class="hv6__cart-icon">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </div>
      </a>
    </div>

    <div class="hv6__mobile-actions">
      <button type="button" class="hv6__mobile-action-btn" aria-label="Search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>

      <a href="${cartUrl}" class="hv6__mobile-action-link" aria-label="Cart">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      </a>

      <button type="button" class="hv6__hamburger" id="hv6-hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <nav class="hv6__nav-bar" aria-label="Main navigation">
    <div class="hv6__nav-item-wrap">
      <a href="${nav1Url}" class="hv6__nav-item">
        ${nav1Label}
        <svg class="hv6__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <div class="hv6__dropdown">
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav1Col1Title}</div>
          <ul>
            <li><a href="${nav1Col1Item1Url}">${nav1Col1Item1Label}</a></li>
            <li><a href="${nav1Col1Item2Url}">${nav1Col1Item2Label}</a></li>
            <li><a href="${nav1Col1Item3Url}">${nav1Col1Item3Label}</a></li>
          </ul>
        </div>
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav1Col2Title}</div>
          <ul>
            <li><a href="${nav1Col2Item1Url}">${nav1Col2Item1Label}</a></li>
            <li><a href="${nav1Col2Item2Url}">${nav1Col2Item2Label}</a></li>
            <li><a href="${nav1Col2Item3Url}">${nav1Col2Item3Label}</a></li>
          </ul>
        </div>
        <div class="hv6__dropdown-feature">
          <img src="${feat1Img}" alt="${nav1FeatureTitle}" width="400" height="220" loading="lazy" />
          <div class="hv6__dropdown-feature-body">
            <div class="hv6__dropdown-feature-label">${nav1FeatureLabel}</div>
            <div class="hv6__dropdown-feature-title">${nav1FeatureTitle}</div>
            <a href="${nav1FeatureLinkUrl}" class="hv6__dropdown-feature-link">${nav1FeatureLinkText}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="hv6__nav-item-wrap">
      <a href="${nav2Url}" class="hv6__nav-item">
        ${nav2Label}
        <svg class="hv6__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <div class="hv6__dropdown">
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav2Col1Title}</div>
          <ul>
            <li><a href="${nav2Col1Item1Url}">${nav2Col1Item1Label}</a></li>
            <li><a href="${nav2Col1Item2Url}">${nav2Col1Item2Label}</a></li>
            <li><a href="${nav2Col1Item3Url}">${nav2Col1Item3Label}</a></li>
          </ul>
        </div>
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav2Col2Title}</div>
          <ul>
            <li><a href="${nav2Col2Item1Url}">${nav2Col2Item1Label}</a></li>
            <li><a href="${nav2Col2Item2Url}">${nav2Col2Item2Label}</a></li>
            <li><a href="${nav2Col2Item3Url}">${nav2Col2Item3Label}</a></li>
          </ul>
        </div>
        <div class="hv6__dropdown-feature">
          <img src="${feat2Img}" alt="${nav2FeatureTitle}" width="400" height="220" loading="lazy" />
          <div class="hv6__dropdown-feature-body">
            <div class="hv6__dropdown-feature-label">${nav2FeatureLabel}</div>
            <div class="hv6__dropdown-feature-title">${nav2FeatureTitle}</div>
            <a href="${nav2FeatureLinkUrl}" class="hv6__dropdown-feature-link">${nav2FeatureLinkText}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="hv6__nav-item-wrap">
      <a href="${nav3Url}" class="hv6__nav-item">
        ${nav3Label}
        <svg class="hv6__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <div class="hv6__dropdown">
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav3Col1Title}</div>
          <ul>
            <li><a href="${nav3Col1Item1Url}">${nav3Col1Item1Label}</a></li>
            <li><a href="${nav3Col1Item2Url}">${nav3Col1Item2Label}</a></li>
            <li><a href="${nav3Col1Item3Url}">${nav3Col1Item3Label}</a></li>
          </ul>
        </div>
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav3Col2Title}</div>
          <ul>
            <li><a href="${nav3Col2Item1Url}">${nav3Col2Item1Label}</a></li>
            <li><a href="${nav3Col2Item2Url}">${nav3Col2Item2Label}</a></li>
            <li><a href="${nav3Col2Item3Url}">${nav3Col2Item3Label}</a></li>
          </ul>
        </div>
        <div class="hv6__dropdown-feature">
          <img src="${feat3Img}" alt="${nav3FeatureTitle}" width="400" height="220" loading="lazy" />
          <div class="hv6__dropdown-feature-body">
            <div class="hv6__dropdown-feature-label">${nav3FeatureLabel}</div>
            <div class="hv6__dropdown-feature-title">${nav3FeatureTitle}</div>
            <a href="${nav3FeatureLinkUrl}" class="hv6__dropdown-feature-link">${nav3FeatureLinkText}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="hv6__nav-item-wrap">
      <a href="${nav4Url}" class="hv6__nav-item">
        ${nav4Label}
        <svg class="hv6__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <div class="hv6__dropdown">
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav4Col1Title}</div>
          <ul>
            <li><a href="${nav4Col1Item1Url}">${nav4Col1Item1Label}</a></li>
            <li><a href="${nav4Col1Item2Url}">${nav4Col1Item2Label}</a></li>
            <li><a href="${nav4Col1Item3Url}">${nav4Col1Item3Label}</a></li>
          </ul>
        </div>
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav4Col2Title}</div>
          <ul>
            <li><a href="${nav4Col2Item1Url}">${nav4Col2Item1Label}</a></li>
            <li><a href="${nav4Col2Item2Url}">${nav4Col2Item2Label}</a></li>
            <li><a href="${nav4Col2Item3Url}">${nav4Col2Item3Label}</a></li>
          </ul>
        </div>
        <div class="hv6__dropdown-feature">
          <img src="${feat4Img}" alt="${nav4FeatureTitle}" width="400" height="220" loading="lazy" />
          <div class="hv6__dropdown-feature-body">
            <div class="hv6__dropdown-feature-label">${nav4FeatureLabel}</div>
            <div class="hv6__dropdown-feature-title">${nav4FeatureTitle}</div>
            <a href="${nav4FeatureLinkUrl}" class="hv6__dropdown-feature-link">${nav4FeatureLinkText}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="hv6__nav-item-wrap">
      <a href="${nav5Url}" class="hv6__nav-item">
        ${nav5Label}
        <svg class="hv6__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <div class="hv6__dropdown" style="min-width:460px;">
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav5Col1Title}</div>
          <ul>
            <li><a href="${nav5Col1Item1Url}">${nav5Col1Item1Label}</a></li>
            <li><a href="${nav5Col1Item2Url}">${nav5Col1Item2Label}</a></li>
            <li><a href="${nav5Col1Item3Url}">${nav5Col1Item3Label}</a></li>
          </ul>
        </div>
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav5Col2Title}</div>
          <ul>
            <li><a href="${nav5Col2Item1Url}">${nav5Col2Item1Label}</a></li>
            <li><a href="${nav5Col2Item2Url}">${nav5Col2Item2Label}</a></li>
            <li><a href="${nav5Col2Item3Url}">${nav5Col2Item3Label}</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="hv6__nav-item-wrap">
      <a href="${nav6Url}" class="hv6__nav-item">
        ${nav6Label}
        <svg class="hv6__chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <div class="hv6__dropdown" style="min-width:460px;">
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav6Col1Title}</div>
          <ul>
            <li><a href="${nav6Col1Item1Url}">${nav6Col1Item1Label}</a></li>
            <li><a href="${nav6Col1Item2Url}">${nav6Col1Item2Label}</a></li>
            <li><a href="${nav6Col1Item3Url}">${nav6Col1Item3Label}</a></li>
          </ul>
        </div>
        <div class="hv6__dropdown-col">
          <div class="hv6__dropdown-col-title">${nav6Col2Title}</div>
          <ul>
            <li><a href="${nav6Col2Item1Url}">${nav6Col2Item1Label}</a></li>
            <li><a href="${nav6Col2Item2Url}">${nav6Col2Item2Label}</a></li>
            <li><a href="${nav6Col2Item3Url}">${nav6Col2Item3Label}</a></li>
          </ul>
        </div>
      </div>
    </div>

    <a href="${saleUrl}" class="hv6__nav-item hv6--sale">${saleLabel}</a>
  </nav>

  <div class="hv6__mobile-drawer" id="hv6-drawer" aria-modal="true" role="dialog" aria-label="Navigation menu">
    <div class="hv6__drawer-overlay" id="hv6-overlay"></div>
    <div class="hv6__drawer-panel">
      <div class="hv6__drawer-header">
        <a href="${logoUrl}" class="hv6__drawer-logo">
          ${logoImageUrl
      ? `<img src="${logoImageUrl}" alt="${logoImageAlt}" width="140" height="34" loading="lazy" />`
      : `${logoText}`
    }
        </a>
        <button type="button" class="hv6__drawer-close" id="hv6-close" aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <nav class="hv6__drawer-nav">
        <button type="button" class="hv6__drawer-nav-item" data-drawer-toggle="cat1">
          ${nav1Label}
          <svg class="hv6__drawer-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="hv6__drawer-submenu" id="hv6-cat1">
          <div class="hv6__drawer-submenu-title">${nav1Col1Title}</div>
          <a href="${nav1Col1Item1Url}">${nav1Col1Item1Label}</a>
          <a href="${nav1Col1Item2Url}">${nav1Col1Item2Label}</a>
          <a href="${nav1Col1Item3Url}">${nav1Col1Item3Label}</a>
          <div class="hv6__drawer-submenu-title">${nav1Col2Title}</div>
          <a href="${nav1Col2Item1Url}">${nav1Col2Item1Label}</a>
          <a href="${nav1Col2Item2Url}">${nav1Col2Item2Label}</a>
          <a href="${nav1Col2Item3Url}">${nav1Col2Item3Label}</a>
        </div>

        <button type="button" class="hv6__drawer-nav-item" data-drawer-toggle="cat2">
          ${nav2Label}
          <svg class="hv6__drawer-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="hv6__drawer-submenu" id="hv6-cat2">
          <div class="hv6__drawer-submenu-title">${nav2Col1Title}</div>
          <a href="${nav2Col1Item1Url}">${nav2Col1Item1Label}</a>
          <a href="${nav2Col1Item2Url}">${nav2Col1Item2Label}</a>
          <a href="${nav2Col1Item3Url}">${nav2Col1Item3Label}</a>
          <div class="hv6__drawer-submenu-title">${nav2Col2Title}</div>
          <a href="${nav2Col2Item1Url}">${nav2Col2Item1Label}</a>
          <a href="${nav2Col2Item2Url}">${nav2Col2Item2Label}</a>
          <a href="${nav2Col2Item3Url}">${nav2Col2Item3Label}</a>
        </div>

        <button type="button" class="hv6__drawer-nav-item" data-drawer-toggle="cat3">
          ${nav3Label}
          <svg class="hv6__drawer-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="hv6__drawer-submenu" id="hv6-cat3">
          <div class="hv6__drawer-submenu-title">${nav3Col1Title}</div>
          <a href="${nav3Col1Item1Url}">${nav3Col1Item1Label}</a>
          <a href="${nav3Col1Item2Url}">${nav3Col1Item2Label}</a>
          <a href="${nav3Col1Item3Url}">${nav3Col1Item3Label}</a>
          <div class="hv6__drawer-submenu-title">${nav3Col2Title}</div>
          <a href="${nav3Col2Item1Url}">${nav3Col2Item1Label}</a>
          <a href="${nav3Col2Item2Url}">${nav3Col2Item2Label}</a>
          <a href="${nav3Col2Item3Url}">${nav3Col2Item3Label}</a>
        </div>

        <button type="button" class="hv6__drawer-nav-item" data-drawer-toggle="cat4">
          ${nav4Label}
          <svg class="hv6__drawer-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="hv6__drawer-submenu" id="hv6-cat4">
          <div class="hv6__drawer-submenu-title">${nav4Col1Title}</div>
          <a href="${nav4Col1Item1Url}">${nav4Col1Item1Label}</a>
          <a href="${nav4Col1Item2Url}">${nav4Col1Item2Label}</a>
          <a href="${nav4Col1Item3Url}">${nav4Col1Item3Label}</a>
          <div class="hv6__drawer-submenu-title">${nav4Col2Title}</div>
          <a href="${nav4Col2Item1Url}">${nav4Col2Item1Label}</a>
          <a href="${nav4Col2Item2Url}">${nav4Col2Item2Label}</a>
          <a href="${nav4Col2Item3Url}">${nav4Col2Item3Label}</a>
        </div>

        <button type="button" class="hv6__drawer-nav-item" data-drawer-toggle="cat5">
          ${nav5Label}
          <svg class="hv6__drawer-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="hv6__drawer-submenu" id="hv6-cat5">
          <div class="hv6__drawer-submenu-title">${nav5Col1Title}</div>
          <a href="${nav5Col1Item1Url}">${nav5Col1Item1Label}</a>
          <a href="${nav5Col1Item2Url}">${nav5Col1Item2Label}</a>
          <a href="${nav5Col1Item3Url}">${nav5Col1Item3Label}</a>
          <div class="hv6__drawer-submenu-title">${nav5Col2Title}</div>
          <a href="${nav5Col2Item1Url}">${nav5Col2Item1Label}</a>
          <a href="${nav5Col2Item2Url}">${nav5Col2Item2Label}</a>
          <a href="${nav5Col2Item3Url}">${nav5Col2Item3Label}</a>
        </div>

        <button type="button" class="hv6__drawer-nav-item" data-drawer-toggle="cat6">
          ${nav6Label}
          <svg class="hv6__drawer-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
        <div class="hv6__drawer-submenu" id="hv6-cat6">
          <div class="hv6__drawer-submenu-title">${nav6Col1Title}</div>
          <a href="${nav6Col1Item1Url}">${nav6Col1Item1Label}</a>
          <a href="${nav6Col1Item2Url}">${nav6Col1Item2Label}</a>
          <a href="${nav6Col1Item3Url}">${nav6Col1Item3Label}</a>
          <div class="hv6__drawer-submenu-title">${nav6Col2Title}</div>
          <a href="${nav6Col2Item1Url}">${nav6Col2Item1Label}</a>
          <a href="${nav6Col2Item2Url}">${nav6Col2Item2Label}</a>
          <a href="${nav6Col2Item3Url}">${nav6Col2Item3Label}</a>
        </div>

        <a href="${saleUrl}" class="hv6__drawer-nav-item hv6--sale">${saleLabel}</a>
      </nav>

      <div class="hv6__drawer-footer">
        <a href="${findStoreUrl}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          ${findStoreText}
        </a>
        <a href="${signInUrl}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          ${signInText}
        </a>
        <a href="${accountUrl}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.3137 2.6863-6 6-6s6 2.6863 6 6"/>
          </svg>
          My Account
        </a>
        <a href="${cartUrl}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          Cart
        </a>
      </div>
    </div>
  </div>
</div>

<script>
  (function () {
    var root = document.currentScript.previousElementSibling;
    if (!root) return;

    var hamburger = root.querySelector("#hv6-hamburger");
    var drawer = root.querySelector("#hv6-drawer");
    var overlay = root.querySelector("#hv6-overlay");
    var closeBtn = root.querySelector("#hv6-close");

    function openDrawer() {
      drawer.classList.add("open");
      hamburger.classList.add("open");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
      drawer.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }

    if (hamburger) hamburger.addEventListener("click", openDrawer);
    if (overlay) overlay.addEventListener("click", closeDrawer);
    if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

    root.querySelectorAll("[data-drawer-toggle]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-drawer-toggle");
        var submenu = root.querySelector("#hv6-" + id);
        if (!submenu) return;

        var isOpen = submenu.classList.contains("open");

        root.querySelectorAll(".hv6__drawer-submenu.open").forEach(function (el) {
          el.classList.remove("open");
        });

        root.querySelectorAll(".hv6__drawer-nav-item.active").forEach(function (el) {
          el.classList.remove("active");
        });

        if (!isOpen) {
          submenu.classList.add("open");
          btn.classList.add("active");
        }
      });
    });
  })();
</script>`;
}

export default function HeaderV6({ config = {} }) {
  const html = getHeaderV6Code(config);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}