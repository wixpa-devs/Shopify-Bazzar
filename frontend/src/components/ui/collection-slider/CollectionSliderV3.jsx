export function getCollectionSliderV3Code(config = {}) {
  const sectionPaddingY     = config.sectionPaddingY     || "2rem";
  const sectionPaddingX     = config.sectionPaddingX     || "1rem";
  const gridGap             = config.gridGap             || "0.75rem";

  // Grid 1 — top-left large banner
  const banner1Bg           = config.banner1Bg           || "#2d3748";
  const banner1Tagline      = config.banner1Tagline      || "THE HOLIDAY COLLECTION";
  const banner1Heading      = config.banner1Heading      || "Feel Good Gifting";
  const banner1BtnText      = config.banner1BtnText      || "SHOP GIFTS";
  const banner1BtnUrl       = config.banner1BtnUrl       || "#";
  const banner1TaglineColor = config.banner1TaglineColor || "#ffffff";
  const banner1HeadingColor = config.banner1HeadingColor || "#ffffff";
  const banner1BtnBg        = config.banner1BtnBg        || "#ffffff";
  const banner1BtnColor     = config.banner1BtnColor     || "#000000";

  // Grid 1 — bottom-left image
  const grid1Img5Url        = config.grid1Img5Url        || "https://picsum.photos/seed/grid5/300/200";
  const grid1Img5Alt        = config.grid1Img5Alt        || "Grid Image 5";

  // Grid 1 — bottom-right colored block
  const banner2Bg           = config.banner2Bg           || "#4a5568";
  const banner2Text         = config.banner2Text         || "Comfort They'll Covet";
  const banner2TextColor    = config.banner2TextColor    || "#ffffff";

  // Grid 2 — images
  const grid2Img2Url        = config.grid2Img2Url        || "https://picsum.photos/seed/grid2/600/200";
  const grid2Img2Alt        = config.grid2Img2Alt        || "Grid Image 2";
  const grid2Img3Url        = config.grid2Img3Url        || "https://picsum.photos/seed/grid3/300/400";
  const grid2Img3Alt        = config.grid2Img3Alt        || "Grid Image 3";
  const grid2Img4Url        = config.grid2Img4Url        || "https://picsum.photos/seed/grid4/300/400";
  const grid2Img4Alt        = config.grid2Img4Alt        || "Grid Image 4";

  const borderRadius        = config.borderRadius        || "15px";

  return `
<style>
  .cs3-section {
    padding: ${sectionPaddingY} ${sectionPaddingX};
  }

  .cs3-outer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: ${gridGap};
  }

  .cs3-left-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: ${gridGap};
  }

  .cs3-banner1 {
    grid-column: span 2;
    grid-row: span 2;
    background: ${banner1Bg};
    border-radius: ${borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 1.5rem;
    min-height: 260px;
  }

  .cs3-banner1-inner {
    text-align: center;
  }

  .cs3-banner1-tagline {
    font-family: monospace;
    font-weight: bold;
    font-size: 16px;
    color: ${banner1TaglineColor};
    margin-bottom: 0;
  }

  .cs3-banner1-heading {
    font-family: Georgia, serif;
    font-weight: 500;
    font-size: 40px;
    color: ${banner1HeadingColor};
    margin: 1rem 0;
    line-height: 1.2;
  }

  .cs3-banner1-btn {
    display: inline-block;
    background: ${banner1BtnBg};
    color: ${banner1BtnColor};
    padding: 0.5rem 1.25rem;
    font-size: 14px;
    font-weight: bold;
    font-family: monospace;
    border-radius: 25px;
    text-decoration: none;
    cursor: pointer;
    border: 2px solid transparent;
    transition: background 0.3s ease, color 0.3s ease;
  }

  .cs3-banner1-btn:hover {
    background: #000000;
    color: #ffffff;
  }

  .cs3-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: ${borderRadius};
    cursor: pointer;
  }

  .cs3-img-wrap {
    overflow: hidden;
    border-radius: ${borderRadius};
  }

  .cs3-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    cursor: pointer;
    border-radius: ${borderRadius};
    transition: transform 0.4s ease;
  }

  .cs3-img-wrap img:hover {
    transform: scale(1.03);
  }

  .cs3-banner2 {
    background: ${banner2Bg};
    border-radius: ${borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1.25rem;
    min-height: 120px;
  }

  .cs3-banner2-text {
    font-family: Georgia, serif;
    font-weight: 500;
    font-size: 20px;
    color: ${banner2TextColor};
    line-height: 1.3;
  }

  .cs3-right-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: ${gridGap};
  }

  .cs3-img2-wrap {
    grid-column: span 2;
    overflow: hidden;
    border-radius: ${borderRadius};
    max-height: 200px;
  }

  .cs3-img2-wrap img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;
    cursor: pointer;
    border-radius: ${borderRadius};
    transition: transform 0.4s ease;
  }

  .cs3-img2-wrap img:hover {
    transform: scale(1.03);
  }

  .cs3-img3-wrap {
    grid-row: span 2;
    overflow: hidden;
    border-radius: ${borderRadius};
  }

  .cs3-img3-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    cursor: pointer;
    border-radius: ${borderRadius};
    transition: transform 0.4s ease;
    min-height: 280px;
  }

  .cs3-img3-wrap img:hover {
    transform: scale(1.03);
  }

  .cs3-img4-wrap {
    grid-row: span 2;
    overflow: hidden;
    border-radius: ${borderRadius};
  }

  .cs3-img4-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    cursor: pointer;
    border-radius: ${borderRadius};
    transition: transform 0.4s ease;
    min-height: 280px;
  }

  .cs3-img4-wrap img:hover {
    transform: scale(1.03);
  }

  @media (min-width: 768px) {
    .cs3-section {
      padding: 2rem;
    }

    .cs3-outer-grid {
      grid-template-columns: 1fr 1fr;
    }

    .cs3-banner2-text {
      font-size: 30px;
    }
  }
</style>

<section class="cs3-section">
  <div class="cs3-outer-grid">

    <!-- LEFT GRID -->
    <div class="cs3-left-grid">

      <!-- Large top banner -->
      <div class="cs3-banner1">
        <div class="cs3-banner1-inner">
          <p class="cs3-banner1-tagline">${banner1Tagline}</p>
          <p class="cs3-banner1-heading">${banner1Heading}</p>
          <a href="${banner1BtnUrl}" class="cs3-banner1-btn">${banner1BtnText}</a>
        </div>
      </div>

      <!-- Bottom-left image -->
      <div class="cs3-img-wrap">
        <img src="${grid1Img5Url}" alt="${grid1Img5Alt}" />
      </div>

      <!-- Bottom-right colored block -->
      <div class="cs3-banner2">
        <p class="cs3-banner2-text">${banner2Text}</p>
      </div>

    </div>

    <!-- RIGHT GRID -->
    <div class="cs3-right-grid">

      <!-- Top full-width image -->
      <div class="cs3-img2-wrap">
        <img src="${grid2Img2Url}" alt="${grid2Img2Alt}" />
      </div>

      <!-- Bottom-left tall image -->
      <div class="cs3-img3-wrap">
        <img src="${grid2Img3Url}" alt="${grid2Img3Alt}" />
      </div>

      <!-- Bottom-right tall image -->
      <div class="cs3-img4-wrap">
        <img src="${grid2Img4Url}" alt="${grid2Img4Alt}" />
      </div>

    </div>

  </div>
</section>
  `;
}

export default function CollectionSliderV3({ config }) {
  return null;
}