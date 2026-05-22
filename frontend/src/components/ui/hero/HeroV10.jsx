export function getHeroV10Code(config = {}) {
  const sectionBg = config.sectionBg || "#f5f2ee";
  const ariaLabel = config.ariaLabel || "Autumn-Winter 25/26 Collection";
  const leftImg = config.leftImg || "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=700&q=85";
  const leftImgAlt = config.leftImgAlt || "Woman in autumn fashion standing in studio";
  const titleText = config.titleText || "Autumn-Winter 25/26";
  const titleColor = config.titleColor || "#1c1c1c";
  const labelText = config.labelText || "The Lace";
  const ctaText = config.ctaText || "Shop Now";
  const ctaLink = config.ctaLink || "#";
  const ctaBg = config.ctaBg || "#5c1a1a";
  const ctaBgHover = config.ctaBgHover || "#7a2222";
  const ctaColor = config.ctaColor || "#ffffff";
  const rightImg1 = config.rightImg1 || "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=85";
  const rightImg1Alt = config.rightImg1Alt || "Woman in cozy autumn knitwear";
  const rightImg2 = config.rightImg2 || "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=85";
  const rightImg2Alt = config.rightImg2Alt || "Woman in winter fashion lounging";

  return `<!-- Hero V10 — Autumn-Winter Editorial Split | Shopify Bazzar -->
<style>
  .hv10, .hv10 * , .hv10 *::before, .hv10 *::after {
    box-sizing: border-box;
  }

  .hv10 * {
    margin: 0;
    padding: 0;
  }

  .hv10 {
    font-family: inherit;
    color: inherit;
    -webkit-font-smoothing: antialiased;
  }

  .hv10__section {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: clamp(260px, 36vw, 480px);
    background: ${sectionBg};
    overflow: hidden;
    gap: 0;
  }

  .hv10__left {
    position: relative;
    overflow: hidden;
  }

  .hv10__left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .hv10__left:hover img {
    transform: scale(1.04);
  }

  .hv10__center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: clamp(20px, 3vw, 48px) clamp(20px, 3.5vw, 44px);
    background: ${sectionBg};
    text-align: center;
    gap: clamp(10px, 1.5vw, 18px);
    font-family: inherit;
  }

  .hv10__title {
    font-family: inherit;
    font-size: clamp(1.3rem, 3vw, 2.5rem);
    font-weight: 600;
    color: ${titleColor};
    letter-spacing: 0.01em;
    line-height: 1.2;
  }

  .hv10__label {
    font-family: inherit;
    font-size: clamp(0.58rem, 0.85vw, 0.68rem);
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #888;
  }

  .hv10__cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: ${ctaBg};
    color: ${ctaColor};
    font-family: inherit;
    font-size: clamp(0.65rem, 0.9vw, 0.75rem);
    font-weight: 600;
    letter-spacing: 0.06em;
    line-height: 1;
    padding: clamp(9px, 1.2vw, 13px) clamp(22px, 3vw, 34px);
    border-radius: 999px;
    text-decoration: none;
    border: none;
    cursor: pointer;
    transition: background 180ms, transform 140ms, box-shadow 180ms;
    box-shadow: 0 2px 12px rgba(92, 26, 26, 0.22);
  }

  .hv10__cta:hover {
    background: ${ctaBgHover};
  }

  .hv10__cta:active {
    transform: none;
  }

  .hv10__right {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 3px;
    overflow: hidden;
  }

  .hv10__right-img {
    position: relative;
    overflow: hidden;
  }

  .hv10__right-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
    transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .hv10__right-img:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) and (min-width: 769px) {
    .hv10__section {
      height: clamp(240px, 38vw, 420px);
    }

    .hv10__title {
      font-size: clamp(1.2rem, 3.2vw, 2rem);
    }
  }

  @media (max-width: 768px) and (min-width: 481px) {
    .hv10__section {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      height: auto;
      gap: 3px;
    }

    .hv10__left {
      grid-row: 1 / 3;
      height: clamp(280px, 55vw, 420px);
    }

    .hv10__center {
      grid-column: 2;
      grid-row: 1;
      height: clamp(140px, 27vw, 210px);
      padding: 18px 20px;
      gap: 10px;
    }

    .hv10__right {
      grid-column: 2;
      grid-row: 2;
      height: clamp(140px, 27vw, 210px);
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
    }

    .hv10__title {
      font-size: clamp(1rem, 3.5vw, 1.5rem);
    }

    .hv10__label {
      font-size: 0.58rem;
    }
  }

  @media (max-width: 480px) {
    .hv10__section {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto;
      height: auto;
      gap: 3px;
    }

    .hv10__left {
      height: clamp(240px, 70vw, 360px);
    }

    .hv10__center {
      padding: 28px 24px;
      gap: 12px;
    }

    .hv10__right {
      height: clamp(180px, 52vw, 280px);
      grid-template-rows: 1fr;
      grid-template-columns: 1fr 1fr;
      gap: 3px;
    }

    .hv10__title {
      font-size: clamp(1.5rem, 7vw, 2rem);
    }
  }

  @media (max-width: 360px) {
    .hv10__left {
      height: 64vw;
    }

    .hv10__right {
      height: 48vw;
    }

    .hv10__title {
      font-size: 1.35rem;
    }
  }
</style>

<div class="hv10">
  <section class="hv10__section" aria-label="${ariaLabel}">
    <div class="hv10__left">
      <img
        src="${leftImg}"
        alt="${leftImgAlt}"
        loading="eager"
        width="700"
        height="900"
      />
    </div>

    <div class="hv10__center">
      <h2 class="hv10__title">${titleText}</h2>
      <p class="hv10__label">${labelText}</p>
      <a href="${ctaLink}" class="hv10__cta">${ctaText}</a>
    </div>

    <div class="hv10__right">
      <div class="hv10__right-img">
        <img
          src="${rightImg1}"
          alt="${rightImg1Alt}"
          loading="eager"
          width="700"
          height="460"
        />
      </div>
      <div class="hv10__right-img">
        <img
          src="${rightImg2}"
          alt="${rightImg2Alt}"
          loading="lazy"
          width="700"
          height="460"
        />
      </div>
    </div>
  </section>
</div>
  `;
}

export default function HeroV10({ config }) {
  return null;
}

