import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
   ArrowRight,
   BadgeCheck,
   Check,
   CreditCard,
   FileQuestion,
   Grid2X2,
   Images,
   Layers3,
   LayoutDashboard,
   LayoutList,
   Megaphone,
   MessageSquareQuote,
   Package,
   PanelsTopLeft,
   ShoppingBag,
   SlidersHorizontal,
   Sparkles,
   Tag,
} from "lucide-react";
import { getAllCategories } from "../../registry/componentRegistry";
import liveEditorImage from "../../../../temp-assets/live-editor-main-img.png";

const labelOverrides = {
   announcementbar: "Announcement Bars",
   headers: "Headers",
   hero: "Hero Sections",
   "product-card-slider": "Product Cards",
   "product-main-sec": "Product Sections",
   testimonials: "Testimonials",
   faqs: "FAQ Sections",
   footer: "Footers",
   marquee: "Banners",
   "collection-slider": "Collections",
   pricing: "Pricing Sections",
   "trust-badges": "Trust Badges",
   cta: "CTA Sections",
   sliders: "Sliders",
   "carousel-slider": "Carousel Sliders",
   "featured-containers": "Featured Containers",
   "process-card": "Process Cards",
};

const descriptionOverrides = {
   headers: "Top navigation bars and page headers.",
   hero: "Impactful hero layouts for every purpose.",
   "product-card-slider": "Beautiful product cards that convert.",
   "product-main-sec": "Layouts to showcase products effectively.",
   testimonials: "Build trust with customer stories and reviews.",
   marquee: "Promotional banners that drive action.",
   footer: "Footer layouts for trust, links, and conversion.",
   "collection-slider": "Collection grids and sliders for stores.",
   faqs: "Answer customer questions clearly.",
   announcementbar: "Promo bars for shipping, sales, and alerts.",
   pricing: "Pricing blocks for offers and plans.",
   "trust-badges": "Trust, payment, and security proof points.",
   cta: "Conversion-focused call-to-action sections.",
   sliders: "Image sliders for featured stories and products.",
   "carousel-slider": "Scrollable carousel layouts for rich content.",
   "featured-containers": "Premium feature blocks and content cards.",
   "process-card": "Step-by-step process cards for clear flows.",
};

const iconMap = {
   headers: LayoutList,
   hero: PanelsTopLeft,
   "product-card-slider": ShoppingBag,
   "product-main-sec": Package,
   testimonials: MessageSquareQuote,
   marquee: Megaphone,
   footer: LayoutDashboard,
   "collection-slider": Grid2X2,
   faqs: FileQuestion,
   announcementbar: Tag,
   pricing: CreditCard,
   "trust-badges": BadgeCheck,
   cta: Sparkles,
   sliders: SlidersHorizontal,
   "carousel-slider": Images,
   "featured-containers": Layers3,
   "process-card": BadgeCheck,
};

const featurePoints = [
   "Customize sections without touching code",
   "Preview changes instantly before publishing",
   "Build premium Shopify pages faster",
];

const section =
   "overflow-hidden bg-[#f5f6f4] px-4 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const shell = "mx-auto max-w-[1320px]";
const topRow =
   "mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between";
const heading =
   "text-[28px] font-black tracking-[-0.03em] text-[#141a16] sm:text-[34px]";
const viewAll =
   "inline-flex w-fit items-center gap-2 text-[13px] font-bold text-[#2f3a34] transition-colors hover:text-[#1f9c45]";
const slider =
   "component-slider -mx-4 overflow-x-auto px-4 pb-2 sm:-mx-7 sm:px-7 lg:mx-0 lg:px-0";
const sliderTrack = "flex min-w-full gap-4";
const componentCard =
   "group flex min-h-[178px] flex-none cursor-pointer flex-col rounded-[16px] border border-[#dfe7e1] bg-white p-5 text-left no-underline shadow-[0_14px_34px_rgba(25,31,28,0.07)] transition-colors duration-200 hover:border-[#bcdcc5] hover:bg-[#fbfdfb] hover:shadow-[0_20px_42px_rgba(25,31,28,0.1)] min-[420px]:w-[196px] sm:w-[212px] lg:w-[calc((100%_-_80px)/6)]";
const cardIcon =
   "grid h-11 w-11 place-items-center rounded-[12px] bg-[#eaf9ee] text-[#10a33d] shadow-[inset_0_0_0_1px_rgba(22,163,74,0.08)]";
const cardTitle =
   "mt-5 text-[15px] font-black tracking-[-0.02em] text-[#151c18]";
const cardDescription =
   "mt-2 min-h-[42px] text-[12.5px] font-semibold leading-[1.55] text-[#596779]";
const cardFooter = "mt-auto flex items-center justify-between gap-3 pt-4";
const cardCountWrap =
   "inline-flex items-center gap-2 text-[11.5px] font-bold text-[#526058]";
const cardCountDot = "h-1.5 w-1.5 rounded-full bg-[#10a33d]";
const cardArrow =
   "grid h-8 w-8 place-items-center rounded-[9px] bg-[#eaf9ee] text-[#10a33d] transition-colors duration-200 group-hover:bg-[#10a33d] group-hover:text-white";
