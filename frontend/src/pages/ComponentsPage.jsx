import { createElement, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
   Box,
   Wand2,
   PackageOpen,
   CheckCircle2,
   Sparkles,
   GaugeCircle,
   Search,
   Grid3X3,
   List,
   Bookmark,
   MailPlus,
   Check,
   ChevronDown,
} from "lucide-react";
import { getAllCategories } from "../registry/componentRegistry";
import allComponentsImage from "../../../temp-assets/all-components-main-img.png";

// ── Tailwind Classes ───────────────────────────────────────────

const heroSection =
   "relative mb-16 overflow-visible bg-white py-[34px] animate-[fadeUp_0.5s_ease_both] max-[900px]:mb-12 max-[900px]:py-7 max-[640px]:mb-10 max-[640px]:py-5";
const heroGrid =
   "grid min-h-[360px] items-center gap-9 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] max-[1180px]:gap-5 max-[980px]:grid-cols-1 max-[980px]:min-h-0";
const heroContent =
   "relative z-10 flex flex-col items-start max-[980px]:items-center max-[980px]:text-center";
const pageTitle =
   "w-max max-w-none text-[clamp(2.65rem,3.9vw,4.75rem)] font-black leading-[1.05] text-[#05080a] font-[var(--inter-font)] max-[1320px]:text-[3rem] max-[980px]:text-[clamp(2.65rem,7vw,4rem)] max-[640px]:w-full max-[640px]:max-w-[430px] max-[640px]:text-[clamp(2.25rem,11vw,3.4rem)]";
const pageTitleAccent = "text-[#5cc84e]";
const pageDesc =
   "mt-7 w-max max-w-none text-[clamp(1.02rem,1.1vw,1.18rem)] font-semibold leading-[1.8] text-[#5f6875] font-[var(--inter-font)] max-[900px]:mt-5 max-[640px]:w-full max-[640px]:max-w-[430px] max-[640px]:text-[0.98rem] max-[640px]:leading-[1.65]";
const heroBadges =
   "mt-11 flex w-max max-w-none items-center gap-5 max-[1320px]:gap-4 max-[1180px]:gap-3 max-[980px]:justify-center max-[640px]:mt-7 max-[640px]:grid max-[640px]:w-full max-[640px]:grid-cols-1 max-[640px]:gap-3";
const heroBadge =
   "inline-flex h-[50px] min-w-[170px] shrink-0 items-center justify-center gap-3 rounded-[11px] border border-[#dbe9df] bg-[#fbfdfb] px-4 text-[0.9rem] font-extrabold text-[#23312a] shadow-[0_10px_28px_rgba(17,37,23,0.055)] font-[var(--inter-font)] max-[1320px]:px-3.5 max-[640px]:h-[54px] max-[640px]:min-w-0 max-[640px]:justify-start";
const heroBadgeIcon =
   "grid h-7 w-7 flex-shrink-0 place-items-center rounded-full border border-[#a5ddb7] bg-white text-[#18a44a] shadow-[0_8px_18px_rgba(24,164,74,0.12)]";
const heroVisual =
   "relative flex min-h-[360px] items-center justify-end max-[1180px]:min-h-[340px] max-[980px]:min-h-0 max-[980px]:justify-center";
const heroImage =
   "relative z-10 w-full max-w-[790px] object-contain drop-shadow-[0_24px_55px_rgba(10,24,14,0.08)] max-[1180px]:max-w-[640px] max-[980px]:max-w-[720px] max-[640px]:w-[114%] max-[640px]:max-w-none";

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

const heroBadgesData = [
   { label: "Production ready", icon: CheckCircle2 },
   { label: "Fully customizable", icon: Sparkles },
   { label: "Performance optimized", icon: GaugeCircle },
];

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
const tabsNav =
   "mt-5 flex gap-4 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";
