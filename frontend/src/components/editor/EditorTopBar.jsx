import { useState } from "react";
import {
   ArrowLeft,
   ChevronRight,
   Search,
   Monitor,
   Tablet,
   Smartphone,
   RotateCcw,
   Code,
   Check,
   Menu,
   X,
} from "lucide-react";

// ── Tailwind Classes ───────────────────────────────────────────

const bar = [
   "h-[64px] min-h-[64px] flex items-center justify-between",
   "px-3 sm:px-5 bg-white/95 backdrop-blur-xl border-b border-[#dfe7e1]",
   "z-[200] gap-2 sm:gap-3 shadow-[0_8px_28px_rgba(22,32,26,0.06)] flex-shrink-0",
   "relative",
].join(" ");

const left = "flex items-center gap-[8px] sm:gap-[10px] flex-1 min-w-0";
const center = "hidden md:flex items-center gap-2 flex-shrink-0";
const right = "flex items-center gap-2 flex-1 justify-end";

// Buttons
const iconBtn = [
   "w-[38px] h-[38px] rounded-[11px] border border-[#dfe7e1] bg-[#fbfdfb]",
   "flex items-center justify-center cursor-pointer text-[#1f2a24]",
   "flex-shrink-0 transition-[background,border-color] duration-150",
   "hover:bg-[#eaf9ee] hover:border-[#9edcab] hover:text-[#13913d]",
].join(" ");

// Breadcrumb
const breadcrumb = "hidden sm:flex items-center gap-[6px] overflow-hidden";
const variantOnly = "flex sm:hidden items-center min-w-0 overflow-hidden";
const crumbBase =
   "text-[0.82rem] font-[var(--inter-font)] whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-150";
const crumbActive = `${crumbBase} text-[#0d1510] font-black cursor-default`;
const crumbCurrent = `${crumbBase} text-[#7a867f] font-bold cursor-default`;
const crumbInactive = `${crumbBase} text-[#169447] font-black cursor-pointer hover:text-[#0f7637]`;

// Zoom
const zoomGroup = [
   "flex items-center gap-[2px]",
   "bg-[#fbfdfb] border border-[#dfe7e1] rounded-[10px]",
   "px-[8px] py-[5px] min-w-[74px] justify-center",
].join(" ");
const zoomVal =
   "text-[0.78rem] font-black text-[#243129] font-[var(--inter-font)] tabular-nums";
const divider = "w-px h-[24px] bg-[#dfe7e1]";

// Viewport group
const vpGroup = [
   "flex items-center gap-[2px]",
   "bg-[#fbfdfb] border border-[#dfe7e1] rounded-[12px] p-[4px]",
].join(" ");

const getVpBtn = (active) =>
   [
      "h-7 px-[10px] border-none rounded-[5px]",
      "flex items-center gap-[5px] cursor-pointer",
      "text-[0.72rem] font-[var(--inter-font)] whitespace-nowrap",
      "transition-[background,color,box-shadow] duration-150",
      active
         ? "bg-white text-[#111815] font-black shadow-[0_7px_18px_rgba(22,32,26,0.08)] ring-1 ring-[#e4eee6]"
         : "bg-transparent text-[#68736b] font-bold hover:bg-white/80 hover:text-[#111815]",
   ].join(" ");

// Action buttons
const getActionBtn = (primary, copied) =>
   [
      "flex items-center gap-[6px] h-[34px] rounded-lg border",
      "text-[0.82rem] font-semibold font-[var(--inter-font)] cursor-pointer",
      "transition-colors duration-150 whitespace-nowrap flex-shrink-0",
      // full label on sm+, icon-only on xs
      "px-[10px] sm:px-[14px]",
      copied
         ? "bg-[#16a34a] border-[#16a34a] text-white"
         : primary
           ? "bg-[#111827] border-[#111827] text-white hover:bg-[#172033] shadow-[0_10px_20px_rgba(17,24,39,0.12)]"
           : "bg-white text-[#26312a] border-[#dfe7e1] hover:bg-[#eaf9ee] hover:border-[#9edcab] hover:text-[#13913d]",
   ].join(" ");

// ── Mobile drawer ──────────────────────────────────────────────

const drawer = [
   "absolute top-[64px] left-0 right-0 z-[300]",
   "bg-white/95 backdrop-blur-xl border-b border-[#dfe7e1]",
   "shadow-[0_14px_34px_rgba(22,32,26,0.1)]",
   "px-4 py-3 flex flex-col gap-3",
   "md:hidden",
].join(" ");

const drawerRow = "flex items-center gap-2 flex-wrap";

