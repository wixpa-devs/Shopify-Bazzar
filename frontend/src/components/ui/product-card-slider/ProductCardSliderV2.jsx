export function getProductCardSliderV2Code(config = {}) {
  const bgColor         = config.bgColor         || "#ffffff";
  const textColor       = config.textColor        || "#111111";
  const titleText       = config.titleText        || "TECHNOLOGY";
  const viewAllText     = config.viewAllText      || "View all";
  const viewAllUrl      = config.viewAllUrl       || "#";
  const leftImageUrl    = config.leftImageUrl     || "https://picsum.photos/seed/bridal-hero/900/1200";
  const leftImageAlt    = config.leftImageAlt     || "Featured collection";
  const cardBg          = config.cardBg           || "#f6f6f6";
  const productNameColor = config.productNameColor || "#4a4a4a";
  const productPriceColor = config.productPriceColor || "#111111";
  const progressBg      = config.progressBg       || "#d8d8d8";
  const progressColor   = config.progressColor    || "#111111";
  const arrowHoverBg    = config.arrowHoverBg     || "#f2f2f2";

  const productsJson = JSON.stringify(config.products || [
    { name: "Ambre",    price: "Rs.1,050,000", image: "https://picsum.photos/seed/bridal-1/600/900" },
    { name: "Nairah",   price: "Rs.950,000",   image: "https://picsum.photos/seed/bridal-2/600/900" },
    { name: "Mahe",     price: "Rs.930,000",   image: "https://picsum.photos/seed/bridal-3/600/900" },
    { name: "Azureh",   price: "Rs.980,000",   image: "https://picsum.photos/seed/bridal-4/600/900" },
    { name: "Salome",   price: "Rs.900,000",   image: "https://picsum.photos/seed/bridal-5/600/900" },
    { name: "Zelie",    price: "Rs.1,020,000", image: "https://picsum.photos/seed/bridal-6/600/900" },
    { name: "Elara",    price: "Rs.870,000",   image: "https://picsum.photos/seed/bridal-7/600/900" },
    { name: "Meher",    price: "Rs.910,000",   image: "https://picsum.photos/seed/bridal-8/600/900" },
    { name: "Raniya",   price: "Rs.1,140,000", image: "https://picsum.photos/seed/bridal-9/600/900" },
    { name: "Liyana",   price: "Rs.965,000",   image: "https://picsum.photos/seed/bridal-10/600/900" },
    { name: "Inaya",    price: "Rs.890,000",   image: "https://picsum.photos/seed/bridal-11/600/900" },
    { name: "Abeer",    price: "Rs.1,090,000", image: "https://picsum.photos/seed/bridal-12/600/900" }
  ]);

  return `
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .pcs2-section {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: ${bgColor};
    color: ${textColor};
  }

  .pcs2-wrapper {
    display: grid;
    grid-template-columns: 380px 1fr;
    min-height: 560px;
    align-items: stretch;
    overflow: hidden;
    background: ${bgColor};
  }

  .pcs2-left {
    position: relative;
    min-height: 560px;
  }

  .pcs2-left img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pcs2-right {
    padding: 56px 0 28px 18px;
    overflow: hidden;
  }

  .pcs2-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 0 24px 18px 0;
  }

  .pcs2-title {
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: ${textColor};
  }

  .pcs2-actions {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
  }

  .pcs2-view-all {
    font-size: 12px;
    color: #777;
    text-decoration: none;
    border-bottom: 1px solid #cfcfcf;
    padding-bottom: 2px;
    transition: color 0.25s ease, border-color 0.25s ease;
  }

  .pcs2-view-all:hover {
    color: ${textColor};
    border-color: ${textColor};
  }

  .pcs2-arrow-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .pcs2-arrow-btn {
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${textColor};
    transition: background 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
  }

  .pcs2-arrow-btn:hover {
    background: ${arrowHoverBg};
    transform: translateY(-1px);
  }

  .pcs2-arrow-btn:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    transform: none;
  }

  .pcs2-slider-shell {
    overflow: hidden;
    width: 100%;
    padding-right: 24px;
  }

  .pcs2-track {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-bottom: 18px;
    cursor: grab;
    user-select: none;
  }

  .pcs2-track::-webkit-scrollbar { display: none; }

  .pcs2-track.dragging {
    cursor: grabbing;
    scroll-behavior: auto;
  }

  .pcs2-track.dragging .pcs2-product-image,
  .pcs2-track.dragging .pcs2-product-name,
  .pcs2-track.dragging .pcs2-product-price {
    pointer-events: none;
  }

  .pcs2-card {
    flex: 0 0 152px;
    min-width: 200px;
  }

  .pcs2-card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .pcs2-image-wrap {
    border-radius: 8px;
    overflow: hidden;
    background: ${cardBg};
    aspect-ratio: 0.6 / 1;
    margin-bottom: 10px;
  }

  .pcs2-product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
    pointer-events: none;
  }

  .pcs2-card-link:hover .pcs2-product-image {
    transform: scale(1.03);
  }

  .pcs2-product-name {
    font-size: 12px;
    line-height: 1.3;
    color: ${productNameColor};
    margin-bottom: 4px;
  }

  .pcs2-product-price {
    font-size: 13px;
    line-height: 1.3;
    font-weight: 700;
    color: ${productPriceColor};
  }

  .pcs2-progress-line {
    margin: 2px 24px 0 0;
    height: 2px;
    background: ${progressBg};
    position: relative;
    overflow: hidden;
  }

  .pcs2-progress-fill {
    height: 100%;
    width: 18%;
    background: ${progressColor};
    transition: transform 0.35s ease, width 0.35s ease;
    transform-origin: left center;
  }

  @media (max-width: 1024px) {
    .pcs2-wrapper {
      grid-template-columns: 320px 1fr;
    }
    .pcs2-left,
    .pcs2-left img {
      min-height: 500px;
    }
  }

  @media (max-width: 767px) {
    .pcs2-wrapper {
      grid-template-columns: 1fr;
    }
    .pcs2-left {
      min-height: 420px;
    }
    .pcs2-right {
      padding: 24px 0 24px 16px;
    }
    .pcs2-header {
      padding: 0 16px 18px 0;
    }
    .pcs2-title {
      font-size: 28px;
      line-height: 1;
    }
    .pcs2-card {
      flex: 0 0 170px;
      min-width: 170px;
    }
    .pcs2-progress-line {
      margin-right: 16px;
    }
  }
</style>

<section class="pcs2-section">
  <div class="pcs2-wrapper">
    <div class="pcs2-left">
      <img
        src="${leftImageUrl}"
        alt="${leftImageAlt}"
        width="900"
        height="1200"
      />
    </div>

    <div class="pcs2-right">
      <div class="pcs2-header">
        <h2 class="pcs2-title">${titleText}</h2>
        <div class="pcs2-actions">
          <a href="${viewAllUrl}" class="pcs2-view-all">${viewAllText}</a>
          <div class="pcs2-arrow-group">
            <button class="pcs2-arrow-btn pcs2-prev-btn" aria-label="Previous products">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.5 3L5.5 8L10.5 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="pcs2-arrow-btn pcs2-next-btn" aria-label="Next products">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="pcs2-slider-shell">
        <div class="pcs2-track" id="pcs2Track"></div>
      </div>

      <div class="pcs2-progress-line">
        <div class="pcs2-progress-fill" id="pcs2ProgressFill"></div>
      </div>
    </div>
  </div>
</section>

<script>
  (function () {
    const products = ${productsJson};

    const track = document.getElementById("pcs2Track");
    const prevBtn = document.querySelector(".pcs2-prev-btn");
    const nextBtn = document.querySelector(".pcs2-next-btn");
    const progressFill = document.getElementById("pcs2ProgressFill");

    products.forEach(function (product) {
      const card = document.createElement("div");
      card.className = "pcs2-card";
      card.innerHTML =
        \`<a href="#" class="pcs2-card-link">
          <div class="pcs2-image-wrap">
            <img
              class="pcs2-product-image"
              src="\` + product.image + \`"
              alt="\` + product.name + \`"
              width="600"
              height="900"
              loading="lazy"
              draggable="false"
            />
          </div>
          <div class="pcs2-product-name">\` + product.name + \`</div>
          <div class="pcs2-product-price">\` + product.price + \`</div>
        </a>\`;
      track.appendChild(card);
    });

    function getScrollAmount() {
      const firstCard = track.querySelector(".pcs2-card");
      if (!firstCard) return 240;
      const trackStyles = window.getComputedStyle(track);
      const gap = parseInt(trackStyles.columnGap || trackStyles.gap || 14, 10);
      return firstCard.offsetWidth + gap;
    }

    function updateButtons() {
      const maxScroll = track.scrollWidth - track.clientWidth;
      prevBtn.disabled = track.scrollLeft <= 4;
      nextBtn.disabled = track.scrollLeft >= maxScroll - 4;
    }

    function updateProgress() {
      const maxScroll = track.scrollWidth - track.clientWidth;
      const visibleRatio = track.clientWidth / track.scrollWidth;
      const widthPercent = Math.max(10, visibleRatio * 100);
      const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
      const travelPercent = ((100 - widthPercent) / widthPercent) * 100;
      progressFill.style.width = widthPercent + "%";
      progressFill.style.transform = \`translateX(\` + (travelPercent * progress) + \`%)\`;
    }

    function scrollTrack(direction) {
      track.scrollBy({ left: direction * getScrollAmount(), behavior: "smooth" });
    }

    prevBtn.addEventListener("click", function () { scrollTrack(-1); });
    nextBtn.addEventListener("click", function () { scrollTrack(1); });
    track.addEventListener("scroll", function () { updateButtons(); updateProgress(); });
    window.addEventListener("resize", function () { updateButtons(); updateProgress(); });

    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let moved = false;

    track.addEventListener("mousedown", function (e) {
      isDragging = true;
      moved = false;
      startX = e.pageX;
      startScrollLeft = track.scrollLeft;
      track.classList.add("dragging");
    });

    track.addEventListener("mousemove", function (e) {
      if (!isDragging) return;
      e.preventDefault();
      const walk = e.pageX - startX;
      if (Math.abs(walk) > 5) moved = true;
      track.scrollLeft = startScrollLeft - walk;
    });

    function stopDragging() {
      isDragging = false;
      track.classList.remove("dragging");
    }

    track.addEventListener("mouseleave", stopDragging);
    track.addEventListener("mouseup", stopDragging);
    document.addEventListener("mouseup", stopDragging);

    track.addEventListener("click", function (e) {
      if (moved) { e.preventDefault(); e.stopPropagation(); }
    }, true);

    track.addEventListener("dragstart", function (e) { e.preventDefault(); });

    updateButtons();
    updateProgress();
  })();
</script>
  `;
}

export default function ProductCardSliderV2({ config }) {
  return null;
}