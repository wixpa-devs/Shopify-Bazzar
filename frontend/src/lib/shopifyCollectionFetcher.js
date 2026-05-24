/**
 * Shopify Collection Product Fetcher
 * Reusable utility for all ProductCardSlider variants
 */
import { apiUrl } from "./apiBase.js";

export async function fetchShopifyCollectionProducts(collectionUrl, limit = 8) {
  try {
    if (!collectionUrl || collectionUrl.trim() === "") {
      return null;
    }

    const response = await fetch(apiUrl("/api/shopify/collection-products"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ collectionUrl, limit }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    if (!data.success || !data.products) {
      throw new Error("Invalid response format");
    }

    return data.products;
  } catch (error) {
    console.error("[Shopify] Error fetching collection:", error);
    return null;
  }
}

/**
 * Build product card HTML from transformed Shopify product data
 * @param {Object} product - Product object with: title, price, comparePrice, imageUrl, imageAlt, productUrl, variantId, description, vendor
 * @param {Object} options - Styling options: currencySymbol, addToCartText, vendor
 */
export function buildProductCardHTML(product, options = {}) {
  const {
    currencySymbol = "$",
    addToCartText = "Add to cart",
    vendor: defaultVendor = "Brand",
  } = options;

  const {
    title = "Product",
    price = "0.00",
    comparePrice = "",
    imageUrl = "https://picsum.photos/seed/product/600/800",
    imageAlt = title,
    productUrl = "#",
    variantId = "",
    description = "",
    vendor = defaultVendor,
  } = product;

  const cartUrl = variantId ? `https://cart.shopify.com/cart/${variantId}:1` : "#";

  return `<article class="pcs-card" data-product>
    <div class="pcs-card-media">
      <a href="${productUrl}" class="pcs-card-link" aria-label="${title}" target="_blank">
        <img src="${imageUrl}" alt="${imageAlt}" class="pcs-image" loading="lazy">
      </a>
      <a href="${cartUrl}" class="pcs-quick-add" aria-label="${addToCartText}" title="${addToCartText}" target="_blank">
        <svg viewBox="0 0 50 50" aria-hidden="true" focusable="false">
          <line x1="25" y1="9" x2="25" y2="41"></line>
          <line x1="9" y1="25" x2="41" y2="25"></line>
        </svg>
      </a>
    </div>
    <div class="pcs-card-content">
      <p class="pcs-vendor">${vendor}</p>
      <h3 class="pcs-title"><a href="${productUrl}" target="_blank">${title}</a></h3>
      <div class="pcs-price">
        <span class="pcs-price-current">${currencySymbol}${price}</span>
        ${comparePrice ? `<span class="pcs-price-compare">${currencySymbol}${comparePrice}</span>` : ""}
      </div>
      ${description ? `<p class="pcs-desc">${description}</p>` : ""}
    </div>
  </article>`;
}

/**
 * Render loading state
 */
export function renderLoadingState() {
  return '<div class="pcs-loading">Loading products...</div>';
}

/**
 * Render error state
 */
export function renderErrorState(message = "Could not load products") {
  return `<div class="pcs-error">${message}</div>`;
}

/**
 * Render empty state
 */
export function renderEmptyState(message = "No products found") {
  return `<div class="pcs-empty">${message}</div>`;
}
