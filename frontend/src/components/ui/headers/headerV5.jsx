// Named export — used by generateComponentCode.js and headers.registry.js
export function getHeaderV5Code(config = {}) {
  const navBg = config.navBg || "#ffffff";
  const brandBg = config.brandBg || "#009fff";
  const brandColor = config.brandColor || "#ffffff";
  const brandText = config.brandText || "AF";
  const accentColor = config.accentColor || "#009fff";
  const darkBg = config.darkBg || "#292a2c";
  const megaMenuBg = config.megaMenuBg || "#eeeeee";
  const notifCount = config.notifCount || "10";
  const avatarUrl = config.avatarUrl || "https://www.gravatar.com/avatar/47db31bd2e0b161008607d84c74305b5?s=96&d=mm&r=g";
  const togglerLabel = config.togglerLabel || "Advanced";
  const col1Title = config.col1Title || "Slider Revolution";
  const col1Link1 = config.col1Link1 || "Slider Revolution";
  const col1Link2 = config.col1Link2 || "Navigation Editor";
  const col1Link3 = config.col1Link3 || "Add-Ons";
  const col2Title = config.col2Title || "Flyouts";
  const col2Link1 = config.col2Link1 || "All Flyouts";
  const col2Link2 = config.col2Link2 || "Add New Flyout";
  const col2Link3 = config.col2Link3 || "Re-Order";
  const col3Title = config.col3Title || "Cornerstone";
  const col3Link1 = config.col3Link1 || "Cornerstone";
  const col3Link2 = config.col3Link2 || "Cornerstone";
  const col3Link3 = config.col3Link3 || "Cornerstone";
  const col4Title = config.col4Title || "Ess. Grid";
  const col4Link1 = config.col4Link1 || "Essential Grid";
  const col4Link2 = config.col4Link2 || "Item Skin Editor";
  const col4Link3 = config.col4Link3 || "Meta Data Handling";
  const sb1Label = config.sb1Label || "Reporting";
  const sb2Label = config.sb2Label || "Content";
  const sb3Label = config.sb3Label || "Engagement";
  const sb4Label = config.sb4Label || "Image Center";
  const sb5Label = config.sb5Label || "Settings";
  const sb6Label = config.sb6Label || "Support";

  return `<!-- Header V5 — Admin Mega-Menu + Sidebar | Shopify Bazzar -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"/>

<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  body, .hv5-root {
    font-family: inherit;
    background-color: #eeeeee;
    min-height: 100vh;
  }

  a { text-decoration: none; color: inherit; }
  button:focus, a:focus { outline: none; box-shadow: none; }

  /* ── NAVBAR ── */
  .hv5-navbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 60px;
    background-color: ${navBg};
    display: flex;
    align-items: center;
    z-index: 1000;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  }

  .hv5-brand {
    background-color: ${brandBg};
    color: ${brandColor};
    height: 60px;
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 700;
    flex-shrink: 0;
    text-decoration: none;
  }

  .hv5-toggler {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 75px;
    height: 60px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    color: #333;
    transition: color 0.2s;
  }

  .hv5-toggler.active,
  .hv5-toggler.active i { color: ${accentColor}; }

  .hv5-toggler-label { display: none; }

  .hv5-right-links {
    margin-left: auto;
    margin-right: 16px;
    display: flex;
    align-items: center;
    height: 60px;
  }

  .hv5-rl-item {
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 14px;
    cursor: pointer;
  }

  .hv5-rl-item.hv5-home { border-right: 1px solid #ababab; }
  .hv5-right-links i { font-size: 20px; color: #000; }

  .hv5-badge {
    color: #fff;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 10px;
    right: 6px;
    background-color: red;
    border-radius: 50%;
    text-align: center;
    font-size: 9px;
    font-weight: 600;
    line-height: 16px;
  }

  .hv5-avatar {
    border-radius: 50%;
    height: 36px;
    width: 36px;
    object-fit: cover;
  }

  .hv5-dd-menu {
    display: none;
    position: absolute;
    top: 60px;
    right: 0;
    background: #fff;
    min-width: 140px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.12);
    z-index: 2000;
  }

  .hv5-dd-menu.hv5-notif {
    width: 270px;
    max-height: 520px;
    overflow-y: auto;
  }

  .hv5-rl-item:hover .hv5-dd-menu { display: block; }

  .hv5-dd-item {
    display: block;
    padding: 10px 14px;
    font-size: 12px;
    color: #292b2c;
    border-bottom: 1px solid #f0f0f0;
    transition: background 0.2s;
  }

  .hv5-dd-item:hover { background: #f5f5f5; }
  .hv5-dd-item h5 { font-size: 11px; font-weight: 700; line-height: 1.8; }
  .hv5-dd-item p  { font-size: 9px; color: #666; line-height: 1.8; }
  .hv5-dd-item.active { background: ${accentColor}; color: #fff; }
  .hv5-dd-item.active p { color: rgba(255,255,255,0.8); }

  /* ── MEGA MENU ── */
  .hv5-megamenu {
    display: none;
    position: fixed;
    top: 60px;
    left: 75px;
    right: 0;
    background-color: ${megaMenuBg};
    z-index: 900;
  }

  .hv5-megamenu.open { display: block; }

  .hv5-mega-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .hv5-mega-col { border-right: 1px solid #ddd; }
  .hv5-mega-col:last-child { border-right: none; }

  .hv5-mega-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 20px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.5px;
    background: ${megaMenuBg};
    color: #292a2c;
    border: none;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }

  .hv5-mega-btn i { font-size: 18px; color: ${accentColor}; }
  .hv5-mega-btn.open { background-color: ${darkBg}; color: #fff; }
  .hv5-mega-btn.open i { color: #fff; }
  .hv5-mega-btn .hv5-ico-minus { display: none; }
  .hv5-mega-btn.open .hv5-ico-minus { display: inline; }
  .hv5-mega-btn.open .hv5-ico-plus  { display: none; }

  .hv5-mega-sub { display: none; background-color: ${darkBg}; list-style: none; }
  .hv5-mega-sub.open { display: block; }
  .hv5-mega-sub a {
    display: block;
    padding: 12px 20px;
    font-size: 12px;
    color: #fff;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    transition: background 0.2s;
  }
  .hv5-mega-sub a:hover { background-color: ${accentColor}; }

  /* ── SIDEBAR ── */
  .hv5-sidebar {
    position: fixed;
    top: 60px;
    left: 0;
    width: 75px;
    height: calc(100vh - 60px);
    background-color: ${darkBg};
    z-index: 800;
    overflow: hidden;
    transition: width 0.4s ease;
  }

  .hv5-sidebar:hover { width: 160px; }

  .hv5-sb-list { list-style: none; width: 160px; }

  .hv5-sb-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    color: #fff;
    text-decoration: none;
    transition: background 0.2s;
    white-space: nowrap;
  }

  .hv5-sb-link i { font-size: 22px; flex-shrink: 0; }

  .hv5-sb-label {
    font-size: 14px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s, visibility 0.4s;
  }

  .hv5-sidebar:hover .hv5-sb-label { opacity: 1; visibility: visible; }
  .hv5-sb-link:hover { background-color: ${accentColor}; }

  .hv5-submenu {
    position: fixed;
    left: 160px;
    top: 60px;
    width: 195px;
    height: calc(100vh - 60px);
    background-color: ${accentColor};
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s;
    list-style: none;
    overflow-y: auto;
    z-index: 700;
    padding-top: 8px;
  }

  .hv5-sb-item:hover .hv5-submenu { opacity: 1; visibility: visible; }

  .hv5-submenu li { padding-top: 8px; }

  .hv5-submenu a {
    display: block;
    padding: 10px 20px;
    color: #fff;
    font-size: 14px;
    transition: background 0.2s;
  }

  .hv5-submenu a:hover { background: rgba(0,0,0,0.15); }

  /* ── CONTENT ── */
  .hv5-content {
    margin-top: 60px;
    margin-left: 75px;
    padding: 30px;
    font-size: 14px;
    color: #444;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    .hv5-toggler-label { display: inline; }
    .hv5-mega-grid     { grid-template-columns: 1fr 1fr; }
    .hv5-sidebar       { display: none; }
    .hv5-megamenu      { left: 0; }
    .hv5-content       { margin-left: 0; }
  }

  @media (max-width: 480px) {
    .hv5-mega-grid { grid-template-columns: 1fr; }
  }
</style>

<div class="hv5-root">

  <nav class="hv5-navbar">
    <a class="hv5-brand" href="#">${brandText}</a>

    <button class="hv5-toggler" id="hv5Toggler">
      <i class="fa fa-bars"></i>
      <span class="hv5-toggler-label">${togglerLabel}</span>
    </button>

    <div class="hv5-right-links">
      <a class="hv5-rl-item hv5-home" href="#" title="Home">
        <i class="fa fa-home"></i>
      </a>

      <div class="hv5-rl-item">
        <i class="fa fa-wrench"></i>
        <div class="hv5-dd-menu">
          <a class="hv5-dd-item" href="#">Recompile CSS</a>
        </div>
      </div>

      <div class="hv5-rl-item">
        <span class="hv5-badge">${notifCount}</span>
        <i class="fa fa-bell"></i>
        <div class="hv5-dd-menu hv5-notif">
          <a class="hv5-dd-item active" href="#">
            <h5>Real Estate Marketing Automation</h5>
            <p>17 October 2016 | 9:32 pm</p>
          </a>
          <a class="hv5-dd-item" href="#">
            <h5>How to Generate Seller Leads For $0.88</h5>
            <p>3 October 2016 | 9:58 pm</p>
          </a>
          <a class="hv5-dd-item" href="#">
            <h5>AgentFire Re-Opens For Business</h5>
            <p>20 September 2016 | 6:28 pm</p>
          </a>
          <a class="hv5-dd-item" href="#">
            <h5>Real Estate Blogging 101</h5>
            <p>7 September 2016 | 3:03 pm</p>
          </a>
          <a class="hv5-dd-item" href="#">
            <h5>How To Get More Listings</h5>
            <p>16 August 2016 | 8:26 pm</p>
          </a>
        </div>
      </div>

      <div class="hv5-rl-item">
        <i class="fa fa-envelope"></i>
        <div class="hv5-dd-menu">
          <a class="hv5-dd-item" href="#">No new messages</a>
        </div>
      </div>

      <div class="hv5-rl-item">
        <img class="hv5-avatar" src="${avatarUrl}" alt="User avatar"/>
        <div class="hv5-dd-menu">
          <a class="hv5-dd-item" href="#">Edit my profile</a>
          <a class="hv5-dd-item" href="#">Log Out</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="hv5-megamenu" id="hv5Megamenu">
    <div class="hv5-mega-grid">

      <div class="hv5-mega-col">
        <button class="hv5-mega-btn" data-target="hv5Sub1">
          ${col1Title}
          <span><i class="fa fa-minus hv5-ico-minus"></i><i class="fa fa-plus hv5-ico-plus"></i></span>
        </button>
        <ul class="hv5-mega-sub" id="hv5Sub1">
          <li><a href="#">${col1Link1}</a></li>
          <li><a href="#">${col1Link2}</a></li>
          <li><a href="#">${col1Link3}</a></li>
        </ul>
      </div>

      <div class="hv5-mega-col">
        <button class="hv5-mega-btn" data-target="hv5Sub2">
          ${col2Title}
          <span><i class="fa fa-minus hv5-ico-minus"></i><i class="fa fa-plus hv5-ico-plus"></i></span>
        </button>
        <ul class="hv5-mega-sub" id="hv5Sub2">
          <li><a href="#">${col2Link1}</a></li>
          <li><a href="#">${col2Link2}</a></li>
          <li><a href="#">${col2Link3}</a></li>
        </ul>
      </div>

      <div class="hv5-mega-col">
        <button class="hv5-mega-btn" data-target="hv5Sub3">
          ${col3Title}
          <span><i class="fa fa-minus hv5-ico-minus"></i><i class="fa fa-plus hv5-ico-plus"></i></span>
        </button>
        <ul class="hv5-mega-sub" id="hv5Sub3">
          <li><a href="#">${col3Link1}</a></li>
          <li><a href="#">${col3Link2}</a></li>
          <li><a href="#">${col3Link3}</a></li>
        </ul>
      </div>

      <div class="hv5-mega-col">
        <button class="hv5-mega-btn" data-target="hv5Sub4">
          ${col4Title}
          <span><i class="fa fa-minus hv5-ico-minus"></i><i class="fa fa-plus hv5-ico-plus"></i></span>
        </button>
        <ul class="hv5-mega-sub" id="hv5Sub4">
          <li><a href="#">${col4Link1}</a></li>
          <li><a href="#">${col4Link2}</a></li>
          <li><a href="#">${col4Link3}</a></li>
        </ul>
      </div>

    </div>
  </div>

  <aside class="hv5-sidebar">
    <ul class="hv5-sb-list">
      <li class="hv5-sb-item">
        <a class="hv5-sb-link" href="#">
          <i class="fa fa-user"></i>
          <span class="hv5-sb-label">${sb1Label}</span>
        </a>
        <ul class="hv5-submenu">
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">SEO</a></li>
        </ul>
      </li>
      <li class="hv5-sb-item">
        <a class="hv5-sb-link" href="#">
          <i class="fa fa-file-alt"></i>
          <span class="hv5-sb-label">${sb2Label}</span>
        </a>
        <ul class="hv5-submenu">
          <li><a href="#">Posts</a></li>
          <li><a href="#">Blog Assist</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Area Content</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Team Members</a></li>
        </ul>
      </li>
      <li class="hv5-sb-item">
        <a class="hv5-sb-link" href="#">
          <i class="fa fa-comments"></i>
          <span class="hv5-sb-label">${sb3Label}</span>
        </a>
        <ul class="hv5-submenu">
          <li><a href="#">Comments</a></li>
          <li><a href="#">Forms</a></li>
          <li><a href="#">Home Valuation</a></li>
        </ul>
      </li>
      <li class="hv5-sb-item">
        <a class="hv5-sb-link" href="#">
          <i class="fa fa-images"></i>
          <span class="hv5-sb-label">${sb4Label}</span>
        </a>
        <ul class="hv5-submenu">
          <li><a href="#">Media Library</a></li>
          <li><a href="#">Soliloquy Slider</a></li>
        </ul>
      </li>
      <li class="hv5-sb-item">
        <a class="hv5-sb-link" href="#">
          <i class="fa fa-cog"></i>
          <span class="hv5-sb-label">${sb5Label}</span>
        </a>
        <ul class="hv5-submenu">
          <li><a href="#">Users</a></li>
          <li><a href="#">AgentFire Settings</a></li>
          <li><a href="#">Plugin Settings</a></li>
          <li><a href="#">WordPress Settings</a></li>
          <li><a href="#">Site Appearance</a></li>
        </ul>
      </li>
      <li class="hv5-sb-item">
        <a class="hv5-sb-link" href="#">
          <i class="fa fa-life-ring"></i>
          <span class="hv5-sb-label">${sb6Label}</span>
        </a>
        <ul class="hv5-submenu">
          <li><a href="#">Video Tutorials</a></li>
          <li><a href="#">Help Desk</a></li>
          <li><a href="#">Send Support Request</a></li>
        </ul>
      </li>
    </ul>
  </aside>

  <main class="hv5-content">
    <div>CONTENT GOES HERE</div>
  </main>

</div>

<script>
  (function () {
    var toggler  = document.getElementById("hv5Toggler");
    var megamenu = document.getElementById("hv5Megamenu");

    if (toggler && megamenu) {
      toggler.addEventListener("click", function () {
        var isOpen = megamenu.classList.toggle("open");
        toggler.classList.toggle("active", isOpen);
      });
    }

    var megaBtns = document.querySelectorAll(".hv5-mega-btn");
    megaBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var sub = document.getElementById(btn.getAttribute("data-target"));
        var isOpen = sub.classList.toggle("open");
        btn.classList.toggle("open", isOpen);
      });
    });
  })();
</script>`;
}

// Default export — returns null because editor renders via getCode() → iframe
export default function HeaderV5({ config }) {
  return null;
}