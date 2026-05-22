export function getAnnouncementBarV1Code(config = {}) {
  const bgColor = config.bgColor || "#0f172a";
  const textColor = config.textColor || "#f8fafc";
  const accentColor = config.accentColor || "#38bdf8";
  const height = config.height || "48px";
  const fontSize = config.fontSize || "14px";
  const autoInterval = config.autoInterval || 4000;

  const slide1Text = config.slide1Text || "Free shipping on orders over $50";
  const slide2Text = config.slide2Text || "New summer collection just dropped";
  const slide3Text = config.slide3Text || "Subscribe & save 15% on your first order";

  return `<!-- AnnouncementBar V1 — Rotating Slider | Shopify Bazzar -->
<style>
  :root {
    --sb-bg: ${bgColor};
    --sb-text: ${textColor};
    --sb-accent: ${accentColor};
    --sb-height: ${height};
    --sb-font-size: ${fontSize};
    --sb-transition: 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .slider-bar {
    width: 100% !important;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: var(--sb-bg);
    color: var(--sb-text);
    font-size: var(--sb-font-size);
    height: var(--sb-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
    overflow: hidden;
    font-family: inherit;
    line-height: 1.5;
  }

  .slider-bar__nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    flex-shrink: 0;
    z-index: 10;
  }

  .slider-bar__nav {
    width: 32px;
    height: 32px;
    background: rgba(255,255,255,0.08);
    border: none;
    color: var(--sb-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.2s ease;
    padding: 0;
  }

  .slider-bar__nav:hover {
    background: rgba(255,255,255,0.15);
    transform: scale(1.1);
  }

  .slider-bar__nav:active { transform: scale(0.95); }

  .slider-bar__nav:focus-visible {
    outline: 2px solid var(--sb-accent);
    outline-offset: 2px;
  }

  .slider-bar__viewport {
    flex: 1;
    min-width: 0;
    position: relative;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .slider-bar__slide {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 60px;
    text-align: center;
    opacity: 0;
    transform: translateX(12px);
    transition: opacity var(--sb-transition), transform var(--sb-transition);
    pointer-events: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .slider-bar__slide.active {
    opacity: 1;
    transform: translateX(0);
    pointer-events: auto;
  }

  @media (prefers-reduced-motion: reduce) {
    :root { --sb-transition: 0s; }
  }

  @media (max-width: 640px) {
    :root {
      --sb-font-size: 13px;
      --sb-height: 44px;
    }
    .slider-bar__slide {
      padding: 0 50px;
      font-size: 12px;
    }
    .slider-bar__nav-wrapper { width: 40px; }
    .slider-bar__nav { width: 28px; height: 28px; }
  }

  @media (min-width: 641px) {
    :root { --sb-font-size: 15px; }
  }
</style>

<div class="slider-bar" role="region" aria-label="Announcements" tabindex="0">
  <div class="slider-bar__nav-wrapper">
    <button class="slider-bar__nav slider-bar__nav--prev" aria-label="Previous announcement">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>

  <div class="slider-bar__viewport" aria-live="polite" aria-atomic="true">
    <div class="slider-bar__slide active" data-index="0">${slide1Text}</div>
    <div class="slider-bar__slide" data-index="1">${slide2Text}</div>
    <div class="slider-bar__slide" data-index="2">${slide3Text}</div>
  </div>

  <div class="slider-bar__nav-wrapper">
    <button class="slider-bar__nav slider-bar__nav--next" aria-label="Next announcement">
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</div>

<script>
  (() => {
    'use strict';

    const bar = document.querySelector('.slider-bar');
    const viewport = document.querySelector('.slider-bar__viewport');
    if (!bar || !viewport) return;

    const slides = Array.from(viewport.querySelectorAll('.slider-bar__slide'));
    const prevBtn = bar.querySelector('.slider-bar__nav--prev');
    const nextBtn = bar.querySelector('.slider-bar__nav--next');
    if (!slides.length || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    let autoSlideTimer = null;
    let isPaused = false;
    const INTERVAL = ${autoInterval};

    const updateSlide = (index) => {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          slide.classList.remove('active');
          slide.setAttribute('aria-hidden', 'true');
        }
      });
      currentIndex = index;
    };

    const nextSlide = () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      updateSlide(nextIndex);
    };

    const prevSlide = () => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlide(prevIndex);
    };

    const startAutoSlide = () => {
      stopAutoSlide();
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      autoSlideTimer = setInterval(nextSlide, INTERVAL);
    };

    const stopAutoSlide = () => {
      if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
      }
    };

    const handleManualNav = (direction) => {
      direction === 'next' ? nextSlide() : prevSlide();
      if (!isPaused) startAutoSlide();
    };

    nextBtn.addEventListener('click', () => handleManualNav('next'));
    prevBtn.addEventListener('click', () => handleManualNav('prev'));

    bar.addEventListener('mouseenter', () => {
      isPaused = true;
      stopAutoSlide();
    });

    bar.addEventListener('mouseleave', () => {
      isPaused = false;
      startAutoSlide();
    });

    bar.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { e.preventDefault(); handleManualNav('next'); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); handleManualNav('prev'); }
    });

    updateSlide(0);
    startAutoSlide();
  })();
</script>`;
}

export default function AnnouncementBarV1({ config }) {
  return null;
}