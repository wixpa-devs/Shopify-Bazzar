export function getHeaderV10Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const borderColor = config.borderColor || "#e8e8e8";
  const textColor = config.textColor || "#111111";
  const textMuted = config.textMuted || "#555555";
  const accentColor = config.accentColor || "#1a56db";
  const accentHover = config.accentHover || "#1446c0";
  const navHoverColor = config.navHoverColor || "#1a56db";
  const searchBg = config.searchBg || "#f5f5f5";
  const searchBorder = config.searchBorder || "#e8e8e8";

  const logoText = config.logoText || "Maximize";
  const logoIcon = config.logoIcon || "M";
  const logoUrl = config.logoUrl || "/";
  const logoImageUrl = config.logoImageUrl || "";
  const logoImageAlt = config.logoImageAlt || logoText;

  const searchPlaceholder = config.searchPlaceholder || "What are you searching for?";
  const searchFormAction = config.searchFormAction || "/search";
  const searchCategoryLabel = config.searchCategoryLabel || "All categories";
  const searchCategoryUrl = config.searchCategoryUrl || "#";
  const voiceSearchUrl = config.voiceSearchUrl || "#";

  const emailAddress = config.emailAddress || "example@shopify.com";
  const phoneNumber = config.phoneNumber || "(+1) 2345678901";
  const languageLabel = config.languageLabel || "English (USD $)";
  const languageUrl = config.languageUrl || "#";

  const locationUrl = config.locationUrl || "#";
  const accountUrl = config.accountUrl || "/account";
  const cartUrl = config.cartUrl || "/cart";

  const announceLink1Label = config.announceLink1Label || "Returns & Exchange";
  const announceLink1Url = config.announceLink1Url || "#";
  const announceLink2Label = config.announceLink2Label || "FAQs";
  const announceLink2Url = config.announceLink2Url || "#";
  const announceLink3Label = config.announceLink3Label || "Track Order";
  const announceLink3Url = config.announceLink3Url || "#";
  const announceLink4Label = config.announceLink4Label || "Help & Support";
  const announceLink4Url = config.announceLink4Url || "#";

  const contactUsLabel = config.contactUsLabel || "Contact Us";
  const contactUsUrl = config.contactUsUrl || "#";

  const nav1Label = config.nav1Label || "Deals & Promotions";
  const nav1Url = config.nav1Url || "#";
  const nav1Badge = config.nav1Badge || "Offer";

  const nav2Label = config.nav2Label || "Bundle & Tech";
  const nav2Url = config.nav2Url || "#";

  const nav3Label = config.nav3Label || "Shop-By-Brands";
  const nav3Url = config.nav3Url || "#";

  const nav4Label = config.nav4Label || "Presets";
  const nav4Url = config.nav4Url || "#";

  const nav5Label = config.nav5Label || "Templates";
  const nav5Url = config.nav5Url || "#";
  const nav5Badge = config.nav5Badge || "New";

  const nav6Label = config.nav6Label || "All Electronics";
  const nav6Url = config.nav6Url || "#";

  const nav7Label = config.nav7Label || "Trending";
  const nav7Url = config.nav7Url || "#";

  const nav8Label = config.nav8Label || "About Us";
  const nav8Url = config.nav8Url || "#";

  const nav9Label = config.nav9Label || "Contact Us";
  const nav9Url = config.nav9Url || contactUsUrl;

  function renderLogo() {
    if (logoImageUrl) {
      return `
        <a href="${logoUrl}" class="hv10__logo" aria-label="${logoImageAlt}">
          <img src="${logoImageUrl}" alt="${logoImageAlt}" class="hv10__logo-image" loading="lazy" width="220" height="60" />
        </a>
      `;
    }

    return `
      <a href="${logoUrl}" class="hv10__logo" aria-label="${logoText}">
        <span class="hv10__logo-text">${logoText}</span>
        <div class="hv10__logo-icon">${logoIcon}</div>
      </a>
    `;
  }

  return `<!-- Header V10 — No Dropdown, Single Top Utility Bar -->
<style>
  .hv10 *, .hv10 *::before, .hv10 *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .hv10 {
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
    color: ${textColor};
    background: ${bgColor};
  }

  .hv10 a,
  .hv10 button,
  .hv10 input,
  .hv10 select,
  .hv10 textarea {
    font: inherit;
  }

  .hv10__announce {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-height: 38px;
    padding: 6px 24px;
    background: ${bgColor};
    border-bottom: 1px solid ${borderColor};
  }

  .hv10__ann-left,
  .hv10__ann-right {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .hv10__ann-item,
  .hv10__ann-r {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 38px;
    padding: 0 12px;
    color: ${textMuted};
    text-decoration: none;
    font-size: 0.75rem;
    white-space: nowrap;
    transition: color 120ms ease;
  }

  .hv10__ann-item {
    border-right: 1px solid ${borderColor};
  }

  .hv10__ann-item:first-child {
    padding-left: 0;
  }

  .hv10__ann-item:last-child {
    border-right: none;
  }

  .hv10__ann-r {
    border-left: 1px solid ${borderColor};
  }

  .hv10__ann-r:first-child {
    border-left: none;
  }

  .hv10__ann-item:hover,
  .hv10__ann-r:hover {
    color: ${textColor};
  }

  .hv10__header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 24px;
    height: 60px;
    background: ${bgColor};
    border-bottom: 1px solid ${borderColor};
    position: relative;
    z-index: 20;
  }

  .hv10__logo-group {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .hv10__menu-btn {
    display: none;
    align-items: center;
    gap: 7px;
    padding: 0 13px;
    height: 36px;
    background: ${accentColor};
    color: #fff;
    font-size: 0.82rem;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
    transition: background 130ms ease;
  }

  .hv10__menu-btn:hover {
    background: ${accentHover};
  }

  .hv10__logo {
    display: flex;
    align-items: center;
    gap: 3px;
    text-decoration: none;
  }

  .hv10__logo-text {
    font-size: 1.25rem;
    font-weight: 800;
    color: ${textColor};
    letter-spacing: -0.02em;
  }

  .hv10__logo-icon {
    width: 24px;
    height: 24px;
    background: ${accentColor};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 0.72rem;
    font-weight: 800;
  }

  .hv10__logo-image {
    display: block;
    max-height: 34px;
    width: auto;
    height: auto;
  }

  .hv10__search-wrap {
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 560px;
    background: ${searchBg};
    border-radius: 8px;
    overflow: hidden;
    border: 1.5px solid ${searchBorder};
    transition: border-color 150ms ease;
  }

  .hv10__search-wrap:focus-within {
    border-color: ${accentColor};
  }

  .hv10__search-cat {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0 12px;
    height: 40px;
    font-size: 0.82rem;
    color: #444;
    font-weight: 500;
    background: transparent;
    border-right: 1px solid #e0e0e0;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
    transition: color 120ms ease;
  }

  .hv10__search-cat:hover {
    color: ${textColor};
  }

  .hv10__search-input {
    flex: 1;
    height: 40px;
    border: none;
    background: transparent;
    padding: 0 10px;
    font-size: 0.875rem;
    color: #333;
    outline: none;
    min-width: 0;
  }

  .hv10__search-input::placeholder {
    color: #aaa;
  }

  .hv10__s-btn {
    width: 36px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: #777;
    cursor: pointer;
    transition: color 120ms ease;
    flex-shrink: 0;
    text-decoration: none;
  }

  .hv10__s-btn:hover {
    color: ${textColor};
  }

  .hv10__header-right {
    display: flex;
    align-items: center;
    gap: 2px;
    margin-left: auto;
    flex-shrink: 0;
  }

  .hv10__theme-toggle {
    width: 42px;
    height: 23px;
    background: #e0e0e0;
    border-radius: 999px;
    position: relative;
    cursor: pointer;
    border: none;
    margin-right: 4px;
    flex-shrink: 0;
  }

  .hv10__theme-toggle::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    width: 17px;
    height: 17px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  }

  .hv10__icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border: none;
    background: none;
    color: #444;
    cursor: pointer;
    border-radius: 6px;
    transition: color 120ms ease, background 120ms ease;
    text-decoration: none;
  }

  .hv10__icon-btn:hover {
    color: ${textColor};
    background: #f0f0f0;
  }

  .hv10__nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 16px;
    height: 44px;
    background: ${bgColor};
    border-bottom: 1px solid ${borderColor};
    overflow-x: auto;
    scrollbar-width: none;
  }

  .hv10__nav::-webkit-scrollbar {
    display: none;
  }

  .hv10__nav-inner {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .hv10__nav-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 0 10px;
    height: 44px;
    font-size: 0.8rem;
    font-weight: 500;
    color: #222;
    text-decoration: none;
    white-space: nowrap;
    transition: color 130ms ease;
    position: relative;
  }

  .hv10__nav-link:hover {
    color: ${navHoverColor};
  }

  .hv10__badge {
    position: absolute;
    top: 5px;
    right: 0;
    font-size: 0.53rem;
    font-weight: 700;
    padding: 1px 5px;
    border-radius: 3px;
    line-height: 1.4;
    pointer-events: none;
    z-index: 1;
  }

  .hv10__b-offer {
    background: #ff4d4d;
    color: #fff;
  }

  .hv10__b-new {
    background: #22c55e;
    color: #fff;
  }

  .hv10__overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    z-index: 80;
    opacity: 0;
    transition: opacity 250ms ease;
  }

  .hv10__overlay.show {
    display: block;
    opacity: 1;
  }

  .hv10__drawer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: min(300px, 88vw);
    background: ${bgColor};
    z-index: 90;
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    transition: transform 280ms cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
  }

  .hv10__drawer.show {
    transform: translateX(0);
  }

  .hv10__dw-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-bottom: 1px solid ${borderColor};
    flex-shrink: 0;
  }

  .hv10__dw-close {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: #f2f2f2;
    border-radius: 6px;
    cursor: pointer;
    color: #444;
    transition: background 130ms ease;
  }

  .hv10__dw-close:hover {
    background: #e5e5e5;
  }

  .hv10__dw-body {
    flex: 1;
    overflow-y: auto;
    padding: 6px 0;
  }

  .hv10__dw-link {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    font-size: 0.88rem;
    font-weight: 500;
    color: #222;
    text-decoration: none;
    width: 100%;
    transition: background 120ms ease, color 120ms ease;
  }

  .hv10__dw-link:hover {
    background: #f5f5f5;
    color: ${navHoverColor};
  }

  .hv10__dw-divider {
    height: 1px;
    background: #f0f0f0;
    margin: 4px 0;
  }

  @media (max-width: 1024px) {
    .hv10__ann-right {
      display: none;
    }

    .hv10__announce {
      padding: 6px 16px;
    }

    .hv10__nav-link {
      padding: 0 8px;
      font-size: 0.76rem;
    }

    .hv10__search-cat {
      padding: 0 10px;
      font-size: 0.78rem;
    }

    .hv10__header {
      padding: 0 16px;
    }

    .hv10__nav {
      justify-content: flex-start;
      padding: 0 16px;
    }
  }

  @media (max-width: 900px) {
    .hv10__announce {
      display: none;
    }

    .hv10__nav {
      display: none;
    }

    .hv10__menu-btn {
      display: inline-flex;
    }

    .hv10__theme-toggle {
      display: none;
    }

    .hv10__header {
      height: 54px;
      padding: 0 16px;
      gap: 10px;
    }
  }

  @media (max-width: 600px) {
    .hv10__header {
      padding: 0 12px;
      gap: 8px;
    }

    .hv10__search-cat {
      display: none;
    }

    .hv10__s-btn.mic {
      display: none;
    }
  }

  @media (max-width: 420px) {
    .hv10__logo-text {
      font-size: 1.05rem;
    }

    .hv10__logo-icon {
      width: 20px;
      height: 20px;
      font-size: 0.63rem;
    }

    .hv10__icon-btn.loc {
      display: none;
    }

    .hv10__logo-image {
      max-height: 28px;
    }
  }
</style>

<div class="hv10">
  <div class="hv10__overlay" id="hv10-overlay"></div>

  <div class="hv10__drawer" id="hv10-drawer">
    <div class="hv10__dw-head">
      ${renderLogo()}
      <button class="hv10__dw-close" id="hv10-close" aria-label="Close menu">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>

    <div class="hv10__dw-body">
      <a href="${nav1Url}" class="hv10__dw-link">${nav1Label}</a>
      <a href="${nav2Url}" class="hv10__dw-link">${nav2Label}</a>
      <a href="${nav3Url}" class="hv10__dw-link">${nav3Label}</a>
      <a href="${nav4Url}" class="hv10__dw-link">${nav4Label}</a>
      <a href="${nav5Url}" class="hv10__dw-link">${nav5Label}</a>
      <a href="${nav6Url}" class="hv10__dw-link">${nav6Label}</a>
      <a href="${nav7Url}" class="hv10__dw-link">${nav7Label}</a>
      <a href="${nav8Url}" class="hv10__dw-link">${nav8Label}</a>
      <div class="hv10__dw-divider"></div>
      <a href="${nav9Url}" class="hv10__dw-link">${nav9Label}</a>
      <a href="${contactUsUrl}" class="hv10__dw-link">${contactUsLabel}</a>
    </div>
  </div>

  <div class="hv10__announce">
    <div class="hv10__ann-left">
      <a href="${announceLink1Url}" class="hv10__ann-item">${announceLink1Label}</a>
      <a href="${announceLink2Url}" class="hv10__ann-item">${announceLink2Label}</a>
      <a href="${announceLink3Url}" class="hv10__ann-item">${announceLink3Label}</a>
      <a href="${announceLink4Url}" class="hv10__ann-item">${announceLink4Label}</a>
    </div>

    <div class="hv10__ann-right">
      <a href="mailto:${emailAddress}" class="hv10__ann-r" aria-label="Email ${emailAddress}">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span>${emailAddress}</span>
      </a>

      <a href="tel:${phoneNumber}" class="hv10__ann-r" aria-label="Call ${phoneNumber}">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5 19.79 19.79 0 0 1 1.61 2.84 2 2 0 0 1 3.6.66h3a2 2 0 0 1 2 1.72 19.79 19.79 0 0 1 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.28a16 16 0 0 0 6 6l.95-.94a2 2 0 0 1 2.11-.45 19.79 19.79 0 0 1 2.81.7A2 2 0 0 1 21.73 16z"></path>
        </svg>
        <span>${phoneNumber}</span>
      </a>

      <a href="${languageUrl}" class="hv10__ann-r" aria-label="${languageLabel}">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>${languageLabel}</span>
      </a>
    </div>
  </div>

  <header class="hv10__header">
    <div class="hv10__logo-group">
      <button class="hv10__menu-btn" id="hv10-menu-btn" aria-label="Open menu" aria-expanded="false">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        Menu
      </button>
      ${renderLogo()}
    </div>

    <form class="hv10__search-wrap" action="${searchFormAction}" method="get" role="search">
      <a href="${searchCategoryUrl}" class="hv10__search-cat">${searchCategoryLabel}</a>
      <input class="hv10__search-input" type="search" name="q" placeholder="${searchPlaceholder}" />
      <a href="${voiceSearchUrl}" class="hv10__s-btn mic" aria-label="Voice search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
      </a>
      <button type="submit" class="hv10__s-btn" aria-label="Search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </form>

    <div class="hv10__header-right">
      <button class="hv10__theme-toggle" aria-label="Toggle theme"></button>

      <a href="${locationUrl}" class="hv10__icon-btn loc" aria-label="Location">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </a>

      <a href="${accountUrl}" class="hv10__icon-btn" aria-label="Account">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </a>

      <a href="${cartUrl}" class="hv10__icon-btn" aria-label="Cart">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </a>
    </div>
  </header>

  <nav class="hv10__nav" aria-label="Main navigation">
    <div class="hv10__nav-inner">
      <a href="${nav1Url}" class="hv10__nav-link" style="padding-top:10px;">
        <span class="hv10__badge hv10__b-offer">${nav1Badge}</span>
        ${nav1Label}
      </a>
      <a href="${nav2Url}" class="hv10__nav-link">${nav2Label}</a>
      <a href="${nav3Url}" class="hv10__nav-link">${nav3Label}</a>
      <a href="${nav4Url}" class="hv10__nav-link">${nav4Label}</a>
      <a href="${nav5Url}" class="hv10__nav-link" style="padding-top:10px;">
        <span class="hv10__badge hv10__b-new">${nav5Badge}</span>
        ${nav5Label}
      </a>
      <a href="${nav6Url}" class="hv10__nav-link">${nav6Label}</a>
      <a href="${nav7Url}" class="hv10__nav-link">${nav7Label}</a>
      <a href="${nav8Url}" class="hv10__nav-link">${nav8Label}</a>
      <a href="${nav9Url}" class="hv10__nav-link">${nav9Label}</a>
    </div>
  </nav>
</div>

<script>
(function () {
  var menuBtn = document.getElementById('hv10-menu-btn');
  var drawer = document.getElementById('hv10-drawer');
  var overlay = document.getElementById('hv10-overlay');
  var closeBtn = document.getElementById('hv10-close');

  function openDrawer() {
    if (!drawer || !overlay || !menuBtn) return;
    drawer.classList.add('show');
    overlay.classList.add('show');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer || !overlay || !menuBtn) return;
    drawer.classList.remove('show');
    overlay.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', openDrawer);
  }

  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('show')) {
      closeDrawer();
    }
  });
})();
</script>`;
}

export default function HeaderV10({ config }) {
  return null;
}