const liveBlock =
   "mt-10 grid items-center gap-7 rounded-[20px] border border-[#dfe7e1] bg-white/42 p-4 sm:mt-12 sm:p-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0";
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
   "mt-7 inline-flex h-[50px] items-center justify-center gap-2 rounded-[12px] bg-[#1f990f] px-6 text-[14px] font-black text-white shadow-[0_12px_22px_rgba(38,153,28,0.22)] ring-1 ring-[#16850b] transition-colors hover:bg-[#18850d]";
const imageWrap =
   "relative overflow-hidden rounded-[20px] border border-[#dfe7e1] bg-white shadow-[0_18px_44px_rgba(22,32,26,0.08)]";
const liveImage =
   "block h-auto w-full select-none object-contain";

const LibraryEditorSection = () => {
   const sliderRef = useRef(null);
   const pausedRef = useRef(false);
   const suppressClickRef = useRef(false);
   const dragStateRef = useRef({
      isDragging: false,
      isCaptured: false,
      startX: 0,
      startScrollLeft: 0,
      moved: false,
   });
   const navigate = useNavigate();
   const componentCategories = useMemo(
      () =>
         getAllCategories()
            .filter((category) => category.variants?.length)
            .map((category) => {
               const Icon = iconMap[category.slug] || Images;

               return {
                  slug: category.slug,
                  title: labelOverrides[category.slug] || category.title,
                  description:
                     descriptionOverrides[category.slug] ||
                     "Premium sections built for Shopify stores.",
                  count: `${category.variants.length} components`,
                  Icon,
               };
            }),
      [],
   );

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

   const getCategoryHref = (slug) =>
      `/components?category=${encodeURIComponent(slug)}`;

   const handleCategoryClick = (event, slug) => {
      if (suppressClickRef.current) {
         event.preventDefault();
         return;
      }

      event.preventDefault();
      navigate(getCategoryHref(slug));
   };

   const normalizeDragPosition = (sliderElement) => {
      const halfWidth = sliderElement.scrollWidth / 2;
      if (!halfWidth) return;

      if (sliderElement.scrollLeft <= 1) {
         sliderElement.scrollLeft += halfWidth;
         dragStateRef.current.startScrollLeft += halfWidth;
      }

      if (sliderElement.scrollLeft >= halfWidth) {
         sliderElement.scrollLeft -= halfWidth;
         dragStateRef.current.startScrollLeft -= halfWidth;
      }
   };

   const startDrag = (event) => {
      const sliderElement = sliderRef.current;
      if (!sliderElement) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;

      pausedRef.current = true;
      suppressClickRef.current = false;
      normalizeDragPosition(sliderElement);
      dragStateRef.current = {
         isDragging: true,
         isCaptured: false,
         startX: event.clientX,
         startScrollLeft: sliderElement.scrollLeft,
         moved: false,
      };
   };

   const moveDrag = (event) => {
      const sliderElement = sliderRef.current;
      const dragState = dragStateRef.current;
      if (!sliderElement || !dragState.isDragging) return;

      const delta = event.clientX - dragState.startX;
      if (Math.abs(delta) > 6) {
         dragState.moved = true;
         if (!dragState.isCaptured) {
            sliderElement.setPointerCapture?.(event.pointerId);
            dragState.isCaptured = true;
         }
         event.preventDefault();
      }

      sliderElement.scrollLeft = dragState.startScrollLeft - delta;
      normalizeDragPosition(sliderElement);
   };

   const endDrag = (event) => {
      const sliderElement = sliderRef.current;
      const didDrag = dragStateRef.current.moved;
      if (sliderElement && dragStateRef.current.isCaptured) {
         sliderElement.releasePointerCapture?.(event.pointerId);
      }

      dragStateRef.current.isDragging = false;
      dragStateRef.current.isCaptured = false;
      suppressClickRef.current = didDrag;
      window.setTimeout(() => {
         dragStateRef.current.moved = false;
         suppressClickRef.current = false;
         if (!sliderRef.current?.matches(":hover")) {
            pausedRef.current = false;
         }
      }, 120);
   };

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
               onPointerDown={startDrag}
               onPointerMove={moveDrag}
               onPointerUp={endDrag}
               onPointerCancel={endDrag}
            >
               <div className={sliderTrack}>
                  {sliderItems.map((item, index) => (
                     <a
                        className={componentCard}
                        href={getCategoryHref(item.slug)}
                        key={`${item.title}-${index}`}
                        onClick={(event) => handleCategoryClick(event, item.slug)}
                        draggable="false"
                        aria-label={`Browse ${item.title}`}
                     >
                        <span className={cardIcon} aria-hidden="true">
                           <item.Icon size={23} strokeWidth={2.4} />
                        </span>
                        <h3 className={cardTitle}>{item.title}</h3>
                        <p className={cardDescription}>{item.description}</p>
                        <span className={cardFooter}>
                           <span className={cardCountWrap}>
                              <span className={cardCountDot} />
                              {item.count}
                           </span>
                           <span className={cardArrow} aria-hidden="true">
                              <ArrowRight size={17} strokeWidth={2.5} />
                           </span>
                        </span>
                     </a>
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
