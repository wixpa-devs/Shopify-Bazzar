/**
 * Registry Helper: Generate product controls for ProductCardSlider variants
 * Creates comprehensive product detail fields for manual product entry
 */

export function generateProductControls(productPrefix, productCount = 8) {
  const controls = [];

  for (let i = 1; i <= productCount; i++) {
    const p = productPrefix;
    const num = i;

    controls.push(
      // Product title, price, compare price
      { type: "text", label: `Product ${num} - Title`, key: `${p}p${num}Title` },
      { type: "text", label: `Product ${num} - Price`, key: `${p}p${num}Price`, placeholder: "99.99" },
      { type: "text", label: `Product ${num} - Compare Price (Optional)`, key: `${p}p${num}ComparePrice`, placeholder: "149.99" },

      // Image upload
      { type: "image-upload", label: `Product ${num} - Image Upload`, key: `${p}p${num}Image` },
      { type: "text", label: `Product ${num} - Image Alt Text`, key: `${p}p${num}ImageAlt` },

      // URLs and IDs
      { type: "text", label: `Product ${num} - Product Page URL`, key: `${p}p${num}Url`, placeholder: "https://store.com/products/..." },
      { type: "text", label: `Product ${num} - Shopify Variant ID`, key: `${p}p${num}VariantId`, placeholder: "gid://shopify/ProductVariant/..." },

      // Additional details
      { type: "text", label: `Product ${num} - Vendor/Brand`, key: `${p}p${num}Vendor` },
      { type: "text", label: `Product ${num} - Description`, key: `${p}p${num}Desc` },
      { type: "text", label: `Product ${num} - Badge (e.g., "Sale", "New")`, key: `${p}p${num}Badge` },
    );
  }

  return controls;
}

/**
 * Create collection URL controls for tabbed variants
 */
export function generateCollectionControls(tabCount = 3) {
  const controls = [];
  for (let i = 1; i <= tabCount; i++) {
    controls.push({
      type: "text",
      label: `Tab ${i} Shopify Collection URL`,
      key: `tab${i}CollectionUrl`,
      placeholder: "https://store.myshopify.com/collections/sale",
    });
  }
  return controls;
}

/**
 * Create product accordion section for a specific tab/collection
 */
export function createProductAccordion(tabNumber, productCount = 8) {
  const prefix = `t${tabNumber}_`;

  return {
    id: `tab${tabNumber}-products`,
    icon: "fa-box",
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    title: `Tab ${tabNumber} Products`,
    subtitle: `Manually add up to ${productCount} products or use collection URL to auto-fetch`,
    controls: generateProductControls(prefix, productCount),
  };
}
