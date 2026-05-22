export function getHeaderV9Code(config = {}) {
  const bgColor = config.bgColor || "#1e1e1e";
  const announceBg = config.announceBg || "#111111";
  const borderColor = config.borderColor || "#2a2a2a";
  const logoText = config.logoText || "ENTERPRISE";
  const logoColor = config.logoColor || "#ffffff";
  const navTextColor = config.navTextColor || "#cccccc";
  const navHoverColor = config.navHoverColor || "#ffffff";
  const navMutedColor = config.navMutedColor || "#888888";
  const searchBg = config.searchBg || "#2c2c2c";
  const searchBorder = config.searchBorder || "#3a3a3a";
  const accentColor = config.accentColor || "#888888";

  const announceText = config.announceText || "Gift cards now available";
  const announceLinkText = config.announceLinkText || "Learn more";
  const announceLinkUrl = config.announceLinkUrl || "#";

  const logoUrl = config.logoUrl || "{{ routes.root_url }}";
  const logoImageUrl = config.logoImageUrl || "";
  const logoImageAlt = config.logoImageAlt || logoText;

  const announceBrandsLabel = config.announceBrandsLabel || "Brands";
  const announceFaqLabel = config.announceFaqLabel || "FAQ";

  const announceBrandsUrl = config.announceBrandsUrl || "#";
  const announceFaqUrl = config.announceFaqUrl || "#";

  const nav1Label = config.nav1Label || "Shop";
  const nav2Label = config.nav2Label || "Digital Cameras";
  const nav3Label = config.nav3Label || "Computing";
  const nav4Label = config.nav4Label || "Presets";
  const nav5Label = config.nav5Label || "Theme Features";
  const nav6Label = config.nav6Label || "Advice & Reviews";
  const nav7Label = config.nav7Label || "Gift Cards";

  const nav1Url = config.nav1Url || "#";
  const nav2Url = config.nav2Url || "#";
  const nav3Url = config.nav3Url || "#";
  const nav4Url = config.nav4Url || "#";
  const nav5Url = config.nav5Url || "#";
  const nav6Url = config.nav6Url || "#";
  const nav7Url = config.nav7Url || "#";

  const searchPlaceholder = config.searchPlaceholder || "Search for products...";
  const searchAction = config.searchAction || "{{ routes.search_url }}";
  const searchCategoryLabel = config.searchCategoryLabel || "All";

  const desktopAccountUrl = config.desktopAccountUrl || "{{ routes.account_url }}";
  const desktopCartUrl = config.desktopCartUrl || "{{ routes.cart_url }}";
  const desktopSearchUrl = config.desktopSearchUrl || "{{ routes.search_url }}";

  const mobileAccountUrl = config.mobileAccountUrl || desktopAccountUrl;
  const mobileCartUrl = config.mobileCartUrl || desktopCartUrl;

  const drawerAccountUrl = config.drawerAccountUrl || desktopAccountUrl;
  const drawerCartUrl = config.drawerCartUrl || desktopCartUrl;

  const expertBtnLabel = config.expertBtnLabel || "Expert help";
  const expertBtnUrl = config.expertBtnUrl || "#";

  const localizationEnable = config.localizationEnable !== false;
  const localizationFormAction = config.localizationFormAction || "/localization";
  const countryCode = config.countryCode || "{{ localization.country.iso_code }}";
  const localeCode = config.localeCode || "{{ localization.language.iso_code }}";

  /* Full values */
  const announceRegionLabel =
    config.announceRegionLabel ||
    "{{ localization.country.name }} ({{ localization.country.currency.iso_code }} {{ localization.country.currency.symbol }})";
  const announceLanguageLabel =
    config.announceLanguageLabel ||
    "{{ localization.language.endonym_name | capitalize }}";

  /* Compact safe values for header */
  const announceRegionShort =
    config.announceRegionShort ||
    "{{ localization.country.currency.iso_code }} {{ localization.country.currency.symbol }}";
  const announceLanguageShort =
    config.announceLanguageShort ||
    "{{ localization.language.iso_code | upcase }}";

  const renderLogo = (className) => {
    if (logoImageUrl) {
      return `
        <a href="${logoUrl}" class="${className}" aria-label="${logoImageAlt}">
          <img src="${logoImageUrl}" alt="${logoImageAlt}" loading="lazy" width="220" height="80" style="max-height:32px;width:auto;" />
        </a>
      `;
    }
    return `<a href="${logoUrl}" class="${className}">${logoText}</a>`;
  };

  const renderLocalization = () => {
    if (!localizationEnable) {
      return `
        <span class="hv9__announce-sep">|</span>
        <span class="hv9__announce-item hv9__announce-item--compact" title="${announceRegionLabel}">
          ${announceRegionShort}
        </span>
        <span class="hv9__announce-sep">|</span>
        <span class="hv9__announce-item hv9__announce-item--compact" title="${announceLanguageLabel}">
          ${announceLanguageShort}
        </span>
      `;
    }

    return `
      <span class="hv9__announce-sep">|</span>
      <form class="hv9__loc-form" method="post" action="${localizationFormAction}">
        <input type="hidden" name="form_type" value="localization" />
        <input type="hidden" name="_method" value="put" />
        <input type="hidden" name="return_to" value="{{ request.path }}" />
        <input type="hidden" name="country_code" value="${countryCode}" />
        <button
          type="submit"
          class="hv9__announce-item hv9__announce-item--compact"
          aria-label="Current country"
          title="${announceRegionLabel}"
        >
          ${announceRegionShort}
        </button>
      </form>
      <span class="hv9__announce-sep">|</span>
      <form class="hv9__loc-form" method="post" action="${localizationFormAction}">
        <input type="hidden" name="form_type" value="localization" />
        <input type="hidden" name="_method" value="put" />
        <input type="hidden" name="return_to" value="{{ request.path }}" />
        <input type="hidden" name="locale_code" value="${localeCode}" />
        <button
          type="submit"
          class="hv9__announce-item hv9__announce-item--compact"
          aria-label="Current language"
          title="${announceLanguageLabel}"
        >
          ${announceLanguageShort}
        </button>
      </form>
    `;
  };

  return `<!-- Header V9 — Dark Enterprise Store-Aware -->
<style>
  .hv9, .hv9 *,.hv9 *::before,.hv9 *::after { box-sizing: border-box; }
  .hv9 * { margin: 0; padding: 0; }
  .hv9 {
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
    background: ${bgColor};
    color: ${navTextColor};
  }
  .hv9 a, .hv9 button, .hv9 input, .hv9 select, .hv9 textarea { font: inherit; }

  .hv9__announce {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 28px;
    min-height: 38px;
    background: ${announceBg};
    border-bottom: 1px solid ${borderColor};
    font-size: 0.8rem;
    gap: 12px;
  }
  .hv9__announce-left {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #ccc;
    min-width: 0;
  }
  .hv9__announce-left a {
    color: #fff;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 2px;
  }
  .hv9__announce-right {
    display: flex;
    align-items: center;
    gap: 0;
    flex-wrap: nowrap;
    min-width: 0;
    overflow: hidden;
  }
  .hv9__announce-item {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 0 14px;
    min-height: 36px;
    font-size: 0.8rem;
    color: #ccc;
    text-decoration: none;
    white-space: nowrap;
    transition: color 130ms ease;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .hv9__announce-item:hover { color: #fff; }
  .hv9__announce-item--compact {
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }
  .hv9__announce-sep {
    color: #444;
    font-size: 0.85rem;
    user-select: none;
    flex: 0 0 auto;
  }
  .hv9__loc-form {
    display: inline-flex;
    align-items: center;
    min-width: 0;
  }

  .hv9__header {
    display: none;
    align-items: center;
    gap: 16px;
    padding: 0 28px;
    min-height: 66px;
    background: ${bgColor};
    border-bottom: 1px solid ${borderColor};
    position: relative;
    z-index: 200;
  }
  .hv9__logo,
  .hv9__mobile-logo,
  .hv9__drawer-head-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${logoColor};
    text-decoration: none;
    white-space: nowrap;
    transition: opacity 150ms ease, color 150ms ease;
  }
  .hv9__logo {
    font-size: 1.45rem;
    font-weight: 800;
    font-style: italic;
    letter-spacing: -0.01em;
  }
  .hv9__mobile-logo,
  .hv9__drawer-head-logo {
    font-size: 1.1rem;
    font-weight: 800;
    font-style: italic;
    letter-spacing: -0.01em;
  }
  .hv9__logo:hover,
  .hv9__mobile-logo:hover,
  .hv9__drawer-head-logo:hover { opacity: 0.8; }

  .hv9__search-form,
  .hv9__mobile-search-form {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .hv9__search-wrap {
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 600px;
    background: ${searchBg};
    border-radius: 8px;
    overflow: hidden;
    border: 1.5px solid ${searchBorder};
    transition: border-color 150ms ease;
  }
  .hv9__search-wrap:focus-within { border-color: #666; }
  .hv9__search-category {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 14px;
    height: 44px;
    font-size: 0.875rem;
    color: #ccc;
    font-weight: 500;
    background: transparent;
    border: none;
    border-right: 1px solid ${searchBorder};
    white-space: nowrap;
    min-width: 90px;
  }
  .hv9__search-input {
    flex: 1;
    height: 44px;
    border: none;
    background: transparent;
    padding: 0 12px;
    font-size: 0.875rem;
    color: #e0e0e0;
    outline: none;
    min-width: 0;
  }
  .hv9__search-input::placeholder { color: #777; }
  .hv9__search-hidden {
    display: none;
  }
  .hv9__search-submit {
    width: 44px;
    height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: #888;
    cursor: pointer;
    transition: color 130ms ease;
    text-decoration: none;
  }
  .hv9__search-submit:hover { color: #ccc; }

  .hv9__icons {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
  }
  .hv9__icon-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    color: #ccc;
    text-decoration: none;
    border-radius: 6px;
    transition: color 130ms ease, background 130ms ease;
  }
  .hv9__icon-link:hover {
    color: #fff;
    background: #2a2a2a;
  }

  .hv9__nav {
    display: none;
    align-items: center;
    padding: 0 28px;
    min-height: 48px;
    background: ${bgColor};
    border-bottom: 1px solid ${borderColor};
    position: relative;
    z-index: 100;
  }
  .hv9__nav-left {
    display: flex;
    align-items: center;
    flex: 1;
    min-width: 0;
  }
  .hv9__nav-right {
    display: flex;
    align-items: center;
  }
  .hv9__nav-link {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 0 14px;
    min-height: 48px;
    font-size: 0.85rem;
    font-weight: 500;
    color: ${navTextColor};
    text-decoration: none;
    white-space: nowrap;
    transition: color 130ms ease, opacity 130ms ease;
  }
  .hv9__nav-link:hover { color: ${navHoverColor}; }
  .hv9__nav-link--muted { color: ${navMutedColor}; }
  .hv9__nav-link--muted:hover { color: #bbb; }

  .hv9__btn-expert {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0 16px;
    min-height: 34px;
    background: #2e2e2e;
    border: 1.5px solid #444;
    border-radius: 6px;
    font-size: 0.82rem;
    font-weight: 600;
    color: #ddd;
    text-decoration: none;
    white-space: nowrap;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;
  }
  .hv9__btn-expert:hover {
    background: #383838;
    border-color: #555;
    color: #fff;
  }

  .hv9__mobile-header {
    display: none;
    align-items: center;
    min-height: 56px;
    padding: 0 16px;
    background: ${bgColor};
    border-bottom: 1px solid ${borderColor};
    position: relative;
    z-index: 200;
  }
  .hv9__mobile-left,
  .hv9__mobile-right {
    display: flex;
    align-items: center;
    z-index: 1;
  }
  .hv9__mobile-right { margin-left: auto; }
  .hv9__mobile-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .hv9__mobile-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: #ccc;
    text-decoration: none;
    border-radius: 6px;
    transition: color 130ms ease, background 130ms ease;
  }
  .hv9__mobile-link:hover {
    color: #fff;
    background: #2a2a2a;
  }

  .hv9__hamburger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 6px;
    color: #ccc;
  }
  .hv9__hamburger span {
    display: block;
    width: 20px;
    height: 1.5px;
    background: currentColor;
    border-radius: 2px;
    transition: transform 240ms ease, opacity 200ms ease;
    transform-origin: center;
  }
  .hv9__hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .hv9__hamburger.open span:nth-child(2) { opacity: 0; }
  .hv9__hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

  .hv9__mobile-search {
    display: none;
    align-items: center;
    margin: 0 16px 10px;
    background: ${searchBg};
    border-radius: 8px;
    border: 1.5px solid ${searchBorder};
    overflow: hidden;
  }
  .hv9__mobile-search input {
    flex: 1;
    height: 40px;
    border: none;
    background: transparent;
    padding: 0 12px;
    font-size: 0.875rem;
    color: #e0e0e0;
    outline: none;
  }
  .hv9__mobile-search input::placeholder { color: #777; }
  .hv9__mobile-search-btn {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    color: #888;
    cursor: pointer;
    transition: color 130ms ease;
  }
  .hv9__mobile-search-btn:hover { color: #ccc; }

  .hv9__drawer {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 9999;
  }
  .hv9__drawer.open { display: block; }
  .hv9__drawer-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.6);
  }
  .hv9__drawer-panel {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    max-width: 88vw;
    background: #1e1e1e;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }
  .hv9__drawer-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    min-height: 56px;
    border-bottom: 1px solid ${borderColor};
    position: sticky;
    top: 0;
    background: #1e1e1e;
    z-index: 1;
    flex-shrink: 0;
  }
  .hv9__drawer-close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: none;
    background: none;
    cursor: pointer;
    color: #888;
    border-radius: 6px;
    transition: background 130ms ease, color 130ms ease;
  }
  .hv9__drawer-close:hover {
    background: #2a2a2a;
    color: #fff;
  }
  .hv9__drawer-body {
    flex: 1;
    padding: 6px 0;
  }
  .hv9__drawer-link {
    display: block;
    padding: 13px 20px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: ${navTextColor};
    text-decoration: none;
    border-bottom: 1px solid #252525;
    transition: background 130ms ease, color 130ms ease;
  }
  .hv9__drawer-link:hover {
    background: #252525;
    color: #bbb;
  }
  .hv9__drawer-foot {
    padding: 14px 20px;
    border-top: 1px solid ${borderColor};
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  .hv9__drawer-foot-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 0 16px;
    min-height: 38px;
    border: 1.5px solid #444;
    border-radius: 6px;
    background: #2e2e2e;
    font-size: 0.78rem;
    font-weight: 600;
    color: #ccc;
    text-decoration: none;
    transition: background 130ms ease, border-color 130ms ease, color 130ms ease;
  }
  .hv9__drawer-foot-link:hover {
    background: #383838;
    border-color: #555;
    color: #fff;
  }

  @media (max-width: 767px) {
    .hv9__announce { display: none; }
    .hv9__mobile-header { display: flex; }
    .hv9__mobile-search { display: flex; }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .hv9__announce { display: flex; padding: 0 16px; justify-content: center; }
    .hv9__announce-right { display: none; }
    .hv9__mobile-header { display: flex; }
    .hv9__mobile-search { display: flex; }
  }

  @media (min-width: 1024px) {
    .hv9__announce { display: flex; padding: 0 20px; }
    .hv9__header { display: flex; padding: 0 20px; gap: 12px; }
    .hv9__nav { display: flex; padding: 0 20px; }
    .hv9__nav-link { padding: 0 10px; font-size: 0.8rem; }
    .hv9__search-wrap { max-width: 440px; }
    .hv9__mobile-header { display: none; }
    .hv9__mobile-search { display: none; }
  }

  @media (min-width: 1280px) {
    .hv9__announce { padding: 0 48px; }
    .hv9__header { padding: 0 48px; gap: 16px; }
    .hv9__nav { padding: 0 48px; }
    .hv9__nav-link { padding: 0 14px; font-size: 0.85rem; }
    .hv9__search-wrap { max-width: 600px; }
  }
</style>

<div class="hv9">
  <div class="hv9__announce">
    <div class="hv9__announce-left">
      ${announceText}&nbsp;<a href="${announceLinkUrl}">${announceLinkText}</a>
    </div>

    <div class="hv9__announce-right">
      <a href="${announceBrandsUrl}" class="hv9__announce-item">${announceBrandsLabel}</a>
      <span class="hv9__announce-sep">|</span>
      <a href="${announceFaqUrl}" class="hv9__announce-item">${announceFaqLabel}</a>
      ${renderLocalization()}
    </div>
  </div>

  <header class="hv9__header">
    ${renderLogo("hv9__logo")}

    <div class="hv9__search-wrap">
      <form class="hv9__search-form" action="${searchAction}" method="get" role="search">
        <button class="hv9__search-category" type="button" aria-label="Search category">
          ${searchCategoryLabel}
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <input class="hv9__search-input" type="search" name="q" placeholder="${searchPlaceholder}" autocomplete="off" />
        <input class="hv9__search-hidden" name="options[prefix]" type="hidden" value="last" />
        <button type="submit" class="hv9__search-submit" aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
      </form>
    </div>

    <div class="hv9__icons">
      <a href="${desktopAccountUrl}" class="hv9__icon-link" aria-label="Account">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </a>

      <a href="${desktopCartUrl}" class="hv9__icon-link" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      </a>
    </div>
  </header>

  <nav class="hv9__nav" aria-label="Main navigation">
    <div class="hv9__nav-left">
      <a href="${nav1Url}" class="hv9__nav-link">${nav1Label}</a>
      <a href="${nav2Url}" class="hv9__nav-link">${nav2Label}</a>
      <a href="${nav3Url}" class="hv9__nav-link">${nav3Label}</a>
      <a href="${nav4Url}" class="hv9__nav-link">${nav4Label}</a>
      <a href="${nav5Url}" class="hv9__nav-link">${nav5Label}</a>
    </div>

    <div class="hv9__nav-right">
      <a href="${nav6Url}" class="hv9__nav-link hv9__nav-link--muted">${nav6Label}</a>
      <a href="${nav7Url}" class="hv9__nav-link hv9__nav-link--muted">${nav7Label}</a>
      <a href="${expertBtnUrl}" class="hv9__btn-expert">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 11.5 19.79 19.79 0 0 1 1.61 2.84 2 2 0 0 1 3.6.66h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.28a16 16 0 0 0 6 6l.95-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16a2 2 0 0 0 .27.92z"/>
        </svg>
        ${expertBtnLabel}
      </a>
    </div>
  </nav>

  <header class="hv9__mobile-header">
    <div class="hv9__mobile-left">
      <button class="hv9__hamburger" id="hv9-hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

    ${renderLogo("hv9__mobile-logo")}

    <div class="hv9__mobile-right">
      <a href="${mobileAccountUrl}" class="hv9__mobile-link" aria-label="Account">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </a>

      <a href="${mobileCartUrl}" class="hv9__mobile-link" aria-label="Cart">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      </a>
    </div>
  </header>

  <div class="hv9__mobile-search">
    <form class="hv9__mobile-search-form" action="${searchAction}" method="get" role="search">
      <input type="search" name="q" placeholder="${searchPlaceholder}" autocomplete="off" />
      <input class="hv9__search-hidden" name="options[prefix]" type="hidden" value="last" />
      <button type="submit" class="hv9__mobile-search-btn" aria-label="Search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
      </button>
    </form>
  </div>

  <div class="hv9__drawer" id="hv9-drawer" role="dialog" aria-modal="true" aria-label="Navigation">
    <div class="hv9__drawer-overlay" id="hv9-overlay"></div>

    <div class="hv9__drawer-panel">
      <div class="hv9__drawer-head">
        ${renderLogo("hv9__drawer-head-logo")}
        <button class="hv9__drawer-close" id="hv9-close" aria-label="Close menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>

      <div class="hv9__drawer-body">
        <a href="${nav1Url}" class="hv9__drawer-link">${nav1Label}</a>
        <a href="${nav2Url}" class="hv9__drawer-link">${nav2Label}</a>
        <a href="${nav3Url}" class="hv9__drawer-link">${nav3Label}</a>
        <a href="${nav4Url}" class="hv9__drawer-link">${nav4Label}</a>
        <a href="${nav5Url}" class="hv9__drawer-link">${nav5Label}</a>
        <a href="${nav6Url}" class="hv9__drawer-link">${nav6Label}</a>
        <a href="${nav7Url}" class="hv9__drawer-link">${nav7Label}</a>
      </div>

      <div class="hv9__drawer-foot">
        <a href="${drawerAccountUrl}" class="hv9__drawer-foot-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          Account
        </a>

        <a href="${drawerCartUrl}" class="hv9__drawer-foot-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          Cart
        </a>
      </div>
    </div>
  </div>
</div>

<script>
(function () {
  var hamburger = document.getElementById('hv9-hamburger');
  var drawer = document.getElementById('hv9-drawer');
  var overlay = document.getElementById('hv9-overlay');
  var closeBtn = document.getElementById('hv9-close');

  function openDrawer() {
    if (!drawer || !hamburger) return;
    drawer.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer || !hamburger) return;
    drawer.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      drawer.classList.contains('open') ? closeDrawer() : openDrawer();
    });
  }

  if (overlay) overlay.addEventListener('click', closeDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
})();
</script>`;
}

export default function HeaderV9({ config }) {
  return null;
}