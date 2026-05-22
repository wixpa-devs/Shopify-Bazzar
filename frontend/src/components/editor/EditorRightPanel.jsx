import { useMemo } from "react";
import { Info } from "lucide-react";
import PanelHeader from "./PanelHeader";
import PanelActions from "./PanelActions";
import AccordionSection from "./AccordionSection";
import HowToSection from "./HowToSection";

// ── Tailwind Classes ───────────────────────────────────────────

const panel = [
   "w-full md:w-[292px] md:min-w-[292px] min-w-0 h-[45vh] md:h-full",
   "bg-white border-t md:border-l border-[#e5e7eb]",
   "flex flex-col overflow-hidden",
   "shadow-none md:shadow-[-2px_0_8px_rgba(0,0,0,0.04)]",
   "flex-shrink-0",
].join(" ");

const scroll = [
   "flex-1 overflow-y-auto overflow-x-hidden",
   // Webkit scrollbar via global style below
].join(" ");

const sectionLabel = [
   "px-4 pt-[14px] pb-[6px]",
   "text-[0.67rem] font-bold text-[#9ca3af]",
   "uppercase tracking-[0.09em] font-[var(--inter-font)]",
].join(" ");

const supportBox = [
   "mx-4 mt-[14px] mb-6",
   "px-[13px] py-[11px]",
   "bg-[#eff6ff] border border-[#bfdbfe] rounded-lg",
   "text-[0.77rem] text-[#1d4ed8] font-[var(--inter-font)] leading-[1.5]",
   "flex gap-2 items-start",
].join(" ");

// Scrollbar overrides
const SCROLL_STYLES = `
  .rp-scroll::-webkit-scrollbar       { width: 4px; }
  .rp-scroll::-webkit-scrollbar-track { background: transparent; }
  .rp-scroll::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
  .rp-scroll::-webkit-scrollbar-thumb:hover { background: #cbd5e1; }
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
            <Info size={14} className="text-[#3b82f6] flex-shrink-0 mt-[2px]" />
            <span>
               Need help? Our support team is{" "}
               <a href="#" className="text-[#1d4ed8] font-semibold underline">
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
