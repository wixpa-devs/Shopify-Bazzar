// Named export — used by generateComponentCode.js and headers.registry.js
export function getHeaderV3Code(config = {}) {
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

  const bgGradientFrom = safeValue(config.bgGradientFrom, "#f5f7fa");
  const bgGradientTo = safeValue(config.bgGradientTo, "#ffffff");

  const logoUrl = safeUrl(config.logoUrl);
  const logoImageUrl = safeValue(config.logoImageUrl, "");
  const logoIconBg = safeValue(config.logoIconBg, "#ff2d2d");
  const logoIconColor = safeValue(config.logoIconColor, "#ffffff");
  const logoIconText = safeValue(config.logoIconText, "W");
  const logoText = safeValue(config.logoText, "Wixpa");
  const logoTextColor = safeValue(config.logoTextColor, "#111111");

  const linkColor = safeValue(config.linkColor, "#333333");
  const linkHoverColor = safeValue(config.linkHoverColor, "#ff2d2d");

  const nav1Label = safeValue(config.nav1Label, "Home");
  const nav1Url = safeUrl(config.nav1Url);

  const nav2Label = safeValue(config.nav2Label, "Shopify Apps");
  const nav2Url = safeUrl(config.nav2Url);
  const nav2Drop1Label = safeValue(config.nav2Drop1Label, "App 1");
  const nav2Drop1Url = safeUrl(config.nav2Drop1Url);
  const nav2Drop2Label = safeValue(config.nav2Drop2Label, "App 2");
  const nav2Drop2Url = safeUrl(config.nav2Drop2Url);
  const nav2Drop3Label = safeValue(config.nav2Drop3Label, "App 3");
  const nav2Drop3Url = safeUrl(config.nav2Drop3Url);

  const nav3Label = safeValue(config.nav3Label, "Portfolio");
  const nav3Url = safeUrl(config.nav3Url);
  const nav4Label = safeValue(config.nav4Label, "About");
  const nav4Url = safeUrl(config.nav4Url);
  const nav5Label = safeValue(config.nav5Label, "Blog");
  const nav5Url = safeUrl(config.nav5Url);
  const nav6Label = safeValue(config.nav6Label, "Contact");
  const nav6Url = safeUrl(config.nav6Url);

  const btnLabel = safeValue(config.btnLabel, "Try Our Apps");
  const btnUrl = safeUrl(config.btnUrl);
  const btnBg = safeValue(config.btnBg, "#ff2d2d");
  const btnHoverBg = safeValue(config.btnHoverBg, "#e60000");
  const btnColor = safeValue(config.btnColor, "#ffffff");

  return `
<style>
  .hv3-wrap,
  .hv3-wrap *,
  .hv3-wrap *::before,
  .hv3-wrap *::after {
    box-sizing: border-box;
  }

  .hv3-wrap {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 999;
    padding-top: 16px;
    font-family: inherit;
    color: ${linkColor};
  }

  .hv3-wrap a,
  .hv3-wrap button,
  .hv3-wrap input,
  .hv3-wrap select,
  .hv3-wrap textarea {
    font: inherit;
  }

  .hv3-navbar {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 15px 40px;
    background: linear-gradient(to right, ${bgGradientFrom}, ${bgGradientTo});
    margin: 0 35px;
    border-radius: 999px;
    position: relative;
    z-index: 20;
    font-family: inherit;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  .hv3-logo {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
    min-width: 0;
    font-family: inherit;
  }

  .hv3-logo-icon {
    width: 38px;
    height: 38px;
    border-radius: 999px;
    background: ${logoIconBg};
    color: ${logoIconColor};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 15px;
    line-height: 1;
    flex-shrink: 0;
    font-family: inherit;
  }

  .hv3-logo-image {
    display: block;
    width: auto;
    height: 38px;
    max-height: 38px;
    object-fit: contain;
    flex-shrink: 0;
  }

  .hv3-logo-text {
    display: inline-block;
    font-size: 23px;
    font-weight: 700;
    color: ${logoTextColor};
    line-height: 1.1;
    white-space: nowrap;
    font-family: inherit;
  }

  .hv3-menu {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    min-width: 0;
  }

  .hv3-menu > ul {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 0;
    padding: 0;
  }

  .hv3-menu > ul > li {
    position: relative;
    list-style: none;
  }

  .hv3-menu a {
    text-decoration: none;
    color: ${linkColor};
    font-weight: 500;
    transition: color 0.25s ease;
    white-space: nowrap;
    font-family: inherit;
  }

  .hv3-menu a:hover {
    color: ${linkHoverColor};
  }

  .hv3-dropdown-toggle {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .hv3-dropdown-caret {
    font-size: 12px;
    line-height: 1;
  }

  .hv3-dropdown-menu {
    position: absolute;
    top: calc(100% + 14px);
    left: 0;
    min-width: 200px;
    background: #ffffff;
    border-radius: 14px;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.12);
    padding: 8px 0;
    display: none;
    flex-direction: column;
    z-index: 9999;
  }

  .hv3-dropdown-menu li {
    list-style: none;
  }

  .hv3-dropdown-menu a {
    display: block;
    padding: 11px 16px;
    color: ${linkColor};
    line-height: 1.35;
  }

  .hv3-dropdown-menu a:hover {
    background: rgba(0, 0, 0, 0.035);
    color: ${linkHoverColor};
  }

  .hv3-dropdown:hover .hv3-dropdown-menu,
  .hv3-dropdown:focus-within .hv3-dropdown-menu {
    display: flex;
  }

  .hv3-nav-btn {
    flex-shrink: 0;
  }

  .hv3-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background: ${btnBg};
    color: ${btnColor};
    padding: 12px 24px;
    border-radius: 999px;
    font-weight: 700;
    line-height: 1;
    transition: background-color 0.25s ease, transform 0.2s ease;
    white-space: nowrap;
    font-family: inherit;
  }

  .hv3-btn:hover {
    background: ${btnHoverBg};
    color: ${btnColor};
    transform: translateY(-1px);
  }

  .hv3-hamburger {
    display: none;
    width: 40px;
    height: 40px;
    border: 0;
    background: transparent;
    padding: 0;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    flex-shrink: 0;
    font-family: inherit;
  }

  .hv3-hamburger span {
    display: block;
    width: 24px;
    height: 2px;
    border-radius: 999px;
    background: ${linkColor};
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  .hv3-mobile-menu {
    display: none;
    flex-direction: column;
    gap: 0;
    background: #ffffff;
    margin: 12px 35px 20px;
    border-radius: 18px;
    padding: 16px 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    font-family: inherit;
  }

  .hv3-mobile-menu.open {
    display: flex;
  }

  .hv3-mobile-menu a,
  .hv3-mobile-drop-label {
    font-family: inherit;
  }

  .hv3-mobile-menu > a,
  .hv3-mobile-sub a {
    text-decoration: none;
    color: ${linkColor};
    font-weight: 500;
    padding: 11px 0;
    border-bottom: 1px solid #f1f1f1;
    font-size: 15px;
    line-height: 1.35;
  }

  .hv3-mobile-menu > a:hover,
  .hv3-mobile-sub a:hover {
    color: ${linkHoverColor};
  }

  .hv3-mobile-drop-label {
    color: ${linkColor};
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 12px 0 4px;
  }

  .hv3-mobile-sub a {
    display: block;
    padding-left: 12px;
    font-size: 14px;
    color: #555;
  }

  .hv3-mobile-btn {
    margin-top: 12px;
    background: ${btnBg};
    color: ${btnColor} !important;
    padding: 12px 20px !important;
    border-radius: 999px;
    text-align: center;
    font-weight: 700;
    border-bottom: none !important;
  }

  .hv3-mobile-btn:hover {
    background: ${btnHoverBg};
    color: ${btnColor} !important;
  }

  @media (max-width: 992px) {
    .hv3-wrap {
      padding-top: 10px;
    }

    .hv3-navbar {
      margin: 0 16px;
      padding: 14px 20px;
      border-radius: 30px;
      gap: 16px;
    }

    .hv3-menu,
    .hv3-nav-btn {
      display: none;
    }

    .hv3-hamburger {
      display: inline-flex;
    }

    .hv3-mobile-menu {
      margin: 12px 16px 20px;
    }
  }

  @media (max-width: 520px) {
    .hv3-logo-text {
      font-size: 20px;
    }

    .hv3-logo-icon {
      width: 34px;
      height: 34px;
      font-size: 14px;
    }

    .hv3-logo-image {
      height: 34px;
      max-height: 34px;
    }

    .hv3-navbar {
      padding: 12px 16px;
    }
  }
</style>

<div class="hv3-wrap">
  <header class="hv3-navbar">
    <a class="hv3-logo" href="${logoUrl}">
      ${logoImageUrl
        ? `<img src="${logoImageUrl}" alt="${logoText}" class="hv3-logo-image">`
        : `<span class="hv3-logo-icon">${logoIconText}</span>
      <span class="hv3-logo-text">${logoText}</span>`}
    </a>

    <nav class="hv3-menu" aria-label="Primary navigation">
      <ul>
        <li><a href="${nav1Url}">${nav1Label}</a></li>

        <li class="hv3-dropdown">
          <a href="${nav2Url}" class="hv3-dropdown-toggle">
            <span>${nav2Label}</span>
            <span class="hv3-dropdown-caret" aria-hidden="true">▾</span>
          </a>
          <ul class="hv3-dropdown-menu">
            <li><a href="${nav2Drop1Url}">${nav2Drop1Label}</a></li>
            <li><a href="${nav2Drop2Url}">${nav2Drop2Label}</a></li>
            <li><a href="${nav2Drop3Url}">${nav2Drop3Label}</a></li>
          </ul>
        </li>

        <li><a href="${nav3Url}">${nav3Label}</a></li>
        <li><a href="${nav4Url}">${nav4Label}</a></li>
        <li><a href="${nav5Url}">${nav5Label}</a></li>
        <li><a href="${nav6Url}">${nav6Label}</a></li>
      </ul>
    </nav>

    <div class="hv3-nav-btn">
      <a href="${btnUrl}" class="hv3-btn">${btnLabel}</a>
    </div>

    <button
      class="hv3-hamburger"
      id="hv3Toggle"
      type="button"
      aria-label="Toggle menu"
      aria-expanded="false"
      aria-controls="hv3MobileMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>

  <div class="hv3-mobile-menu" id="hv3MobileMenu">
    <a href="${nav1Url}">${nav1Label}</a>

    <span class="hv3-mobile-drop-label">${nav2Label}</span>
    <div class="hv3-mobile-sub">
      <a href="${nav2Drop1Url}">${nav2Drop1Label}</a>
      <a href="${nav2Drop2Url}">${nav2Drop2Label}</a>
      <a href="${nav2Drop3Url}">${nav2Drop3Label}</a>
    </div>

    <a href="${nav3Url}">${nav3Label}</a>
    <a href="${nav4Url}">${nav4Label}</a>
    <a href="${nav5Url}">${nav5Label}</a>
    <a href="${nav6Url}">${nav6Label}</a>
    <a href="${btnUrl}" class="hv3-mobile-btn">${btnLabel}</a>
  </div>
</div>

<script>
  (function () {
    var toggle = document.getElementById("hv3Toggle");
    var menu = document.getElementById("hv3MobileMenu");

    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var isOpen = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    }
  })();
</script>`;
}

export default function HeaderV3({ config }) {
  return null;
}