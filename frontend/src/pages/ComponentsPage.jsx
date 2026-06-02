import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
   Box,
   ChevronDown,
   Check,
   Grid3X3,
   List,
   MailPlus,
   PackageOpen,
   Search,
   Wand2,
} from "lucide-react";
import { getAllCategories } from "../registry/componentRegistry";

const pageHero =
   "relative left-1/2 isolate -mt-10 mb-10 w-screen -translate-x-1/2 overflow-hidden border-b border-[#e8f0eb] bg-[#f4fbf5] px-5 py-16 font-[var(--inter-font)] max-[1024px]:-mt-8 sm:py-20 lg:py-[84px] max-[900px]:-mt-24 max-[900px]:pt-[8.5rem] max-[640px]:-mt-[6.5rem] max-[640px]:pt-[7.5rem]";
const pageHeroPattern =
   "absolute inset-0 -z-10 opacity-75 [background-image:radial-gradient(rgba(26,89,47,0.16)_1px,transparent_1px)] [background-size:24px_24px]";
const pageHeroGlow =
   "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.92)_0%,rgba(244,251,245,0.76)_46%,rgba(238,249,241,0.92)_100%)]";
const pageHeroInner =
   "mx-auto flex min-h-[190px] max-w-[980px] flex-col items-center justify-center text-center";
const pageTitle =
   "text-[clamp(3.2rem,6.8vw,5.9rem)] font-black leading-[0.98] tracking-[-0.055em] text-[#090d0b]";
const pageDescription =
   "mt-8 max-w-[770px] text-[clamp(1.04rem,1.35vw,1.5rem)] font-semibold leading-[1.55] tracking-[-0.015em] text-[#59636c] max-[640px]:mt-6";

const cardsGrid =
   "grid grid-cols-1 gap-5 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]";
const cardBase =
   "border border-[var(--color-sidebar-border)] [border-left-width:3px] [border-left-color:transparent] rounded-xl overflow-hidden bg-[var(--color-bg-white)] flex flex-col cursor-pointer transition-[border-color,background-color] duration-200 ease-out hover:[border-left-color:#2563eb] hover:bg-[#fafbff]";
const cardPreview =
   "h-[220px] bg-[var(--color-bg-light,#f9fafb)] flex items-start justify-center border-b border-[var(--color-sidebar-border)] overflow-hidden pointer-events-none relative";
const previewOverlay =
   "absolute inset-0 bg-[rgba(37,99,235,0.04)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-[1] pointer-events-none";
const cardFooter =
   "px-[14px] py-3 flex items-center justify-between gap-[10px] bg-white flex-shrink-0";
const cardNameWrap = "flex flex-col gap-[2px] min-w-0 flex-1";
const cardName =
   "text-[0.86rem] font-bold text-[var(--color-nav-text)] font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis leading-[1.2]";
const cardSlug =
   "text-[0.68rem] text-[var(--color-nav-text-secondary)] font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis opacity-70";
const customizeBtn =
   "inline-flex items-center gap-[0.35rem] text-[0.72rem] font-semibold px-[13px] py-[6px] rounded-full bg-[var(--color-nav-active-bg)] text-[var(--color-nav-active)] border border-[rgba(37,99,235,0.18)] font-[var(--inter-font)] cursor-pointer whitespace-nowrap flex-shrink-0 transition-[background,color,border-color] duration-150 hover:bg-[var(--color-nav-active)] hover:text-white hover:border-[var(--color-nav-active)]";

const emptyState =
   "text-center py-16 px-8 text-[var(--color-nav-text-secondary)] font-[var(--inter-font)]";
const emptyText = "text-[0.88rem] leading-[1.7] mt-4";

const browseSection =
   "mb-16 animate-[fadeUp_0.55s_ease_both] font-[var(--inter-font)]";
const browseToolbar =
   "rounded-[14px] border border-[#e6ece7] bg-white p-5 shadow-[0_12px_34px_rgba(17,24,39,0.08)] max-[640px]:p-4";
const toolbarTop =
   "flex items-center gap-4 max-[820px]:flex-wrap max-[640px]:gap-3";
const searchWrap =
   "relative min-w-[280px] flex-1 max-[640px]:min-w-0 max-[640px]:basis-full";
