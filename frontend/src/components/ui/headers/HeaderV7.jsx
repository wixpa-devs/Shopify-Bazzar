export function getHeaderV7Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const borderColor = config.borderColor || "#e8e8e8";
  const textColor = config.textColor || "#111111";
  const navTextColor = config.navTextColor || "#222222";
  const textMuted = config.textMuted || "#555555";
  const accentColor = config.accentColor || "#1a56db";

  const logoX = config.logoX || "x";
  const logoTra = config.logoTra || "tra";
  const logoXColor = config.logoXColor || "#1a56db";
  const logoTraColor = config.logoTraColor || "#111111";
  const logoUrl = config.logoUrl || "/";
  const logoImageUrl = config.logoImageUrl || "";
  const logoImageAlt = config.logoImageAlt || `${logoX}${logoTra}`;

  const catalogBtnBg = config.catalogBtnBg || "#f5c518";
  const catalogBtnColor = config.catalogBtnColor || "#111111";
  const catalogBtnText = config.catalogBtnText || "View catalog";
  const catalogBtnUrl = config.catalogBtnUrl || "#";

  const searchPlaceholder = config.searchPlaceholder || "What are you looking for?";
  const searchFormAction = config.searchFormAction || "/search";

  const instaLabel = config.instaLabel || "#Xtra Insta";
  const instaUrl = config.instaUrl || "#";

  const accountUrl = config.accountUrl || "#";
  const cartUrl = config.cartUrl || "#";
  const cartCount = config.cartCount || "0";

  const saleBg = config.saleBg || "#e0001a";
  const saleLabel = config.saleLabel || "Sale";
  const saleUrl = config.saleUrl || "#";

  const themeBg = config.themeBg || "#1a2980";
  const themeLabel = config.themeLabel || "Theme features";
  const themeUrl = config.themeUrl || "#";

  const tpColor = config.tpColor || "#00b67a";
  const trustpilotLabel = config.trustpilotLabel || "Trustpilot";

  const nav1Label = config.nav1Label || "Beauty";
  const nav1Url = config.nav1Url || "#";
  const nav2Label = config.nav2Label || "Hair Care";
  const nav2Url = config.nav2Url || "#";
  const nav3Label = config.nav3Label || "Fashion";
  const nav3Url = config.nav3Url || "#";
  const nav4Label = config.nav4Label || "Living & Sleeping";
  const nav4Url = config.nav4Url || "#";
  const nav5Label = config.nav5Label || "Electronics";
  const nav5Url = config.nav5Url || "#";
  const nav6Label = config.nav6Label || "Gifts";
  const nav6Url = config.nav6Url || "#";
  const nav7Label = config.nav7Label || "Plants & Garden";
  const nav7Url = config.nav7Url || "#";
  const nav8Label = config.nav8Label || "Pets";
  const nav8Url = config.nav8Url || "#";
  const nav9Label = config.nav9Label || "Events";
  const nav9Url = config.nav9Url || "#";

  function renderLogo(logoClass = "hv7__logo") {
    if (logoImageUrl) {
      return `
        <a href="${logoUrl}" class="${logoClass}" aria-label="${logoImageAlt}">
          <img src="${logoImageUrl}" alt="${logoImageAlt}" class="hv7__logo-image" loading="lazy" width="220" height="60" />
        </a>
      `;
    }

    return `
      <a href="${logoUrl}" class="${logoClass}" aria-label="${logoImageAlt}">
        <span class="hv7__logo-x">${logoX}</span>
        <span class="hv7__logo-tra">${logoTra}</span>
      </a>
    `;
  }

  return `<!-- Header V7 — Xtra Nav Modernized | Shopify Bazzar -->
<style>
  .hv7 *, .hv7 *::before, .hv7 *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .hv7 {
    font-family: inherit;
    background: ${bgColor};
    color: ${textColor};
    -webkit-font-smoothing: antialiased;
  }

  .hv7 a,
  .hv7 button,
  .hv7 input,
  .hv7 select,
  .hv7 textarea {
    font: inherit;
  }

  .hv7__top-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 16px;
    min-height: 60px;
    background: ${bgColor};
    border-bottom: 1px solid ${borderColor};
    position: relative;
    z-index: 200;
  }

  .hv7__logo {
    display: flex;
    align-items: center;
    gap: 2px;
    text-decoration: none;
    flex-shrink: 0;
  }

  .hv7__logo-image {
    display: block;
    max-height: 36px;
    width: auto;
    height: auto;
  }

  .hv7__logo-x {
    font-size: 2rem;
    font-weight: 800;
    color: ${logoXColor};
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .hv7__logo-tra {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${logoTraColor};
    letter-spacing: -0.03em;
    line-height: 1;
  }

  .hv7__btn-catalog {
    display: none;
    align-items: center;
    gap: 8px;
    padding: 0 16px;
    height: 40px;
    background: ${catalogBtnBg};
    color: ${catalogBtnColor};
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 999px;
    white-space: nowrap;
    flex-shrink: 0;
    transition: filter 150ms ease;
    text-decoration: none;
  }

  .hv7__btn-catalog:hover {
    filter: brightness(0.93);
  }

  .hv7__search-wrap {
    display: flex;
    align-items: center;
    flex: 1;
    background: #f4f4f4;
    border-radius: 8px;
    overflow: hidden;
    border: 1.5px solid ${borderColor};
    transition: border-color 150ms ease;
    min-width: 0;
  }

  .hv7__search-wrap:focus-within {
    border-color: ${accentColor};
  }

  .hv7__search-input {
    flex: 1;
    height: 40px;
    border: none;
    background: transparent;
    padding: 0 12px;
    font-size: 0.875rem;
    color: #333;
    outline: none;
    min-width: 0;
  }

  .hv7__search-input::placeholder {
    color: #aaa;
  }

  .hv7__search-btn {
    width: 42px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: #555;
    cursor: pointer;
    flex-shrink: 0;
    transition: color 150ms ease;
  }

  .hv7__search-btn:hover {
    color: ${textColor};
  }

  .hv7__top-right {
    display: none;
    align-items: center;
    gap: 16px;
    margin-left: auto;
    flex-shrink: 0;
  }

  .hv7__trustpilot {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;
  }

  .hv7__tp-label {
    font-size: 0.6rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #333;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .hv7__tp-check {
    width: 13px;
    height: 13px;
    background: ${tpColor};
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hv7__tp-stars {
    display: flex;
    gap: 2px;
  }

  .hv7__tp-star {
    width: 20px;
    height: 20px;
    background: ${tpColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hv7__tp-star svg {
    fill: #fff;
  }

  .hv7__insta-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.85rem;
    font-weight: 500;
    color: ${textColor};
    text-decoration: none;
    white-space: nowrap;
    transition: color 150ms ease;
  }

  .hv7__insta-btn:hover {
    color: #e1306c;
  }

  .hv7__icon-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    color: #333;
    font-size: 0.82rem;
    transition: color 150ms ease;
    text-decoration: none;
    white-space: nowrap;
  }

  .hv7__icon-btn:hover {
    color: ${textColor};
  }

  .hv7__cart-btn {
    position: relative;
    display: flex;
    align-items: center;
    color: ${textColor};
    transition: color 150ms ease;
    text-decoration: none;
  }

  .hv7__cart-btn:hover {
    color: ${accentColor};
  }

  .hv7__cart-badge {
    position: absolute;
    top: -6px;
    right: -7px;
    width: 18px;
    height: 18px;
    background: ${catalogBtnBg};
    border-radius: 50%;
    font-size: 0.65rem;
    font-weight: 700;
    color: ${catalogBtnColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hv7__mobile-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: auto;
    flex-shrink: 0;
  }

  .hv7__mobile-btn {
    border: none;
    background: none;
    cursor: pointer;
    color: #333;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .hv7__hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
    border: none;
    background: none;
    padding: 4px;
  }

  .hv7__hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: #333;
    border-radius: 2px;
    transition: all 250ms ease;
  }

  .hv7__hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hv7__hamburger.open span:nth-child(2) { opacity: 0; }
  .hv7__hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  .hv7__nav-bar {
    display: none;
    align-items: center;
    gap: 0;
    padding: 0 20px;
    height: 46px;
    background: ${bgColor};
    border-bottom: 1px solid ${borderColor};
    position: relative;
    z-index: 100;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .hv7__nav-bar::-webkit-scrollbar {
    display: none;
  }

  .hv7__nav-link {
    display: flex;
    align-items: center;
    padding: 0 12px;
    height: 46px;
    font-size: 0.82rem;
    font-weight: 500;
    color: ${navTextColor};
    text-decoration: none;
    white-space: nowrap;
    transition: color 140ms ease;
    flex-shrink: 0;
  }

  .hv7__nav-link:hover {
    color: ${accentColor};
  }

  .hv7__nav-link--sale {
    background: ${saleBg};
    color: #fff;
    border-radius: 5px;
    font-weight: 600;
    padding: 0 12px;
    height: 30px;
    margin: 0 4px;
    transition: filter 140ms ease;
  }

  .hv7__nav-link--sale:hover {
    filter: brightness(0.88);
    color: #fff;
  }

  .hv7__nav-link--theme {
    background: ${themeBg};
    color: #fff;
    border-radius: 6px;
    font-weight: 600;
    padding: 0 14px;
    height: 32px;
    margin-left: 4px;
    gap: 7px;
    transition: filter 140ms ease;
  }

  .hv7__nav-link--theme:hover {
    filter: brightness(0.88);
    color: #fff;
  }

  .hv7__drawer {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 9999;
  }

  .hv7__drawer.open {
    display: block;
  }

  .hv7__drawer-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.45);
  }

  .hv7__drawer-panel {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 340px;
    max-width: 92vw;
    background: #fff;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .hv7__drawer-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid ${borderColor};
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 1;
  }

  .hv7__drawer-logo {
    display: flex;
    align-items: center;
    gap: 2px;
    text-decoration: none;
  }

  .hv7__drawer-logo .hv7__logo-x {
    font-size: 1.6rem;
  }

  .hv7__drawer-logo .hv7__logo-tra {
    font-size: 1.2rem;
  }

  .hv7__drawer-logo .hv7__logo-image {
    max-height: 30px;
  }

  .hv7__drawer-close {
    border: none;
    background: none;
    cursor: pointer;
    color: #555;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hv7__drawer-search {
    padding: 14px 20px;
    border-bottom: 1px solid ${borderColor};
  }

  .hv7__drawer-search-inner {
    display: flex;
    align-items: center;
    background: #f4f4f4;
    border-radius: 8px;
    border: 1.5px solid ${borderColor};
    overflow: hidden;
  }

  .hv7__drawer-search-inner input {
    flex: 1;
    height: 40px;
    border: none;
    background: transparent;
    padding: 0 12px;
    font-size: 0.875rem;
    color: #333;
    outline: none;
  }

  .hv7__drawer-search-inner input::placeholder {
    color: #aaa;
  }

  .hv7__drawer-search-inner button {
    width: 40px;
    height: 40px;
    border: none;
    background: none;
    cursor: pointer;
    color: #555;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hv7__drawer-nav {
    padding: 8px 0;
    flex: 1;
  }

  .hv7__drawer-link {
    display: block;
    padding: 13px 20px;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${navTextColor};
    text-decoration: none;
    transition: background 140ms ease, color 140ms ease;
  }

  .hv7__drawer-link:hover {
    background: #f5f5f5;
  }

  .hv7__drawer-link--sale {
    color: ${saleBg};
    font-weight: 600;
  }

  .hv7__drawer-foot {
    padding: 14px 20px;
    border-top: 1px solid ${borderColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .hv7__drawer-foot-catalog {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 0 16px;
    height: 38px;
    background: ${catalogBtnBg};
    color: ${catalogBtnColor};
    font-size: 0.85rem;
    font-weight: 600;
    border-radius: 999px;
    text-decoration: none;
  }

  .hv7__drawer-foot-cart {
    position: relative;
    display: flex;
    align-items: center;
    color: ${textColor};
    padding: 4px;
    text-decoration: none;
  }

  .hv7__drawer-foot-cart-badge {
    position: absolute;
    top: -4px;
    right: -4px;
    width: 16px;
    height: 16px;
    background: ${catalogBtnBg};
    border-radius: 50%;
    font-size: 0.6rem;
    font-weight: 700;
    color: ${catalogBtnColor};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 990px) {
    .hv7__btn-catalog {
      display: inline-flex;
    }

    .hv7__top-right {
      display: flex;
    }

    .hv7__mobile-actions {
      display: none;
    }

    .hv7__nav-bar {
      display: flex;
    }
  }

  @media (max-width: 989px) {
    .hv7__nav-bar {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .hv7__top-bar {
      padding: 0 12px;
      min-height: 54px;
      gap: 8px;
    }

    .hv7__logo-x {
      font-size: 1.7rem;
    }

    .hv7__logo-tra {
      font-size: 1.25rem;
    }

    .hv7__logo-image {
      max-height: 30px;
    }
  }
</style>

<div class="hv7">
  <div class="hv7__top-bar">
    ${renderLogo()}

    <a href="${catalogBtnUrl}" class="hv7__btn-catalog">
      ${catalogBtnText}
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="${catalogBtnColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>

    <form class="hv7__search-wrap" action="${searchFormAction}" method="get" role="search">
      <input class="hv7__search-input" type="search" name="q" placeholder="${searchPlaceholder}" />
      <button type="submit" class="hv7__search-btn" aria-label="Search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </form>

    <div class="hv7__top-right">
      <div class="hv7__trustpilot" aria-label="${trustpilotLabel}">
        <div class="hv7__tp-label">
          <span>${trustpilotLabel}</span>
          <span class="hv7__tp-check">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </span>
        </div>
        <div class="hv7__tp-stars">
          ${Array(5).fill(`
            <span class="hv7__tp-star">
              <svg width="12" height="12" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </span>
          `).join("")}
        </div>
      </div>

      <a href="${instaUrl}" class="hv7__insta-btn">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
        ${instaLabel}
      </a>

      <a href="${accountUrl}" class="hv7__icon-btn" aria-label="Account">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        Account
      </a>

      <a href="${cartUrl}" class="hv7__cart-btn" aria-label="Cart">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span class="hv7__cart-badge">${cartCount}</span>
      </a>
    </div>

    <div class="hv7__mobile-actions">
      <a href="${accountUrl}" class="hv7__mobile-btn" aria-label="Account">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </a>

      <a href="${cartUrl}" class="hv7__mobile-btn" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </a>

      <button class="hv7__hamburger" id="hv7-hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <nav class="hv7__nav-bar" aria-label="Main navigation">
    <a href="${saleUrl}" class="hv7__nav-link hv7__nav-link--sale">${saleLabel}</a>
    <a href="${nav1Url}" class="hv7__nav-link">${nav1Label}</a>
    <a href="${nav2Url}" class="hv7__nav-link">${nav2Label}</a>
    <a href="${nav3Url}" class="hv7__nav-link">${nav3Label}</a>
    <a href="${nav4Url}" class="hv7__nav-link">${nav4Label}</a>
    <a href="${nav5Url}" class="hv7__nav-link">${nav5Label}</a>
    <a href="${nav6Url}" class="hv7__nav-link">${nav6Label}</a>
    <a href="${nav7Url}" class="hv7__nav-link">${nav7Label}</a>
    <a href="${nav8Url}" class="hv7__nav-link">${nav8Label}</a>
    <a href="${nav9Url}" class="hv7__nav-link">${nav9Label}</a>
    <a href="${themeUrl}" class="hv7__nav-link hv7__nav-link--theme">
      ${themeLabel}
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="#ffffff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
  </nav>

  <div class="hv7__drawer" id="hv7-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
    <div class="hv7__drawer-overlay" id="hv7-overlay"></div>

    <div class="hv7__drawer-panel">
      <div class="hv7__drawer-head">
        ${renderLogo("hv7__drawer-logo")}
        <button class="hv7__drawer-close" id="hv7-close" aria-label="Close menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="hv7__drawer-search">
        <form class="hv7__drawer-search-inner" action="${searchFormAction}" method="get" role="search">
          <input type="search" name="q" placeholder="${searchPlaceholder}" />
          <button type="submit" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </form>
      </div>

      <div class="hv7__drawer-nav">
        <a href="${saleUrl}" class="hv7__drawer-link hv7__drawer-link--sale">${saleLabel}</a>
        <a href="${nav1Url}" class="hv7__drawer-link">${nav1Label}</a>
        <a href="${nav2Url}" class="hv7__drawer-link">${nav2Label}</a>
        <a href="${nav3Url}" class="hv7__drawer-link">${nav3Label}</a>
        <a href="${nav4Url}" class="hv7__drawer-link">${nav4Label}</a>
        <a href="${nav5Url}" class="hv7__drawer-link">${nav5Label}</a>
        <a href="${nav6Url}" class="hv7__drawer-link">${nav6Label}</a>
        <a href="${nav7Url}" class="hv7__drawer-link">${nav7Label}</a>
        <a href="${nav8Url}" class="hv7__drawer-link">${nav8Label}</a>
        <a href="${nav9Url}" class="hv7__drawer-link">${nav9Label}</a>
        <a href="${themeUrl}" class="hv7__drawer-link">${themeLabel}</a>
        <a href="${instaUrl}" class="hv7__drawer-link">${instaLabel}</a>
        <a href="${accountUrl}" class="hv7__drawer-link">Account</a>
      </div>

      <div class="hv7__drawer-foot">
        <a href="${catalogBtnUrl}" class="hv7__drawer-foot-catalog">
          ${catalogBtnText}
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="${catalogBtnColor}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <a href="${cartUrl}" class="hv7__drawer-foot-cart" aria-label="Cart">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span class="hv7__drawer-foot-cart-badge">${cartCount}</span>
        </a>
      </div>
    </div>
  </div>
</div>

<script>
(function () {
  var hamburger = document.getElementById("hv7-hamburger");
  var drawer = document.getElementById("hv7-drawer");
  var overlay = document.getElementById("hv7-overlay");
  var closeBtn = document.getElementById("hv7-close");

  function openDrawer() {
    if (!drawer || !hamburger) return;
    drawer.classList.add("open");
    hamburger.classList.add("open");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (!drawer || !hamburger) return;
    drawer.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      if (drawer.classList.contains("open")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (overlay) overlay.addEventListener("click", closeDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
})();
</script>`;
}

export default function HeaderV7({ config }) {
  return null;
}