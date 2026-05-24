import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import headersPreview from "../../assets/component-previews/headers.svg";
import heroPreview from "../../assets/component-previews/hero-sections.svg";
import productCardsPreview from "../../assets/component-previews/product-cards.svg";
import productSectionsPreview from "../../assets/component-previews/product-sections.svg";
import testimonialsPreview from "../../assets/component-previews/testimonials.svg";
import bannersPreview from "../../assets/component-previews/banners.svg";
import footersPreview from "../../assets/component-previews/footers.svg";
import collectionPreview from "../../assets/component-previews/collection-sections.svg";
import faqPreview from "../../assets/component-previews/faq-sections.svg";
import trustBadgesPreview from "../../assets/component-previews/trust-badges.svg";
import pricingPreview from "../../assets/component-previews/pricing-sections.svg";
import ctaPreview from "../../assets/component-previews/cta-sections.svg";
import liveEditorImage from "../../../../temp-assets/live-editor-main-img.png";

const componentCategories = [
   { title: "Headers", count: "12 components", image: headersPreview },
   { title: "Hero Sections", count: "18 components", image: heroPreview },
   { title: "Product Cards", count: "24 components", image: productCardsPreview },
   {
      title: "Product Sections",
      count: "16 components",
      image: productSectionsPreview,
   },
   { title: "Testimonials", count: "10 components", image: testimonialsPreview },
   { title: "Banners", count: "14 components", image: bannersPreview },
   { title: "Footers", count: "8 components", image: footersPreview },
   {
      title: "Collection Sections",
      count: "12 components",
      image: collectionPreview,
   },
   { title: "FAQ Sections", count: "9 components", image: faqPreview },
   { title: "Trust Badges", count: "11 components", image: trustBadgesPreview },
   { title: "Pricing Sections", count: "7 components", image: pricingPreview },
   { title: "CTA Sections", count: "13 components", image: ctaPreview },
];

const featurePoints = [
   "Customize sections without touching code",
   "Preview changes instantly before publishing",
   "Build premium Shopify pages faster",
];

const section =
   "overflow-hidden bg-[#f5f6f4] px-4 py-10 sm:px-7 sm:py-12 lg:px-4 lg:py-16";
const shell = "mx-auto max-w-[1400px]";
const topRow =
   "mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between";
const heading =
   "text-[26px] font-black tracking-[-0.02em] text-[#141a16] sm:text-[30px]";
const viewAll =
   "inline-flex w-fit items-center gap-2 text-[13px] font-bold text-[#2f3a34] transition-colors hover:text-[#1f9c45]";
const slider =
   "component-slider -mx-4 overflow-x-auto px-4 pb-2 sm:-mx-7 sm:px-7 lg:mx-0 lg:px-0";
const sliderTrack = "flex min-w-full gap-3";
const componentCard =
   "group flex-none w-[164px] rounded-[13px] border border-[#dfe7e1] bg-white p-3 shadow-[0_10px_24px_rgba(25,31,28,0.055)] transition duration-200 hover:-translate-y-0.5 hover:border-[#bcdcc5] hover:shadow-[0_18px_36px_rgba(25,31,28,0.09)] min-[420px]:w-[184px] sm:w-[204px] lg:w-[calc((100%_-_60px)/6)]";
const cardImage =
   "block aspect-[3/2] w-full rounded-[10px] border border-[#eef2ef] bg-[#f8faf8] object-cover";
const cardTitle =
   "mt-3.5 text-[13.5px] font-black tracking-[-0.01em] text-[#151c18]";
const cardCount = "mt-1 text-[11.5px] font-semibold text-[#6d7771]";
const liveBlock =
   "mt-9 grid items-center gap-7 rounded-[18px] border border-[#dfe7e1] bg-white/42 p-4 sm:mt-11 sm:p-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-7 lg:bg-transparent lg:p-0 lg:border-0";
const liveCopy = "max-w-[390px] lg:pl-1";
const pill =
   "inline-flex rounded-full border border-[#d5ded8] bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.04em] text-[#1f9c45]";
