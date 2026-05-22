export function getFeaturedContainersV2Code(config = {}) {
  const sageColor = config.sageColor || "#A8B5A0";
  const sageLightColor = config.sageLightColor || "#E8EDE5";
  const sageDarkColor = config.sageDarkColor || "#7D8B75";
  const creamColor = config.creamColor || "#F7F5F0";
  const beigeColor = config.beigeColor || "#EAE6DC";
  const warmGrayColor = config.warmGrayColor || "#9B958C";
  const charcoalColor = config.charcoalColor || "#2D2D2D";

  const headingText = config.headingText || "Discover What Moves You Naturally.";
  const subtitleText = config.subtitleText || "From daily essentials to timeless tools, explore eco-friendly products that care for you and the planet.";

  const card1Title = config.card1Title || "Why We Do What We Do.";
  const card1LinkLabel = config.card1LinkLabel || "Learn More";
  const card1Url = config.card1Url || "#";

  const card2Title = config.card2Title || "Giving Back to the Earth.";
  const card2LinkLabel = config.card2LinkLabel || "Explore Our Mission";
  const card2Url = config.card2Url || "#";

  const card3Title = config.card3Title || "Practical Steps for a Greener Life.";
  const card3LinkLabel = config.card3LinkLabel || "Get Started";
  const card3Url = config.card3Url || "#";

  const img1Url = config.img1Url || "https://picsum.photos/seed/ecotools/800/600";
  const img1Tag = config.img1Tag || "Eco-Tools";
  const img1Title = config.img1Title || "Crafted for a Greener Life.";

  const img2Url = config.img2Url || "https://picsum.photos/seed/ecochem/800/600";
  const img2Tag = config.img2Tag || "Eco-Chemistry";
  const img2Title = config.img2Title || "Science Meets Sustainability.";

  const img3Url = config.img3Url || "https://picsum.photos/seed/ecoproducts/800/600";
  const img3Tag = config.img3Tag || "Eco-Products";
  const img3Title = config.img3Title || "Pure, Gentle, Sustainable.";

  const videoThumbUrl = config.videoThumbUrl || "https://picsum.photos/seed/ecovideo/1200/800";
  const videoUrl = config.videoUrl || "";
  const videoTag1 = config.videoTag1 || "#EcoTools";
  const videoTag2 = config.videoTag2 || "#SustainableLiving";
  const videoTag3 = config.videoTag3 || "#GreenLife";
  const videoTag4 = config.videoTag4 || "#NaturalProducts";

  const ctaTitle = config.ctaTitle || "Make Everyday Sustainable, Beautiful, and Simple";
  const ctaText = config.ctaText || "Ready to live better for the planet? Explore our curated collection of eco-friendly tools, natural solutions, and sustainable essentials.";
  const ctaBtnLabel = config.ctaBtnLabel || "Browse Eco Favorites";
  const ctaBtnUrl = config.ctaBtnUrl || "#";

  return `<!-- Featured Containers V2 — Discover Collection | Shopify Bazzar -->
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --fcv2-sage:       ${sageColor};
    --fcv2-sage-light: ${sageLightColor};
    --fcv2-sage-dark:  ${sageDarkColor};
    --fcv2-cream:      ${creamColor};
    --fcv2-beige:      ${beigeColor};
    --fcv2-warm-gray:  ${warmGrayColor};
    --fcv2-charcoal:   ${charcoalColor};
    --fcv2-white:      #FFFFFF;
    --fcv2-transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .fcv2-body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    background: var(--fcv2-white);
    color: var(--fcv2-charcoal);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  .fcv2-section {
    padding: 4rem 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
  }

  /* ── Header ── */
  .fcv2-header {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 3rem;
  }

  .fcv2-title {
    font-size: clamp(2rem, 5vw, 4.5rem);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.03em;
    color: var(--fcv2-charcoal);
  }

  .fcv2-subtitle {
    font-size: 1.05rem;
    color: var(--fcv2-warm-gray);
    max-width: 340px;
    line-height: 1.8;
    font-weight: 400;
  }

  /* ── Main Grid ── */
  .fcv2-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }

  /* ── Text Cards ── */
  .fcv2-text-cards {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .fcv2-text-card {
    padding: 2rem 1.75rem;
    border-radius: 20px;
    transition: var(--fcv2-transition);
    cursor: pointer;
    border: 1px solid transparent;
    position: relative;
    overflow: hidden;
    background: var(--fcv2-cream);
  }

  .fcv2-text-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 4px;
    background: var(--fcv2-sage);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  .fcv2-text-card:hover {
    transform: translateY(-6px);
    border-color: var(--fcv2-sage-light);
    box-shadow: 0 20px 40px rgba(0,0,0,0.06);
  }

  .fcv2-text-card:hover::before { transform: scaleX(1); }

  .fcv2-text-card.fcv2-green { background: var(--fcv2-sage-light); }
  .fcv2-text-card.fcv2-beige { background: var(--fcv2-beige); }
  .fcv2-text-card.fcv2-warm  { background: #E6E0D4; }

  .fcv2-text-card-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--fcv2-charcoal);
    letter-spacing: -0.01em;
  }

  .fcv2-text-card-link {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    font-size: 0.95rem;
    color: var(--fcv2-sage-dark);
    text-decoration: none;
    font-weight: 500;
    transition: gap 0.3s ease;
  }

  .fcv2-text-card:hover .fcv2-text-card-link { gap: 0.9rem; }

  .fcv2-arrow-icon {
    width: 18px; height: 18px;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .fcv2-text-card:hover .fcv2-arrow-icon { transform: translate(4px, -4px); }

  /* ── Image Cards Grid ── */
  .fcv2-image-cards {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 200px;
    gap: 1.25rem;
    /* stretch children to fill rows */
    align-items: stretch;
  }

  /* ── Image Card ── */
  .fcv2-image-card {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: var(--fcv2-transition);
    background: var(--fcv2-beige);
    /* fill the grid cell completely */
    width: 100%;
    height: 100%;
    min-height: 0;
  }

  .fcv2-image-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px rgba(0,0,0,0.12);
  }

  .fcv2-image-card img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.7s ease;
    display: block;
  }

  .fcv2-image-card:hover img { transform: scale(1.05); }

  .fcv2-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(45,45,45,0.85) 0%, rgba(45,45,45,0.15) 45%, transparent 100%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1.5rem;
    color: var(--fcv2-white);
    z-index: 1;
  }

  .fcv2-img-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(12px);
    padding: 0.45rem 0.9rem;
    border-radius: 30px;
    width: fit-content;
    font-weight: 500;
    margin-bottom: 0.75rem;
    border: 1px solid rgba(255,255,255,0.2);
  }

  .fcv2-img-title {
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.01em;
  }

  .fcv2-img-arrow {
    position: absolute;
    top: 1.25rem; right: 1.25rem;
    width: 40px; height: 40px;
    background: var(--fcv2-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    z-index: 2;
  }

  .fcv2-image-card:hover .fcv2-img-arrow {
    transform: translate(6px, -6px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }

  /* ── Bottom Section ── */
  .fcv2-bottom {
    display: grid;
    grid-template-columns: 1fr;
    background: var(--fcv2-sage-light);
    border-radius: 24px;
    overflow: hidden;
    margin-top: 1.25rem;
    border: 1px solid var(--fcv2-beige);
  }

  /* ── Video Block ── */
  .fcv2-video {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background: var(--fcv2-beige);
    aspect-ratio: 16/9;
  }

  .fcv2-video img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.7s ease;
  }

  .fcv2-video:hover img { transform: scale(1.03); }

  /* dark overlay so play button pops */
  .fcv2-video::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.18);
    z-index: 1;
    transition: background 0.3s ease;
  }

  .fcv2-video:hover::before { background: rgba(0,0,0,0.28); }

  .fcv2-play {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 80px; height: 80px;
    background: var(--fcv2-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 12px 40px rgba(0,0,0,0.25);
    transition: var(--fcv2-transition);
    border: none;
    cursor: pointer;
    z-index: 2;
  }

  .fcv2-video:hover .fcv2-play {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 16px 48px rgba(0,0,0,0.3);
  }

  .fcv2-play svg {
    width: 26px; height: 26px;
    margin-left: 5px;
    color: var(--fcv2-sage-dark);
  }

  .fcv2-video-tags {
    position: absolute;
    bottom: 1.5rem; left: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    z-index: 2;
  }

  .fcv2-video-tag {
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(8px);
    padding: 0.4rem 0.85rem;
    border-radius: 24px;
    font-size: 0.78rem;
    font-weight: 500;
    color: var(--fcv2-charcoal);
    border: 1px solid rgba(0,0,0,0.05);
  }

  /* ── CTA ── */
  .fcv2-cta {
    padding: 3rem 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--fcv2-sage-light);
  }

  .fcv2-cta-title {
    font-size: clamp(1.6rem, 3vw, 2.75rem);
    font-weight: 600;
    line-height: 1.25;
    margin-bottom: 1.1rem;
    color: var(--fcv2-charcoal);
    letter-spacing: -0.02em;
  }

  .fcv2-cta-text {
    font-size: 1rem;
    color: var(--fcv2-warm-gray);
    line-height: 1.8;
    margin-bottom: 2rem;
    max-width: 460px;
  }

  .fcv2-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.85rem;
    background: var(--fcv2-charcoal);
    color: var(--fcv2-white);
    padding: 1rem 2rem;
    border-radius: 32px;
    text-decoration: none;
    font-weight: 500;
    width: fit-content;
    transition: var(--fcv2-transition);
    font-size: 1rem;
  }

  .fcv2-cta-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(45,45,45,0.2);
    background: var(--fcv2-sage-dark);
  }

  .fcv2-cta-btn svg { transition: transform 0.3s ease; }
  .fcv2-cta-btn:hover svg { transform: translateX(4px); }

  /* ── Animations ── */
  @keyframes fcv2FadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .fcv2-text-card, .fcv2-image-card, .fcv2-bottom {
    animation: fcv2FadeUp 0.9s ease-out backwards;
  }

  .fcv2-text-card:nth-child(1) { animation-delay: 0.1s; }
  .fcv2-text-card:nth-child(2) { animation-delay: 0.2s; }
  .fcv2-text-card:nth-child(3) { animation-delay: 0.3s; }
  .fcv2-image-card:nth-child(1) { animation-delay: 0.2s; }
  .fcv2-image-card:nth-child(2) { animation-delay: 0.3s; }
  .fcv2-image-card:nth-child(3) { animation-delay: 0.4s; }
  .fcv2-bottom { animation-delay: 0.5s; }

  /* ════════════════════════════════════
     RESPONSIVE — ALL BREAKPOINTS
  ════════════════════════════════════ */

  @media (max-width: 480px) {
    .fcv2-section { padding: 3rem 1rem; }
    .fcv2-title { font-size: clamp(1.75rem, 7vw, 2.25rem); }
    .fcv2-subtitle { font-size: 0.95rem; }
    .fcv2-text-card { padding: 1.5rem 1.25rem; }
    .fcv2-text-card-title { font-size: 1.05rem; }
    .fcv2-img-title { font-size: 1.1rem; }
    .fcv2-image-cards { grid-auto-rows: 180px; }
    .fcv2-cta { padding: 2rem 1.5rem; }
    .fcv2-cta-btn { font-size: 0.9rem; padding: 0.9rem 1.6rem; }
    .fcv2-play { width: 60px; height: 60px; }
    .fcv2-play svg { width: 20px; height: 20px; }
    .fcv2-video-tags { bottom: 0.75rem; left: 0.75rem; gap: 0.35rem; }
    .fcv2-video-tag { font-size: 0.7rem; padding: 0.3rem 0.6rem; }
  }

  @media (min-width: 481px) and (max-width: 899px) {
    .fcv2-section { padding: 4rem 2rem; }
    .fcv2-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 2rem;
    }
    .fcv2-title { max-width: 55%; }
    /* 2-col image grid, first card spans both cols */
    .fcv2-image-cards {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 200px;
    }
    .fcv2-image-card:first-child {
      grid-column: 1 / -1;
      /* taller span for the featured card */
    }
  }

  @media (min-width: 900px) {
    .fcv2-section { padding: 6rem 3rem; }

    .fcv2-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 3rem;
      margin-bottom: 4rem;
    }
    .fcv2-title { max-width: 650px; font-size: clamp(2.75rem, 5vw, 4.5rem); }

    /* 2-col main grid */
    .fcv2-grid {
      grid-template-columns: 380px 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    /* ─── KEY FIX: 2-col, 2-row image grid, all equal height ─── */
    .fcv2-image-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* two equal rows — both sides same height */
      grid-template-rows: 1fr 1fr;
      grid-auto-rows: unset;
      gap: 1.25rem;
      align-items: stretch;
      /* make sure the image-cards container fills its grid cell */
      align-self: stretch;
    }

    /* First card: tall left column spanning both rows */
    .fcv2-image-card:first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    /* Second and third cards: right column, each takes one row */
    .fcv2-image-card:nth-child(2) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    .fcv2-image-card:nth-child(3) {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }

    /* bottom 2-col */
    .fcv2-bottom {
      grid-template-columns: 1.1fr 1fr;
      margin-top: 2rem;
    }

    /* video fills its column fully */
    .fcv2-video {
      aspect-ratio: unset;
      min-height: 420px;
      height: 100%;
    }

    .fcv2-text-card { padding: 2.5rem; }
    .fcv2-text-card-title { font-size: 1.35rem; }
    .fcv2-img-title { font-size: 1.5rem; }
    .fcv2-img-overlay { padding: 2rem; }
    .fcv2-img-arrow { top: 2rem; right: 2rem; width: 44px; height: 44px; }
    .fcv2-cta { padding: 4rem 3.5rem; }
    .fcv2-video-tags { bottom: 2rem; left: 2rem; gap: 0.6rem; }
    .fcv2-video-tag { font-size: 0.8rem; padding: 0.5rem 1rem; }
    .fcv2-play { width: 88px; height: 88px; }
    .fcv2-play svg { width: 28px; height: 28px; margin-left: 5px; }
  }

  @media (min-width: 1200px) {
    .fcv2-grid { grid-template-columns: 420px 1fr; }
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
</style>

<div class="fcv2-body">
<section class="fcv2-section">

  <header class="fcv2-header">
    <h1 class="fcv2-title">${headingText}</h1>
    <p class="fcv2-subtitle">${subtitleText}</p>
  </header>

  <div class="fcv2-grid">

    <div class="fcv2-text-cards">
      <article class="fcv2-text-card fcv2-green">
        <h3 class="fcv2-text-card-title">${card1Title}</h3>
        <a href="${card1Url}" class="fcv2-text-card-link">
          ${card1LinkLabel}
          <svg class="fcv2-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </article>
      <article class="fcv2-text-card fcv2-beige">
        <h3 class="fcv2-text-card-title">${card2Title}</h3>
        <a href="${card2Url}" class="fcv2-text-card-link">
          ${card2LinkLabel}
          <svg class="fcv2-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </article>
      <article class="fcv2-text-card fcv2-warm">
        <h3 class="fcv2-text-card-title">${card3Title}</h3>
        <a href="${card3Url}" class="fcv2-text-card-link">
          ${card3LinkLabel}
          <svg class="fcv2-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </a>
      </article>
    </div>

    <div class="fcv2-image-cards">

      <article class="fcv2-image-card">
        <img src="${img1Url}" alt="${img1Title}" loading="lazy" />
        <div class="fcv2-img-overlay">
          <span class="fcv2-img-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            ${img1Tag}
          </span>
          <h3 class="fcv2-img-title">${img1Title}</h3>
        </div>
        <div class="fcv2-img-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${charcoalColor}" stroke-width="2" stroke-linecap="round">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </div>
      </article>

      <article class="fcv2-image-card">
        <img src="${img2Url}" alt="${img2Title}" loading="lazy" />
        <div class="fcv2-img-overlay">
          <span class="fcv2-img-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
            ${img2Tag}
          </span>
          <h3 class="fcv2-img-title">${img2Title}</h3>
        </div>
        <div class="fcv2-img-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${charcoalColor}" stroke-width="2" stroke-linecap="round">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </div>
      </article>

      <article class="fcv2-image-card">
        <img src="${img3Url}" alt="${img3Title}" loading="lazy" />
        <div class="fcv2-img-overlay">
          <span class="fcv2-img-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
            ${img3Tag}
          </span>
          <h3 class="fcv2-img-title">${img3Title}</h3>
        </div>
        <div class="fcv2-img-arrow">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${charcoalColor}" stroke-width="2" stroke-linecap="round">
            <path d="M7 17L17 7M17 7H7M17 7V17"/>
          </svg>
        </div>
      </article>

    </div>
  </div>

  <div class="fcv2-bottom">
    <div class="fcv2-video" id="fcv2-video-block">
      <img src="${videoThumbUrl}" alt="Video thumbnail" loading="lazy" />
      <button class="fcv2-play" id="fcv2-play-btn" aria-label="Play video">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </button>
      <div class="fcv2-video-tags">
        <span class="fcv2-video-tag">${videoTag1}</span>
        <span class="fcv2-video-tag">${videoTag2}</span>
        <span class="fcv2-video-tag">${videoTag3}</span>
        <span class="fcv2-video-tag">${videoTag4}</span>
      </div>
    </div>
    <div class="fcv2-cta">
      <h2 class="fcv2-cta-title">${ctaTitle}</h2>
      <p class="fcv2-cta-text">${ctaText}</p>
      <a href="${ctaBtnUrl}" class="fcv2-cta-btn">
        ${ctaBtnLabel}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>

</section>
</div>

<script>
  (function() {
    /* ── Scroll reveal ── */
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fcv2-text-card, .fcv2-image-card, .fcv2-bottom').forEach(function(el) {
      observer.observe(el);
    });

    /* ── Video player ── */
    var playBtn   = document.getElementById('fcv2-play-btn');
    var videoBlock = document.getElementById('fcv2-video-block');
    var videoSrc  = "${videoUrl}";

    if (playBtn && videoBlock) {
      playBtn.addEventListener('click', function() {
        if (videoSrc && videoSrc.trim() !== '') {
          /* Replace thumbnail with an actual <video> element */
          var vid = document.createElement('video');
          vid.src = videoSrc;
          vid.controls = true;
          vid.autoplay = true;
          vid.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:3;background:#000;';
          videoBlock.appendChild(vid);
          /* Hide play button and tags */
          playBtn.style.display = 'none';
          var tags = videoBlock.querySelector('.fcv2-video-tags');
          if (tags) tags.style.display = 'none';
          vid.play();
        } else {
          /* No video URL — animate the button as feedback */
          playBtn.style.transform = 'translate(-50%, -50%) scale(1.18)';
          setTimeout(function() {
            playBtn.style.transform = 'translate(-50%, -50%) scale(1)';
          }, 200);
          console.log('fcv2: No videoUrl set in config.');
        }
      });
    }
  })();
</script>`;
}

export default function FeaturedContainersV2({ config }) {
  return null;
}