export function getCollectionSliderV7Code(config = {}) {
  const sectionBg      = config.sectionBg      || "#ffffff";
  const headingText    = config.headingText     || "Shop By Categories";
  const headingColor   = config.headingColor    || "#1a1a1a";
  const borderColor    = config.borderColor     || "#e8e8e8";
  const cardHoverBg    = config.cardHoverBg     || "#f7f7f7";
  const saleBg         = config.saleBg          || "#e8251a";
  const saleText       = config.saleText        || "Sale";
  const viewAllText    = config.viewAllText     || "Shop All Products";
  const viewAllUrl     = config.viewAllUrl      || "/collections";

  // Category 1 — Sale (special card, no image)
  const cat1Label      = config.cat1Label       || "Sale Items";
  const cat1Url        = config.cat1Url         || "/collections/sale-items";

  // Category 2–12 — regular image cards
  const cat2Label  = config.cat2Label  || "Press Tables";
  const cat2Url    = config.cat2Url    || "/collections/press-tables";
  const cat2Img    = config.cat2Img    || "https://picsum.photos/seed/presstables/240/240";

  const cat3Label  = config.cat3Label  || "Lighting";
  const cat3Url    = config.cat3Url    || "/collections/lighting";
  const cat3Img    = config.cat3Img    || "https://picsum.photos/seed/lighting/240/240";

  const cat4Label  = config.cat4Label  || "Spoke Sofa";
  const cat4Url    = config.cat4Url    || "/collections/spoke-sofa";
  const cat4Img    = config.cat4Img    || "https://picsum.photos/seed/spokesofa/240/240";

  const cat5Label  = config.cat5Label  || "Storage";
  const cat5Url    = config.cat5Url    || "/collections/storage";
  const cat5Img    = config.cat5Img    || "https://picsum.photos/seed/storage/240/240";

  const cat6Label  = config.cat6Label  || "Turn Chairs";
  const cat6Url    = config.cat6Url    || "/collections/turn-chairs";
  const cat6Img    = config.cat6Img    || "https://picsum.photos/seed/turnchairs/240/240";

  const cat7Label  = config.cat7Label  || "Lounge Chairs";
  const cat7Url    = config.cat7Url    || "/collections/lounge-chairs";
  const cat7Img    = config.cat7Img    || "https://picsum.photos/seed/loungechairs/240/240";

  const cat8Label  = config.cat8Label  || "Curve Coat";
  const cat8Url    = config.cat8Url    || "/collections/curve-coat";
  const cat8Img    = config.cat8Img    || "https://picsum.photos/seed/curvecoat/240/240";

  const cat9Label  = config.cat9Label  || "Cross Tables";
  const cat9Url    = config.cat9Url    || "/collections/cross-tables";
  const cat9Img    = config.cat9Img    || "https://picsum.photos/seed/crosstables/240/240";

  const cat10Label = config.cat10Label || "Bend Chairs";
  const cat10Url   = config.cat10Url   || "/collections/bend-chairs";
  const cat10Img   = config.cat10Img   || "https://picsum.photos/seed/bendchairs/240/240";

  const cat11Label = config.cat11Label || "Bar Chairs";
  const cat11Url   = config.cat11Url   || "/collections/bar-chairs";
  const cat11Img   = config.cat11Img   || "https://picsum.photos/seed/barchairs/240/240";

  const cat12Label = config.cat12Label || "Accessories";
  const cat12Url   = config.cat12Url   || "/collections/accessories";
  const cat12Img   = config.cat12Img   || "https://picsum.photos/seed/accessories/240/240";

  const arrowSvg = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  const arrowSvgLg = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const regularCard = (label, url, img) => `
      <div class="f-column">
        <a href="${url}" class="collection-card__wrapper">
          <div class="collection-card__image">
            <img src="${img}" alt="${label}" width="240" height="240" loading="lazy">
          </div>
          <h3 class="collection-card__title">
            <span>${label}</span>
            ${arrowSvg}
          </h3>
        </a>
      </div>`;

  return `
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    background: ${sectionBg};
    color: #1a1a1a;
    -webkit-font-smoothing: antialiased;
  }

  .section-collection-list {
    padding: 60px 0 40px;
    background: ${sectionBg};
  }

  .page-width {
    max-width: 1280px;
    margin-inline: auto;
    padding-inline: 40px;
  }

  .section__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  .section__heading {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: ${headingColor};
    line-height: 1.2;
  }

  .btn--plain {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${headingColor};
    text-decoration: none;
    white-space: nowrap;
    transition: opacity 180ms ease;
  }

  .btn--plain:hover { opacity: 0.6; }

  .btn--plain svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  .collection-list__items {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border: 1px solid ${borderColor};
    border-radius: 8px;
    overflow: hidden;
  }

  .collection-card__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    text-decoration: none;
    color: inherit;
    padding: 24px 16px 20px;
    border-right: 1px solid ${borderColor};
    border-bottom: 1px solid ${borderColor};
    transition: background 180ms ease;
    position: relative;
  }

  .f-column:nth-child(6n) .collection-card__wrapper,
  .f-column:last-child .collection-card__wrapper {
    border-right: none;
  }

  .f-column:nth-child(n+7) .collection-card__wrapper {
    border-bottom: none;
  }

  .collection-card__wrapper:hover {
    background: ${cardHoverBg};
  }

  .collection-card__wrapper:hover .collection-card__image img {
    transform: scale(1.06);
  }

  .collection-card__image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background: #f2f2f0;
    flex-shrink: 0;
    position: relative;
    margin-bottom: 14px;
  }

  .collection-card--sale .collection-card__image {
    background: ${saleBg};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .collection-card--sale .sale-label {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.01em;
  }

  .collection-card__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .collection-card__title {
    font-size: 0.8125rem;
    font-weight: 500;
    color: #1a1a1a;
    line-height: 1.3;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }

  .collection-card__title svg {
    width: 14px;
    height: 14px;
    opacity: 0;
    transform: translateX(-4px);
    transition: opacity 180ms ease, transform 180ms ease;
    flex-shrink: 0;
  }

  .collection-card__wrapper:hover .collection-card__title svg {
    opacity: 1;
    transform: translateX(0);
  }

  @media (max-width: 1024px) {
    .collection-list__items {
      grid-template-columns: repeat(4, 1fr);
    }
    .f-column:nth-child(6n) .collection-card__wrapper { border-right: 1px solid ${borderColor}; }
    .f-column:nth-child(4n) .collection-card__wrapper,
    .f-column:last-child .collection-card__wrapper { border-right: none; }
    .f-column:nth-child(n+7) .collection-card__wrapper { border-bottom: 1px solid ${borderColor}; }
    .f-column:nth-child(n+9) .collection-card__wrapper { border-bottom: none; }
  }

  @media (max-width: 767px) {
    .page-width { padding-inline: 16px; }
    .section-collection-list { padding: 40px 0 24px; }
    .section__heading { font-size: 1.25rem; }
    .collection-list__items {
      grid-template-columns: repeat(3, 1fr);
    }
    .collection-card__image { width: 72px; height: 72px; }
    .collection-card__wrapper { padding: 16px 8px 14px; }
    .f-column:nth-child(4n) .collection-card__wrapper { border-right: 1px solid ${borderColor}; }
    .f-column:nth-child(3n) .collection-card__wrapper,
    .f-column:last-child .collection-card__wrapper { border-right: none; }
    .f-column:nth-child(n+10) .collection-card__wrapper { border-bottom: none; }
    .collection-card__title svg { display: none; }
  }
</style>

<section class="section-collection-list">
  <div class="page-width">

    <div class="section__header">
      <h2 class="section__heading">${headingText}</h2>
      <a href="${viewAllUrl}" class="btn--plain">
        <span>${viewAllText}</span>
        ${arrowSvgLg}
      </a>
    </div>

    <div class="collection-list__items">

      <!-- 1. Sale Card -->
      <div class="f-column">
        <a href="${cat1Url}" class="collection-card__wrapper collection-card--sale">
          <div class="collection-card__image">
            <span class="sale-label">${saleText}</span>
          </div>
          <h3 class="collection-card__title">
            <span>${cat1Label}</span>
            ${arrowSvg}
          </h3>
        </a>
      </div>

      ${regularCard(cat2Label, cat2Url, cat2Img)}
      ${regularCard(cat3Label, cat3Url, cat3Img)}
      ${regularCard(cat4Label, cat4Url, cat4Img)}
      ${regularCard(cat5Label, cat5Url, cat5Img)}
      ${regularCard(cat6Label, cat6Url, cat6Img)}
      ${regularCard(cat7Label, cat7Url, cat7Img)}
      ${regularCard(cat8Label, cat8Url, cat8Img)}
      ${regularCard(cat9Label, cat9Url, cat9Img)}
      ${regularCard(cat10Label, cat10Url, cat10Img)}
      ${regularCard(cat11Label, cat11Url, cat11Img)}
      ${regularCard(cat12Label, cat12Url, cat12Img)}

    </div>
  </div>
</section>
  `;
}

export default function CollectionSliderV7({ config }) {
  return null;
}