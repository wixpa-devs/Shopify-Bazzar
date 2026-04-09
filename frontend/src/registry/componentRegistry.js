import headersRegistry from "./headers.registry";
import heroRegistry from "./hero.registry";
import footerRegistry from "./footer.registry";
import productMainSecRegistry from "./productMainSec.registry";
import faqsRegistry from "./faqs.registry";
import testimonialsRegistry from "./testimonials.registry";
import productCardSliderRegistry from "./productCardSlider.registry";
import collectionSliderRegistry from "./collectionSlider.registry";
import pricingRegistry from "./pricing.registry";
import slidersRegistry from "./sliders.registry";

const registry = [
  headersRegistry,
  heroRegistry,
  footerRegistry,
  productMainSecRegistry,
  faqsRegistry,
  testimonialsRegistry,
  productCardSliderRegistry,
  collectionSliderRegistry,
  pricingRegistry,
  slidersRegistry,
];

export const getAllCategories = () => registry;
export const getCategoryBySlug = (slug) => registry.find((cat) => cat.slug === slug) || null;
export const getVariant = (slug, variantId) => {
  const category = getCategoryBySlug(slug);
  if (!category) return null;
  return category.variants.find((v) => v.id === variantId) || null;
};
export const getAllComponents = () =>
  registry.flatMap((category) =>
    category.variants.map((variant) => ({
      ...variant,
      section: category.slug,
      sectionTitle: category.title,
    }))
  );

export default registry;