const tabButton =
   "inline-flex h-11 shrink-0 items-center gap-3 rounded-[9px] border border-[#e4eae5] bg-white px-5 text-[0.82rem] font-extrabold text-[#151f19] shadow-[0_6px_16px_rgba(17,24,39,0.035)] transition-all duration-200 hover:border-[#b6dfc1] hover:text-[#158d3d]";
const tabButtonActive =
   "border-[#9bddaa] bg-[#effcf2] text-[#0f8f3a] shadow-[0_8px_20px_rgba(18,148,61,0.1)]";
const tabCount =
   "rounded-full bg-[#f2f5f3] px-2 py-[2px] text-[0.68rem] font-black text-[#26312a]";
const tabCountActive = "bg-white text-[#0f8f3a]";
const browseContent =
   "mt-8 grid items-start gap-8 lg:grid-cols-[290px_minmax(0,1fr)] max-[980px]:grid-cols-1";
const filtersStack = "flex flex-col gap-7";
const filterPanel =
   "rounded-[13px] border border-[#e2e9e4] bg-white shadow-[0_10px_30px_rgba(17,24,39,0.055)] overflow-hidden";
const filterPanelHeader =
   "flex items-center justify-between border-b border-[#eef2ef] px-6 py-5";
const filterTitle = "text-[0.92rem] font-black text-[#17201a]";
const clearButton =
   "text-[0.74rem] font-extrabold text-[#68736b] transition-colors hover:text-[#14883a]";
const filterBody = "px-6 py-5";
const filterSectionHeader =
   "mb-4 flex items-center justify-between text-[0.78rem] font-black text-[#17201a]";
const filterList = "flex flex-col gap-3";
const filterButton =
   "group flex w-full items-center gap-3 rounded-[8px] py-1.5 text-left transition-colors hover:bg-[#f7fbf8]";
const fakeCheckbox =
   "grid h-4 w-4 shrink-0 place-items-center rounded-[3px] border border-[#ccd6cf] bg-white text-transparent transition-all duration-200 group-hover:border-[#7bcc91]";
const fakeCheckboxActive = "border-[#1cad4e] bg-[#17a34a] text-white";
const filterLabel =
   "min-w-0 flex-1 text-[0.78rem] font-bold text-[#5f6a63] transition-colors group-hover:text-[#1e2a22]";
const filterLabelActive = "text-[#178d3d]";
const filterCount =
   "rounded-full bg-[#eef2f0] px-2 py-[1px] text-[0.66rem] font-black text-[#5d6861]";
const filterCountActive = "bg-[#e7f9eb] text-[#14933f]";
const showMoreButton =
   "mt-4 inline-flex items-center gap-1.5 text-[0.76rem] font-extrabold text-[#159447] transition-colors hover:text-[#0f7637]";
const requestCard =
   "rounded-[13px] border border-[#d7ecd9] bg-[#eef8f1] p-6 shadow-[0_10px_24px_rgba(22,101,52,0.07)]";
const requestTop = "flex items-start gap-3";
const requestIcon =
   "grid h-9 w-9 shrink-0 place-items-center rounded-[9px] bg-white text-[#18a44a] shadow-[0_6px_15px_rgba(22,101,52,0.08)]";
const requestTitle = "text-[0.9rem] font-black text-[#17201a]";
const requestText = "mt-2 text-[0.78rem] font-semibold leading-[1.55] text-[#526058]";
const requestButton =
   "mt-5 h-10 w-full rounded-[8px] border border-[#dce5df] bg-white px-4 text-[0.78rem] font-black text-[#17201a] shadow-[0_6px_14px_rgba(17,24,39,0.04)] transition-all duration-200 hover:border-[#86d89a] hover:text-[#128d3d]";
const resultsHeader =
   "mb-4 flex min-h-[24px] items-center justify-between gap-4 max-[640px]:flex-col max-[640px]:items-start";
const resultsCount = "text-[0.8rem] font-bold text-[#26312a]";
const activeFilterPill =
   "rounded-full bg-[#eefaf1] px-3 py-1 text-[0.72rem] font-black text-[#138b3b]";
