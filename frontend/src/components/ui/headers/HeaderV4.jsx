// Named export — used by generateComponentCode.js and headers.registry.js
export function getHeaderV4Code(config = {}) {
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

  const navBg           = safeValue(config.navBg, "#5161ce");
  const logoText        = safeValue(config.logoText, "Navbar");
  const logoColor       = safeValue(config.logoColor, "#ffffff");
  const logoUrl         = safeUrl(config.logoUrl || "#");
  const logoImageUrl    = safeValue(config.logoImageUrl, "");

  const linkColor       = safeValue(config.linkColor, "rgba(255,255,255,0.5)");
  const activeLinkColor = safeValue(config.activeLinkColor, "#5161ce");
  const selectorBg      = safeValue(config.selectorBg, "#ffffff");

  const nav1Label       = safeValue(config.nav1Label, "Dashboard");
  const nav1Url         = safeUrl(config.nav1Url || "#");
  const nav1Icon        = safeValue(config.nav1Icon, "fas fa-tachometer-alt");

  const nav2Label       = safeValue(config.nav2Label, "Address Book");
  const nav2Url         = safeUrl(config.nav2Url || "#");
  const nav2Icon        = safeValue(config.nav2Icon, "far fa-address-book");

  const nav3Label       = safeValue(config.nav3Label, "Components");
  const nav3Url         = safeUrl(config.nav3Url || "#");
  const nav3Icon        = safeValue(config.nav3Icon, "far fa-clone");

  const nav4Label       = safeValue(config.nav4Label, "Calendar");
  const nav4Url         = safeUrl(config.nav4Url || "#");
  const nav4Icon        = safeValue(config.nav4Icon, "far fa-calendar-alt");

  const nav5Label       = safeValue(config.nav5Label, "Charts");
  const nav5Url         = safeUrl(config.nav5Url || "#");
  const nav5Icon        = safeValue(config.nav5Icon, "far fa-chart-bar");

  const nav6Label       = safeValue(config.nav6Label, "Documents");
  const nav6Url         = safeUrl(config.nav6Url || "#");
  const nav6Icon        = safeValue(config.nav6Icon, "far fa-copy");

  return `<!-- Header V4 — Animated Selector Navbar | Shopify Bazzar -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>

<style>
  .hv4-wrap,
  .hv4-wrap *,
  .hv4-wrap *::before,
  .hv4-wrap *::after {
    box-sizing: border-box;
  }

  .hv4-wrap {
    font-family: inherit;
  }

  .hv4-navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${navBg};
    padding: 0;
    position: relative;
    flex-wrap: wrap;
    font-family: inherit;
  }

  .hv4-brand {
    padding: 15px;
    color: ${logoColor};
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    font-family: inherit;
  }

  .hv4-brand img {
    max-height: 32px;
    width: auto;
    display: block;
  }

  .hv4-toggler {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px 15px;
  }

  .hv4-collapse {
    overflow: hidden;
    position: relative;
    flex: 1;
  }

  .hv4-nav {
    list-style: none;
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    position: relative;
  }

  .hv4-nav li {
    float: left;
    position: relative;
    list-style: none;
  }

  .hv4-nav li a {
    color: ${linkColor};
    text-decoration: none;
    font-size: 15px;
    display: block;
    padding: 20px 20px;
    transition-duration: 0.6s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    white-space: nowrap;
    font-family: inherit;
  }

  .hv4-nav li a i {
    margin-right: 10px;
  }

  .hv4-nav li.hv4-active > a {
    color: ${activeLinkColor};
    background-color: transparent;
    transition: all 0.7s;
  }

  .hv4-selector {
    display: inline-block;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    transition-duration: 0.6s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    background-color: ${selectorBg};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-top: 10px;
    pointer-events: none;
    z-index: 0;
  }

  .hv4-selector .hv4-right,
  .hv4-selector .hv4-left {
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: ${selectorBg};
    bottom: 10px;
  }

  .hv4-selector .hv4-right { right: -25px; }
  .hv4-selector .hv4-left  { left:  -25px; }

  .hv4-selector .hv4-right:before,
  .hv4-selector .hv4-left:before {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${navBg};
  }

  .hv4-selector .hv4-right:before { bottom: 0; right: -25px; }
  .hv4-selector .hv4-left:before  { bottom: 0; left:  -25px; }

  @media (min-width: 992px) {
    .hv4-navbar   { flex-wrap: nowrap; justify-content: flex-start; }
    .hv4-toggler  { display: none !important; }
    .hv4-collapse { display: block !important; }
    .hv4-nav      { flex-direction: row; margin-left: auto; }
  }

  @media (max-width: 991px) {
    .hv4-toggler         { display: block; }
    .hv4-collapse        { display: none; width: 100%; flex-basis: 100%; }
    .hv4-collapse.hv4-open { display: block; }
    .hv4-nav             { flex-direction: column; }
    .hv4-nav li          { float: none; }
    .hv4-nav li a        { padding: 12px 30px; }

    .hv4-selector {
      margin-top: 0;
      margin-left: 10px;
      border-radius: 0;
      border-top-left-radius: 25px;
      border-bottom-left-radius: 25px;
    }

    .hv4-selector .hv4-left,
    .hv4-selector .hv4-right { right: 10px; left: auto; }
    .hv4-selector .hv4-left  { top: -25px; }
    .hv4-selector .hv4-right { bottom: -25px; }

    .hv4-selector .hv4-left:before  { left: -25px; top: -25px; }
    .hv4-selector .hv4-right:before { bottom: -25px; left: -25px; }
  }
</style>

<div class="hv4-wrap">
  <nav class="hv4-navbar">
    <a class="hv4-brand" href="${logoUrl}">
      ${
        logoImageUrl
          ? `<img src="${logoImageUrl}" alt="${logoText || "Logo"}" />`
          : `<span>${logoText}</span>`
      }
    </a>

    <button class="hv4-toggler" id="hv4Toggler" aria-label="Toggle navigation">
      <i class="fas fa-bars" style="color:#fff; font-size:18px;"></i>
    </button>

    <div class="hv4-collapse" id="hv4Collapse">
      <ul class="hv4-nav" id="hv4Nav">
        <div class="hv4-selector" id="hv4Selector">
          <div class="hv4-left"></div>
          <div class="hv4-right"></div>
        </div>
        <li class="hv4-nav-item">
          <a href="${nav1Url}"><i class="${nav1Icon}"></i>${nav1Label}</a>
        </li>
        <li class="hv4-nav-item hv4-active">
          <a href="${nav2Url}"><i class="${nav2Icon}"></i>${nav2Label}</a>
        </li>
        <li class="hv4-nav-item">
          <a href="${nav3Url}"><i class="${nav3Icon}"></i>${nav3Label}</a>
        </li>
        <li class="hv4-nav-item">
          <a href="${nav4Url}"><i class="${nav4Icon}"></i>${nav4Label}</a>
        </li>
        <li class="hv4-nav-item">
          <a href="${nav5Url}"><i class="${nav5Icon}"></i>${nav5Label}</a>
        </li>
        <li class="hv4-nav-item">
          <a href="${nav6Url}"><i class="${nav6Icon}"></i>${nav6Label}</a>
        </li>
      </ul>
    </div>
  </nav>
</div>

<script>
  (function () {
    var selector = document.getElementById("hv4Selector");
    var navItems = document.querySelectorAll(".hv4-nav-item");
    var toggler  = document.getElementById("hv4Toggler");
    var collapse = document.getElementById("hv4Collapse");

    function moveSelector(el) {
      if (!el || !selector) return;
      selector.style.top    = el.offsetTop    + "px";
      selector.style.left   = el.offsetLeft   + "px";
      selector.style.height = el.offsetHeight + "px";
      selector.style.width  = el.offsetWidth  + "px";
    }

    function setActive(el) {
      navItems.forEach(function (li) { li.classList.remove("hv4-active"); });
      el.classList.add("hv4-active");
      moveSelector(el);
    }

    navItems.forEach(function (li) {
      li.addEventListener("click", function () { setActive(li); });
    });

    if (toggler && collapse) {
      toggler.addEventListener("click", function () {
        collapse.classList.toggle("hv4-open");
        setTimeout(function () {
          var active = document.querySelector(".hv4-nav-item.hv4-active");
          moveSelector(active);
        }, 50);
      });
    }

    function init() {
      var active = document.querySelector(".hv4-nav-item.hv4-active");
      moveSelector(active);
    }

    setTimeout(init, 80);
    window.addEventListener("resize", function () { setTimeout(init, 500); });
  })();
</script>`;
}

// Default export — returns null because editor renders via getCode() → iframe
export default function HeaderV4({ config }) {
  return null;
}