const searchInput =
   "h-11 w-full rounded-[9px] border border-[#e2e8e3] bg-white pl-11 pr-4 text-[0.84rem] font-semibold text-[#1f2a24] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#879188] focus:border-[#43b45b] focus:shadow-[0_0_0_4px_rgba(67,180,91,0.12)]";
const searchIcon =
   "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#4f5a53]";
const sortGroup =
   "flex shrink-0 items-center gap-3 max-[640px]:w-full max-[640px]:justify-between";
const sortLabel =
   "text-[0.78rem] font-extrabold text-[#1c241f] whitespace-nowrap";
const sortSelectWrap = "relative";
const sortSelect =
   "h-11 min-w-[148px] appearance-none rounded-[9px] border border-[#e2e8e3] bg-white px-4 pr-10 text-[0.82rem] font-extrabold text-[#1c241f] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#43b45b] focus:shadow-[0_0_0_4px_rgba(67,180,91,0.12)]";
const selectIcon =
   "pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#68736b]";
const layoutToggle =
   "ml-auto flex h-11 shrink-0 items-center gap-2 max-[820px]:ml-0";
const layoutButton =
   "grid h-11 w-11 place-items-center rounded-[9px] border border-[#e4eae5] bg-[#f7faf8] text-[#1f2a24] transition-all duration-200 hover:border-[#b6dfc1] hover:text-[#10963d]";
const layoutButtonActive =
   "border-[#89d39a] bg-[#eaf9ee] text-[#0b8d37] shadow-[inset_0_0_0_1px_rgba(22,163,74,0.18)]";
const browseContent =
   "mt-8 grid items-start gap-8 lg:grid-cols-[286px_minmax(0,1fr)] max-[980px]:grid-cols-1";
const filtersStack = "flex flex-col gap-7";
const filterPanel =
   "overflow-hidden rounded-[15px] border border-[#e2e9e4] bg-white shadow-[0_12px_32px_rgba(17,24,39,0.055)]";
const filterPanelHeader =
   "flex items-center justify-between border-b border-[#eef2ef] px-6 py-5";
const filterTitle = "text-[0.92rem] font-black text-[#17201a]";
const clearButton =
   "text-[0.72rem] font-black text-[#68736b] transition-colors hover:text-[#14883a]";
const filterBody = "px-6 py-5";
const filterSectionHeader =
   "mb-4 flex items-center justify-between text-[0.78rem] font-black text-[#17201a]";
const filterList = "flex flex-col gap-3";
const filterButton =
   "group flex w-full items-center gap-3 rounded-[8px] py-1.5 text-left transition-colors hover:bg-[#f7fbf8]";
const fakeCheckbox =
   "grid h-[17px] w-[17px] shrink-0 place-items-center rounded-[4px] border transition-all duration-200";
const fakeCheckboxActive = "border-[#1cad4e] bg-[#16a34a]";
const fakeCheckboxInactive = "border-[#cbd6d0] bg-white group-hover:border-[#7bcc91]";
const fakeCheckboxIcon =
   "text-white transition-opacity duration-150";
const fakeCheckboxIconActive = "opacity-100";
const fakeCheckboxIconInactive = "opacity-0";
const filterLabel =
   "min-w-0 flex-1 text-[0.78rem] font-extrabold transition-colors group-hover:text-[#1e2a22]";
const filterLabelActive = "text-[#148c3b]";
const filterLabelInactive = "text-[#606b64]";
const filterCount =
   "rounded-full px-2 py-[2px] text-[0.64rem] font-black";
const filterCountActive = "bg-[#e4f8e9] text-[#13913d]";
const filterCountInactive = "bg-[#f0f4f2] text-[#68736b]";
const showMoreButton =
   "mt-5 inline-flex items-center gap-1.5 text-[0.76rem] font-black text-[#159447] transition-colors hover:text-[#0f7637]";
const requestCard =
   "rounded-[15px] border border-[#d7ecd9] bg-[#eff9f2] p-6 shadow-[0_14px_34px_rgba(22,101,52,0.075)]";
const requestTop = "flex items-start gap-4";
const requestIcon =
   "grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-white text-[#18a44a] shadow-[0_6px_15px_rgba(22,101,52,0.08)]";