const componentsGrid =
   "grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6";
const componentsList = "flex flex-col gap-5";
const componentCard =
   "group flex min-h-[430px] flex-col overflow-hidden rounded-[13px] border border-[#dfe7e1] bg-white shadow-[0_10px_26px_rgba(17,24,39,0.055)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#bddfc5] hover:shadow-[0_16px_36px_rgba(17,24,39,0.09)]";
const componentCardList =
   "group grid min-h-[260px] grid-cols-[minmax(240px,0.84fr)_minmax(0,1fr)] overflow-hidden rounded-[13px] border border-[#dfe7e1] bg-white shadow-[0_10px_26px_rgba(17,24,39,0.055)] transition-all duration-200 hover:border-[#bddfc5] hover:shadow-[0_16px_36px_rgba(17,24,39,0.09)] max-[760px]:flex max-[760px]:min-h-[430px] max-[760px]:flex-col";
const browsePreview =
   "relative h-[190px] overflow-hidden border-b border-[#edf2ee] bg-[#fafcfb] pointer-events-none";
const browsePreviewList =
   "relative min-h-full overflow-hidden border-r border-[#edf2ee] bg-[#fafcfb] pointer-events-none max-[760px]:h-[190px] max-[760px]:border-b max-[760px]:border-r-0";
const bookmarkBtn =
   "absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[#2a352d] shadow-[0_6px_18px_rgba(17,24,39,0.1)]";
const cardBody = "flex flex-1 flex-col p-5";
const cardMeta =
   "mb-2 flex items-center justify-between gap-3";
const cardTitle =
   "text-[0.96rem] font-black leading-snug text-[#17201a]";
const popularBadge =
   "rounded-full bg-[#e9f9ed] px-2 py-[2px] text-[0.64rem] font-black text-[#13913d]";
const cardDesc =
   "mt-3 min-h-[44px] text-[0.78rem] font-semibold leading-[1.55] text-[#5f6a63]";
const tagRow = "mt-4 flex flex-wrap gap-2";
const tagPill =
   "rounded-full bg-[#f3f6f4] px-3 py-1 text-[0.68rem] font-extrabold text-[#68736b]";
const openEditorButton =
   "mt-auto flex h-11 w-full items-center justify-center rounded-[8px] bg-[#079537] px-4 text-[0.78rem] font-black text-white shadow-[0_10px_18px_rgba(7,149,55,0.2)] transition-all duration-200 hover:bg-[#087c31] hover:shadow-[0_14px_24px_rgba(7,149,55,0.26)]";
const emptyBrowse =
   "rounded-[13px] border border-dashed border-[#cfd9d2] bg-[#fbfdfb] px-6 py-14 text-center";

const tabSlugs = [
   "all",
   "headers",
   "hero",
   "product-card-slider",
   "testimonials",
   "faqs",
   "announcementbar",
];

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
   const parts = rawName.split(/\s+[—-]\s+/);
   const variantName = parts.length > 1 ? parts.slice(1).join(" - ") : rawName;
   return `${getSingularLabel(component.categoryLabel)} - ${variantName}`;
};

const normalizeText = (value) => String(value || "").toLowerCase();

// ── Preview iframe srcdoc builder ─────────────────────────────

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

// ── Card Preview with iframe ──────────────────────────────────
// Renders getCode() output inside a scaled-down iframe.
// The iframe is 238% wide then scaled to 42% → gives a desktop-width preview
// compressed into the 220px tall card preview area.

const CardPreviewIframe = ({ variant }) => {
   const iframeRef = useRef(null);

   // Only build srcdoc if getCode exists — graceful fallback otherwise
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
         <iframe
            ref={iframeRef}
            srcDoc={srcdoc}
            title={variant.name}
            style={{
               position: "absolute",
               top: 0,
               left: "50%",
               width: "238%",
               height: "520px", // tall enough to show full component
               border: "none",
               transform: "translateX(-50%) scale(0.42)",
               transformOrigin: "top center",
               pointerEvents: "none",
            }}
            sandbox="allow-scripts"
            loading="lazy"
         />
         <div className={previewOverlay} />
      </div>
   );
};

