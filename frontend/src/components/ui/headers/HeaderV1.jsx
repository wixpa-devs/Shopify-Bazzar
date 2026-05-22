// Named export — used by generateComponentCode.js
export function getHeaderV1Code(config = {}) {
    const safeUrl = (url, fallback = "#") => {
        if (typeof url !== "string") return fallback;
        const trimmed = url.trim();
        return trimmed || fallback;
    };

    const safeValue = (value, fallback) => {
        if (value === undefined || value === null) return fallback;
        if (typeof value !== "string") return value;
        const trimmed = value.trim();
        return trimmed || fallback;
    };

    const sidePadding = safeValue(config.sidePadding, "8%");
    const primaryBg = safeValue(config.primaryBg, "#C8A48D");

    const headerBg = safeValue(config.headerBg, "#ffffff");
    const headerText = safeValue(config.headerText, "#1a1a1a");
    const headerTextHover = safeValue(config.headerTextHover, "#C8A48D");
    const megaMenuBg = safeValue(config.megaMenuBg, "#ffffff");
    const megaMenuText = safeValue(config.megaMenuText, "#666666");
    const megaMenuTextHover = safeValue(config.megaMenuTextHover, "#C8A48D");
    const mobileMenuBg = safeValue(config.mobileMenuBg, "#ffffff");
    const mobileMenuText = safeValue(config.mobileMenuText, "#1a1a1a");
    const overlayColor = safeValue(config.overlayColor, "rgba(0,0,0,0.4)");

    const headerTopOffset = safeValue(config.headerTopOffset, "25px");
    const headerHeight = safeValue(config.headerHeight, "75px");
    const headerScrolledHeight = safeValue(config.headerScrolledHeight, "85px");
    const headerBorderRadius = safeValue(config.headerBorderRadius, "12px");
    const headerShadow = safeValue(config.headerShadow, "0 10px 30px rgba(0,0,0,0.08)");
    const megaMenuShadow = safeValue(config.megaMenuShadow, "0 25px 50px rgba(0,0,0,0.1)");

    const logoScriptText = safeValue(config.logoScriptText, "little");
    const logoScriptSize = safeValue(config.logoScriptSize, "28px");
    const logoScriptColor = safeValue(config.logoScriptColor, "#1a1a1a");
    const logoBoldText = safeValue(config.logoBoldText, "PEBBLE");
    const logoBoldSize = safeValue(config.logoBoldSize, "20px");
    const logoBoldColor = safeValue(config.logoBoldColor, "#1a1a1a");
    const logoUrl = safeUrl(config.logoUrl, "/");
    const logoImageUrl = safeValue(config.logoImageUrl, "");

    const shopLinkText = safeValue(config.shopLinkText, "Shop");
    const shopLinkUrl = safeUrl(config.shopLinkUrl);
    const collectionsLinkText = safeValue(config.collectionsLinkText, "Collections");
    const collectionsLinkUrl = safeUrl(config.collectionsLinkUrl);
    const aboutLinkText = safeValue(config.aboutLinkText, "About Us");
    const aboutLinkUrl = safeUrl(config.aboutLinkUrl);

    const megaCol1Heading = safeValue(config.megaCol1Heading, "New In");
    const megaCol1Link1Text = safeValue(config.megaCol1Link1Text, "Winter Jackets");
    const megaCol1Link1Url = safeUrl(config.megaCol1Link1Url);
    const megaCol1Link2Text = safeValue(config.megaCol1Link2Text, "Cozy Sweaters");
    const megaCol1Link2Url = safeUrl(config.megaCol1Link2Url);
    const megaCol1Link3Text = safeValue(config.megaCol1Link3Text, "Baby Suits");
    const megaCol1Link3Url = safeUrl(config.megaCol1Link3Url);
    const megaCol1Link4Text = safeValue(config.megaCol1Link4Text, "Woolen Caps");
    const megaCol1Link4Url = safeUrl(config.megaCol1Link4Url);

    const megaCol2Heading = safeValue(config.megaCol2Heading, "Shop By Age");
    const megaCol2Link1Text = safeValue(config.megaCol2Link1Text, "0-6 Months");
    const megaCol2Link1Url = safeUrl(config.megaCol2Link1Url);
    const megaCol2Link2Text = safeValue(config.megaCol2Link2Text, "6-12 Months");
    const megaCol2Link2Url = safeUrl(config.megaCol2Link2Url);
    const megaCol2Link3Text = safeValue(config.megaCol2Link3Text, "1-3 Years");
    const megaCol2Link3Url = safeUrl(config.megaCol2Link3Url);

    const megaCard1Image = safeValue(
        config.megaCard1Image,
        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=600"
    );
    const megaCard1Alt = safeValue(config.megaCard1Alt, "Winter");
    const megaCard1Text = safeValue(config.megaCard1Text, "Winter Collection");

    const megaCard2Image = safeValue(
        config.megaCard2Image,
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=600"
    );
    const megaCard2Alt = safeValue(config.megaCard2Alt, "Toys");
    const megaCard2Text = safeValue(config.megaCard2Text, "Gift Ideas");

    const closeMenuText = safeValue(config.closeMenuText, "CLOSE MENU");
    const mobileLink1Text = safeValue(config.mobileLink1Text, "Shop");
    const mobileLink1Url = safeUrl(config.mobileLink1Url);
    const mobileLink2Text = safeValue(config.mobileLink2Text, "Collections");
    const mobileLink2Url = safeUrl(config.mobileLink2Url);
    const mobileLink3Text = safeValue(config.mobileLink3Text, "About Us");
    const mobileLink3Url = safeUrl(config.mobileLink3Url);
    const mobileLink4Text = safeValue(config.mobileLink4Text, "Contact");
    const mobileLink4Url = safeUrl(config.mobileLink4Url);

    const searchUrl = safeUrl(config.searchUrl, "/search");
    const accountUrl = safeUrl(config.accountUrl, "/account");
    const cartUrl = safeUrl(config.cartUrl, "/cart");

    return `
<style>
  :root {
    --side-padding: ${sidePadding};
    --primary-bg: ${primaryBg};
    --font-script: 'Dancing Script', cursive;
    --font-heading: 'Poppins', sans-serif;
    --transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

    --header-bg: ${headerBg};
    --header-text: ${headerText};
    --header-text-hover: ${headerTextHover};
    --mega-menu-bg: ${megaMenuBg};
    --mega-menu-text: ${megaMenuText};
    --mega-menu-text-hover: ${megaMenuTextHover};
    --mobile-menu-bg: ${mobileMenuBg};
    --mobile-menu-text: ${mobileMenuText};
    --overlay-color: ${overlayColor};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .hv1-wrap,
  .hv1-wrap * {
    box-sizing: border-box;
  }

  .hv1-header {
    position: fixed;
    top: ${headerTopOffset};
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - (var(--side-padding) * 2));
    height: ${headerHeight};
    background: var(--header-bg);
    border-radius: ${headerBorderRadius};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    z-index: 1000;
    box-shadow: ${headerShadow};
    transition: var(--transition);
    font-family: inherit;
  }

  .hv1-header.scrolled {
    top: 0;
    width: 100%;
    border-radius: 0;
    padding: 0 var(--side-padding);
    height: ${headerScrolledHeight};
  }

  .hv1-nav-links {
    display: flex;
    gap: 25px;
    align-items: center;
    height: 100%;
    flex: 1;
  }

  .hv1-dropdown-container {
    position: static;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .hv1-nav-item {
    text-decoration: none;
    color: var(--header-text);
    font-size: 14px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    height: 100%;
  }

  .hv1-nav-item:hover {
    color: var(--header-text-hover);
  }

  .hv1-nav-item svg {
    width: 10px;
    height: 10px;
    display: block;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
    overflow: visible;
  }

  .hv1-mega-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--mega-menu-bg);
    border-top: 1px solid #eee;
    box-shadow: ${megaMenuShadow};
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: all 0.3s ease;
    padding: 40px var(--side-padding);
    color: var(--mega-menu-text);
  }

  .hv1-dropdown-container:hover .hv1-mega-menu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .hv1-mega-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }

  .hv1-mega-col h4 {
    font-family: var(--font-heading);
    font-size: 15px;
    margin-bottom: 20px;
    color: var(--mega-menu-text);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .hv1-mega-col a {
    display: block;
    color: var(--mega-menu-text);
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 12px;
    transition: 0.2s;
    opacity: 0.8;
  }

  .hv1-mega-col a:hover {
    color: var(--mega-menu-text-hover);
    padding-left: 5px;
    opacity: 1;
  }

  .hv1-mega-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 4 / 5;
  }

  .hv1-mega-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .hv1-mega-card span {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #ffffff;
    font-weight: 700;
    z-index: 2;
    font-size: 18px;
  }

  .hv1-mega-card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.6));
  }

  .hv1-logo {
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: var(--header-text);
    flex: 0;
    white-space: nowrap;
  }

  .hv1-logo-image {
    display: block;
    max-height: 42px;
    width: auto;
    object-fit: contain;
  }

  .hv1-logo-script {
    font-family: var(--font-script);
    font-size: ${logoScriptSize};
    color: ${logoScriptColor};
  }

  .hv1-logo-bold {
    font-family: var(--font-heading);
    font-weight: 700;
    font-size: ${logoBoldSize};
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${logoBoldColor};
  }

  .hv1-header-actions {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    flex: 1;
  }

  .hv1-action-link {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    flex: 0 0 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--header-text);
    text-decoration: none;
    transition: 0.3s;
    border-radius: 999px;
    line-height: 0;
  }

  .hv1-action-link svg {
    width: 20px;
    height: 20px;
    display: block;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    overflow: visible;
  }

  .hv1-action-link:hover {
    color: var(--header-text-hover);
    transform: scale(1.06);
  }

  .hv1-mobile-toggle {
    display: none;
    cursor: pointer;
    flex: 1;
    color: var(--header-text);
    background: transparent;
    border: none;
    padding: 0;
  }

  .hv1-mobile-toggle svg {
    width: 22px;
    height: 22px;
    display: block;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    overflow: visible;
  }

  @media (max-width: 1024px) {
    .hv1-header {
      padding: 0 20px;
      width: calc(100% - 40px);
      display: flex;
      justify-content: space-between;
    }

    .hv1-nav-links {
      display: none;
    }

    .hv1-mobile-toggle {
      display: inline-flex;
      align-items: center;
    }

    .hv1-logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .hv1-header-actions {
      flex: 1;
      justify-content: flex-end;
      gap: 4px;
    }

    .hv1-action-link {
      width: 36px;
      height: 36px;
      min-width: 36px;
      min-height: 36px;
      flex-basis: 36px;
    }

    .hv1-action-link svg {
      width: 18px;
      height: 18px;
    }
  }

  .hv1-mobile-menu {
    position: fixed;
    top: 0;
    left: -100%;
    width: 300px;
    max-width: 86vw;
    height: 100vh;
    background: var(--mobile-menu-bg);
    z-index: 2000;
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    transition: 0.4s;
    font-family: inherit;
  }

  .hv1-mobile-menu.active {
    left: 0;
  }

  .hv1-mobile-link {
    font-size: 18px;
    font-weight: 600;
    color: var(--mobile-menu-text);
    text-decoration: none;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
  }

  .hv1-mobile-link:hover {
    color: var(--header-text-hover);
  }

  .hv1-close-menu {
    cursor: pointer;
    margin-bottom: 30px;
    font-weight: 700;
    color: var(--mobile-menu-text);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    border: none;
    padding: 0;
  }

  .hv1-close-menu svg {
    width: 18px;
    height: 18px;
    display: block;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    overflow: visible;
  }

  .hv1-overlay {
    position: fixed;
    inset: 0;
    background: var(--overlay-color);
    visibility: hidden;
    opacity: 0;
    z-index: 1500;
    transition: 0.3s;
  }

  .hv1-overlay.active {
    visibility: visible;
    opacity: 1;
  }
</style>

<div class="hv1-wrap">
  <div class="hv1-overlay" id="hv1-overlay" onclick="toggleHv1Menu()"></div>

  <div class="hv1-mobile-menu" id="hv1-mobileMenu">
    <button type="button" class="hv1-close-menu" onclick="toggleHv1Menu()">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <line x1="5" y1="5" x2="19" y2="19"></line>
        <line x1="19" y1="5" x2="5" y2="19"></line>
      </svg>
      ${closeMenuText}
    </button>

    <a href="${mobileLink1Url}" class="hv1-mobile-link">${mobileLink1Text}</a>
    <a href="${mobileLink2Url}" class="hv1-mobile-link">${mobileLink2Text}</a>
    <a href="${mobileLink3Url}" class="hv1-mobile-link">${mobileLink3Text}</a>
    <a href="${mobileLink4Url}" class="hv1-mobile-link">${mobileLink4Text}</a>
    <a href="${searchUrl}" class="hv1-mobile-link">Search</a>
    <a href="${accountUrl}" class="hv1-mobile-link">Account</a>
    <a href="${cartUrl}" class="hv1-mobile-link">Cart</a>
  </div>

  <header class="hv1-header" id="hv1-navbar">
    <button
      type="button"
      class="hv1-mobile-toggle"
      onclick="toggleHv1Menu()"
      aria-label="Open menu"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>

    <nav class="hv1-nav-links">
      <div class="hv1-dropdown-container">
        <a href="${shopLinkUrl}" class="hv1-nav-item">
          ${shopLinkText}
          <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M2.5 4.5L6 8L9.5 4.5"></path>
          </svg>
        </a>

        <div class="hv1-mega-menu">
          <div class="hv1-mega-grid">
            <div class="hv1-mega-col">
              <h4>${megaCol1Heading}</h4>
              <a href="${megaCol1Link1Url}">${megaCol1Link1Text}</a>
              <a href="${megaCol1Link2Url}">${megaCol1Link2Text}</a>
              <a href="${megaCol1Link3Url}">${megaCol1Link3Text}</a>
              <a href="${megaCol1Link4Url}">${megaCol1Link4Text}</a>
            </div>

            <div class="hv1-mega-col">
              <h4>${megaCol2Heading}</h4>
              <a href="${megaCol2Link1Url}">${megaCol2Link1Text}</a>
              <a href="${megaCol2Link2Url}">${megaCol2Link2Text}</a>
              <a href="${megaCol2Link3Url}">${megaCol2Link3Text}</a>
            </div>

            <div class="hv1-mega-card">
              <img src="${megaCard1Image}" alt="${megaCard1Alt}">
              <span>${megaCard1Text}</span>
            </div>

            <div class="hv1-mega-card">
              <img src="${megaCard2Image}" alt="${megaCard2Alt}">
              <span>${megaCard2Text}</span>
            </div>
          </div>
        </div>
      </div>

      <a href="${collectionsLinkUrl}" class="hv1-nav-item">${collectionsLinkText}</a>
      <a href="${aboutLinkUrl}" class="hv1-nav-item">${aboutLinkText}</a>
    </nav>

    <a href="${logoUrl}" class="hv1-logo">
      ${logoImageUrl
        ? `<img src="${logoImageUrl}" alt="${logoBoldText}" class="hv1-logo-image">`
        : `<span class="hv1-logo-script">${logoScriptText}</span>
      <span class="hv1-logo-bold">${logoBoldText}</span>`}
    </a>

    <div class="hv1-header-actions">
      <a href="${searchUrl}" class="hv1-action-link" aria-label="Search">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="16.65" y1="16.65" x2="21" y2="21"></line>
        </svg>
      </a>

      <a href="${accountUrl}" class="hv1-action-link" aria-label="Account">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </a>

      <a href="${cartUrl}" class="hv1-action-link" aria-label="Cart">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.2 11.4a1 1 0 0 0 1 .8h11.4a1 1 0 0 0 1-.8L21 6H6"></path>
        </svg>
      </a>
    </div>
  </header>
</div>

<script>
  function toggleHv1Menu() {
    document.getElementById("hv1-mobileMenu").classList.toggle("active");
    document.getElementById("hv1-overlay").classList.toggle("active");
  }

  window.addEventListener("scroll", () => {
    const nav = document.getElementById("hv1-navbar");
    if (!nav) return;

    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
</script>
  `;
}

// Default export — React component used by the editor canvas
export default function HeaderV1({ config }) {
    return null;
}