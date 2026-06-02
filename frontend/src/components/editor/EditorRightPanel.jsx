import { useMemo } from "react";
import { Info } from "lucide-react";
import PanelHeader from "./PanelHeader";
import PanelActions from "./PanelActions";
import AccordionSection from "./AccordionSection";
import HowToSection from "./HowToSection";

// ── Tailwind Classes ───────────────────────────────────────────

const panel = [
   "w-full md:w-[360px] md:min-w-[360px] min-w-0 h-[45vh] md:h-full",
   "bg-white border-t md:border-l border-[#dfe7e1]",
   "flex flex-col overflow-hidden",
   "shadow-none md:shadow-[-14px_0_34px_rgba(22,32,26,0.06)]",
   "flex-shrink-0",
].join(" ");

const scroll = [
   "flex-1 overflow-y-auto overflow-x-hidden",
   // Webkit scrollbar via global style below
].join(" ");

const sectionLabel = [
   "px-5 pt-4 pb-2",
   "text-[0.68rem] font-black text-[#8d9a92]",
   "uppercase tracking-[0.09em] font-[var(--inter-font)]",
].join(" ");

const supportBox = [
   "mx-5 mt-4 mb-6",
   "px-4 py-3",
   "bg-[#eefaf1] border border-[#bfe8c8] rounded-[12px]",
   "text-[0.78rem] text-[#176c35] font-semibold font-[var(--inter-font)] leading-[1.55]",
   "flex gap-2 items-start",
].join(" ");

// Scrollbar overrides
const SCROLL_STYLES = `
  .rp-scroll::-webkit-scrollbar       { width: 4px; }
  .rp-scroll::-webkit-scrollbar-track { background: transparent; }
  .rp-scroll::-webkit-scrollbar-thumb { background: #cddbd1; border-radius: 10px; }
  .rp-scroll::-webkit-scrollbar-thumb:hover { background: #a8c8b0; }
`;

const COLOR_KEY_RE = /(color|bg|background|border|shadow|fill|stroke|overlay|accent|text)/i;
const COLOR_VALUE_RE = /^(#([0-9a-f]{3,8})|rgba?\(|hsla?\()/i;

const inferControlType = (key, value) => {
   if (typeof value === "string") {
      if (COLOR_KEY_RE.test(key) && COLOR_VALUE_RE.test(value.trim())) {
         return "color";
      }
      return "text";
   }
   if (typeof value === "number" || typeof value === "boolean") return "text";
   return null;
};

// ── Component ──────────────────────────────────────────────────

const EditorRightPanel = ({
   variantData,
   section,
   config,
   onUpdate,
   onCopy,
   onReset,
   copied,
   openAccordion,
   onToggleAccordion,
}) => {
   const shopifyDataAccordion = useMemo(() => {
      if (section !== "collection-slider" && section !== "product-card-slider") {
         return null;
      }

      return {
         id: "shopify-data-source",
         icon: "fa-store",
         iconBg: "#ecfeff",
         iconColor: "#0e7490",
         title: "Shopify Data Source",
         subtitle: "Auto-pull products/collections in generated code",
         controls: [
            { type: "select", label: "Use Shopify Data", key: "useShopifyData", options: ["false", "true"] },
            { type: "text", label: "Collection Handle", key: "collectionHandle" },
            { type: "text", label: "Products Limit", key: "productsLimit" },
         ],
      };
   }, [section]);

   const fallbackAccordion = useMemo(() => {
      const defaultConfig = variantData?.defaultConfig || {};
      const existingKeys = new Set(
         (variantData?.accordions || []).flatMap((acc) =>
            (acc.controls || []).map((ctrl) => ctrl.key),
         ),
      );

      const controls = Object.keys(defaultConfig)
         .filter((key) => !existingKeys.has(key))
         .map((key) => {
            const controlType = inferControlType(key, defaultConfig[key]);
            if (!controlType) return null;
            return {
               type: controlType,
               label: key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (c) => c.toUpperCase())
                  .trim(),
               key,
            };
         })
         .filter(Boolean);

      if (!controls.length) return null;

      return {
         id: "additional-settings",
         icon: "fa-layer-group",
         iconBg: "#eff6ff",
         iconColor: "#2563eb",
         title: "Additional Settings",
         subtitle: "Auto-detected editable options",
         controls,
      };
   }, [variantData]);

   return (
      <aside className={panel}>
      <style>{SCROLL_STYLES}</style>

      {/* ── Fixed top area ── */}
      <PanelHeader
         title={variantData.name}
         description={variantData.description}
         sectionLabel={section}
      />
      <PanelActions onCopy={onCopy} onReset={onReset} copied={copied} />

      {/* ── Scrollable content ── */}
      <div className={`${scroll} rp-scroll`}>
         <div className={sectionLabel}>Customize</div>

         {variantData.accordions.map((acc) => (
            <AccordionSection
               key={acc.id}
               acc={acc}
               isOpen={openAccordion === acc.id}
               onToggle={onToggleAccordion}
               config={config}
               onUpdate={onUpdate}
            />
         ))}

         {fallbackAccordion && (
            <AccordionSection
               key={fallbackAccordion.id}
               acc={fallbackAccordion}
               isOpen={openAccordion === fallbackAccordion.id}
               onToggle={onToggleAccordion}
               config={config}
               onUpdate={onUpdate}
            />
         )}

         {shopifyDataAccordion && (
            <AccordionSection
               key={shopifyDataAccordion.id}
               acc={shopifyDataAccordion}
               isOpen={openAccordion === shopifyDataAccordion.id}
               onToggle={onToggleAccordion}
               config={config}
               onUpdate={onUpdate}
            />
         )}

         <div className={sectionLabel}>Add to Shopify</div>

         <HowToSection />

         <div className={supportBox}>
            <Info size={14} className="text-[#16a34a] flex-shrink-0 mt-[2px]" />
            <span>
               Need help? Our support team is{" "}
               <a href="#" className="text-[#128d3d] font-black underline">
                  available 24/7
               </a>{" "}
               to assist with implementation.
            </span>
         </div>
      </div>
   </aside>
   );
};

export default EditorRightPanel;
