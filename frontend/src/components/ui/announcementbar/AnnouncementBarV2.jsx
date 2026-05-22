export function getAnnouncementBarV2Code(config = {}) {
  const bgColor      = config.bgColor      || "#18181b";
  const textColor    = config.textColor    || "#fafafa";
  const borderColor  = config.borderColor  || "#27272a";
  const iconColor    = config.iconColor    || "#a1a1aa";
  const hoverBg      = config.hoverBg      || "#27272a";
  const autoInterval = config.autoInterval || 3500;

  const item1Text    = config.item1Text    || "Free shipping over $50";
  const item1Url     = config.item1Url     || "#";
  const item2Text    = config.item2Text    || "30-day easy returns";
  const item2Url     = config.item2Url     || "#";
  const item3Text    = config.item3Text    || "24/7 customer support";
  const item3Url     = config.item3Url     || "#";

  return `<!-- AnnouncementBar V2 — Multi-Column + Mobile Carousel | Shopify Bazzar -->
<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  .ab2 {
    background: ${bgColor};
    color: ${textColor};
    border-bottom: 1px solid ${borderColor};
    overflow: hidden;
    font-family: inherit;
  }

  .ab2__track {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .ab2__item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    padding: 0.75rem 1rem;
    font-size: 0.8125rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    text-decoration: none;
    color: inherit;
    transition: background 0.2s ease, color 0.2s ease;
    white-space: nowrap;
  }

  .ab2__item:hover {
    background: ${hoverBg};
    color: #ffffff;
  }

  .ab2__item:not(:last-child) {
    border-right: 1px solid ${borderColor};
  }

  .ab2__icon {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    color: ${iconColor};
    transition: color 0.2s ease;
  }

  .ab2__item:hover .ab2__icon {
    color: #ffffff;
  }

  @media (max-width: 767px) {
    .ab2__track {
      display: flex;
      transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
      will-change: transform;
      grid-template-columns: none;
    }

    .ab2__item {
      flex: 0 0 100%;
      width: 100%;
      justify-content: center;
      padding: 0.7rem 1rem;
      border-right: none !important;
    }

    .ab2__item:hover { background: transparent; }

    @media (prefers-reduced-motion: reduce) {
      .ab2__track { transition: none; }
    }
  }
</style>

<div class="ab2" role="banner" aria-label="Site announcements">
  <div class="ab2__track" id="ab2-track">

    <a href="${item1Url}" class="ab2__item">
      <svg class="ab2__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 18H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4"/>
        <path d="M13 11l4 7h5l-4-7"/>
        <circle cx="7" cy="18" r="2"/>
        <circle cx="17" cy="18" r="2"/>
        <path d="M5 18v-6"/>
        <path d="M13 11V7a1 1 0 0 1 1-1h4"/>
      </svg>
      <span>${item1Text}</span>
    </a>

    <a href="${item2Url}" class="ab2__item">
      <svg class="ab2__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M21 12a9 9 0 1 1-6.22-8.56"/>
        <polyline points="21 3 21 9 15 9"/>
      </svg>
      <span>${item2Text}</span>
    </a>

    <a href="${item3Url}" class="ab2__item">
      <svg class="ab2__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/>
        <path d="M2 6.92v3a2 2 0 0 0 2.18 2 19.79 19.79 0 0 0 8.63 3.07"/>
        <path d="M19 8a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1"/>
        <path d="M5 8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2"/>
      </svg>
      <span>${item3Text}</span>
    </a>

  </div>
</div>

<script>
  (function () {
    const track = document.getElementById('ab2-track');
    if (!track) return;

    const items = track.querySelectorAll('.ab2__item');
    const total = items.length;
    if (!total) return;

    let current = 0;
    let timer = null;
    let isMobile = false;
    const INTERVAL = ${autoInterval};

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = \`translateX(-\${current * 100}%)\`;
    }

    function next() { goTo(current + 1); }

    function startAutoplay() {
      clearInterval(timer);
      timer = setInterval(next, INTERVAL);
    }

    function stopAutoplay() { clearInterval(timer); }

    function setup() {
      const mobile = window.innerWidth < 768;
      if (mobile === isMobile) return;
      isMobile = mobile;

      if (mobile) {
        goTo(0);
        startAutoplay();
        track.addEventListener('mouseenter', stopAutoplay);
        track.addEventListener('mouseleave', startAutoplay);
        track.addEventListener('focusin', stopAutoplay);
        track.addEventListener('focusout', startAutoplay);
      } else {
        stopAutoplay();
        track.style.transform = '';
      }
    }

    let touchStartX = 0;
    track.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].clientX;
      stopAutoplay();
    }, { passive: true });

    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) goTo(current + (dx < 0 ? 1 : -1));
      startAutoplay();
    }, { passive: true });

    setup();
    window.addEventListener('resize', setup);
  })();
</script>`;
}

export default function AnnouncementBarV2({ config }) {
  return null;
}