const liveTitle =
   "mt-4 max-w-[360px] text-[34px] font-black leading-[1.02] tracking-[-0.035em] text-[#111815] sm:text-[40px] lg:text-[44px]";
const pointList = "mt-6 space-y-3.5";
const point =
   "flex items-center gap-3 text-[14px] font-semibold leading-snug text-[#4f5b55] sm:text-[15px]";
const checkWrap =
   "flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#e5f6ea] text-[#1c9a43]";
const ctaButton =
   "mt-7 inline-flex h-[50px] items-center justify-center gap-2 rounded-[10px] bg-[#1f990f] px-6 text-[14px] font-black text-white shadow-[0_12px_22px_rgba(38,153,28,0.22)] ring-1 ring-[#16850b] transition-colors hover:bg-[#18850d]";
const imageWrap =
   "relative overflow-hidden rounded-[18px] border border-[#dfe7e1] bg-white shadow-[0_18px_44px_rgba(22,32,26,0.08)]";
const liveImage =
   "block h-auto w-full select-none object-contain";

const LibraryEditorSection = () => {
   const sliderRef = useRef(null);
   const pausedRef = useRef(false);
   const navigate = useNavigate();

   useEffect(() => {
      const sliderElement = sliderRef.current;
      if (!sliderElement) return undefined;

      const reduceMotion = window.matchMedia(
         "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) return undefined;

      let frameId;
      let lastTime = performance.now();
      const speed = 42;

      const tick = (time) => {
         const delta = time - lastTime;
         lastTime = time;

         if (!pausedRef.current) {
            sliderElement.scrollLeft += (speed * delta) / 1000;
            const halfWidth = sliderElement.scrollWidth / 2;
            if (sliderElement.scrollLeft >= halfWidth) {
               sliderElement.scrollLeft -= halfWidth;
            }
         }

         frameId = requestAnimationFrame(tick);
      };

      frameId = requestAnimationFrame(tick);

      return () => cancelAnimationFrame(frameId);
   }, []);

   const sliderItems = [...componentCategories, ...componentCategories];

   return (
      <section className={section}>
         <div className={shell}>
            <div className={topRow}>
               <h2 className={heading}>Component Library</h2>
               <button
                  className={viewAll}
                  type="button"
                  onClick={() => navigate("/components")}
               >
                  View All Components <ArrowRight size={15} />
               </button>
            </div>

            <div
               className={slider}
               ref={sliderRef}
               onMouseEnter={() => {
                  pausedRef.current = true;
               }}
               onMouseLeave={() => {
                  pausedRef.current = false;
               }}
               onTouchStart={() => {
                  pausedRef.current = true;
               }}
               onTouchEnd={() => {
                  pausedRef.current = false;
               }}
            >
               <div className={sliderTrack}>
                  {sliderItems.map((item, index) => (
                     <article
                        className={componentCard}
                        key={`${item.title}-${index}`}
                        aria-hidden={index >= componentCategories.length}
                     >
                        <img
                           className={cardImage}
                           src={item.image}
                           alt=""
                           loading="lazy"
                           draggable="false"
                        />
                        <h3 className={cardTitle}>{item.title}</h3>
                        <p className={cardCount}>{item.count}</p>
                     </article>
                  ))}
               </div>
            </div>

            <div className={liveBlock}>
               <div className={liveCopy}>
                  <span className={pill}>Live Editor</span>
                  <h2 className={liveTitle}>Edit Visually. See It Instantly.</h2>

                  <ul className={pointList}>
                     {featurePoints.map((item) => (
                        <li className={point} key={item}>
                           <span className={checkWrap} aria-hidden="true">
                              <Check size={13} strokeWidth={3} />
                           </span>
                           <span>{item}</span>
                        </li>
                     ))}
                  </ul>

                  <button
                     className={ctaButton}
                     type="button"
                     onClick={() => navigate("/components")}
                  >
                     Try Live Editor <ArrowRight size={16} />
                  </button>
               </div>

               <div className={imageWrap}>
                  <img
                     className={liveImage}
                     src={liveEditorImage}
                     alt="Live editor interface preview"
                     loading="lazy"
                     draggable="false"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default LibraryEditorSection;
