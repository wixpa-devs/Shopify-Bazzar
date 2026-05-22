export function getProductCardSliderV2Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const textColor = config.textColor || "#111111";
  const titleText = config.titleText || "FEATURED COLLECTION";
  const viewAllText = config.viewAllText || "View all";
  const viewAllUrl = config.viewAllUrl || "/collections/all";
  const leftImageUrl = config.leftImageUrl || "https://picsum.photos/seed/bridal-hero/900/1200";
  const leftImageAlt = config.leftImageAlt || "Featured collection";
  const cardBg = config.cardBg || "#f6f6f6";
  const productNameColor = config.productNameColor || "#4a4a4a";
  const productPriceColor = config.productPriceColor || "#111111";
  const progressBg = config.progressBg || "#d8d8d8";
  const progressColor = config.progressColor || "#111111";
  const arrowHoverBg = config.arrowHoverBg || "#f2f2f2";
  const currencySymbol = config.currencySymbol || "$";
  const addToCartText = config.addToCartText || "Add to cart";
  const collectionUrl = config.collectionUrl || "";

  // Manual products (up to 12)
  const manualProducts = [];
  for (let i = 1; i <= 12; i++) {
    if (config[`p${i}Title`]) {
      manualProducts.push({
        name: config[`p${i}Title`] || `Product ${i}`,
        price: config[`p${i}Price`] || "0.00",
        comparePrice: config[`p${i}ComparePrice`] || "",
        image: config[`p${i}Image`] || `https://picsum.photos/seed/pcs2-${i}/600/900`,
        url: config[`p${i}Url`] || "#",
        variantId: config[`p${i}VariantId`] || "",
        description: config[`p${i}Desc`] || "",
        vendor: config[`p${i}Vendor`] || "",
      });
    }
  }
  if (!manualProducts.length) {
    const defaults = [
      { name: "Ambre", price: "1,050", image: "https://picsum.photos/seed/bridal-1/600/900" },
      { name: "Nairah", price: "950", image: "https://picsum.photos/seed/bridal-2/600/900" },
      { name: "Mahe", price: "930", image: "https://picsum.photos/seed/bridal-3/600/900" },
      { name: "Azureh", price: "980", image: "https://picsum.photos/seed/bridal-4/600/900" },
      { name: "Salome", price: "900", image: "https://picsum.photos/seed/bridal-5/600/900" },
      { name: "Zelie", price: "1,020", image: "https://picsum.photos/seed/bridal-6/600/900" },
      { name: "Elara", price: "870", image: "https://picsum.photos/seed/bridal-7/600/900" },
      { name: "Meher", price: "910", image: "https://picsum.photos/seed/bridal-8/600/900" },
    ];
    defaults.forEach(d => manualProducts.push({ ...d, url: "#", variantId: "", description: "", vendor: "", comparePrice: "" }));
  }
  const productsJson = JSON.stringify(manualProducts);

  return `
<style>
  .pcs2-section { max-width:1440px; margin:0 auto; font-family:Arial,Helvetica,sans-serif; background:${bgColor}; color:${textColor}; }
  .pcs2-wrapper { display:grid; grid-template-columns:380px 1fr; min-height:560px; align-items:stretch; overflow:hidden; }
  .pcs2-left { position:relative; min-height:560px; }
  .pcs2-left img { width:100%; height:100%; object-fit:cover; display:block; }
  .pcs2-right { padding:56px 0 28px 18px; overflow:hidden; }
  .pcs2-header { display:flex; align-items:center; justify-content:space-between; gap:16px; padding:0 24px 18px 0; }
  .pcs2-title { font-size:18px; font-weight:500; letter-spacing:.02em; text-transform:uppercase; color:${textColor}; }
  .pcs2-actions { display:flex; align-items:center; gap:16px; flex-shrink:0; }
  .pcs2-view-all { font-size:12px; color:#777; text-decoration:none; border-bottom:1px solid #cfcfcf; padding-bottom:2px; transition:color .25s,border-color .25s; }
  .pcs2-view-all:hover { color:${textColor}; border-color:${textColor}; }
  .pcs2-arrow-group { display:flex; align-items:center; gap:6px; }
  .pcs2-arrow-btn { width:32px; height:32px; border:none; background:transparent; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; cursor:pointer; color:${textColor}; transition:background .25s,opacity .25s; }
  .pcs2-arrow-btn:hover { background:${arrowHoverBg}; }
  .pcs2-arrow-btn:disabled { opacity:.35; cursor:not-allowed; }
  .pcs2-slider-shell { overflow:hidden; width:100%; padding-right:24px; }
  .pcs2-track { display:flex; gap:14px; overflow-x:auto; overflow-y:hidden; scroll-behavior:smooth; scrollbar-width:none; -ms-overflow-style:none; padding-bottom:18px; cursor:grab; user-select:none; }
  .pcs2-track::-webkit-scrollbar { display:none; }
  .pcs2-track.dragging { cursor:grabbing; scroll-behavior:auto; }
  .pcs2-card { flex:0 0 170px; }
  .pcs2-card-wrap { text-decoration:none; color:inherit; display:block; }
  .pcs2-card-footer { display:flex; align-items:center; gap:6px; margin-top:6px; }
  .pcs2-image-wrap { border-radius:8px; overflow:hidden; background:${cardBg}; aspect-ratio:.6/1; margin-bottom:10px; }
  .pcs2-product-image { width:100%; height:100%; object-fit:cover; display:block; transition:transform .5s ease; pointer-events:none; }
  .pcs2-card-wrap:hover .pcs2-product-image { transform:scale(1.03); }
  .pcs2-product-name { font-size:12px; color:${productNameColor}; margin-bottom:3px; line-height:1.3; }
  .pcs2-product-price { font-size:13px; font-weight:700; color:${productPriceColor}; }
  .pcs2-product-compare { font-size:12px; color:${productNameColor}; opacity:.5; text-decoration:line-through; margin-left:4px; }
  .pcs2-atc-btn { display:inline-flex; align-items:center; justify-content:center; width:26px; height:26px; border:1.5px solid ${textColor}; background:transparent; border-radius:2px; cursor:pointer; text-decoration:none; flex-shrink:0; transition:background .2s; margin-left:auto; }
  .pcs2-atc-btn:hover { background:${textColor}; }
  .pcs2-atc-btn:hover svg line { stroke:#fff; }
  .pcs2-atc-btn svg { width:14px; height:14px; }
  .pcs2-atc-btn line { stroke:${textColor}; stroke-width:2.5; stroke-linecap:square; }
  .pcs2-progress-line { margin:2px 24px 0 0; height:2px; background:${progressBg}; position:relative; overflow:hidden; }
  .pcs2-progress-fill { height:100%; width:18%; background:${progressColor}; transition:transform .35s ease,width .35s ease; transform-origin:left center; }
  .pcs2-loading { padding:30px; font-size:13px; color:${textColor}; opacity:.5; }
  @media(max-width:1024px) { .pcs2-wrapper { grid-template-columns:320px 1fr; } }
  @media(max-width:767px) {
    .pcs2-wrapper { grid-template-columns:1fr; }
    .pcs2-left { min-height:320px; }
    .pcs2-right { padding:24px 0 24px 16px; }
    .pcs2-card { flex:0 0 150px; }
    .pcs2-progress-line { margin-right:16px; }
  }
</style>

<section class="pcs2-section" data-pcs2-section data-collection-url="${collectionUrl}">
  <div class="pcs2-wrapper">
    <div class="pcs2-left">
      <img src="${leftImageUrl}" alt="${leftImageAlt}" width="900" height="1200" loading="lazy"/>
    </div>
    <div class="pcs2-right">
      <div class="pcs2-header">
        <h2 class="pcs2-title">${titleText}</h2>
        <div class="pcs2-actions">
          <a href="${viewAllUrl}" class="pcs2-view-all">${viewAllText}</a>
          <div class="pcs2-arrow-group">
            <button class="pcs2-arrow-btn pcs2-prev-btn" aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.5 3L5.5 8L10.5 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
            <button class="pcs2-arrow-btn pcs2-next-btn" aria-label="Next">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
      <div class="pcs2-slider-shell">
        <div class="pcs2-track" id="pcs2Track">
          <div class="pcs2-loading">Loading products…</div>
        </div>
      </div>
      <div class="pcs2-progress-line"><div class="pcs2-progress-fill" id="pcs2ProgressFill"></div></div>
    </div>
  </div>
</section>

<script>
(function () {
  var CURRENCY = "${currencySymbol}";
  var ADD_TEXT = "${addToCartText}";
  var MANUAL_PRODUCTS = ${productsJson};

  var section = document.querySelector("[data-pcs2-section]");
  if (!section) return;

  var track = document.getElementById("pcs2Track");
  if (!track) return;

  var prevBtn = document.querySelector(".pcs2-prev-btn");
  var nextBtn = document.querySelector(".pcs2-next-btn");
  var progressFill = document.getElementById("pcs2ProgressFill");

  function buildCardHTML(p) {
    var url       = p.url || (p.handle ? "/products/" + p.handle : "#");
    var variantId = p.variantId || (p.variants && p.variants[0] ? p.variants[0].id : "");
    var cartUrl   = variantId ? "/cart/" + variantId + ":1" : "/cart";

    var rawPrice = p.price;
    var displayPrice = typeof rawPrice === "number"
      ? (rawPrice / 100).toFixed(2)
      : (rawPrice || "0.00");

    var rawCompare = p.comparePrice || (p.variants && p.variants[0] ? p.variants[0].compare_at_price : 0);
    var displayCompare = rawCompare
      ? (typeof rawCompare === "number" ? (rawCompare / 100).toFixed(2) : rawCompare)
      : "";

    var imgSrc = p.image || (p.images && p.images[0] ? p.images[0].src : "https://picsum.photos/seed/pcs2/600/900");
    var name = p.name || p.title || "Product";

    return '<div class="pcs2-card">' +
      '<a href="' + url + '" class="pcs2-card-wrap">' +
        '<div class="pcs2-image-wrap">' +
          '<img class="pcs2-product-image" src="' + imgSrc + '" alt="' + name + '" loading="lazy" draggable="false"/>' +
        '</div>' +
        '<div class="pcs2-product-name">' + name + '</div>' +
      '</a>' +
      '<div class="pcs2-card-footer">' +
        '<span class="pcs2-product-price">' + CURRENCY + displayPrice + '</span>' +
        (displayCompare ? '<span class="pcs2-product-compare">' + CURRENCY + displayCompare + '</span>' : '') +
        '<a href="' + cartUrl + '" class="pcs2-atc-btn" title="' + ADD_TEXT + '" aria-label="' + ADD_TEXT + '">' +
          '<svg viewBox="0 0 50 50" aria-hidden="true"><line x1="25" y1="9" x2="25" y2="41"></line><line x1="9" y1="25" x2="41" y2="25"></line></svg>' +
        '</a>' +
      '</div>' +
    '</div>';
  }

  function renderProducts(products) {
    if (!track) return;
    if (!products || !products.length) {
      track.innerHTML = '<div class="pcs2-loading">No products found.</div>';
      return;
    }
    track.innerHTML = products.map(buildCardHTML).join("");
    updateButtons();
    updateProgress();
    bindDrag();
  }

  var collectionUrl = section.getAttribute("data-collection-url") || "";
  if (collectionUrl && collectionUrl !== "") {
    fetch(collectionUrl.replace(/\\/$/, "") + ".json?limit=12")
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var products = (data.collection && data.collection.products) || data.products || [];
        renderProducts(products.length ? products : MANUAL_PRODUCTS);
      })
      .catch(function () {
        renderProducts(MANUAL_PRODUCTS);
      });
  } else {
    renderProducts(MANUAL_PRODUCTS);
  }

  function getScrollAmount() {
    var first = track.querySelector(".pcs2-card");
    if (!first) return 200;
    var gap = parseInt(window.getComputedStyle(track).gap || 14, 10);
    return first.offsetWidth + gap;
  }

  function updateButtons() {
    if (!track) return;
    var max = track.scrollWidth - track.clientWidth;
    if (prevBtn) prevBtn.disabled = track.scrollLeft <= 4;
    if (nextBtn) nextBtn.disabled = track.scrollLeft >= max - 4;
  }

  function updateProgress() {
    if (!track || !progressFill) return;
    var max = track.scrollWidth - track.clientWidth;
    var ratio = track.clientWidth / track.scrollWidth;
    var w = Math.max(10, ratio * 100);
    var travel = ((100 - w) / w) * 100;
    var prog = max > 0 ? track.scrollLeft / max : 0;
    progressFill.style.width = w + "%";
    progressFill.style.transform = "translateX(" + (travel * prog) + "%)";
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      if (!track) return;
      track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      if (!track) return;
      track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
    });
  }

  track.addEventListener("scroll", function () {
    updateButtons();
    updateProgress();
  });

  window.addEventListener("resize", function () {
    updateButtons();
    updateProgress();
  });

  var isDrag = false, startX = 0, startSL = 0, moved = false;

  function bindDrag() {
    if (!track) return;

    track.addEventListener("mousedown", function (e) {
      isDrag = true;
      moved = false;
      startX = e.pageX;
      startSL = track.scrollLeft;
      track.classList.add("dragging");
    });

    track.addEventListener("mousemove", function (e) {
      if (!isDrag) return;
      e.preventDefault();
      var w = e.pageX - startX;
      if (Math.abs(w) > 5) moved = true;
      track.scrollLeft = startSL - w;
    });

    function stop() {
      if (!track) return;
      isDrag = false;
      track.classList.remove("dragging");
    }

    track.addEventListener("mouseleave", stop);
    track.addEventListener("mouseup", stop);
    document.addEventListener("mouseup", stop);

    track.addEventListener("click", function (e) {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
      }
    }, true);

    track.addEventListener("dragstart", function (e) {
      e.preventDefault();
    });
  }
})();
</script>
  `;
}

export default function ProductCardSliderV2({ config }) {
  return null;
}
