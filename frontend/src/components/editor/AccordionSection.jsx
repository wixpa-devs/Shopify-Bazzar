import { createElement, memo } from "react";
import { ChevronDown } from "lucide-react";
import { resolveIcon } from "../../registry/icons";

// ── Tailwind Classes ───────────────────────────────────────────

const wrapper = "border-b border-[#edf3ef] bg-white";

const trigger =
   "w-full flex items-center gap-3 px-5 py-3 bg-transparent border-none cursor-pointer text-left transition-colors duration-150 hover:bg-[#f7fbf8]";

const iconBoxBase =
   "w-10 h-10 rounded-[11px] flex items-center justify-center flex-shrink-0 shadow-[0_6px_16px_rgba(22,32,26,0.06)]";

const textBlock = "flex-1 min-w-0";
const titleCls =
   "text-[0.86rem] font-black text-[#111827] font-[var(--inter-font)] mb-[1px] whitespace-nowrap overflow-hidden text-ellipsis";
const subtitleCls =
   "text-[0.72rem] text-[#8a968f] font-semibold font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis";

const bodyOpen =
   "pl-[68px] pr-5 pb-5 pt-1 max-h-auto overflow-hidden transition-[max-height,padding] duration-[280ms] ease-[ease]";
const bodyClosed =
   "pl-[68px] pr-5 pb-0 pt-0 max-h-0 overflow-hidden transition-[max-height,padding] duration-[280ms] ease-[ease]";

const getChevronCls = (isOpen) =>
   `w-5 h-5 flex items-center justify-center rounded-[6px] flex-shrink-0 transition-all duration-150 ${isOpen ? "bg-[#eaf9ee] text-[#128d3d]" : "bg-transparent text-[#9ca3af]"
   }`;

// Control atoms
const ctrlWrap = "mt-[10px]";
const ctrlLabel =
   "block text-[0.67rem] font-bold text-[#6b7280] mb-[5px] font-[var(--inter-font)] uppercase tracking-[0.06em]";
const textInput = [
   "w-full px-[10px] py-[8px] border border-[#dfe7e1] rounded-[8px]",
   "text-[0.82rem] font-[var(--inter-font)] text-[#111827] bg-white outline-none box-border",
   "transition-[border-color,box-shadow] duration-150",
   "hover:border-[#b7d9bf]",
   "focus:border-[#16a34a] focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]",
].join(" ");
const selectInput = [
   "w-full px-[10px] py-[8px] border border-[#dfe7e1] rounded-[8px]",
   "text-[0.82rem] font-[var(--inter-font)] text-[#111827] bg-white outline-none cursor-pointer box-border",
   "transition-[border-color,box-shadow] duration-150",
   "focus:border-[#16a34a] focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)]",
].join(" ");
const colorRow = "flex items-center gap-[7px]";
const colorPicker =
   "w-[36px] h-[36px] border border-[#dfe7e1] rounded-[8px] p-[2px] cursor-pointer bg-none flex-shrink-0 transition-colors duration-150 hover:border-[#b7d9bf]";
const colorHex = [
   "flex-1 px-[10px] py-[8px] border border-[#dfe7e1] rounded-[8px]",
   "text-[0.78rem] font-['Courier_New',monospace] text-[#374151] bg-[#f9fafb] outline-none box-border",
   "transition-[border-color,box-shadow,background] duration-150",
   "focus:border-[#16a34a] focus:shadow-[0_0_0_3px_rgba(22,163,74,0.1)] focus:bg-white",
].join(" ");
const helperText = "mt-1 text-[0.68rem] text-[#6b7280] font-[var(--inter-font)]";

const IMAGE_KEY_RE =
   /(image|img|thumb|thumbnail|avatar|photo|picture|icon)/i;
const IMAGE_URL_KEY_RE = /(image.*url|img.*url|logoimage|iconimage)/i;
const IMAGE_ALT_RE = /(alt|alternative)/i;
const NON_IMAGE_URL_RE = /(btn|button|link|badge|logo).*url/i;

// ── Control renderer ──────────────────────────────────────────

const readFileAsDataUrl = (file) =>
   new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
      reader.onerror = () => reject(new Error("Failed to read file"));
      reader.readAsDataURL(file);
   });

