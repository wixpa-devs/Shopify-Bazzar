// Named export — used by generateComponentCode.js
export function getHeaderV2Code(config = {}) {
  const safeUrl = (url) => {
    if (typeof url !== "string") return "#";
    const trimmed = url.trim();
    return trimmed || "#";
  };

  const safeImg = (url) => {
    if (typeof url !== "string") return "";
    const trimmed = url.trim();
    return trimmed || "";
  };

  const safeValue = (value, fallback) => {
    if (value === undefined || value === null) return fallback;
    if (typeof value !== "string") return value;
    const trimmed = value.trim();
    return trimmed || fallback;
  };

  const logoImageUrl = safeImg(config.logoImageUrl);

  const bgColor = safeValue(config.bgColor, "#ffffff");
  const textPrimary = safeValue(config.textPrimary, "#111827");
  const textSecondary = safeValue(config.textSecondary, "#4b5563");
  const accentYellow = safeValue(config.accentYellow, "#facc15");
  const accentGreenBg = safeValue(config.accentGreenBg, "#dcfce7");
  const accentGreenText = safeValue(config.accentGreenText, "#166534");
  const searchBg = safeValue(config.searchBg, "#f3f4f6");
  const borderRadius = safeValue(config.borderRadius, "12px");
  const containerWidth = safeValue(config.containerWidth, "1200px");
  const navHover = safeValue(config.navHover, "#111827");
  const logoColor = safeValue(config.logoColor, "#111827");
  const logoWeight = safeValue(config.logoWeight, "800");
  const logoSize = safeValue(config.logoSize, "22px");
  const logoImageMaxHeight = safeValue(config.logoImageMaxHeight, "32px");
  const cameraBgColor = safeValue(config.cameraBgColor, accentYellow);
  const cameraBorderColor = safeValue(config.cameraBorderColor, "#111827");
  const cameraDotColor = safeValue(config.cameraDotColor, "#111827");
  const searchPadding = safeValue(config.searchPadding, "12px 46px 12px 14px");
  const iconColor = safeValue(config.iconColor, "#111827");
  const cartBadgeBg = safeValue(config.cartBadgeBg, "#111827");
  const cartBadgeText = safeValue(config.cartBadgeText, "#ffffff");
  const megaDropdownWidth = safeValue(config.megaDropdownWidth, "640px");
  const megaDropdownBg = safeValue(config.megaDropdownBg, "#ffffff");
  const megaDropdownShadow = safeValue(
    config.megaDropdownShadow,
    "0 20px 50px rgba(0,0,0,0.12)"
  );
  const megaDropdownColumns = safeValue(config.megaDropdownColumns, "1fr 1fr");
  const dropdownHeadingColor = safeValue(config.dropdownHeadingColor, "#6b7280");
  const mobileToggleColor = safeValue(config.mobileToggleColor, "#111827");
  const mobileSidebarBg = safeValue(config.mobileSidebarBg, "#ffffff");
  const sidebarOverlay = safeValue(config.sidebarOverlay, "rgba(0,0,0,0.4)");
  const mobileNavHeadColor = safeValue(config.mobileNavHeadColor, "#111827");
  const mobileNavLinkColor = safeValue(config.mobileNavLinkColor, "#4b5563");
  const closeIconColor = safeValue(config.closeIconColor, "#111827");
  const mobileLogoColor = safeValue(config.mobileLogoColor, "#111827");

  const headerPaddingTop = safeValue(config.headerPaddingTop, "20px");
  const headerPaddingSides = safeValue(config.headerPaddingSides, "24px");
  const headerPaddingBottom = safeValue(config.headerPaddingBottom, "16px");

  const searchUrl = safeValue(config.searchUrl, "/search");
  const accountUrl = safeValue(config.accountUrl, "/account");
  const cartUrl = safeValue(config.cartUrl, "/cart");

  return `
<style>
  :root {
    --bg-color: ${bgColor};
    --text-primary: ${textPrimary};
    --text-secondary: ${textSecondary};
    --accent-yellow: ${accentYellow};
    --accent-green-bg: ${accentGreenBg};
    --accent-green-text: ${accentGreenText};
    --search-bg: ${searchBg};
    --border-radius: ${borderRadius};
    --container-width: ${containerWidth};
    --nav-hover: ${navHover};
    --mega-dropdown-bg: ${megaDropdownBg};
    --mega-dropdown-shadow: ${megaDropdownShadow};
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .hv2-wrap,
  .hv2-wrap * {
    box-sizing: border-box;
  }

  .hv2-wrap {
    width: 100%;
    background-color: var(--bg-color);
    color: var(--text-primary);
    font-family: inherit;
    position: relative;
    z-index: 30;
  }

  .hv2-header {
    width: 100%;
    padding: ${headerPaddingTop} ${headerPaddingSides} ${headerPaddingBottom} ${headerPaddingSides};
    background-color: var(--bg-color);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    position: relative;
    z-index: 40;
    font-family: inherit;
  }

  .hv2-inner {
    max-width: var(--container-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .hv2-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 48px;
    gap: 24px;
  }

  .hv2-logo {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    color: ${logoColor};
    font-family: inherit;
    flex-shrink: 0;
    min-width: 0;
  }

  .hv2-logo--text {
    font-weight: ${logoWeight};
    font-size: ${logoSize};
    letter-spacing: -1px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    line-height: 1;
  }

  .hv2-logo--image {
    display: inline-flex;
    align-items: center;
  }

  .hv2-logo--image img {
    display: block;
    max-height: ${logoImageMaxHeight};
    width: auto;
    max-width: 220px;
    object-fit: contain;
  }

  .hv2-logo-camera {
    display: inline-block;
    width: 34px;
    height: 22px;
    background-color: ${cameraBgColor};
    border: 3px solid ${cameraBorderColor};
    border-radius: 6px;
    margin: 0 4px;
    position: relative;
    flex-shrink: 0;
  }

  .hv2-logo-camera::after {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: ${cameraDotColor};
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .hv2-actions {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-shrink: 0;
  }

  .hv2-search {
    position: relative;
    width: 320px;
    display: flex;
    align-items: center;
    background-color: var(--search-bg);
    border-radius: var(--border-radius);
    border: 1px solid transparent;
    min-height: 44px;
    overflow: hidden;
  }

  .hv2-search:focus-within {
    border-color: rgba(0, 0, 0, 0.12);
  }

  .hv2-search-input {
    width: 100%;
    height: 100%;
    padding: ${searchPadding};
    background: transparent;
    border: none;
    outline: none;
    font-size: 14px;
    color: var(--text-primary);
    font-family: inherit;
    box-shadow: none;
    appearance: none;
    -webkit-appearance: none;
  }

  .hv2-search-input::placeholder {
    color: var(--text-secondary);
    opacity: 1;
  }

  .hv2-search-submit {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    width: 18px;
    height: 18px;
    border: none;
    background: transparent;
    padding: 0;
    color: var(--text-secondary);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .hv2-search-submit svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .hv2-icon-btn {
    color: ${iconColor};
    text-decoration: none;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }

  .hv2-icon-btn svg {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .hv2-cart-badge {
    position: absolute;
    top: -6px;
    right: -8px;
    background-color: ${cartBadgeBg};
    color: ${cartBadgeText};
    font-size: 10px;
    font-weight: 700;
    line-height: 1;
    height: 16px;
    min-width: 16px;
    padding: 0 4px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--bg-color);
  }

  .hv2-bottom-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
  }

  .hv2-nav-list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 32px;
    min-width: 0;
  }

  .hv2-nav-item {
    position: relative;
    display: flex;
    align-items: center;
    min-height: 28px;
  }

  .hv2-nav-link {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 600;
    font-size: 15px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease;
    white-space: nowrap;
    line-height: 1.2;
  }

  .hv2-nav-link:hover {
    color: var(--nav-hover);
  }

  .hv2-nav-link svg {
    width: 10px;
    height: 10px;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.7;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .hv2-badge-new {
    background-color: var(--accent-green-bg);
    color: var(--accent-green-text);
    font-size: 9px;
    font-weight: 800;
    padding: 3px 6px;
    border-radius: 4px;
    margin-left: 8px;
    display: inline-flex;
    align-items: center;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    border: 1px solid rgba(0,0,0,0.05);
    line-height: 1;
  }

  .hv2-mega-dropdown {
    position: absolute;
    top: calc(100% + 14px);
    left: 0;
    width: min(${megaDropdownWidth}, 92vw);
    background: var(--mega-dropdown-bg);
    border-radius: 12px;
    box-shadow: var(--mega-dropdown-shadow);
    padding: 24px;
    display: grid;
    grid-template-columns: ${megaDropdownColumns};
    gap: 20px;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(10px);
    transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s ease;
    z-index: 1001;
  }

  .hv2-nav-item:hover .hv2-mega-dropdown,
  .hv2-nav-item:focus-within .hv2-mega-dropdown {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: translateY(0);
  }

  .hv2-shop-dropdown {
    width: min(400px, 92vw);
    grid-template-columns: 1fr;
  }

  .hv2-dropdown-col h4 {
    font-size: 11px;
    text-transform: uppercase;
    color: ${dropdownHeadingColor};
    margin-bottom: 12px;
    letter-spacing: 0.06em;
    line-height: 1.2;
  }

  .hv2-dropdown-col a {
    display: block;
    text-decoration: none;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 1.35;
  }

  .hv2-dropdown-col a:last-child {
    margin-bottom: 0;
  }

  .hv2-dropdown-col a:hover {
    color: var(--nav-hover);
  }

  .hv2-mobile-toggle {
    display: none;
    cursor: pointer;
    color: ${mobileToggleColor};
    line-height: 1;
    background: transparent;
    border: none;
    padding: 0;
  }

  .hv2-mobile-toggle svg {
    width: 22px;
    height: 22px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .hv2-mobile-sidebar {
    position: fixed;
    top: 0;
    left: -100%;
    width: min(320px, 86vw);
    height: 100vh;
    background: ${mobileSidebarBg};
    z-index: 2000;
    padding: 24px;
    transition: left 0.35s ease;
    overflow-y: auto;
    font-family: inherit;
  }

  .hv2-mobile-sidebar.active { left: 0; }

  .hv2-sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${sidebarOverlay};
    z-index: 1500;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.25s ease, visibility 0.25s ease;
  }

  .hv2-sidebar-overlay.active {
    visibility: visible;
    opacity: 1;
  }

  .hv2-mobile-sidebar-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    gap: 12px;
  }

  .hv2-mobile-nav-item {
    border-bottom: 1px solid #f3f4f6;
  }

  .hv2-mobile-nav-head {
    padding: 15px 0;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    color: ${mobileNavHeadColor};
  }

  .hv2-mobile-nav-head svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    flex-shrink: 0;
  }

  .hv2-mobile-nav-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding-bottom 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .hv2-mobile-nav-body.open {
    max-height: 500px;
    padding-bottom: 15px;
  }

  .hv2-mobile-nav-body a {
    text-decoration: none;
    color: ${mobileNavLinkColor};
    font-size: 14px;
    padding: 4px 0;
    line-height: 1.4;
  }

  .hv2-close-icon {
    cursor: pointer;
    color: ${closeIconColor};
    line-height: 1;
    background: transparent;
    border: none;
    padding: 0;
  }

  .hv2-close-icon svg {
    width: 22px;
    height: 22px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .hv2-mobile-logo {
    font-weight: 800;
    font-size: 22px;
    color: ${mobileLogoColor};
    font-family: inherit;
    line-height: 1.1;
  }

  @media (max-width: 1024px) {
    .hv2-nav-list,
    .hv2-bottom-row,
    .hv2-search {
      display: none;
    }

    .hv2-mobile-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .hv2-header {
      padding: 16px 20px;
    }

    .hv2-top-row {
      min-height: 40px;
    }

    .hv2-actions {
      gap: 16px;
    }
  }

  @media (max-width: 640px) {
    .hv2-logo--image img {
      max-width: 160px;
    }
  }
</style>

<div class="hv2-wrap">
  <div class="hv2-sidebar-overlay" id="hv2-overlay" onclick="toggleHv2Sidebar()"></div>

  <nav class="hv2-mobile-sidebar" id="hv2-mobileSidebar">
    <div class="hv2-mobile-sidebar-top">
      <span class="hv2-mobile-logo">${config.mobileLogoText || ""}</span>
      <button type="button" class="hv2-close-icon" onclick="toggleHv2Sidebar()" aria-label="Close menu">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <line x1="5" y1="5" x2="19" y2="19"></line>
          <line x1="19" y1="5" x2="5" y2="19"></line>
        </svg>
      </button>
    </div>

    <div class="hv2-mobile-nav-item">
      <div class="hv2-mobile-nav-head" onclick="toggleHv2Accordion(this)">
        ${config.mobileFeaturesText || ""}
        <svg viewBox="0 0 24 24" aria-hidden="true" data-hv2-icon="accordion">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
      <div class="hv2-mobile-nav-body">
        <a href="${safeUrl(config.mobileFeaturesLink1Url)}">${config.mobileFeaturesLink1Text || ""}</a>
        <a href="${safeUrl(config.mobileFeaturesLink2Url)}">${config.mobileFeaturesLink2Text || ""}</a>
      </div>
    </div>

    <div class="hv2-mobile-nav-item">
      <div class="hv2-mobile-nav-head" onclick="toggleHv2Accordion(this)">
        <span style="display:flex; align-items:center; gap:10px; min-width:0;">
          <span>${config.mobileShopText || ""}</span>
          <span class="hv2-badge-new">${config.mobileShopBadge || ""}</span>
        </span>
        <svg viewBox="0 0 24 24" aria-hidden="true" data-hv2-icon="accordion">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
      <div class="hv2-mobile-nav-body">
        <a href="${safeUrl(config.mobileShopLink1Url)}">${config.mobileShopLink1Text || ""}</a>
        <a href="${safeUrl(config.mobileShopLink2Url)}">${config.mobileShopLink2Text || ""}</a>
      </div>
    </div>

    <a href="${safeUrl(config.mobileSupportUrl)}" style="display:block; padding:15px 0; text-decoration:none; color:${safeValue(config.mobileSupportColor, "#111827")}; font-weight:700;">
      ${config.mobileSupportText || ""}
    </a>
  </nav>

  <header class="hv2-header">
    <div class="hv2-inner">
      <div class="hv2-top-row">
        <a href="${safeUrl(config.logoUrl)}" class="hv2-logo">
          ${
            logoImageUrl
              ? `<span class="hv2-logo--image"><img src="${logoImageUrl}" alt="${config.logoAlt || "Logo"}"></span>`
              : `<span class="hv2-logo--text">${config.logoPrefix || ""}<span class="hv2-logo-camera"></span>${config.logoSuffix || ""}</span>`
          }
        </a>

        <div class="hv2-actions">
          <form class="hv2-search" action="${searchUrl}" method="get">
            <input
              type="text"
              name="q"
              class="hv2-search-input"
              placeholder="${config.searchPlaceholder || "Search"}"
              value="${safeValue(config.searchQuery || "", "")}"
            >
            <button type="submit" class="hv2-search-submit" aria-label="Search">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7"></circle>
                <line x1="16.65" y1="16.65" x2="21" y2="21"></line>
              </svg>
            </button>
          </form>

          <a href="${accountUrl}" class="hv2-icon-btn" aria-label="Account">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </a>

          <a href="${cartUrl}" class="hv2-icon-btn" aria-label="Cart">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.2 11.4a1 1 0 0 0 1 .8h11.4a1 1 0 0 0 1-.8L21 6H6"></path>
            </svg>
            <span class="hv2-cart-badge">${config.cartBadgeCount || "0"}</span>
          </a>

          <button type="button" class="hv2-mobile-toggle" onclick="toggleHv2Sidebar()" aria-label="Open menu">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      <div class="hv2-bottom-row">
        <ul class="hv2-nav-list">
          <li class="hv2-nav-item">
            <a href="${safeUrl(config.featuresLinkUrl)}" class="hv2-nav-link">
              ${config.featuresLinkText || ""}
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2.5 4.5L6 8l3.5-3.5"></path>
              </svg>
            </a>

            <div class="hv2-mega-dropdown">
              <div class="hv2-dropdown-col">
                <h4>${config.dropdown1Heading || ""}</h4>
                <a href="${safeUrl(config.dropdown1Link1Url)}">${config.dropdown1Link1Text || ""}</a>
                <a href="${safeUrl(config.dropdown1Link2Url)}">${config.dropdown1Link2Text || ""}</a>
              </div>

              <div class="hv2-dropdown-col">
                <h4>${config.dropdown2Heading || ""}</h4>
                <a href="${safeUrl(config.dropdown2Link1Url)}">${config.dropdown2Link1Text || ""}</a>
                <a href="${safeUrl(config.dropdown2Link2Url)}">${config.dropdown2Link2Text || ""}</a>
              </div>
            </div>
          </li>

          <li class="hv2-nav-item">
            <a href="${safeUrl(config.shopLinkUrl)}" class="hv2-nav-link">
              ${config.shopLinkText || ""}
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2.5 4.5L6 8l3.5-3.5"></path>
              </svg>
            </a>
            <span class="hv2-badge-new">${config.shopBadgeText || ""}</span>

            <div class="hv2-mega-dropdown hv2-shop-dropdown">
              <div class="hv2-dropdown-col">
                <h4>${config.shopDropdownHeading || ""}</h4>
                <a href="${safeUrl(config.shopDropdownLink1Url)}">${config.shopDropdownLink1Text || ""}</a>
                <a href="${safeUrl(config.shopDropdownLink2Url)}">${config.shopDropdownLink2Text || ""}</a>
              </div>
            </div>
          </li>

          <li class="hv2-nav-item">
            <a href="${safeUrl(config.doorbellsUrl)}" class="hv2-nav-link">${config.doorbellsText || ""}</a>
          </li>

          <li class="hv2-nav-item">
            <a href="${safeUrl(config.journalUrl)}" class="hv2-nav-link">${config.journalText || ""}</a>
          </li>
        </ul>

        <ul class="hv2-nav-list">
          <li class="hv2-nav-item">
            <a href="${safeUrl(config.aboutUrl)}" class="hv2-nav-link">${config.aboutText || ""}</a>
          </li>
          <li class="hv2-nav-item">
            <a href="${safeUrl(config.supportUrl)}" class="hv2-nav-link">${config.supportText || ""}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</div>

<script>
  function toggleHv2Sidebar() {
    const sidebar = document.getElementById('hv2-mobileSidebar');
    const overlay = document.getElementById('hv2-overlay');
    if (!sidebar || !overlay) return;
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  function toggleHv2Accordion(el) {
    const body = el.nextElementSibling;
    const icon = el.querySelector('[data-hv2-icon="accordion"]');
    if (!body || !icon) return;
    body.classList.toggle('open');
    const isOpen = body.classList.contains('open');
    if (isOpen) {
      icon.innerHTML = '<line x1="5" y1="12" x2="19" y2="12"></line>';
    } else {
      icon.innerHTML = '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>';
    }
  }
</script>
  `;
}

// Default export — React component used by the editor canvas
export default function HeaderV2({ config }) {
  return null;
}