export function getHeroV7Code(config = {}) {
  const gridBg = config.gridBg || "#111111";

  const top1Img = config.top1Img || "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80";
  const top1Title = config.top1Title || "Headphones for Every Audiophile";
  const top1Desc = config.top1Desc || "Premium headphones delivering immersive sound for audiophiles.";
  const top1Cta = config.top1Cta || "Shop Now";
  const top1Url = config.top1Url || "#";

  const top2Img = config.top2Img || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80";
  const top2Title = config.top2Title || "Headphones for True Music Lovers";
  const top2Desc = config.top2Desc || "Experience pure sound crafted for passionate, true music lovers.";
  const top2Cta = config.top2Cta || "Shop Now";
  const top2Url = config.top2Url || "#";

  const bot1Img = config.bot1Img || "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80";
  const bot1Title = config.bot1Title || "Earbuds for Lifestyles";
  const bot1Cta = config.bot1Cta || "Shop Now";
  const bot1Url = config.bot1Url || "#";

  const bot2Img = config.bot2Img || "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80";
  const bot2Title = config.bot2Title || "Comfort Meets Innovation";
  const bot2Cta = config.bot2Cta || "Shop Now";
  const bot2Url = config.bot2Url || "#";

  const bot3Img = config.bot3Img || "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80";
  const bot3Title = config.bot3Title || "Home Music Systems";
  const bot3Cta = config.bot3Cta || "Shop Now";
  const bot3Url = config.bot3Url || "#";

  const bot4Img = config.bot4Img || "https://images.unsplash.com/photo-1631867675167-90a456a90863?w=600&q=80";
  const bot4Title = config.bot4Title || "Lives Through Technology";
  const bot4Cta = config.bot4Cta || "Shop Now";
  const bot4Url = config.bot4Url || "#";

  const ctaBorderColor = config.ctaBorderColor || "rgba(255,255,255,0.7)";
  const ctaHoverBg = config.ctaHoverBg || "rgba(255,255,255,0.18)";

  return `<!-- Hero V7 — Banner Grid | Shopify Bazzar -->
<style>
  .hv7,
  .hv7 *,
  .hv7 *::before,
  .hv7 *::after {
    box-sizing: border-box;
  }

  .hv7 {
    font-family: inherit;
    -webkit-font-smoothing: antialiased;
    background: ${gridBg};
  }

  .hv7__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    gap: 4px;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 4px;
  }

  .hv7__top {
    grid-column: span 1;
  }

  .hv7__bottom-row {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;
  }

  .hv7__banner {
    position: relative;
    overflow: hidden;
    border-radius: 4px;
  }

  .hv7__banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .hv7__banner:hover img {
    transform: scale(1.04);
  }

  .hv7__large {
    height: clamp(200px, 28vw, 380px);
  }

  .hv7__small {
    height: clamp(120px, 14vw, 190px);
  }

  .hv7__content {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.62) 0%,
      rgba(0,0,0,0.22) 55%,
      rgba(0,0,0,0) 100%
    );
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: clamp(12px, 2.5vw, 28px);
    font-family: inherit;
  }

  .hv7__title {
    font-size: clamp(0.82rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #fff;
    line-height: 1.2;
    margin-bottom: clamp(4px, 0.8vw, 8px);
    text-shadow: 0 1px 6px rgba(0,0,0,0.5);
    max-width: 260px;
    font-family: inherit;
  }

  .hv7__desc {
    font-size: clamp(0.65rem, 1vw, 0.8rem);
    color: rgba(255,255,255,0.78);
    line-height: 1.45;
    max-width: 220px;
    margin-bottom: clamp(8px, 1.2vw, 14px);
    font-family: inherit;
  }

  .hv7__small .hv7__desc {
    display: none;
  }

  .hv7__cta {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-height: 44px;
    background: transparent;
    color: #fff;
    font-size: clamp(0.6rem, 0.9vw, 0.72rem);
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 5px 14px;
    border-radius: 999px;
    border: 1.5px solid ${ctaBorderColor};
    text-decoration: none;
    cursor: pointer;
    width: fit-content;
    transition: background 160ms, border-color 160ms, transform 160ms;
    backdrop-filter: blur(4px);
    font: inherit;
  }

  .hv7__cta:hover {
    background: ${ctaHoverBg};
    border-color: #fff;
    transform: translateY(-1px);
  }

  .hv7__cta:active {
    transform: translateY(0);
  }

  .hv7__cta:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 3px;
  }

  @media (max-width: 900px) {
    .hv7__bottom-row {
      grid-template-columns: repeat(2, 1fr);
    }

    .hv7__large {
      height: clamp(180px, 30vw, 320px);
    }

    .hv7__small {
      height: clamp(130px, 18vw, 190px);
    }
  }

  @media (max-width: 600px) {
    .hv7__grid {
      grid-template-columns: 1fr;
      padding: 3px;
      gap: 3px;
    }

    .hv7__top {
      grid-column: span 1;
    }

    .hv7__bottom-row {
      grid-template-columns: repeat(2, 1fr);
    }

    .hv7__large {
      height: clamp(200px, 55vw, 320px);
    }

    .hv7__small {
      height: clamp(120px, 32vw, 180px);
    }

    .hv7__title {
      font-size: clamp(0.8rem, 3.5vw, 1rem);
    }

    .hv7__small .hv7__desc {
      display: none;
    }
  }

  @media (max-width: 380px) {
    .hv7__bottom-row {
      grid-template-columns: 1fr 1fr;
    }

    .hv7__large {
      height: 200px;
    }

    .hv7__small {
      height: 120px;
    }
  }
</style>

<div class="hv7">
  <div class="hv7__grid">
    <div class="hv7__banner hv7__large hv7__top">
      <img src="${top1Img}" alt="${top1Title}" loading="eager" />
      <div class="hv7__content">
        <h3 class="hv7__title">${top1Title}</h3>
        <p class="hv7__desc">${top1Desc}</p>
        <a href="${top1Url}" class="hv7__cta">${top1Cta}</a>
      </div>
    </div>

    <div class="hv7__banner hv7__large hv7__top">
      <img src="${top2Img}" alt="${top2Title}" loading="eager" />
      <div class="hv7__content">
        <h3 class="hv7__title">${top2Title}</h3>
        <p class="hv7__desc">${top2Desc}</p>
        <a href="${top2Url}" class="hv7__cta">${top2Cta}</a>
      </div>
    </div>

    <div class="hv7__bottom-row">
      <div class="hv7__banner hv7__small">
        <img src="${bot1Img}" alt="${bot1Title}" loading="lazy" />
        <div class="hv7__content">
          <h3 class="hv7__title">${bot1Title}</h3>
          <a href="${bot1Url}" class="hv7__cta">${bot1Cta}</a>
        </div>
      </div>

      <div class="hv7__banner hv7__small">
        <img src="${bot2Img}" alt="${bot2Title}" loading="lazy" />
        <div class="hv7__content">
          <h3 class="hv7__title">${bot2Title}</h3>
          <a href="${bot2Url}" class="hv7__cta">${bot2Cta}</a>
        </div>
      </div>

      <div class="hv7__banner hv7__small">
        <img src="${bot3Img}" alt="${bot3Title}" loading="lazy" />
        <div class="hv7__content">
          <h3 class="hv7__title">${bot3Title}</h3>
          <a href="${bot3Url}" class="hv7__cta">${bot3Cta}</a>
        </div>
      </div>

      <div class="hv7__banner hv7__small">
        <img src="${bot4Img}" alt="${bot4Title}" loading="lazy" />
        <div class="hv7__content">
          <h3 class="hv7__title">${bot4Title}</h3>
          <a href="${bot4Url}" class="hv7__cta">${bot4Cta}</a>
        </div>
      </div>
    </div>
  </div>
</div>
  `;
}

export default function HeroV7({ config }) {
  return null;
}