const requestTitle = "text-[0.84rem] font-black text-[#17201a]";
const requestText = "mt-2 text-[0.76rem] font-semibold leading-[1.55] text-[#526058]";
const requestButton =
   "mt-5 h-10 w-full rounded-[8px] border border-[#dce5df] bg-white px-4 text-[0.76rem] font-black text-[#17201a] shadow-[0_6px_14px_rgba(17,24,39,0.04)] transition-all duration-200 hover:border-[#86d89a] hover:text-[#128d3d]";
const resultsHeader =
   "mb-4 flex min-h-[24px] items-center justify-between gap-4 max-[640px]:flex-col max-[640px]:items-start";
const resultsCount = "text-[0.8rem] font-bold text-[#26312a]";
const activeFilterPill =
   "rounded-full bg-[#eefaf1] px-3 py-1 text-[0.72rem] font-black text-[#138b3b]";
const componentsGrid =
   "grid auto-rows-fr grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6";
const componentsList = "flex flex-col gap-5";
const componentCard =
   "group relative flex h-[430px] flex-col overflow-hidden rounded-[13px] border border-[#dfe7e1] bg-white shadow-[0_10px_26px_rgba(17,24,39,0.055)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#bddfc5] hover:shadow-[0_16px_36px_rgba(17,24,39,0.09)]";
const componentCardList =
   "group relative grid min-h-[260px] grid-cols-[minmax(240px,0.84fr)_minmax(0,1fr)] overflow-hidden rounded-[13px] border border-[#dfe7e1] bg-white shadow-[0_10px_26px_rgba(17,24,39,0.055)] transition-all duration-200 hover:border-[#bddfc5] hover:shadow-[0_16px_36px_rgba(17,24,39,0.09)] max-[760px]:flex max-[760px]:min-h-[430px] max-[760px]:flex-col";
const browsePreview =
   "relative h-[190px] overflow-hidden border-b border-[#edf2ee] bg-[#fafcfb] pointer-events-none";
const browsePreviewList =
   "relative min-h-full overflow-hidden border-r border-[#edf2ee] bg-[#fafcfb] pointer-events-none max-[760px]:h-[190px] max-[760px]:border-b max-[760px]:border-r-0";
const skeletonOverlay =
   "absolute inset-0 z-20 bg-white transition-opacity duration-300";
const skeletonOverlayHidden = "pointer-events-none opacity-0";
const skeletonGridShell = "flex h-full w-full flex-col";
const skeletonListShell =
   "grid h-full w-full grid-cols-[minmax(240px,0.84fr)_minmax(0,1fr)] max-[760px]:flex max-[760px]:flex-col";
const skeletonPreview =
   "component-card-skeleton__block h-[190px] border-b border-[#edf2ee]";
const skeletonPreviewList =
   "component-card-skeleton__block min-h-full border-r border-[#edf2ee] max-[760px]:h-[190px] max-[760px]:min-h-0 max-[760px]:border-b max-[760px]:border-r-0";
const skeletonBody = "flex flex-1 flex-col p-5";
const skeletonMeta = "mb-3 flex items-center justify-between gap-4";
const skeletonTitle = "component-card-skeleton__block h-5 w-[68%] rounded-full";
const skeletonBadge = "component-card-skeleton__block h-5 w-16 rounded-full";
const skeletonTextOne = "component-card-skeleton__block mt-4 h-3.5 w-full rounded-full";
const skeletonTextTwo = "component-card-skeleton__block mt-2.5 h-3.5 w-[74%] rounded-full";
const skeletonTags = "mt-5 flex gap-2";
const skeletonTag = "component-card-skeleton__block h-6 w-20 rounded-full";
const skeletonButton =
   "component-card-skeleton__block mt-auto h-11 w-full rounded-[8px]";
const cardBody = "flex flex-1 flex-col p-5";
const cardMeta = "mb-2 flex items-center justify-between gap-3";
const cardTitle = "text-[0.96rem] font-black leading-snug text-[#17201a]";
const popularBadge =
   "rounded-full bg-[#e9f9ed] px-2 py-[2px] text-[0.64rem] font-black text-[#13913d]";
const cardDesc =
   "mt-3 min-h-[40px] text-[0.78rem] font-semibold leading-[1.55] text-[#5f6a63]";