const drawerLabel = [
   "text-[0.65rem] font-bold text-[#9ca3af] uppercase tracking-[0.08em]",
   "font-[var(--inter-font)] w-full mb-[-4px]",
].join(" ");

// ── Viewport options ───────────────────────────────────────────

const VIEWPORTS = [
   { key: "desktop", Icon: Monitor, label: "Desktop" },
   { key: "tablet", Icon: Tablet, label: "Tablet" },
   { key: "mobile", Icon: Smartphone, label: "Mobile" },
];

// ── Component ──────────────────────────────────────────────────

const EditorTopBar = ({
   section,
   variantName,
   viewport,
   onViewportChange,
   onBack,
   onNavigateToAll,
   onCopy,
   onReset,
   copied,
   flowZoom,
}) => {
   const [menuOpen, setMenuOpen] = useState(false);

   const capitalize = (s) =>
      s ? s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ") : "";

   const handleViewport = (key) => {
      onViewportChange(key);
      setMenuOpen(false);
   };

   return (
      <>
         <header className={bar}>
            {/* ── Left: back + breadcrumb ── */}
            <div className={left}>
               <button className={iconBtn} onClick={onBack} title="Back to components">
                  <ArrowLeft size={14} />
               </button>

               {/* Full breadcrumb — hidden on xs */}
               <nav className={breadcrumb} aria-label="breadcrumb">
                  <span className={crumbInactive} onClick={onNavigateToAll}>
                     Components
                  </span>
                  <ChevronRight
                     size={9}
                     className="text-[#d1d5db] flex-shrink-0"
                  />
                  <span className={crumbCurrent}>{capitalize(section)}</span>
                  <ChevronRight
                     size={9}
                     className="text-[#d1d5db] flex-shrink-0"
                  />
                  <span className={crumbActive}>{variantName}</span>
               </nav>

               {/* Variant name only — visible on xs */}
               <div className={variantOnly}>
                  <span className={crumbActive}>{variantName}</span>
               </div>
            </div>

            {/* ── Center: zoom + viewport — hidden on < md ── */}
            <div className={center}>
               <div className={zoomGroup}>
                  <Search size={10} className="text-[#9ca3af] mr-[3px]" />
                  <span className={zoomVal}>{flowZoom}%</span>
               </div>

               <div className={divider} />

               <div className={vpGroup}>
                  {VIEWPORTS.map((option) => {
                     const ViewportIcon = option.Icon;

                     return (
                        <button
                           key={option.key}
                           className={getVpBtn(viewport === option.key)}
                           onClick={() => onViewportChange(option.key)}
                           title={option.label}
                        >
                           <ViewportIcon size={13} />
                           {option.label}
                        </button>
                     );
                  })}
               </div>
            </div>

            {/* ── Right: actions + hamburger ── */}
            <div className={right}>
               {/* Reset — label hidden on xs */}
               <button
                  className={getActionBtn(false, false)}
                  onClick={onReset}
                  title="Reset to defaults"
               >
                  <RotateCcw size={13} />
                  <span className="hidden sm:inline">Reset</span>
               </button>

               {/* Copy — label hidden on xs */}
               <button className={getActionBtn(true, copied)} onClick={onCopy}>
                  {copied ? (
                     <>
                        <Check size={13} />
                        <span className="hidden sm:inline">Copied!</span>
                     </>
                  ) : (
                     <>
                        <Code size={13} />
                        <span className="hidden sm:inline">Copy Code</span>
                     </>
                  )}
               </button>

               {/* Hamburger — visible on < md only */}
               <button
                  className={`${iconBtn} md:hidden`}
                  onClick={() => setMenuOpen((v) => !v)}
                  title="More options"
               >
                  {menuOpen ? <X size={15} /> : <Menu size={15} />}
               </button>
            </div>
         </header>

         {/* ── Mobile drawer ── */}
         {menuOpen && (
            <div className={drawer}>
               {/* Zoom row */}
               <div className={drawerRow}>
                  <span className={drawerLabel}>Zoom</span>
                  <div className={zoomGroup}>
                     <Search size={10} className="text-[#9ca3af] mr-[3px]" />
                     <span className={zoomVal}>{flowZoom}%</span>
                  </div>
               </div>

               {/* Viewport row */}
               <div className={drawerRow}>
                  <span className={drawerLabel}>Viewport</span>
                  <div className={vpGroup}>
                     {VIEWPORTS.map((option) => {
                        const ViewportIcon = option.Icon;

                        return (
                           <button
                              key={option.key}
                              className={getVpBtn(viewport === option.key)}
                              onClick={() => handleViewport(option.key)}
                              title={option.label}
                           >
                              <ViewportIcon size={13} />
                              {option.label}
                           </button>
                        );
                     })}
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default EditorTopBar;
