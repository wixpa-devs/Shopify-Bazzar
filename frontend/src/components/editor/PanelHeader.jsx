// ── Tailwind Classes ───────────────────────────────────────────

const wrap = [
   "px-5 pt-5 pb-4",
   "border-b border-[#edf3ef] bg-white flex-shrink-0",
].join(" ");

const titleRow = ["flex items-start justify-between gap-2 mb-[6px]"].join(" ");

const titleCls = [
   "text-[1.05rem] font-black text-[#101813]",
   "font-[var(--inter-font)] tracking-[-0.025em] leading-[1.25] m-0",
].join(" ");

const badge = [
   "text-[0.65rem] font-bold",
   "bg-[#eaf9ee] text-[#128d3d]",
   "px-[9px] py-[3px] rounded-full",
   "font-[var(--inter-font)] whitespace-nowrap flex-shrink-0",
   "mt-[2px] border border-[#bde8c7]",
].join(" ");

const desc = [
   "text-[0.8rem] text-[#596779] leading-[1.55]",
   "font-[var(--inter-font)] m-0",
].join(" ");

// ── Util ───────────────────────────────────────────────────────

const capitalize = (s) =>
   s ? s.charAt(0).toUpperCase() + s.slice(1).replace(/-/g, " ") : "";

// ── Component ──────────────────────────────────────────────────

const PanelHeader = ({ title, description, sectionLabel }) => (
   <div className={wrap}>
      <div className={titleRow}>
         <h2 className={titleCls}>{title}</h2>
         {sectionLabel && (
            <span className={badge}>{capitalize(sectionLabel)}</span>
         )}
      </div>
      {description && <p className={desc}>{description}</p>}
   </div>
);

export default PanelHeader;
