export function getProductCardSliderV1Code(config = {}) {
  const bgColor = config.bgColor || "#ffffff";
  const eyebrowText = config.eyebrowText || "NEW IN";
  const eyebrowColor = config.eyebrowColor || "#111111";
  const tab1Label = config.tab1Label || "MAIN SS26";
  const tab2Label = config.tab2Label || "BEST SELLERS";
  const tab3Label = config.tab3Label || "NEW ARRIVALS";
  const tabActiveBg = config.tabActiveBg || "#111111";
  const tabActiveColor = config.tabActiveColor || "#ffffff";
  const tabInactiveColor = config.tabInactiveColor || "rgba(17,17,17,0.4)";
  const navColor = config.navColor || "#111111";
  const cardBg = config.cardBg || "#f4f4f4";
  const textColor = config.textColor || "#111111";
  const vendorName = config.vendorName || "Your Brand";
  const currencySymbol = config.currencySymbol || "$";
  const addToCartText = config.addToCartText || "Add to cart";
  const viewAllText = config.viewAllText || "View all";
  const viewAllUrl = config.viewAllUrl || "/collections/all";

  const tab1CollectionUrl = config.tab1CollectionUrl || "";
  const tab2CollectionUrl = config.tab2CollectionUrl || "";
  const tab3CollectionUrl = config.tab3CollectionUrl || "";

  const buildProducts = (prefix, count = 8) => {
    const arr = [];
    for (let i = 1; i <= count; i++) {
      arr.push({
        title: config[`${prefix}p${i}Title`] || `Product ${i}`,
        price: config[`${prefix}p${i}Price`] || "0.00",
        comparePrice: config[`${prefix}p${i}ComparePrice`] || "",
        imageUrl: config[`${prefix}p${i}Image`] || `https://picsum.photos/seed/${prefix}${i}/600/800`,
        imageAlt: config[`${prefix}p${i}ImageAlt`] || `Product ${i}`,
        productUrl: config[`${prefix}p${i}Url`] || "#",
        variantId: config[`${prefix}p${i}VariantId`] || "",
        description: config[`${prefix}p${i}Desc`] || "",
        vendor: config[`${prefix}p${i}Vendor`] || vendorName,
        badge: config[`${prefix}p${i}Badge`] || "",
      });
    }
    return arr;
  };

  const tab1Products = buildProducts("t1_");
  const tab2Products = buildProducts("t2_");
  const tab3Products = buildProducts("t3_");

  const renderCard = (p) => `
  <article class="fs1-card" data-slide>
    <div class="fs1-card-media">
      ${p.badge ? `<span class="fs1-badge">${p.badge}</span>` : ""}
      <a href="${p.productUrl}" class="fs1-card-link" aria-label="${p.title}">
        <img src="${p.imageUrl}" alt="${p.imageAlt}" class="fs1-image" loading="lazy">
      </a>
      <a href="${p.variantId ? `/cart/${p.variantId}:1` : "/cart"}" class="fs1-quick-add" aria-label="${addToCartText}" title="${addToCartText}">
        <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
          <line x1="25" y1="9" x2="25" y2="41"></line>
          <line x1="9" y1="25" x2="41" y2="25"></line>
        </svg>
      </a>
    </div>
    <div class="fs1-card-content">
      <p class="fs1-vendor">${p.vendor}</p>
      <h3 class="fs1-title"><a href="${p.productUrl}">${p.title}</a></h3>
      <div class="fs1-price">
        <span class="fs1-price-current">${currencySymbol}${p.price}</span>
        ${p.comparePrice ? `<span class="fs1-price-compare">${currencySymbol}${p.comparePrice}</span>` : ""}
      </div>
      ${p.description ? `<p class="fs1-desc">${p.description}</p>` : ""}
    </div>
  </article>`;

  const renderPanel = (products, panelId, tabId, collectionUrl, isActive = false) => `
  <div class="fs1-panel${isActive ? " is-active" : ""}" id="panel-${panelId}" role="tabpanel"
    aria-labelledby="tab-${tabId}" ${isActive ? "" : "hidden"} data-tab-panel data-panel="${panelId}"
    data-collection-url="${collectionUrl}">
    <div class="fs1-viewport" data-viewport>
      <div class="fs1-track" data-track style="--desktop-columns:4;--tablet-columns:2;--mobile-columns:1;">
        ${products.map(renderCard).join("")}
      </div>
    </div>
  </div>`;

  return `
<style>
  .fs1-section {
    padding: 24px 0;
    background: ${bgColor};
  }

  .fs1-inner {
    max-width: 100%;
    padding: 0 16px;
  }

  .fs1-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 16px;
    flex-wrap: wrap;
  }

  .fs1-header-left {
    display: flex;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    min-width: 0;
  }

  .fs1-eyebrow {
    margin: 0;
    font-size: 12px;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: ${eyebrowColor};
    white-space: nowrap;
  }

  .fs1-tabs {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .fs1-tab {
    border: 0;
    background: transparent;
    padding: 0;
    font-size: 12px;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: ${tabInactiveColor};
    cursor: pointer;
    transition: .2s;
    white-space: nowrap;
  }

  .fs1-tab.is-active {
    color: ${tabActiveColor};
    background: ${tabActiveBg};
    padding: 4px 8px;
  }

  .fs1-controls {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-left: auto;
    flex-wrap: wrap;
  }

  .fs1-counter {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: ${navColor};
    white-space: nowrap;
  }

  .fs1-nav {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .fs1-nav-btn {
    border: 0;
    background: transparent;
    padding: 0;
    font-size: 12px;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: ${navColor};
    cursor: pointer;
    transition: .2s;
    white-space: nowrap;
  }

  .fs1-nav-btn.is-disabled {
    opacity: .35;
    pointer-events: none;
  }

  .fs1-view-all {
    font-size: 12px;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: ${navColor};
    text-decoration: none;
    border-bottom: 1px solid currentColor;
    white-space: nowrap;
  }

  .fs1-viewport {
    overflow: hidden;
    cursor: grab;
    user-select: none;
    touch-action: pan-y;
  }

  .fs1-viewport.is-dragging {
    cursor: grabbing;
  }

  .fs1-track {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc((100% - (16px * (var(--desktop-columns) - 1))) / var(--desktop-columns));
    gap: 16px;
    transition: transform .35s ease;
    will-change: transform;
  }

  .fs1-viewport.is-dragging .fs1-track {
    transition: none;
  }

  .fs1-card {
    min-width: 0;
  }

  .fs1-card-media {
    position: relative;
    overflow: hidden;
    background: ${cardBg};
  }

  .fs1-badge {
    position: absolute;
    top: 8px;
    left: 8px;
    z-index: 3;
    background: #e53935;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    padding: 3px 7px;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: .05em;
  }

  .fs1-card-link {
    display: block;
    text-decoration: none;
  }

  .fs1-image {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 4;
    object-fit: cover;
    pointer-events: none;
    transition: transform .4s ease;
  }

  .fs1-card-media:hover .fs1-image {
    transform: scale(1.04);
  }

  .fs1-quick-add {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 2;
    width: 34px;
    height: 34px;
    border: 1.5px solid #111;
    background: rgba(255,255,255,.92);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    border-radius: 2px;
    transition: background .2s, transform .2s;
  }

  .fs1-quick-add:hover {
    background: #111;
  }

  .fs1-quick-add:hover svg line {
    stroke: #fff;
  }

  .fs1-quick-add svg {
    display: block;
    width: 20px;
    height: 20px;
  }

  .fs1-quick-add line {
    stroke: ${textColor};
    stroke-width: 2.8;
    stroke-linecap: square;
  }

  .fs1-card-content {
    padding-top: 10px;
  }

  .fs1-vendor {
    margin: 0;
    font-size: 11px;
    color: ${textColor};
    opacity: .55;
    letter-spacing: .05em;
    text-transform: uppercase;
  }

  .fs1-title {
    margin: 2px 0 0;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.4;
  }

  .fs1-title a {
    text-decoration: none;
    color: ${textColor};
  }

  .fs1-title a:hover {
    text-decoration: underline;
  }

  .fs1-price {
    margin-top: 4px;
    display: flex;
    gap: 6px;
    align-items: baseline;
    flex-wrap: wrap;
  }

  .fs1-price-current {
    font-size: 13px;
    color: ${textColor};
  }

  .fs1-price-compare {
    font-size: 12px;
    color: ${textColor};
    opacity: .45;
    text-decoration: line-through;
  }

  .fs1-desc {
    margin-top: 6px;
    font-size: 12px;
    color: ${textColor};
    opacity: .65;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .fs1-panel[hidden] {
    display: none !important;
  }

  .fs1-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 0;
    font-size: 13px;
    color: ${textColor};
    opacity: .5;
  }

  @media (max-width: 989px) {
    .fs1-section {
      padding: 22px 0;
    }

    .fs1-inner {
      padding: 0 14px;
    }

    .fs1-header {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
    }

    .fs1-header-left {
      gap: 16px;
      flex-direction: column;
      align-items: flex-start;
    }

    .fs1-controls {
      justify-content: space-between;
      margin-left: 0;
      gap: 14px;
    }

    .fs1-track {
      grid-auto-columns: calc((100% - (12px * (var(--tablet-columns) - 1))) / var(--tablet-columns));
      gap: 12px;
    }
  }

  @media (max-width: 749px) {
    .fs1-section {
      padding: 20px 0;
    }

    .fs1-inner {
      padding: 0 10px;
    }

    .fs1-header-left {
      gap: 12px;
      flex-direction: column;
      align-items: flex-start;
    }

    .fs1-tabs {
      gap: 10px;
    }

    .fs1-controls {
      justify-content: space-between;
      gap: 10px;
    }

    .fs1-track {
      grid-auto-columns: calc((100% - (10px * (var(--mobile-columns) - 1))) / var(--mobile-columns));
      gap: 10px;
    }

    .fs1-quick-add {
      left: 8px;
      bottom: 8px;
      width: 30px;
      height: 30px;
    }

    .fs1-quick-add svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 480px) {
    .fs1-tabs {
      gap: 8px;
    }

    .fs1-tab,
    .fs1-view-all,
    .fs1-nav-btn,
    .fs1-counter {
      font-size: 11px;
    }

    .fs1-title {
      font-size: 12px;
    }

    .fs1-price-current {
      font-size: 12px;
    }

    .fs1-price-compare,
    .fs1-desc {
      font-size: 11px;
    }
  }
</style>

<section class="fs1-section" data-fs1-section>
  <div class="fs1-inner">
    <div class="fs1-header">
      <div class="fs1-header-left">
        <p class="fs1-eyebrow">${eyebrowText}</p>
        <div class="fs1-tabs" role="tablist" aria-label="Product collections">
          <button class="fs1-tab is-active" type="button" role="tab" aria-selected="true"
            aria-controls="panel-1" id="tab-1" data-tab-trigger data-target="1">${tab1Label}</button>
          <button class="fs1-tab" type="button" role="tab" aria-selected="false"
            aria-controls="panel-2" id="tab-2" data-tab-trigger data-target="2">${tab2Label}</button>
          <button class="fs1-tab" type="button" role="tab" aria-selected="false"
            aria-controls="panel-3" id="tab-3" data-tab-trigger data-target="3">${tab3Label}</button>
        </div>
      </div>

      <div class="fs1-controls">
        <div class="fs1-counter" aria-live="polite">
          <span data-current>1</span><span>/</span><span data-total>2</span>
        </div>
        <div class="fs1-nav">
          <button class="fs1-nav-btn is-disabled" type="button" data-prev>PREVIOUS</button>
          <button class="fs1-nav-btn" type="button" data-next>NEXT</button>
        </div>
        <a href="${viewAllUrl}" class="fs1-view-all">${viewAllText}</a>
      </div>
    </div>

    <div class="fs1-panels">
      ${renderPanel(tab1Products, "1", "1", tab1CollectionUrl, true)}
      ${renderPanel(tab2Products, "2", "2", tab2CollectionUrl, false)}
      ${renderPanel(tab3Products, "3", "3", tab3CollectionUrl, false)}
    </div>
  </div>
</section>

<script>
(function () {
  var VENDOR_FALLBACK = "${vendorName}";
  var CURRENCY = "${currencySymbol}";
  var ADD_TEXT = "${addToCartText}";

  function buildCardHTML(p) {
    var productUrl = p.productUrl || "#";
    var variantId = p.variantId || "";
    var cartUrl = variantId ? ("https://cart.shopify.com/cart/" + variantId + ":1") : "#";
    var price = p.price || "0.00";
    var compare = p.comparePrice || "";
    var imgSrc = p.imageUrl || "https://picsum.photos/seed/prod/600/800";
    var desc = p.description || "";

    return '<article class="fs1-card" data-slide>' +
      '<div class="fs1-card-media">' +
        '<a href="' + productUrl + '" class="fs1-card-link" aria-label="' + p.title + '" target="_blank">' +
          '<img src="' + imgSrc + '" alt="' + p.imageAlt + '" class="fs1-image" loading="lazy">' +
        '</a>' +
        '<a href="' + cartUrl + '" class="fs1-quick-add" aria-label="' + ADD_TEXT + '" title="' + ADD_TEXT + '" target="_blank">' +
          '<svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">' +
            '<line x1="25" y1="9" x2="25" y2="41"></line>' +
            '<line x1="9" y1="25" x2="41" y2="25"></line>' +
          '</svg>' +
        '</a>' +
      '</div>' +
      '<div class="fs1-card-content">' +
        '<p class="fs1-vendor">' + (p.vendor || VENDOR_FALLBACK) + '</p>' +
        '<h3 class="fs1-title"><a href="' + productUrl + '" target="_blank">' + p.title + '</a></h3>' +
        '<div class="fs1-price">' +
          '<span class="fs1-price-current">' + CURRENCY + price + '</span>' +
          (compare ? '<span class="fs1-price-compare">' + CURRENCY + compare + '</span>' : '') +
        '</div>' +
        (desc ? '<p class="fs1-desc">' + desc + '</p>' : '') +
      '</div>' +
    '</article>';
  }

  function loadCollectionIntoPanel(panel) {
    var collectionUrl = panel.getAttribute("data-collection-url");
    if (!collectionUrl || collectionUrl === "") return;

    var track = panel.querySelector("[data-track]");
    if (!track) return;

    track.innerHTML = '<div class="fs1-loading">Loading products…</div>';

    fetch("/api/shopify/collection-products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ collectionUrl: collectionUrl, limit: 8 })
    })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (!data.success || !data.products || !data.products.length) {
          track.innerHTML = '<div class="fs1-loading">No products found.</div>';
          return;
        }

        track.innerHTML = data.products.map(buildCardHTML).join("");

        var vp = panel.querySelector("[data-viewport]");
        if (vp && vp.dataset.dragBound !== "true") bindDragTo(vp);
        updateSlider();
      })
      .catch(function (err) {
        console.error("Error loading collection:", err);
        track.innerHTML = '<div class="fs1-loading">Could not load products.</div>';
      });
  }

  var section = document.querySelector("[data-fs1-section]");
  if (!section) return;

  var tabs = section.querySelectorAll("[data-tab-trigger]");
  var panels = section.querySelectorAll("[data-tab-panel]");
  var prevBtn = section.querySelector("[data-prev]");
  var nextBtn = section.querySelector("[data-next]");
  var currentEl = section.querySelector("[data-current]");
  var totalEl = section.querySelector("[data-total]");
  var activePanel = section.querySelector("[data-tab-panel].is-active");
  var sliderIndex = 0;

  var isPointerDown = false;
  var isDragging = false;
  var startX = 0;
  var currentTX = 0;
  var prevTX = 0;
  var dragThreshold = 50;

  function getVP() {
    return activePanel ? activePanel.querySelector("[data-viewport]") : null;
  }

  function getTrack() {
    return activePanel ? activePanel.querySelector("[data-track]") : null;
  }

  function getColumns(track) {
    if (!track) return 1;

    var s = window.getComputedStyle(track);
    var desktop = parseInt(s.getPropertyValue("--desktop-columns")) || 4;
    var tablet = parseInt(s.getPropertyValue("--tablet-columns")) || 2;
    var mobile = parseInt(s.getPropertyValue("--mobile-columns")) || 1;

    if (window.innerWidth <= 749) return mobile;
    if (window.innerWidth <= 989) return tablet;
    return desktop;
  }

  function getSteps(panel) {
    if (!panel) return 1;
    var track = panel.querySelector("[data-track]");
    var slides = panel.querySelectorAll("[data-slide]");
    return Math.max(1, Math.ceil(slides.length / getColumns(track)));
  }

  function updateSlider() {
    var vp = getVP();
    var track = getTrack();
    var steps = getSteps(activePanel);

    if (!vp || !track) return;

    sliderIndex = Math.max(0, Math.min(sliderIndex, steps - 1));
    prevTX = -(sliderIndex * vp.clientWidth);
    currentTX = prevTX;
    track.style.transform = "translate3d(" + prevTX + "px,0,0)";

    if (currentEl) currentEl.textContent = sliderIndex + 1;
    if (totalEl) totalEl.textContent = steps;
    if (prevBtn) prevBtn.classList.toggle("is-disabled", sliderIndex === 0);
    if (nextBtn) nextBtn.classList.toggle("is-disabled", sliderIndex >= steps - 1);
  }

  function goNext() {
    var steps = getSteps(activePanel);
    if (sliderIndex < steps - 1) {
      sliderIndex++;
      updateSlider();
    }
  }

  function goPrev() {
    if (sliderIndex > 0) {
      sliderIndex--;
      updateSlider();
    }
  }

  function activateTab(target) {
    tabs.forEach(function (t) {
      var match = t.dataset.target === target;
      t.classList.toggle("is-active", match);
      t.setAttribute("aria-selected", match ? "true" : "false");
    });

    panels.forEach(function (p) {
      var match = p.dataset.panel === target;
      p.classList.toggle("is-active", match);
      p.hidden = !match;
      if (match) {
        activePanel = p;
        loadCollectionIntoPanel(p);
      }
    });

    sliderIndex = 0;
    updateSlider();

    var vp = getVP();
    if (vp && vp.dataset.dragBound !== "true") bindDragTo(vp);
  }

  function bindDragTo(vp) {
    vp.dataset.dragBound = "true";

    vp.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      isPointerDown = true;
      isDragging = false;
      startX = e.clientX;
      currentTX = prevTX;
      vp.classList.add("is-dragging");
      if (vp.setPointerCapture) vp.setPointerCapture(e.pointerId);
    });

    vp.addEventListener("pointermove", function (e) {
      if (!isPointerDown) return;
      var moved = e.clientX - startX;
      if (Math.abs(moved) > 6) isDragging = true;
      currentTX = prevTX + moved;
      var track = getTrack();
      if (track) track.style.transform = "translate3d(" + currentTX + "px,0,0)";
    });

    function up() {
      if (!isPointerDown) return;
      isPointerDown = false;
      vp.classList.remove("is-dragging");

      var moved = currentTX - prevTX;
      if (moved < -dragThreshold) goNext();
      else if (moved > dragThreshold) goPrev();
      else updateSlider();

      setTimeout(function () {
        isDragging = false;
      }, 0);
    }

    vp.addEventListener("pointerup", up);
    vp.addEventListener("pointercancel", up);
    vp.addEventListener("pointerleave", up);

    vp.querySelectorAll("a,button").forEach(function (el) {
      el.addEventListener("click", function (e) {
        if (isDragging) {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    });
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      activateTab(t.dataset.target);
    });
  });

  if (prevBtn) prevBtn.addEventListener("click", goPrev);
  if (nextBtn) nextBtn.addEventListener("click", goNext);

  window.addEventListener("resize", function () {
    updateSlider();
  });

  if (activePanel) loadCollectionIntoPanel(activePanel);

  var vp0 = getVP();
  if (vp0) bindDragTo(vp0);

  updateSlider();
})();
</script>
  `;
}

export default function ProductCardSliderV1({ config }) {
  return null;
}