const Control = memo(({ ctrl, value, onChange }) => {
   const key = (ctrl.key || "").toLowerCase();
   const label = (ctrl.label || "").toLowerCase();
   const isImageField =
      IMAGE_KEY_RE.test(key) &&
      !IMAGE_ALT_RE.test(key) &&
      !NON_IMAGE_URL_RE.test(key) &&
      !IMAGE_ALT_RE.test(label);

   const isVideoField =
      /(video.*url|video.*src|videourl|videosrc)/i.test(key) &&
      !/(thumb|poster|image|img)/i.test(key) &&
      !IMAGE_ALT_RE.test(key) &&
      !NON_IMAGE_URL_RE.test(key) &&
      !IMAGE_ALT_RE.test(label);

   return (
      <div className={ctrlWrap}>
         <label className={ctrlLabel}>{ctrl.label}</label>

         {ctrl.type === "text" && (
            <>
               <input
                  className={textInput}
                  type="text"
                  value={value ?? ""}
                  onChange={(e) => onChange(ctrl.key, e.target.value)}
                  placeholder={`Enter ${ctrl.label.toLowerCase()}…`}
               />
               {isImageField && (
                  <>
                     <input
                        className={`${textInput} mt-2`}
                        type="file"
                        accept="image/*"
                        onChange={async (e) => {
                           const file = e.target.files?.[0];
                           if (!file) return;
                           try {
                              const dataUrl = await readFileAsDataUrl(file);
                              if (dataUrl) onChange(ctrl.key, dataUrl);
                           } catch (err) {
                              console.error("Image upload failed:", err);
                           } finally {
                              e.target.value = "";
                           }
                        }}
                     />
                     <p className={helperText}>
                        Paste an image URL or upload a file.
                     </p>
                  </>
               )}
               {isVideoField && (
                  <>
                     <input
                        className={`${textInput} mt-2`}
                        type="file"
                        accept="video/*"
                        onChange={async (e) => {
                           const file = e.target.files?.[0];
                           if (!file) return;
                           try {
                              const dataUrl = await readFileAsDataUrl(file);
                              if (dataUrl) onChange(ctrl.key, dataUrl);
                           } catch (err) {
                              console.error("Video upload failed:", err);
                           } finally {
                              e.target.value = "";
                           }
                        }}
                     />
                     <p className={helperText}>
                        Paste a video URL or upload a file.
                     </p>
                  </>
               )}
            </>
         )}

         {ctrl.type === "textarea" && (
            <textarea
               className={textInput}
               rows={4}
               value={value ?? ""}
               onChange={(e) => onChange(ctrl.key, e.target.value)}
               placeholder={`Enter ${ctrl.label.toLowerCase()}…`}
            />
         )}

         {ctrl.type === "image-upload" && (
            <>
               <input
                  className={textInput}
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                     const file = e.target.files?.[0];
                     if (!file) return;
                     try {
                        const dataUrl = await readFileAsDataUrl(file);
                        if (dataUrl) onChange(ctrl.key, dataUrl);
                     } catch (err) {
                        console.error("Image upload failed:", err);
                     } finally {
                        e.target.value = "";
                     }
                  }}
               />
               <p className={helperText}>Upload a logo image file.</p>
            </>
         )}

         {ctrl.type === "color" && (
            <div className={colorRow}>
               <input
                  className={colorPicker}
                  type="color"
                  value={value ?? "#000000"}
                  onChange={(e) => onChange(ctrl.key, e.target.value)}
               />
               <input
                  className={colorHex}
                  type="text"
                  value={value ?? ""}
                  onChange={(e) => onChange(ctrl.key, e.target.value)}
                  placeholder="#000000"
                  maxLength={9}
               />
            </div>
         )}

         {ctrl.type === "select" && (
            <select
               className={selectInput}
               value={value ?? ""}
               onChange={(e) => onChange(ctrl.key, e.target.value)}
            >
               {ctrl.options.map((opt) => (
                  <option key={opt} value={opt}>
                     {opt}
                  </option>
               ))}
            </select>
         )}
      </div>
   );
});

Control.displayName = "Control";

// ── Main ──────────────────────────────────────────────────────

const AccordionSection = memo(({ acc, isOpen, onToggle, config, onUpdate }) => {
   // Resolve FA string → Lucide component at render time
   const iconElement = createElement(resolveIcon(acc.icon), { size: 16 });

   return (
      <div className={wrapper}>
         {/* ── Trigger ── */}
         <button className={trigger} onClick={() => onToggle(acc.id)}>
            {/* Icon box — bg/color are dynamic, safe to inline style */}
            <div
               className={iconBoxBase}
               style={{
                  background: acc.iconBg || "#f3f4f6",
                  color: acc.iconColor || "#6b7280",
               }}
            >
               {iconElement}
            </div>

            {/* Text */}
            <div className={textBlock}>
               <div className={titleCls}>{acc.title}</div>
               <div className={subtitleCls}>{acc.subtitle}</div>
            </div>

            {/* Chevron */}
            <div className={getChevronCls(isOpen)}>
               <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                     }`}
               />
            </div>
         </button>

         {/* ── Body ── */}
         <div className={isOpen ? bodyOpen : bodyClosed}>
            {acc.controls.map((ctrl) => (
               <Control
                  key={ctrl.key}
                  ctrl={ctrl}
                  value={config[ctrl.key]}
                  onChange={onUpdate}
               />
            ))}
         </div>
      </div>
   );
});

AccordionSection.displayName = "AccordionSection";
export default AccordionSection;
