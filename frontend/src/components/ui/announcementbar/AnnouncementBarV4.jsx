export function getAnnouncementBarV4Code(config = {}) {
  const bgColor        = config.bgColor        || "#c8102e";
  const textColor      = config.textColor      || "#ffffff";
  const dividerColor   = config.dividerColor   || "rgba(255,255,255,0.3)";
  const mutedOpacity   = config.mutedOpacity   || "0.8";
  const height         = config.height         || "36px";
  const autoInterval   = config.autoInterval   || 3500;

  // Left
  const leftText       = config.leftText       || "Free shipping above $100";

  // Center (desktop)
  const desktopMessage = config.desktopMessage || "Loved by thousands — over 1,200 five-star reviews <a href=\"#\">and counting</a>";

  // Mobile slides
  const slide1Text     = config.slide1Text     || "🚚 Free shipping above $100";
  const slide2Text     = config.slide2Text     || "⭐ 1,200+ five-star reviews <a href=\"#\">and counting</a>";
  const slide3Text     = config.slide3Text     || "👤 Men's Cosmetics for Daily Use";
  const slide4Text     = config.slide4Text     || "📖 <a href=\"#\">Journal</a> &nbsp;·&nbsp; <a href=\"#\">Shopping Guide</a> &nbsp;·&nbsp; <a href=\"#\">Stores</a>";

  // Right nav links
  const nav1Text       = config.nav1Text       || "Men's Cosmetics";
  const nav1Url        = config.nav1Url        || "#";
  const nav2Text       = config.nav2Text       || "Contact us";
  const nav2Url        = config.nav2Url        || "#";
  const nav3Text       = config.nav3Text       || "Journal";
  const nav3Url        = config.nav3Url        || "#";
  const nav4Text       = config.nav4Text       || "Shopping Guide";
  const nav4Url        = config.nav4Url        || "#";
  const nav5Text       = config.nav5Text       || "Stores";
  const nav5Url        = config.nav5Url        || "#";

  // Social URLs
  const facebookUrl    = config.facebookUrl    || "#";
  const instagramUrl   = config.instagramUrl   || "#";
  const tiktokUrl      = config.tiktokUrl      || "#";
  const youtubeUrl     = config.youtubeUrl     || "#";

  return `<!-- AnnouncementBar V4 — Branded Top Bar with Nav + Social | Shopify Bazzar -->
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  .ab4 {
    background: ${bgColor};
    color: ${textColor};
    border-bottom: 1px solid rgba(0,0,0,0.2);
    position: sticky;
    top: 0;
    z-index: 999;
    font-family: inherit;
  }

  .ab4__inner {
    display: flex;
    align-items: center;
    height: ${height};
    padding: 0 1rem;
  }

  /* ── Left ── */
  .ab4__left {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    flex-shrink: 0;
    padding-right: 0.75rem;
    border-right: 1px solid ${dividerColor};
    white-space: nowrap;
  }

  .ab4__shipping {
    font-size: 0.68rem;
    opacity: ${mutedOpacity};
  }

  /* ── Centre ── */
  .ab4__center {
    flex: 1;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  .ab4__message {
    font-size: 0.74rem;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 1rem;
    text-align: center;
  }

  .ab4__message a {
    color: ${textColor};
    font-weight: 700;
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  /* ── Right ── */
  .ab4__right {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    padding-left: 0.75rem;
    border-left: 1px solid ${dividerColor};
    gap: 0;
  }

  .ab4__nav {
    display: flex;
    align-items: center;
  }

  .ab4__nav-link {
    color: ${textColor};
    text-decoration: none;
    font-size: 0.68rem;
    font-weight: 500;
    padding: 0 0.5rem;
    opacity: 0.88;
    white-space: nowrap;
    transition: opacity 0.15s;
    border-right: 1px solid ${dividerColor};
    line-height: ${height};
  }

  .ab4__nav-link:last-of-type { border-right: none; }
  .ab4__nav-link:hover { opacity: 1; }

  .ab4__social {
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    border-left: 1px solid ${dividerColor};
  }

  .ab4__social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    color: ${textColor};
    opacity: 0.8;
    transition: opacity 0.15s;
    text-decoration: none;
  }

  .ab4__social-link:hover { opacity: 1; }

  .ab4__social-link svg {
    width: 12px;
    height: 12px;
    fill: currentColor;
  }

  /* ── Mobile slides ── */
  .ab4__slides { display: none; }

  @media (max-width: 767px) {
    .ab4__inner { padding: 0; height: 38px; }
    .ab4__left, .ab4__right { display: none; }
    .ab4__center { width: 100%; height: 100%; }
    .ab4__message { display: none; }

    .ab4__slides {
      display: block;
      position: relative;
      width: 100%;
      height: 38px;
    }

    .ab4__slide {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1.25rem;
      font-size: 0.75rem;
      font-weight: 500;
      text-align: center;
      white-space: nowrap;
      color: ${textColor};
      opacity: 0;
      transform: translateY(6px);
      transition: opacity 0.35s ease, transform 0.35s ease;
      pointer-events: none;
    }

    .ab4__slide.is-active {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    .ab4__slide a {
      color: ${textColor};
      font-weight: 700;
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .ab4__slide { transition: none; }
    }
  }
</style>

<div class="ab4" role="banner" aria-label="Site announcements">
  <div class="ab4__inner">

    <!-- LEFT -->
    <div class="ab4__left">
      <span class="ab4__shipping">${leftText}</span>
    </div>

    <!-- CENTRE -->
    <div class="ab4__center" id="ab4-center">
      <p class="ab4__message">${desktopMessage}</p>

      <div class="ab4__slides" id="ab4-slides">
        <div class="ab4__slide is-active">${slide1Text}</div>
        <div class="ab4__slide">${slide2Text}</div>
        <div class="ab4__slide">${slide3Text}</div>
        <div class="ab4__slide">${slide4Text}</div>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="ab4__right">
      <nav class="ab4__nav" aria-label="Quick links">
        <a href="${nav1Url}" class="ab4__nav-link">${nav1Text}</a>
        <a href="${nav2Url}" class="ab4__nav-link">${nav2Text}</a>
        <a href="${nav3Url}" class="ab4__nav-link">${nav3Text}</a>
        <a href="${nav4Url}" class="ab4__nav-link">${nav4Text}</a>
        <a href="${nav5Url}" class="ab4__nav-link">${nav5Text}</a>
      </nav>

      <div class="ab4__social" aria-label="Social media">
        <a href="${facebookUrl}" class="ab4__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"/></svg>
        </a>
        <a href="${instagramUrl}" class="ab4__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>
        <a href="${tiktokUrl}" class="ab4__social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
        </a>
        <a href="${youtubeUrl}" class="ab4__social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        </a>
      </div>
    </div>

  </div>
</div>

<script>
  (function () {
    const slidesWrap = document.getElementById('ab4-slides');
    if (!slidesWrap) return;

    const slides = slidesWrap.querySelectorAll('.ab4__slide');
    const total = slides.length;
    if (!total) return;

    let current = 0;
    let timer = null;
    let active = false;
    const INTERVAL = ${autoInterval};

    function goTo(i) {
      slides[current].classList.remove('is-active');
      current = (i + total) % total;
      slides[current].classList.add('is-active');
    }

    function start() {
      if (active) return;
      active = true;
      timer = setInterval(() => goTo(current + 1), INTERVAL);
    }

    function stop() {
      active = false;
      clearInterval(timer);
    }

    function init() {
      if (window.innerWidth < 768) {
        goTo(0);
        start();
      } else {
        stop();
        slides.forEach((s, i) => s.classList.toggle('is-active', i === 0));
      }
    }

    let tx = 0;
    slidesWrap.addEventListener('touchstart', e => {
      tx = e.changedTouches[0].clientX;
      stop();
    }, { passive: true });

    slidesWrap.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
      start();
    }, { passive: true });

    init();
    window.addEventListener('resize', init);
  })();
</script>`;
}

export default function AnnouncementBarV4({ config }) {
  return null;
}