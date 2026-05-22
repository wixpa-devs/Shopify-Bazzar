export function getProductCardSliderV5Code(config = {}) {
  const sectionBg = config.sectionBg || "#eaebec";
  const accentColor = config.accentColor || "#48cfad";
  const overlayColor = config.overlayColor || "#48daa1";
  const arrowHoverBg = config.arrowHoverBg || "#48cfad";
  const dotActiveBg = config.dotActiveBg || "#48cfad";
  const priceColor = config.priceColor || "#48cfad";

  const card1Name = config.card1Name || "Adidas Originals";
  const card1Price = config.card1Price || "$39";
  const card1Desc = config.card1Desc || "Men's running shirt";
  const card1Sizes = config.card1Sizes || "XS, S, M, L, XL, XXL";
  const card1Img = config.card1Img || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png";
  const card1Back1 = config.card1Back1 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png";
  const card1Back2 = config.card1Back2 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png";
  const card1Back3 = config.card1Back3 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png";

  const card2Name = config.card2Name || "Nike Air Max";
  const card2Price = config.card2Price || "$59";
  const card2Desc = config.card2Desc || "Women's sport jacket";
  const card2Sizes = config.card2Sizes || "XS, S, M, L, XL";
  const card2Img = config.card2Img || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png";
  const card2Back1 = config.card2Back1 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png";
  const card2Back2 = config.card2Back2 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png";
  const card2Back3 = config.card2Back3 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png";

  const card3Name = config.card3Name || "Puma Elite";
  const card3Price = config.card3Price || "$45";
  const card3Desc = config.card3Desc || "Unisex training tee";
  const card3Sizes = config.card3Sizes || "S, M, L, XL, XXL";
  const card3Img = config.card3Img || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png";
  const card3Back1 = config.card3Back1 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png";
  const card3Back2 = config.card3Back2 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png";
  const card3Back3 = config.card3Back3 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png";

  const card4Name = config.card4Name || "Under Armour";
  const card4Price = config.card4Price || "$49";
  const card4Desc = config.card4Desc || "Men's compression top";
  const card4Sizes = config.card4Sizes || "S, M, L, XL";
  const card4Img = config.card4Img || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png";
  const card4Back1 = config.card4Back1 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png";
  const card4Back2 = config.card4Back2 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png";
  const card4Back3 = config.card4Back3 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png";

  const card5Name = config.card5Name || "New Balance";
  const card5Price = config.card5Price || "$42";
  const card5Desc = config.card5Desc || "Men's athletic tee";
  const card5Sizes = config.card5Sizes || "XS, S, M, L, XL";
  const card5Img = config.card5Img || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png";
  const card5Back1 = config.card5Back1 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png";
  const card5Back2 = config.card5Back2 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png";
  const card5Back3 = config.card5Back3 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png";

  const card6Name = config.card6Name || "Reebok Classic";
  const card6Price = config.card6Price || "$35";
  const card6Desc = config.card6Desc || "Unisex retro crewneck";
  const card6Sizes = config.card6Sizes || "S, M, L, XL, XXL";
  const card6Img = config.card6Img || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png";
  const card6Back1 = config.card6Back1 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png";
  const card6Back2 = config.card6Back2 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png";
  const card6Back3 = config.card6Back3 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png";

  const card7Name = config.card7Name || "Champion Sport";
  const card7Price = config.card7Price || "$32";
  const card7Desc = config.card7Desc || "Women's gym tank top";
  const card7Sizes = config.card7Sizes || "XS, S, M, L";
  const card7Img = config.card7Img || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png";
  const card7Back1 = config.card7Back1 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png";
  const card7Back2 = config.card7Back2 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png";
  const card7Back3 = config.card7Back3 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png";

  const card8Name = config.card8Name || "Levi's Streetwear";
  const card8Price = config.card8Price || "$55";
  const card8Desc = config.card8Desc || "Men's oversized tee";
  const card8Sizes = config.card8Sizes || "S, M, L, XL, XXL";
  const card8Img = config.card8Img || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt.png";
  const card8Back1 = config.card8Back1 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png";
  const card8Back2 = config.card8Back2 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png";
  const card8Back3 = config.card8Back3 || "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png";

  const viewDetailsLabel = config.viewDetailsLabel || "View Details";

  return `
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

<style>
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

  .pcsv5-section {
    background: ${sectionBg};
    padding: 48px 32px 60px;
    font-family: "Open Sans", sans-serif;
    overflow: hidden;
    width: 100%;
  }

  .pcsv5-slider-wrap {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  .pcsv5-track-window {
    overflow: hidden;
    width: 100%;
    cursor: grab;
  }
  .pcsv5-track-window.is-grabbing {
    cursor: grabbing;
  }

  .pcsv5-track {
    display: flex;
    gap: 28px;
    transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
    align-items: flex-start;
    padding: 16px 4px 28px;
    user-select: none;
  }
  .pcsv5-track.dragging {
    transition: none;
  }

  .pcsv5-slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px; height: 40px;
    border-radius: 50%;
    background: #fff;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 14px rgba(0,0,0,0.13);
    z-index: 10;
    transition: background 180ms ease;
  }
  .pcsv5-slider-btn:hover { background: ${arrowHoverBg}; }
  .pcsv5-slider-btn:hover svg path { stroke: #fff; }
  .pcsv5-slider-btn svg { width: 18px; height: 18px; }
  .pcsv5-slider-btn svg path {
    stroke: #393c45; stroke-width: 2.2;
    fill: none; stroke-linecap: round; stroke-linejoin: round;
  }
  .pcsv5-btn-prev { left: -20px; }
  .pcsv5-btn-next { right: -20px; }
  .pcsv5-slider-btn[disabled] { opacity: 0.3; pointer-events: none; }

  .pcsv5-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 20px;
  }
  .pcsv5-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #c8cbd0;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: background 250ms ease, transform 250ms ease;
  }
  .pcsv5-dot.active { background: ${dotActiveBg}; transform: scale(1.3); }

  .pcsv5-3d-space {
    perspective: 900px;
    width: 280px;
    flex-shrink: 0;
  }

  .pcsv5-flip-card {
    width: 280px;
    position: relative;
    transform-style: preserve-3d;
    transition: 100ms ease-out;
  }
  .pcsv5-flip-card.flip-10  { transform: rotateY(-10deg);  transition: 50ms ease-out; }
  .pcsv5-flip-card.flip90   { transform: rotateY(90deg);   transition: 100ms ease-in; }
  .pcsv5-flip-card.flip190  { transform: rotateY(190deg);  transition: 100ms ease-out; }
  .pcsv5-flip-card.flip180  { transform: rotateY(180deg);  transition: 150ms ease-out; }

  .pcsv5-face-front,
  .pcsv5-face-back {
    width: 280px;
    backface-visibility: hidden;
  }
  .pcsv5-face-back {
    display: none;
    transform: rotateY(180deg);
    position: absolute;
    top: 0; left: 0;
  }

  .pcsv5-card-wrap {
    width: 280px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: box-shadow 250ms ease, transform 250ms ease;
  }
  .pcsv5-track-window.is-grabbing .pcsv5-card-wrap {
    cursor: grabbing;
  }
  .pcsv5-card-wrap:hover {
    box-shadow: 0 10px 32px rgba(0,0,0,0.18);
    transform: translateY(-3px);
  }

  .pcsv5-img-area {
    position: relative;
    width: 100%;
    height: 260px;
    overflow: hidden;
  }
  .pcsv5-img-area img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 350ms ease;
    pointer-events: none;
    -webkit-user-drag: none;
  }
  .pcsv5-card-wrap:hover .pcsv5-img-area img { transform: scale(1.04); }

  .pcsv5-overlay {
    position: absolute;
    inset: 0;
    background: ${overlayColor};
    opacity: 0;
    transition: opacity 250ms ease;
    pointer-events: none;
  }
  .pcsv5-card-wrap:hover .pcsv5-overlay { opacity: 0.78; }

  .pcsv5-view-details {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.92);
    border: 2px solid #fff;
    color: #fff;
    font-family: "Open Sans", sans-serif;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 9px 22px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 220ms ease, transform 220ms ease, background 180ms ease, color 180ms ease;
    z-index: 3;
    background: transparent;
    cursor: pointer;
  }
  .pcsv5-view-details:hover { background: #fff; color: ${accentColor}; }
  .pcsv5-card-wrap:hover .pcsv5-view-details {
    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, -50%) scale(1);
  }

  .pcsv5-info { padding: 18px 20px 20px; background: #fff; }
  .pcsv5-info-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 3px;
  }
  .pcsv5-name  { font-size: 18px; font-weight: 400; color: #2b2d35; line-height: 1.3; }
  .pcsv5-price { font-size: 18px; font-weight: 600; color: ${priceColor}; white-space: nowrap; margin-left: 10px; }
  .pcsv5-desc  { font-size: 13px; color: #a0a3ab; margin-bottom: 14px; }
  .pcsv5-divider { border: none; border-top: 1px solid #ebebeb; margin-bottom: 12px; }
  .pcsv5-label { font-size: 11px; font-weight: 700; color: #2b2d35; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 3px; }
  .pcsv5-sizes-text { font-size: 12px; color: #969699; margin-bottom: 12px; }
  .pcsv5-colors { display: flex; gap: 6px; margin-top: 4px; }
  .pcsv5-swatch {
    width: 15px; height: 15px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 150ms ease, box-shadow 150ms ease;
    display: inline-block;
  }
  .pcsv5-swatch:hover { transform: scale(1.25); box-shadow: 0 2px 6px rgba(0,0,0,0.18); }
  .pcsv5-swatch--blue   { background: #6e8cd5; }
  .pcsv5-swatch--red    { background: #f56060; }
  .pcsv5-swatch--white  { background: #fff; border: 1px solid #d8d8d8; }
  .pcsv5-swatch--green  { background: #44c28d; }
  .pcsv5-swatch--black  { background: #2b2d35; }
  .pcsv5-swatch--yellow { background: #f7c948; }
  .pcsv5-swatch--pink   { background: #f472b6; }
  .pcsv5-swatch--purple { background: #a78bfa; }
  .pcsv5-swatch--orange { background: #fb923c; }

  .pcsv5-back-carousel {
    width: 280px;
    height: 460px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  }
  .pcsv5-back-carousel ul {
    display: flex;
    position: absolute;
    top: 0; left: 0;
    width: calc(280px * 3);
    height: 100%;
    transition: left 300ms ease-out;
  }
  .pcsv5-back-carousel li {
    width: 280px; height: 100%;
    flex-shrink: 0; list-style: none; overflow: hidden;
  }
  .pcsv5-back-carousel li img { width: 100%; height: 100%; object-fit: cover; display: block; }

  .pcsv5-back-arrows {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    z-index: 5;
  }
  .pcsv5-barrow {
    width: 32px; height: 32px;
    background: rgba(255,255,255,0.85);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    transition: background 180ms ease;
  }
  .pcsv5-barrow:hover { background: ${arrowHoverBg}; }
  .pcsv5-barrow:hover svg path { stroke: #fff; }
  .pcsv5-barrow svg { width: 15px; height: 15px; }
  .pcsv5-barrow svg path { stroke: #393c45; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }

  .pcsv5-close-back {
    position: absolute;
    top: 12px; right: 12px;
    width: 28px; height: 28px;
    cursor: pointer;
    z-index: 20;
    display: flex; align-items: center; justify-content: center;
  }
  .pcsv5-close-back::before,
  .pcsv5-close-back::after {
    content: '';
    position: absolute;
    width: 16px; height: 2px;
    background: #c8cbd0;
    border-radius: 2px;
    transition: background 200ms ease;
  }
  .pcsv5-close-back::before { transform: rotate(45deg); }
  .pcsv5-close-back::after  { transform: rotate(-45deg); }
  .pcsv5-close-back:hover::before,
  .pcsv5-close-back:hover::after { background: #6b7280; }

  @media (max-width: 768px) {
    .pcsv5-btn-prev { left: -10px; }
    .pcsv5-btn-next { right: -10px; }
    .pcsv5-track { gap: 18px; }
  }
  @media (max-width: 480px) {
    .pcsv5-slider-btn { display: none; }
    .pcsv5-track { gap: 14px; padding: 12px 2px 20px; }
  }
</style>

<section class="pcsv5-section">
  <div class="pcsv5-slider-wrap">

    <button class="pcsv5-slider-btn pcsv5-btn-prev" id="pcsv5BtnPrev" aria-label="Previous">
      <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
    </button>

    <div class="pcsv5-track-window" id="pcsv5Window">
      <div class="pcsv5-track" id="pcsv5Track">

        <!-- CARD 1 -->
        <div class="pcsv5-3d-space">
          <div class="pcsv5-flip-card">
            <div class="pcsv5-face-front">
              <div class="pcsv5-card-wrap">
                <div class="pcsv5-img-area">
                  <img src="${card1Img}" alt="${card1Name}" loading="eager" />
                  <div class="pcsv5-overlay"></div>
                  <div class="pcsv5-view-details">${viewDetailsLabel}</div>
                </div>
                <div class="pcsv5-info">
                  <div class="pcsv5-info-row">
                    <span class="pcsv5-name">${card1Name}</span>
                    <span class="pcsv5-price">${card1Price}</span>
                  </div>
                  <div class="pcsv5-desc">${card1Desc}</div>
                  <hr class="pcsv5-divider" />
                  <div class="pcsv5-label">Sizes</div>
                  <div class="pcsv5-sizes-text">${card1Sizes}</div>
                  <div class="pcsv5-label">Colors</div>
                  <div class="pcsv5-colors">
                    <span class="pcsv5-swatch pcsv5-swatch--blue"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--red"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--white"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--green"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="pcsv5-face-back">
              <div class="pcsv5-back-carousel">
                <ul>
                  <li><img src="${card1Back1}" alt="view 1" /></li>
                  <li><img src="${card1Back2}" alt="view 2" /></li>
                  <li><img src="${card1Back3}" alt="view 3" /></li>
                </ul>
                <div class="pcsv5-back-arrows">
                  <div class="pcsv5-barrow pcsv5-bprev"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></div>
                  <div class="pcsv5-barrow pcsv5-bnext"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></div>
                </div>
                <div class="pcsv5-close-back"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="pcsv5-3d-space">
          <div class="pcsv5-flip-card">
            <div class="pcsv5-face-front">
              <div class="pcsv5-card-wrap">
                <div class="pcsv5-img-area">
                  <img src="${card2Img}" alt="${card2Name}" loading="eager" />
                  <div class="pcsv5-overlay"></div>
                  <div class="pcsv5-view-details">${viewDetailsLabel}</div>
                </div>
                <div class="pcsv5-info">
                  <div class="pcsv5-info-row">
                    <span class="pcsv5-name">${card2Name}</span>
                    <span class="pcsv5-price">${card2Price}</span>
                  </div>
                  <div class="pcsv5-desc">${card2Desc}</div>
                  <hr class="pcsv5-divider" />
                  <div class="pcsv5-label">Sizes</div>
                  <div class="pcsv5-sizes-text">${card2Sizes}</div>
                  <div class="pcsv5-label">Colors</div>
                  <div class="pcsv5-colors">
                    <span class="pcsv5-swatch pcsv5-swatch--black"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--red"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--white"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--yellow"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="pcsv5-face-back">
              <div class="pcsv5-back-carousel">
                <ul>
                  <li><img src="${card2Back1}" alt="view 1" /></li>
                  <li><img src="${card2Back2}" alt="view 2" /></li>
                  <li><img src="${card2Back3}" alt="view 3" /></li>
                </ul>
                <div class="pcsv5-back-arrows">
                  <div class="pcsv5-barrow pcsv5-bprev"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></div>
                  <div class="pcsv5-barrow pcsv5-bnext"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></div>
                </div>
                <div class="pcsv5-close-back"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- CARD 3 -->
        <div class="pcsv5-3d-space">
          <div class="pcsv5-flip-card">
            <div class="pcsv5-face-front">
              <div class="pcsv5-card-wrap">
                <div class="pcsv5-img-area">
                  <img src="${card3Img}" alt="${card3Name}" loading="eager" />
                  <div class="pcsv5-overlay"></div>
                  <div class="pcsv5-view-details">${viewDetailsLabel}</div>
                </div>
                <div class="pcsv5-info">
                  <div class="pcsv5-info-row">
                    <span class="pcsv5-name">${card3Name}</span>
                    <span class="pcsv5-price">${card3Price}</span>
                  </div>
                  <div class="pcsv5-desc">${card3Desc}</div>
                  <hr class="pcsv5-divider" />
                  <div class="pcsv5-label">Sizes</div>
                  <div class="pcsv5-sizes-text">${card3Sizes}</div>
                  <div class="pcsv5-label">Colors</div>
                  <div class="pcsv5-colors">
                    <span class="pcsv5-swatch pcsv5-swatch--blue"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--pink"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--white"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--green"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="pcsv5-face-back">
              <div class="pcsv5-back-carousel">
                <ul>
                  <li><img src="${card3Back1}" alt="view 1" /></li>
                  <li><img src="${card3Back2}" alt="view 2" /></li>
                  <li><img src="${card3Back3}" alt="view 3" /></li>
                </ul>
                <div class="pcsv5-back-arrows">
                  <div class="pcsv5-barrow pcsv5-bprev"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></div>
                  <div class="pcsv5-barrow pcsv5-bnext"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></div>
                </div>
                <div class="pcsv5-close-back"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- CARD 4 -->
        <div class="pcsv5-3d-space">
          <div class="pcsv5-flip-card">
            <div class="pcsv5-face-front">
              <div class="pcsv5-card-wrap">
                <div class="pcsv5-img-area">
                  <img src="${card4Img}" alt="${card4Name}" loading="eager" />
                  <div class="pcsv5-overlay"></div>
                  <div class="pcsv5-view-details">${viewDetailsLabel}</div>
                </div>
                <div class="pcsv5-info">
                  <div class="pcsv5-info-row">
                    <span class="pcsv5-name">${card4Name}</span>
                    <span class="pcsv5-price">${card4Price}</span>
                  </div>
                  <div class="pcsv5-desc">${card4Desc}</div>
                  <hr class="pcsv5-divider" />
                  <div class="pcsv5-label">Sizes</div>
                  <div class="pcsv5-sizes-text">${card4Sizes}</div>
                  <div class="pcsv5-label">Colors</div>
                  <div class="pcsv5-colors">
                    <span class="pcsv5-swatch pcsv5-swatch--black"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--blue"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--white"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--orange"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="pcsv5-face-back">
              <div class="pcsv5-back-carousel">
                <ul>
                  <li><img src="${card4Back1}" alt="view 1" /></li>
                  <li><img src="${card4Back2}" alt="view 2" /></li>
                  <li><img src="${card4Back3}" alt="view 3" /></li>
                </ul>
                <div class="pcsv5-back-arrows">
                  <div class="pcsv5-barrow pcsv5-bprev"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></div>
                  <div class="pcsv5-barrow pcsv5-bnext"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></div>
                </div>
                <div class="pcsv5-close-back"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- CARD 5 -->
        <div class="pcsv5-3d-space">
          <div class="pcsv5-flip-card">
            <div class="pcsv5-face-front">
              <div class="pcsv5-card-wrap">
                <div class="pcsv5-img-area">
                  <img src="${card5Img}" alt="${card5Name}" loading="lazy" />
                  <div class="pcsv5-overlay"></div>
                  <div class="pcsv5-view-details">${viewDetailsLabel}</div>
                </div>
                <div class="pcsv5-info">
                  <div class="pcsv5-info-row">
                    <span class="pcsv5-name">${card5Name}</span>
                    <span class="pcsv5-price">${card5Price}</span>
                  </div>
                  <div class="pcsv5-desc">${card5Desc}</div>
                  <hr class="pcsv5-divider" />
                  <div class="pcsv5-label">Sizes</div>
                  <div class="pcsv5-sizes-text">${card5Sizes}</div>
                  <div class="pcsv5-label">Colors</div>
                  <div class="pcsv5-colors">
                    <span class="pcsv5-swatch pcsv5-swatch--red"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--white"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--black"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--purple"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="pcsv5-face-back">
              <div class="pcsv5-back-carousel">
                <ul>
                  <li><img src="${card5Back1}" alt="view 1" /></li>
                  <li><img src="${card5Back2}" alt="view 2" /></li>
                  <li><img src="${card5Back3}" alt="view 3" /></li>
                </ul>
                <div class="pcsv5-back-arrows">
                  <div class="pcsv5-barrow pcsv5-bprev"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></div>
                  <div class="pcsv5-barrow pcsv5-bnext"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></div>
                </div>
                <div class="pcsv5-close-back"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- CARD 6 -->
        <div class="pcsv5-3d-space">
          <div class="pcsv5-flip-card">
            <div class="pcsv5-face-front">
              <div class="pcsv5-card-wrap">
                <div class="pcsv5-img-area">
                  <img src="${card6Img}" alt="${card6Name}" loading="lazy" />
                  <div class="pcsv5-overlay"></div>
                  <div class="pcsv5-view-details">${viewDetailsLabel}</div>
                </div>
                <div class="pcsv5-info">
                  <div class="pcsv5-info-row">
                    <span class="pcsv5-name">${card6Name}</span>
                    <span class="pcsv5-price">${card6Price}</span>
                  </div>
                  <div class="pcsv5-desc">${card6Desc}</div>
                  <hr class="pcsv5-divider" />
                  <div class="pcsv5-label">Sizes</div>
                  <div class="pcsv5-sizes-text">${card6Sizes}</div>
                  <div class="pcsv5-label">Colors</div>
                  <div class="pcsv5-colors">
                    <span class="pcsv5-swatch pcsv5-swatch--yellow"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--blue"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--white"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--black"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="pcsv5-face-back">
              <div class="pcsv5-back-carousel">
                <ul>
                  <li><img src="${card6Back1}" alt="view 1" /></li>
                  <li><img src="${card6Back2}" alt="view 2" /></li>
                  <li><img src="${card6Back3}" alt="view 3" /></li>
                </ul>
                <div class="pcsv5-back-arrows">
                  <div class="pcsv5-barrow pcsv5-bprev"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></div>
                  <div class="pcsv5-barrow pcsv5-bnext"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></div>
                </div>
                <div class="pcsv5-close-back"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- CARD 7 -->
        <div class="pcsv5-3d-space">
          <div class="pcsv5-flip-card">
            <div class="pcsv5-face-front">
              <div class="pcsv5-card-wrap">
                <div class="pcsv5-img-area">
                  <img src="${card7Img}" alt="${card7Name}" loading="lazy" />
                  <div class="pcsv5-overlay"></div>
                  <div class="pcsv5-view-details">${viewDetailsLabel}</div>
                </div>
                <div class="pcsv5-info">
                  <div class="pcsv5-info-row">
                    <span class="pcsv5-name">${card7Name}</span>
                    <span class="pcsv5-price">${card7Price}</span>
                  </div>
                  <div class="pcsv5-desc">${card7Desc}</div>
                  <hr class="pcsv5-divider" />
                  <div class="pcsv5-label">Sizes</div>
                  <div class="pcsv5-sizes-text">${card7Sizes}</div>
                  <div class="pcsv5-label">Colors</div>
                  <div class="pcsv5-colors">
                    <span class="pcsv5-swatch pcsv5-swatch--pink"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--purple"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--white"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--black"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="pcsv5-face-back">
              <div class="pcsv5-back-carousel">
                <ul>
                  <li><img src="${card7Back1}" alt="view 1" /></li>
                  <li><img src="${card7Back2}" alt="view 2" /></li>
                  <li><img src="${card7Back3}" alt="view 3" /></li>
                </ul>
                <div class="pcsv5-back-arrows">
                  <div class="pcsv5-barrow pcsv5-bprev"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></div>
                  <div class="pcsv5-barrow pcsv5-bnext"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></div>
                </div>
                <div class="pcsv5-close-back"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- CARD 8 -->
        <div class="pcsv5-3d-space">
          <div class="pcsv5-flip-card">
            <div class="pcsv5-face-front">
              <div class="pcsv5-card-wrap">
                <div class="pcsv5-img-area">
                  <img src="${card8Img}" alt="${card8Name}" loading="lazy" />
                  <div class="pcsv5-overlay"></div>
                  <div class="pcsv5-view-details">${viewDetailsLabel}</div>
                </div>
                <div class="pcsv5-info">
                  <div class="pcsv5-info-row">
                    <span class="pcsv5-name">${card8Name}</span>
                    <span class="pcsv5-price">${card8Price}</span>
                  </div>
                  <div class="pcsv5-desc">${card8Desc}</div>
                  <hr class="pcsv5-divider" />
                  <div class="pcsv5-label">Sizes</div>
                  <div class="pcsv5-sizes-text">${card8Sizes}</div>
                  <div class="pcsv5-label">Colors</div>
                  <div class="pcsv5-colors">
                    <span class="pcsv5-swatch pcsv5-swatch--orange"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--black"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--white"></span>
                    <span class="pcsv5-swatch pcsv5-swatch--blue"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="pcsv5-face-back">
              <div class="pcsv5-back-carousel">
                <ul>
                  <li><img src="${card8Back1}" alt="view 1" /></li>
                  <li><img src="${card8Back2}" alt="view 2" /></li>
                  <li><img src="${card8Back3}" alt="view 3" /></li>
                </ul>
                <div class="pcsv5-back-arrows">
                  <div class="pcsv5-barrow pcsv5-bprev"><svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg></div>
                  <div class="pcsv5-barrow pcsv5-bnext"><svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg></div>
                </div>
                <div class="pcsv5-close-back"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <button class="pcsv5-slider-btn pcsv5-btn-next" id="pcsv5BtnNext" aria-label="Next">
      <svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
    </button>

  </div>
  <div class="pcsv5-dots" id="pcsv5Dots"></div>
</section>

<script>
(function () {
  'use strict';

  var track      = document.getElementById('pcsv5Track');
  var trackWin   = document.getElementById('pcsv5Window');
  var btnPrev    = document.getElementById('pcsv5BtnPrev');
  var btnNext    = document.getElementById('pcsv5BtnNext');
  var dotsWrap   = document.getElementById('pcsv5Dots');
  var spaces     = Array.from(document.querySelectorAll('.pcsv5-3d-space'));
  var CARD_COUNT = spaces.length;
  var currentIdx = 0;

  function getVisibleCount() {
    var w = track.parentElement.offsetWidth;
    if (w < 380) return 1;
    if (w < 660) return 2;
    if (w < 960) return 3;
    return 4;
  }
  function maxIndex() { return Math.max(0, CARD_COUNT - getVisibleCount()); }
  function getCardWidth() {
    var gap = window.innerWidth < 480 ? 14 : window.innerWidth < 768 ? 18 : 28;
    return spaces[0].offsetWidth + gap;
  }
  function goTo(idx) {
    currentIdx = Math.max(0, Math.min(idx, maxIndex()));
    track.style.transform = 'translateX(-' + (currentIdx * getCardWidth()) + 'px)';
    btnPrev.disabled = (currentIdx === 0);
    btnNext.disabled = (currentIdx >= maxIndex());
    document.querySelectorAll('.pcsv5-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === currentIdx);
    });
  }

  for (var di = 0; di <= maxIndex(); di++) {
    (function (i) {
      var dot = document.createElement('button');
      dot.className = 'pcsv5-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsWrap.appendChild(dot);
    })(di);
  }

  btnPrev.addEventListener('click', function () { goTo(currentIdx - 1); });
  btnNext.addEventListener('click', function () { goTo(currentIdx + 1); });
  goTo(0);

  /* ── SHARED DRAG LOGIC ── */
  var dragStartX  = 0;
  var isDragging  = false;
  var dragMoved   = false;

  function onDragStart(x) {
    dragStartX = x;
    isDragging = true;
    dragMoved  = false;
    track.classList.add('dragging');
    trackWin.classList.add('is-grabbing');
  }
  function onDragMove(x) {
    if (!isDragging) return;
    var dx = x - dragStartX;
    if (Math.abs(dx) > 4) dragMoved = true;
    var base = -(currentIdx * getCardWidth());
    track.style.transform = 'translateX(' + (base + dx) + 'px)';
  }
  function onDragEnd(x) {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove('dragging');
    trackWin.classList.remove('is-grabbing');
    var diff = dragStartX - x;
    if (Math.abs(diff) > 50) {
      goTo(currentIdx + (diff > 0 ? 1 : -1));
    } else {
      goTo(currentIdx);
    }
  }

  /* ── MOUSE GRAB (desktop) ── */
  trackWin.addEventListener('mousedown', function (e) {
    if (e.button !== 0) return;
    onDragStart(e.clientX);
    e.preventDefault();
  });
  window.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    onDragMove(e.clientX);
  });
  window.addEventListener('mouseup', function (e) {
    if (!isDragging) return;
    onDragEnd(e.clientX);
  });

  /* Block click on cards after a drag so flip doesn't trigger */
  trackWin.addEventListener('click', function (e) {
    if (dragMoved) {
      e.stopPropagation();
      e.preventDefault();
      dragMoved = false;
    }
  }, true);

  /* ── TOUCH DRAG (mobile) ── */
  var touchStartY = 0;
  var touchLocked = false;

  track.addEventListener('touchstart', function (e) {
    dragStartX  = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isDragging  = false;
    dragMoved   = false;
    touchLocked = false;
  }, { passive: true });

  track.addEventListener('touchmove', function (e) {
    var dx = e.touches[0].clientX - dragStartX;
    var dy = e.touches[0].clientY - touchStartY;
    if (!touchLocked) {
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        touchLocked = true;
        isDragging  = true;
        track.classList.add('dragging');
      } else if (Math.abs(dy) > 8) {
        touchLocked = true;
      }
    }
    if (isDragging) {
      if (Math.abs(dx) > 4) dragMoved = true;
      var base = -(currentIdx * getCardWidth());
      track.style.transform = 'translateX(' + (base + dx) + 'px)';
    }
  }, { passive: true });

  track.addEventListener('touchend', function (e) {
    track.classList.remove('dragging');
    if (isDragging) {
      var diff = dragStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        goTo(currentIdx + (diff > 0 ? 1 : -1));
      } else {
        goTo(currentIdx);
      }
    }
    isDragging  = false;
    touchLocked = false;
    setTimeout(function () { dragMoved = false; }, 50);
  }, { passive: true });

  window.addEventListener('resize', function () { goTo(currentIdx); });

  /* ── FLIP CARD LOGIC ── */
  document.querySelectorAll('.pcsv5-flip-card').forEach(function (flipCard) {
    var faceFront  = flipCard.querySelector('.pcsv5-face-front');
    var faceBack   = flipCard.querySelector('.pcsv5-face-back');
    var viewBtn    = flipCard.querySelector('.pcsv5-view-details');
    var closeBtn   = flipCard.querySelector('.pcsv5-close-back');
    var carouselUL = flipCard.querySelector('.pcsv5-back-carousel ul');
    var bPrev      = flipCard.querySelector('.pcsv5-bprev');
    var bNext      = flipCard.querySelector('.pcsv5-bnext');
    var totalSlides = flipCard.querySelectorAll('.pcsv5-back-carousel li').length;
    var currentSlide = 0;
    var slideW = 280;
    var busy   = false;

    function setSlide(idx) {
      if (busy) return;
      currentSlide = Math.max(0, Math.min(idx, totalSlides - 1));
      carouselUL.style.left = '-' + (currentSlide * slideW) + 'px';
      busy = true;
      setTimeout(function () { busy = false; }, 320);
    }

    bPrev.addEventListener('click', function (e) { e.stopPropagation(); setSlide(currentSlide - 1); });
    bNext.addEventListener('click', function (e) { e.stopPropagation(); setSlide(currentSlide + 1); });

    viewBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      flipCard.classList.add('flip-10');
      setTimeout(function () {
        flipCard.classList.remove('flip-10');
        flipCard.classList.add('flip90');
      }, 50);
      setTimeout(function () {
        faceFront.style.visibility = 'hidden';
        faceBack.style.display     = 'block';
        flipCard.classList.remove('flip90');
        flipCard.classList.add('flip190');
        setTimeout(function () {
          flipCard.classList.remove('flip190');
          flipCard.classList.add('flip180');
        }, 100);
      }, 150);
    });

    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      flipCard.classList.remove('flip180');
      flipCard.classList.add('flip190');
      setTimeout(function () {
        flipCard.classList.remove('flip190');
        flipCard.classList.add('flip90');
      }, 50);
      setTimeout(function () {
        faceBack.style.display     = 'none';
        faceFront.style.visibility = 'visible';
        flipCard.classList.remove('flip90');
        flipCard.classList.add('flip-10');
        setTimeout(function () { flipCard.classList.remove('flip-10'); }, 80);
      }, 150);
    });
  });

})();
</script>
  `;
}

export default function ProductCardSliderV5({ config }) {
  return null;
}