const tagRow = "mt-4 flex flex-wrap gap-2";
const tagPill =
   "rounded-full bg-[#f3f6f4] px-3 py-1 text-[0.68rem] font-extrabold text-[#68736b]";
const openEditorButton =
   "mt-5 flex h-11 w-full items-center justify-center rounded-[8px] bg-[#079537] px-4 text-[0.78rem] font-black text-white shadow-[0_10px_18px_rgba(7,149,55,0.2)] transition-all duration-200 hover:bg-[#087c31] hover:shadow-[0_14px_24px_rgba(7,149,55,0.26)]";
const emptyBrowse =
   "rounded-[13px] border border-dashed border-[#cfd9d2] bg-[#fbfdfb] px-6 py-14 text-center";
const paginationWrap =
   "mt-9 flex flex-wrap items-center justify-center gap-2 rounded-[13px] border border-[#e2e9e4] bg-white px-4 py-4 shadow-[0_10px_26px_rgba(17,24,39,0.045)]";
const paginationButton =
   "inline-flex h-10 min-w-10 items-center justify-center rounded-[8px] border border-[#dfe7e1] bg-white px-3 text-[0.78rem] font-black text-[#526058] transition-colors duration-200 hover:border-[#86d89a] hover:text-[#128d3d] disabled:pointer-events-none disabled:opacity-45";
const paginationButtonActive =
   "!border-[#1cad4e] !bg-[#16a34a] !text-white hover:!border-[#1cad4e] hover:!bg-[#16a34a] hover:!text-white";
const pageSize = 12;

const labelOverrides = {
   announcementbar: "Announcement Bars",
   headers: "Headers",
   hero: "Hero Sections",
   "product-card-slider": "Product Cards",
   testimonials: "Testimonials",
   faqs: "FAQs",
   footer: "Footers",
   marquee: "Banners",
   "collection-slider": "Collections",
};

const preferredFilterSlugs = [
   "all",
   "headers",
   "hero",
   "product-card-slider",
   "testimonials",
   "faqs",
   "announcementbar",
   "footer",
   "marquee",
   "collection-slider",
];

const getCategoryLabel = (category) =>
   labelOverrides[category.slug] || category.title;

const getSingularLabel = (label) =>
   label
      .replace(/ Sections$/, "")
      .replace(/ Cards$/, " Card")
      .replace(/ Bars$/, " Bar")
      .replace(/s$/, "");

const getDisplayName = (component) => {
   const rawName = component.name || component.id;
   const parts = rawName.split(/\s+[-–—]\s+/);
   const variantName = parts.length > 1 ? parts.slice(1).join(" - ") : rawName;
   return `${getSingularLabel(component.categoryLabel)} - ${variantName}`;
};

const normalizeText = (value) => String(value || "").toLowerCase();

const truncateDescription = (value) => {
   const fallback =
      "Clean, responsive component for high-converting Shopify storefronts.";
   const text = String(value || fallback).trim();

   return text.length > 70 ? text.slice(0, 70).trimEnd() : text;
};

const buildPreviewSrcdoc = (htmlString) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet"/>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { overflow: hidden; }
  </style>