// ══════════════════════════════════════════════════════════════
// ── Exported VariantsGrid ─────────────────────────────────────
// ══════════════════════════════════════════════════════════════

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
               onKeyDown={(e) => {
                  if (e.key === "Enter")
                     navigate(`/components/${category.slug}/${variant.id}`);
               }}
               aria-label={`Open ${variant.name} in live editor`}
            >
               {/* ── Preview — iframe renders getCode() output ── */}
               <CardPreviewIframe variant={variant} />

               {/* ── Footer ── */}
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
                     onClick={(e) => {
                        e.stopPropagation();
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

// ══════════════════════════════════════════════════════════════
// ── Page Component ────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════

const BrowsePreviewIframe = ({ variant, isList }) => {
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
            }}
            sandbox="allow-scripts"
            loading="lazy"
         />
      </div>
   );
};

const ComponentsBrowseSection = ({ categories }) => {
   const navigate = useNavigate();
   const [query, setQuery] = useState("");
   const [selectedCategory, setSelectedCategory] = useState("all");
   const [sortBy, setSortBy] = useState("popular");
   const [layout, setLayout] = useState("grid");
   const [showAllFilters, setShowAllFilters] = useState(false);

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

   const tabs = useMemo(
      () =>
         tabSlugs
            .map((slug) => categoryOptions.find((category) => category.slug === slug))
            .filter(Boolean),
      [categoryOptions],
   );

   const visibleFilterOptions = showAllFilters
      ? categoryOptions
      : categoryOptions.slice(0, 10);

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

         return matchesCategory && (!searchValue || searchHaystack.includes(searchValue));
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

   const activeCategory =
      categoryOptions.find((category) => category.slug === selectedCategory) ||
      categoryOptions[0];
   const isGrid = layout === "grid";

   const chooseCategory = (slug) => {
      setSelectedCategory(slug);
   };

   const clearFilters = () => {
      setQuery("");
      setSelectedCategory("all");
      setSortBy("popular");
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
                     onChange={(event) => setQuery(event.target.value)}
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
                        onChange={(event) => setSortBy(event.target.value)}
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
                     onClick={() => setLayout("grid")}
                     aria-label="Show grid layout"
                     aria-pressed={isGrid}
                  >
                     <Grid3X3 size={17} />
                  </button>
                  <button
                     className={`${layoutButton} ${!isGrid ? layoutButtonActive : ""}`}
                     type="button"
                     onClick={() => setLayout("list")}
                     aria-label="Show list layout"
                     aria-pressed={!isGrid}
                  >
                     <List size={17} />
                  </button>
               </div>
            </div>

            <nav className={tabsNav} aria-label="Component categories">
               {tabs.map((tab) => {
                  const isActive = selectedCategory === tab.slug;

                  return (
                     <button
                        key={tab.slug}
                        className={`${tabButton} ${isActive ? tabButtonActive : ""}`}
                        type="button"
                        onClick={() => chooseCategory(tab.slug)}
                     >
                        <span>{tab.label}</span>
                        <span className={`${tabCount} ${isActive ? tabCountActive : ""}`}>
                           {tab.count}
                        </span>
                     </button>
                  );
               })}
            </nav>
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
                        <ChevronDown size={14} />
                     </div>

                     <div className={filterList}>
                        {visibleFilterOptions.map((category) => {
                           const isActive = selectedCategory === category.slug;

                           return (
                              <button
                                 key={category.slug}
                                 className={filterButton}
                                 type="button"
                                 onClick={() => chooseCategory(category.slug)}
                              >
                                 <span
                                    className={`${fakeCheckbox} ${
                                       isActive ? fakeCheckboxActive : ""
                                    }`}
                                    aria-hidden="true"
                                 >
                                    <Check size={11} strokeWidth={3} />
                                 </span>
                                 <span
                                    className={`${filterLabel} ${
                                       isActive ? filterLabelActive : ""
                                    }`}
                                 >
                                    {category.label}
                                 </span>
                                 <span
                                    className={`${filterCount} ${
                                       isActive ? filterCountActive : ""
                                    }`}
                                 >
                                    {category.count}
                                 </span>
                              </button>
                           );
                        })}
                     </div>

                     {categoryOptions.length > 10 ? (
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
                        <h3 className={requestTitle}>Missing Something?</h3>
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
                     Showing {filteredComponents.length ? `1-${filteredComponents.length}` : "0"} of{" "}
                     {filteredComponents.length} components
                  </p>
                  <span className={activeFilterPill}>{activeCategory.label}</span>
               </div>

               {filteredComponents.length ? (
                  <div className={isGrid ? componentsGrid : componentsList}>
                     {filteredComponents.map((component, index) => {
                        const tags = [
                           component.categoryLabel,
                           ...(component.tags || []),
                        ].slice(0, 3);

                        return (
                           <article
                              className={isGrid ? componentCard : componentCardList}
                              key={`${component.section}-${component.id}`}
                           >
                              <div className="relative">
                                 <BrowsePreviewIframe
                                    variant={component}
                                    isList={!isGrid}
                                 />
                                 <span className={bookmarkBtn} aria-hidden="true">
                                    <Bookmark size={15} />
                                 </span>
                              </div>

                              <div className={cardBody}>
                                 <div className={cardMeta}>
                                    <h3 className={cardTitle}>
                                       {getDisplayName(component)}
                                    </h3>
                                    {index % 3 !== 2 ? (
                                       <span className={popularBadge}>Popular</span>
                                    ) : null}
                                 </div>

                                 <p className={cardDesc}>
                                    {component.description ||
                                       "Clean, responsive component for high-converting Shopify storefronts."}
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
                                       navigate(
                                          `/components/${component.section}/${component.id}`,
                                       )
                                    }
                                 >
                                    Open In Editor
                                 </button>
                              </div>
                           </article>
                        );
                     })}
                  </div>
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
         {/* ── Page Header ── */}
         <section
            className={heroSection}
            aria-labelledby="components-hero-title"
         >
            <div className={heroGrid}>
               <div className={heroContent}>
                  <h1 id="components-hero-title" className={pageTitle}>
                     <span className="block whitespace-nowrap max-[640px]:whitespace-normal">
                        All Components
                     </span>
                     <span className="block whitespace-nowrap max-[640px]:whitespace-normal">
                        Built For{" "}
                        <span className={pageTitleAccent}>Every Need</span>
                     </span>
                  </h1>

                  <p className={pageDesc}>
                     <span className="block whitespace-nowrap max-[640px]:whitespace-normal">
                        Browse, preview, and copy production-ready components
                     </span>
                     <span className="block whitespace-nowrap max-[640px]:whitespace-normal">
                        built for performance, flexibility, and conversion.
                     </span>
                  </p>

                  <div className={heroBadges} aria-label="Component benefits">
                     {heroBadgesData.map(({ label, icon: BadgeIcon }) => (
                        <div key={label} className={heroBadge}>
                           <span className={heroBadgeIcon} aria-hidden="true">
                              {createElement(BadgeIcon, {
                                 size: 18,
                                 strokeWidth: 2.5,
                              })}
                           </span>
                           <span>{label}</span>
                        </div>
                     ))}
                  </div>
               </div>

               <div className={heroVisual}>
                  <img
                     className={heroImage}
                     src={allComponentsImage}
                     alt="Shopify component preview showing a storefront, button editor, and Liquid code panel"
                     loading="eager"
                     decoding="async"
                  />
               </div>
            </div>
         </section>

         {/* ── Empty state ── */}
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

         {/* ── Category sections ── */}
      </>
   );
};

export default ComponentsPage;
