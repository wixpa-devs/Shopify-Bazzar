export function getHeaderV8Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const borderColor = config.borderColor || "#e5e5e5";
  const logoText = config.logoText || "Palo Alto";
  const logoColor = config.logoColor || "#111111";
  const navTextColor = config.navTextColor || "#111111";
  const navHoverColor = config.navHoverColor || "#555555";
  const saleColor = config.saleColor || "#c0392b";
  const saleBadgeBg = config.saleBadgeBg || "#c0392b";
  const saleBadgeText = config.saleBadgeText || "15% OFF";

  // Shopify-native defaults
  const logoUrl = config.logoUrl || "{{ routes.root_url }}";
  const logoImageUrl = config.logoImageUrl || "";
  const logoImageAlt = config.logoImageAlt || logoText;

  const nav1Label = config.nav1Label || "Apparel";
  const nav2Label = config.nav2Label || "New";
  const nav3Label = config.nav3Label || "Sale";
  const nav4Label = config.nav4Label || "About";
  const nav5Label = config.nav5Label || "Theme Features";

  const nav1Url = config.nav1Url || "#";
  const nav2Url = config.nav2Url || "#";
  const nav3Url = config.nav3Url || "#";
  const nav4Url = config.nav4Url || "#";
  const nav5Url = config.nav5Url || "#";

  const accountUrl =
    config.accountUrl ||
    "{% if shop.customer_accounts_enabled %}{% if customer %}{{ routes.account_url }}{% else %}{{ routes.account_login_url }}{% endif %}{% else %}# {% endif %}";
  const cartUrl = config.cartUrl || "{{ routes.cart_url }}";

  const searchPlaceholder = config.searchPlaceholder || "What are you searching for?";
  const searchFormAction = config.searchFormAction || "{{ routes.search_url }}";
  const searchCategoryLabel = config.searchCategoryLabel || "All categories";
  const searchCategoryUrl = config.searchCategoryUrl || "#";
  const voiceSearchUrl = config.voiceSearchUrl || "#";

  const mobileAccountUrl = config.mobileAccountUrl || accountUrl;
  const mobileCartUrl = config.mobileCartUrl || cartUrl;
  const mobileSearchFormAction = config.mobileSearchFormAction || searchFormAction;
  const mobileVoiceSearchUrl = config.mobileVoiceSearchUrl || voiceSearchUrl;

  const drawerAccountUrl = config.drawerAccountUrl || accountUrl;
  const drawerCartUrl = config.drawerCartUrl || cartUrl;

  const renderLogo = (logoClass) => {
    if (logoImageUrl) {
      return `
        <a href="${logoUrl}" class="${logoClass}" aria-label="${logoImageAlt}">
          <img src="${logoImageUrl}" alt="${logoImageAlt}" loading="lazy" width="220" height="80" style="max-height: 34px; width: auto;" />
        </a>
      `;
    }

    return `
      <a href="${logoUrl}" class="${logoClass}">${logoText}</a>
    `;
  };

  return `<!-- Header V8 — Centered Logo with Search | Shopify Bazzar -->
<style>
  .hv8, .hv8 *,.hv8 *::before,.hv8 *::after {
    box-sizing: border-box;
  }

  .hv8 * {
    margin: 0;
    padding: 0;
  }

  .hv8 {
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
    background: ${bgColor};
    color: ${navTextColor};
    position: relative;
  }

  .hv8 a,
  .hv8 button,
  .hv8 input,
  .hv8 select,
  .hv8 textarea {
    font: inherit;
  }

  .hv8__header {
    display: none;
    grid-template-columns: auto 1fr auto auto;
    align-items: center;
    gap: 20px;
    min-height: 64px;
    padding: 0 32px;
    border-bottom: 1px solid ${borderColor};
    background: ${bgColor};
    position: relative;
    z-index: 200;
  }

  .hv8__nav-left,
  .hv8__nav-right {
    display: flex;
    align-items: center;
    gap: 0;
    min-width: 0;
  }

  .hv8__nav-right {
    justify-content: flex-end;
  }

  .hv8__logo,
  .hv8__mobile-logo,
  .hv8__drawer-head-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${logoColor};
    text-decoration: none;
    white-space: nowrap;
    transition: opacity 150ms ease, color 150ms ease;
  }

  .hv8__logo {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .hv8__mobile-logo,
  .hv8__drawer-head-logo {
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .hv8__logo:hover,
  .hv8__mobile-logo:hover,
  .hv8__drawer-head-logo:hover {
    opacity: 0.75;
  }

  .hv8__nav-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 56px;
    padding: 0 14px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${navTextColor};
    text-decoration: none;
    white-space: nowrap;
    transition: color 140ms ease, opacity 140ms ease;
  }

  .hv8__nav-link:hover {
    color: ${navHoverColor};
  }

  .hv8__nav-link.hv8--sale {
    color: ${saleColor};
  }

  .hv8__nav-link.hv8--sale:hover {
    opacity: 0.8;
    color: ${saleColor};
  }

  .hv8__badge-off {
    display: inline-flex;
    align-items: center;
    padding: 3px 8px;
    background: ${saleBadgeBg};
    color: #fff;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    border-radius: 4px;
    line-height: 1;
  }

  .hv8__search {
    width: 100%;
    max-width: 420px;
    min-width: 220px;
  }

  .hv8__search-form,
  .hv8__mobile-search-form {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .hv8__search-wrap {
    display: flex;
    align-items: center;
    width: 100%;
    height: 44px;
    border: 1px solid ${borderColor};
    border-radius: 999px;
    overflow: hidden;
    background: #fff;
  }

  .hv8__search-category {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0 14px;
    height: 100%;
    color: ${navTextColor};
    text-decoration: none;
    font-size: 0.78rem;
    font-weight: 500;
    white-space: nowrap;
    border-right: 1px solid ${borderColor};
    background: #fafafa;
  }

  .hv8__search-input {
    flex: 1;
    min-width: 0;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    padding: 0 14px;
    font-size: 0.9rem;
    color: ${navTextColor};
  }

  .hv8__search-input::placeholder {
    color: #888;
  }

  .hv8__search-btn,
  .hv8__voice-link,
  .hv8__icon-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${navTextColor};
    text-decoration: none;
    transition: color 140ms ease, opacity 140ms ease, background 140ms ease;
  }

  .hv8__search-btn,
  .hv8__voice-link {
    width: 42px;
    height: 42px;
    flex: 0 0 auto;
  }

  .hv8__icon-link {
    width: 40px;
    min-height: 56px;
  }

  .hv8__search-btn {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  .hv8__search-btn:hover,
  .hv8__voice-link:hover,
  .hv8__icon-link:hover {
    color: ${navHoverColor};
  }

  .hv8__mobile-header {
    display: flex;
    align-items: center;
    min-height: 54px;
    padding: 0 16px;
    background: ${bgColor};
    border-bottom: 1px solid ${borderColor};
    position: relative;
    z-index: 200;
  }

  .hv8__mobile-left,
  .hv8__mobile-right {
    display: flex;
    align-items: center;
    gap: 0;
    z-index: 1;
  }

  .hv8__mobile-right {
    margin-left: auto;
  }

  .hv8__mobile-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .hv8__mobile-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: ${navTextColor};
    text-decoration: none;
    border-radius: 6px;
    transition: color 140ms ease, opacity 140ms ease, background 140ms ease;
  }

  .hv8__mobile-link:hover {
    color: ${navHoverColor};
  }

  .hv8__hamburger {
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
    color: ${navTextColor};
  }

  .hv8__hamburger span {
    display: block;
    width: 20px;
    height: 1.5px;
    background: currentColor;
    border-radius: 2px;
    transition: transform 240ms ease, opacity 200ms ease;
    transform-origin: center;
  }

  .hv8__hamburger.open span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
  }

  .hv8__hamburger.open span:nth-child(2) {
    opacity: 0;
  }

  .hv8__hamburger.open span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
  }

  .hv8__mobile-search {
    display: flex;
    padding: 10px 16px 12px;
    border-bottom: 1px solid ${borderColor};
    background: ${bgColor};
  }

  .hv8__mobile-search .hv8__search-wrap {
    height: 42px;
  }

  .hv8__drawer {
    display: none;
    position: fixed;
    inset: 0;
    z-index: 9999;
  }

  .hv8__drawer.open {
    display: block;
  }

  .hv8__drawer-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.42);
  }

  .hv8__drawer-panel {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    max-width: 88vw;
    background: #fff;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .hv8__drawer-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    min-height: 54px;
    border-bottom: 1px solid ${borderColor};
    position: sticky;
    top: 0;
    background: #fff;
    z-index: 1;
    flex-shrink: 0;
  }

  .hv8__drawer-close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: none;
    background: none;
    cursor: pointer;
    color: #666;
    border-radius: 6px;
    transition: background 140ms ease;
  }

  .hv8__drawer-close:hover {
    background: #f5f5f5;
  }

  .hv8__drawer-body {
    flex: 1;
    padding: 6px 0;
  }

  .hv8__drawer-nav-link {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 13px 20px;
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${navTextColor};
    text-decoration: none;
    border-bottom: 1px solid #f8f8f8;
    transition: background 140ms ease, color 140ms ease;
  }

  .hv8__drawer-nav-link:hover {
    background: #fafafa;
  }

  .hv8__drawer-nav-link.hv8--sale {
    color: ${saleColor};
  }

  .hv8__drawer-foot {
    padding: 14px 20px;
    border-top: 1px solid ${borderColor};
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }

  .hv8__drawer-foot-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 0 16px;
    height: 38px;
    border: 1.5px solid ${borderColor};
    border-radius: 6px;
    background: none;
    font-size: 0.78rem;
    font-weight: 600;
    color: ${navTextColor};
    text-decoration: none;
    transition: background 140ms ease, border-color 140ms ease;
  }

  .hv8__drawer-foot-link:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }

  @media (min-width: 768px) {
    .hv8__header { display: grid; }
    .hv8__mobile-header { display: none; }
    .hv8__mobile-search { display: none; }
    .hv8__drawer { display: none !important; }
  }

  @media (max-width: 767px) {
    .hv8__header { display: none; }
    .hv8__mobile-header { display: flex; }
    .hv8__mobile-search { display: block; }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .hv8__header {
      grid-template-columns: auto 1fr auto;
      padding: 0 16px;
      gap: 12px;
    }
    .hv8__nav-left {
      display: none;
    }
    .hv8__nav-right .hv8__nav-link {
      display: none;
    }
    .hv8__icon-link {
      width: 32px;
    }
    .hv8__logo {
      font-size: 1.1rem;
    }
    .hv8__search {
      max-width: 100%;
    }
  }

  @media (min-width: 1280px) {
    .hv8__header { padding: 0 48px; }
  }
</style>

<div class="hv8">
  <header class="hv8__header">
    <nav class="hv8__nav-left" aria-label="Left navigation">
      <a href="${nav1Url}" class="hv8__nav-link">${nav1Label}</a>
      <a href="${nav2Url}" class="hv8__nav-link">${nav2Label}</a>
      <a href="${nav3Url}" class="hv8__nav-link hv8--sale">
        ${nav3Label}
        <span class="hv8__badge-off">${saleBadgeText}</span>
      </a>
    </nav>

    ${renderLogo("hv8__logo")}

    <div class="hv8__search">
      <form class="hv8__search-form" action="${searchFormAction}" method="get" role="search">
        <div class="hv8__search-wrap">
          <a href="${searchCategoryUrl}" class="hv8__search-category" aria-label="Search category">
            ${searchCategoryLabel}
          </a>
          <input
            class="hv8__search-input"
            type="search"
            name="q"
            placeholder="${searchPlaceholder}"
            autocomplete="off"
          />
          <a href="${voiceSearchUrl}" class="hv8__voice-link" aria-label="Voice search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" y1="19" x2="12" y2="23"></line>
              <line x1="8" y1="23" x2="16" y2="23"></line>
            </svg>
          </a>
          <button type="submit" class="hv8__search-btn" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </form>
    </div>

    <nav class="hv8__nav-right" aria-label="Right navigation">
      <a href="${nav4Url}" class="hv8__nav-link">${nav4Label}</a>
      <a href="${nav5Url}" class="hv8__nav-link">${nav5Label}</a>

      <a href="${accountUrl}" class="hv8__icon-link" aria-label="Account">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </a>

      <a href="${cartUrl}" class="hv8__icon-link" aria-label="Cart">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      </a>
    </nav>
  </header>

  <header class="hv8__mobile-header">
    <div class="hv8__mobile-left">
      <button class="hv8__hamburger" id="hv8-hamburger" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

    ${renderLogo("hv8__mobile-logo")}

    <div class="hv8__mobile-right">
      <a href="${mobileAccountUrl}" class="hv8__mobile-link" aria-label="Account">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </a>
      <a href="${mobileCartUrl}" class="hv8__mobile-link" aria-label="Cart">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      </a>
    </div>
  </header>

  <div class="hv8__mobile-search">
    <form class="hv8__mobile-search-form" action="${mobileSearchFormAction}" method="get" role="search">
      <div class="hv8__search-wrap">
        <a href="${searchCategoryUrl}" class="hv8__search-category" aria-label="Search category">
          ${searchCategoryLabel}
        </a>
        <input
          class="hv8__search-input"
          type="search"
          name="q"
          placeholder="${searchPlaceholder}"
          autocomplete="off"
        />
        <a href="${mobileVoiceSearchUrl}" class="hv8__voice-link" aria-label="Voice search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
          </svg>
        </a>
        <button type="submit" class="hv8__search-btn" aria-label="Search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </form>
  </div>

  <div class="hv8__drawer" id="hv8-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
    <div class="hv8__drawer-overlay" id="hv8-overlay"></div>
    <div class="hv8__drawer-panel">
      <div class="hv8__drawer-head">
        ${renderLogo("hv8__drawer-head-logo")}
        <button class="hv8__drawer-close" id="hv8-close" aria-label="Close menu">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="hv8__drawer-body">
        <a href="${nav1Url}" class="hv8__drawer-nav-link">${nav1Label}</a>
        <a href="${nav2Url}" class="hv8__drawer-nav-link">${nav2Label}</a>
        <a href="${nav3Url}" class="hv8__drawer-nav-link hv8--sale">${nav3Label}</a>
        <a href="${nav4Url}" class="hv8__drawer-nav-link">${nav4Label}</a>
        <a href="${nav5Url}" class="hv8__drawer-nav-link">${nav5Label}</a>
      </div>

      <div class="hv8__drawer-foot">
        <a href="${drawerAccountUrl}" class="hv8__drawer-foot-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Account
        </a>

        <a href="${drawerCartUrl}" class="hv8__drawer-foot-link">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          Cart
        </a>
      </div>
    </div>
  </div>
</div>

<script>
(function () {
  var hamburger = document.getElementById('hv8-hamburger');
  var drawer = document.getElementById('hv8-drawer');
  var overlay = document.getElementById('hv8-overlay');
  var closeBtn = document.getElementById('hv8-close');

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

export default function HeaderV8({ config }) {
  return null;
}