</head>
<body>${htmlString}</body>
</html>`;

const ComponentCardSkeleton = ({ isLoaded, isList }) => (
   <div
      className={`${skeletonOverlay} ${isLoaded ? skeletonOverlayHidden : ""}`}
      aria-hidden="true"
   >
      <div className={isList ? skeletonListShell : skeletonGridShell}>
         <div className={isList ? skeletonPreviewList : skeletonPreview} />
         <div className={skeletonBody}>
            <div className={skeletonMeta}>
               <div className={skeletonTitle} />
               <div className={skeletonBadge} />
            </div>
            <div className={skeletonTextOne} />
            <div className={skeletonTextTwo} />
            <div className={skeletonTags}>
               <div className={skeletonTag} />
               <div className={skeletonTag} />
            </div>
            <div className={skeletonButton} />
         </div>
      </div>
   </div>
);

const CardPreviewIframe = ({ variant }) => {
   const [isLoaded, setIsLoaded] = useState(false);

   if (typeof variant.getCode !== "function") {
      return (
         <div className={cardPreview}>
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-[0.72rem] text-[#94a3b8] font-[var(--inter-font)]">
                  No preview available
               </span>
            </div>
         </div>
      );
   }

   const srcdoc = buildPreviewSrcdoc(variant.getCode(variant.defaultConfig));

   return (
      <div className={cardPreview}>
         <div
            className={`component-card-skeleton__block absolute inset-0 z-[2] transition-opacity duration-300 ${
               isLoaded ? "pointer-events-none opacity-0" : ""
            }`}
            aria-hidden="true"
         />
         <iframe
            srcDoc={srcdoc}
            title={variant.name}
            onLoad={() => setIsLoaded(true)}
            style={{
               position: "absolute",
               top: 0,
               left: "50%",
               width: "238%",
               height: "520px",
               border: "none",
               transform: "translateX(-50%) scale(0.42)",
               transformOrigin: "top center",
               pointerEvents: "none",
               opacity: isLoaded ? 1 : 0,
               transition: "opacity 260ms ease",
            }}
            sandbox="allow-scripts"
            loading="lazy"
         />
         <div className={previewOverlay} />
      </div>
   );
};

export const VariantsGrid = ({ category }) => {
   const navigate = useNavigate();

   if (!category?.variants?.length) {
      return (
         <div className={emptyState}>
            <Box size={32} className="opacity-25 mx-auto" />
            <p className={emptyText}>
               No variants yet for this category.
               <br />
               Check back soon!
            </p>
         </div>
      );
   }

   return (
      <div className={cardsGrid}>
         {category.variants.map((variant) => (
            <div
               key={variant.id}
               className={`${cardBase} group`}
               onClick={() =>
                  navigate(`/components/${category.slug}/${variant.id}`)
               }
               role="button"
               tabIndex={0}
               onKeyDown={(event) => {
                  if (event.key === "Enter") {
                     navigate(`/components/${category.slug}/${variant.id}`);
                  }
               }}
               aria-label={`Open ${variant.name} in live editor`}
            >
               <CardPreviewIframe variant={variant} />

               <div className={cardFooter}>
                  <div className={cardNameWrap}>
                     <span className={cardName} title={variant.name}>
                        {variant.name}
                     </span>
                     <span className={cardSlug}>
                        {category.slug}/{variant.id}
                     </span>
                  </div>

                  <button
                     className={customizeBtn}
                     onClick={(event) => {
                        event.stopPropagation();
                        navigate(`/components/${category.slug}/${variant.id}`);
                     }}
                     aria-label={`Open ${variant.name} editor`}
                  >
                     <Wand2 size={10} />
                     Open Editor
                  </button>
               </div>
            </div>
         ))}
      </div>
   );
};

const BrowsePreviewIframe = ({ variant, isList, isLoaded, onLoad }) => {
   if (typeof variant.getCode !== "function") {
      return (
         <div className={isList ? browsePreviewList : browsePreview}>
            <div className="absolute inset-0 grid place-items-center">
               <span className="text-[0.72rem] font-bold text-[#94a3b8]">
                  Preview unavailable
               </span>
            </div>
         </div>
      );
   }

   const srcdoc = buildPreviewSrcdoc(variant.getCode(variant.defaultConfig));

   return (
      <div className={isList ? browsePreviewList : browsePreview}>
         <iframe
            srcDoc={srcdoc}
            title={`${variant.name} preview`}
            onLoad={onLoad}
            style={{
               position: "absolute",
               top: 0,
               left: "50%",
               width: isList ? "260%" : "245%",
               height: isList ? "620px" : "510px",
               border: "none",
               transform: `translateX(-50%) scale(${isList ? 0.38 : 0.41})`,
               transformOrigin: "top center",
               pointerEvents: "none",
               opacity: isLoaded ? 1 : 0,
               transition: "opacity 260ms ease",
            }}
            sandbox="allow-scripts"
            loading="lazy"
         />
      </div>
   );
};

const ComponentBrowseCard = ({ component, index, isGrid, navigate }) => {
   const hasPreview = typeof component.getCode === "function";
   const [isLoaded, setIsLoaded] = useState(!hasPreview);
   const tags = [component.categoryLabel, ...(component.tags || [])].slice(0, 3);

   return (
      <article className={isGrid ? componentCard : componentCardList}>
         <ComponentCardSkeleton isLoaded={isLoaded} isList={!isGrid} />
         <BrowsePreviewIframe
            variant={component}
            isList={!isGrid}
            isLoaded={isLoaded}
            onLoad={() => setIsLoaded(true)}
         />

         <div className={cardBody}>
            <div className={cardMeta}>
               <h3 className={cardTitle}>{getDisplayName(component)}</h3>
               {index % 3 !== 2 ? (
                  <span className={popularBadge}>Popular</span>
               ) : null}
            </div>

            <p className={cardDesc}>
               {truncateDescription(component.description)}
            </p>

            <div className={tagRow}>
               {tags.map((tag) => (
                  <span className={tagPill} key={tag}>
                     {tag}
                  </span>
               ))}
            </div>

            <button
               className={openEditorButton}
               type="button"
               onClick={() =>
                  navigate(`/components/${component.section}/${component.id}`)
               }
            >
               Open In Editor
            </button>
         </div>
      </article>
   );
};

const ComponentsBrowseSection = ({ categories }) => {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();
   const initialCategory = searchParams.get("category") || "all";
   const [query, setQuery] = useState("");
   const [selectedCategory, setSelectedCategory] = useState(initialCategory);
   const [sortBy, setSortBy] = useState("popular");
   const [layout, setLayout] = useState("grid");
   const [showAllFilters, setShowAllFilters] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);

   const allComponents = useMemo(
      () =>
         categories.flatMap((category, categoryIndex) =>
            category.variants.map((variant, variantIndex) => ({
               ...variant,
               categoryIndex,
               variantIndex,
               section: category.slug,
               sectionTitle: category.title,
               categoryLabel: getCategoryLabel(category),
            })),
         ),
      [categories],
   );

   const categoryOptions = useMemo(
      () => [
         {
            slug: "all",
            label: "All Components",
            count: allComponents.length,
         },
         ...categories.map((category) => ({
            slug: category.slug,
            label: getCategoryLabel(category),
            count: category.variants.length,
         })),
      ],
      [allComponents.length, categories],
   );

   const orderedCategoryOptions = useMemo(() => {
      const categoryMap = new Map(
         categoryOptions.map((category) => [category.slug, category]),
      );
      const preferred = preferredFilterSlugs
         .map((slug) => categoryMap.get(slug))
         .filter(Boolean);
      const remaining = categoryOptions.filter(
         (category) => !preferredFilterSlugs.includes(category.slug),
      );

      return [...preferred, ...remaining];
   }, [categoryOptions]);

   const visibleFilterOptions = showAllFilters
      ? orderedCategoryOptions
      : orderedCategoryOptions.slice(0, 10);

   const filteredComponents = useMemo(() => {
      const searchValue = normalizeText(query.trim());

      const matches = allComponents.filter((component) => {
         const matchesCategory =
            selectedCategory === "all" || component.section === selectedCategory;
         const searchHaystack = normalizeText(
            [
               component.name,
               component.description,
               component.sectionTitle,
               component.categoryLabel,
               ...(component.tags || []),
            ].join(" "),
         );

         return (
            matchesCategory && (!searchValue || searchHaystack.includes(searchValue))
         );
      });

      return [...matches].sort((a, b) => {
         if (sortBy === "newest") {
            return b.categoryIndex - a.categoryIndex || b.variantIndex - a.variantIndex;
         }

         if (sortBy === "az") {
            return getDisplayName(a).localeCompare(getDisplayName(b));
         }

         return a.categoryIndex - b.categoryIndex || a.variantIndex - b.variantIndex;
      });
   }, [allComponents, query, selectedCategory, sortBy]);

   const isGrid = layout === "grid";
   const activeCategory =
      categoryOptions.find((category) => category.slug === selectedCategory) ||
      categoryOptions[0];
   const totalPages = Math.max(1, Math.ceil(filteredComponents.length / pageSize));
   const activePage = Math.min(currentPage, totalPages);
   const pageStart = (activePage - 1) * pageSize;
   const pageEnd = Math.min(pageStart + pageSize, filteredComponents.length);
   const paginatedComponents = filteredComponents.slice(pageStart, pageEnd);
   const paginationPages = useMemo(() => {
      const pages = [];
      const start = Math.max(1, activePage - 2);
      const end = Math.min(totalPages, start + 4);
      const normalizedStart = Math.max(1, end - 4);

      for (let page = normalizedStart; page <= end; page += 1) {
         pages.push(page);
      }

      return pages;
   }, [activePage, totalPages]);

   const clearFilters = () => {
      setQuery("");
      setSelectedCategory("all");
      setSortBy("popular");
      setCurrentPage(1);
   };

   return (
      <section className={browseSection} aria-label="Browse components">
         <div className={browseToolbar}>
            <div className={toolbarTop}>
               <label className={searchWrap}>
                  <Search className={searchIcon} size={16} />
                  <input
                     className={searchInput}
                     type="search"
                     value={query}
                     onChange={(event) => {
                        setQuery(event.target.value);
                        setCurrentPage(1);
                     }}
                     placeholder="Search components..."
                     aria-label="Search components"
                  />
               </label>

               <div className={sortGroup}>
                  <span className={sortLabel}>Sort by</span>
                  <label className={sortSelectWrap}>
                     <select
                        className={sortSelect}
                        value={sortBy}
                        onChange={(event) => {
                           setSortBy(event.target.value);
                           setCurrentPage(1);
                        }}
                        aria-label="Sort components"
                     >
                        <option value="popular">Most popular</option>
                        <option value="newest">Newest first</option>
                        <option value="az">A to Z</option>
                     </select>
                     <ChevronDown className={selectIcon} size={15} />
                  </label>
               </div>

               <div className={layoutToggle} aria-label="Layout toggle">
                  <button
                     className={`${layoutButton} ${isGrid ? layoutButtonActive : ""}`}
                     type="button"
                     onClick={() => {
                        setLayout("grid");
                        setCurrentPage(1);
                     }}
                     aria-label="Show grid layout"
                     aria-pressed={isGrid}
                  >
                     <Grid3X3 size={17} />
                  </button>
                  <button
                     className={`${layoutButton} ${!isGrid ? layoutButtonActive : ""}`}
                     type="button"
                     onClick={() => {
                        setLayout("list");
                        setCurrentPage(1);
                     }}
                     aria-label="Show list layout"
                     aria-pressed={!isGrid}
                  >
                     <List size={17} />
                  </button>
               </div>
            </div>
         </div>

         <div className={browseContent}>
            <aside className={filtersStack} aria-label="Component filters">
               <div className={filterPanel}>
                  <div className={filterPanelHeader}>
                     <h2 className={filterTitle}>Filter components</h2>
                     <button className={clearButton} type="button" onClick={clearFilters}>
                        Clear all
                     </button>
                  </div>

                  <div className={filterBody}>
                     <div className={filterSectionHeader}>
                        <span>Category</span>
                        <ChevronDown size={14} className="rotate-180" />
                     </div>

                     <div className={filterList}>
                        {visibleFilterOptions.map((category) => {
                           const isActive = selectedCategory === category.slug;

                           return (
                              <button
                                 key={category.slug}
                                 className={filterButton}
                                 type="button"
                                 onClick={() => {
                                    setSelectedCategory(category.slug);
                                    setCurrentPage(1);
                                 }}
                                 aria-pressed={isActive}
                                 aria-label={`Filter by ${category.label}`}
                              >
                                 <span
                                    className={`${fakeCheckbox} ${
                                       isActive ? fakeCheckboxActive : fakeCheckboxInactive
                                    }`}
                                    aria-hidden="true"
                                 >
                                    <Check
                                       className={`${fakeCheckboxIcon} ${
                                          isActive
                                             ? fakeCheckboxIconActive
                                             : fakeCheckboxIconInactive
                                       }`}
                                       size={11}
                                       strokeWidth={3}
                                    />
                                 </span>
                                 <span
                                    className={`${filterLabel} ${
                                       isActive
                                          ? filterLabelActive
                                          : filterLabelInactive
                                    }`}
                                 >
                                    {category.label}
                                 </span>
                                 <span
                                    className={`${filterCount} ${
                                       isActive
                                          ? filterCountActive
                                          : filterCountInactive
                                    }`}
                                 >
                                    {category.count}
                                 </span>
                              </button>
                           );
                        })}
                     </div>

                     {orderedCategoryOptions.length > 10 ? (
                        <button
                           className={showMoreButton}
                           type="button"
                           onClick={() => setShowAllFilters((isOpen) => !isOpen)}
                        >
                           {showAllFilters ? "Show less" : "Show more"}
                           <ChevronDown
                              size={13}
                              className={`transition-transform ${
                                 showAllFilters ? "rotate-180" : ""
                              }`}
                           />
                        </button>
                     ) : null}
                  </div>

               </div>

               <div className={requestCard}>
                  <div className={requestTop}>
                     <span className={requestIcon} aria-hidden="true">
                        <MailPlus size={17} strokeWidth={2.4} />
                     </span>
                     <div>
                        <h3 className={requestTitle}>Missing something?</h3>
                        <p className={requestText}>
                           Request a component and we'll build it.
                        </p>
                     </div>
                  </div>
                  <button
                     className={requestButton}
                     type="button"
                     onClick={() => navigate("/contact")}
                  >
                     Request Component
                  </button>
               </div>
            </aside>

            <div>
               <div className={resultsHeader}>
                  <p className={resultsCount}>
                     Showing {filteredComponents.length ? `${pageStart + 1}-${pageEnd}` : "0"} of{" "}
                     {filteredComponents.length} components
                  </p>
                  <span className={activeFilterPill}>{activeCategory.label}</span>
               </div>

               {filteredComponents.length ? (
                  <>
                     <div className={isGrid ? componentsGrid : componentsList}>
                        {paginatedComponents.map((component, index) => (
                           <ComponentBrowseCard
                              component={component}
                              index={pageStart + index}
                              isGrid={isGrid}
                              key={`${component.section}-${component.id}`}
                              navigate={navigate}
                           />
                        ))}
                     </div>

                     {totalPages > 1 ? (
                        <nav className={paginationWrap} aria-label="Components pages">
                           <button
                              className={paginationButton}
                              type="button"
                              onClick={() =>
                                 setCurrentPage((page) => Math.max(1, page - 1))
                              }
                              disabled={activePage === 1}
                           >
                              Previous
                           </button>

                           {paginationPages.map((page) => (
                              <button
                                 className={`${paginationButton} ${
                                    activePage === page ? paginationButtonActive : ""
                                 }`}
                                 type="button"
                                 onClick={() => setCurrentPage(page)}
                                 aria-current={activePage === page ? "page" : undefined}
                                 key={page}
                              >
                                 {page}
                              </button>
                           ))}

                           <button
                              className={paginationButton}
                              type="button"
                              onClick={() =>
                                 setCurrentPage((page) =>
                                    Math.min(totalPages, page + 1),
                                 )
                              }
                              disabled={activePage === totalPages}
                           >
                              Next
                           </button>
                        </nav>
                     ) : null}
                  </>
               ) : (
                  <div className={emptyBrowse}>
                     <h3 className="text-[1rem] font-black text-[#17201a]">
                        No components found
                     </h3>
                     <p className="mt-2 text-[0.84rem] font-semibold text-[#66716a]">
                        Try a different search term or clear your filters.
                     </p>
                  </div>
               )}
            </div>
         </div>
      </section>
   );
};

const ComponentsPage = () => {
   const categories = getAllCategories();

   return (
      <>
         <section className={pageHero} aria-labelledby="components-page-title">
            <div className={pageHeroPattern} aria-hidden="true" />
            <div className={pageHeroGlow} aria-hidden="true" />
            <div className={pageHeroInner}>
               <h1 id="components-page-title" className={pageTitle}>
                  All Components
               </h1>
               <p className={pageDescription}>
                  Browse, preview, and customize production-ready Shopify sections
                  built for speed, flexibility, and conversion.
               </p>
            </div>
         </section>

         {categories.length > 0 ? (
            <ComponentsBrowseSection categories={categories} />
         ) : (
            <div className={emptyState}>
               <PackageOpen size={36} className="opacity-25 mx-auto" />
               <p className={emptyText}>
                  No components found in the registry.
                  <br />
                  Add a category to get started.
               </p>
            </div>
         )}
      </>
   );
};

export default ComponentsPage;
