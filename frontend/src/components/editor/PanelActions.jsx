import { Check, Code, RotateCcw } from "lucide-react";

// ── Tailwind Classes ───────────────────────────────────────────

const wrap = [
   "px-5 py-4 flex flex-col gap-3",
   "border-b border-[#edf3ef] bg-white flex-shrink-0",
].join(" ");

const getPrimaryBtn = (copied) =>
   [
      "w-full px-4 py-[10px] border-none rounded-lg",
      "text-[0.9rem] font-black font-[var(--inter-font)] text-white",
      "flex items-center justify-center gap-2 cursor-pointer",
      "transition-[background,box-shadow] duration-[250ms] ease",
      "focus-visible:outline-2 focus-visible:outline-[#16a34a] focus-visible:outline-offset-2",
      copied
         ? "bg-[#16a34a] hover:bg-[#138a3f] animate-[pop_0.2s_ease]"
         : "bg-[#111827] hover:bg-[#172033] shadow-[0_12px_22px_rgba(17,24,39,0.14)]",
   ].join(" ");

const secondaryBtn = [
   "w-full px-4 py-2.5 rounded-lg border border-[#dfe7e1]",
   "bg-[#fbfdfb] text-[#26312a]",
   "text-[0.82rem] font-bold font-[var(--inter-font)]",
   "flex items-center justify-center gap-[7px] cursor-pointer",
   "transition-[background,border-color,color] duration-150 ease",
   "hover:bg-[#eaf9ee] hover:border-[#9edcab] hover:text-[#128d3d]",
   "focus-visible:outline-2 focus-visible:outline-[#16a34a] focus-visible:outline-offset-2",
].join(" ");

// ── Pop keyframe (inline style tag) ───────────────────────────

const POP_STYLE = `
  @keyframes pop {
    0%, 100% { transform: scale(1);    }
    50%       { transform: scale(0.95); }
  }
`;

// ── Component ──────────────────────────────────────────────────

const PanelActions = ({ onCopy, onReset, copied }) => (
   <div className={wrap}>
      <style>{POP_STYLE}</style>

      {/* Copy code — primary */}
      <button
         className={getPrimaryBtn(copied)}
         onClick={onCopy}
         aria-label={
            copied ? "Code copied to clipboard" : "Copy component code"
         }
      >
         {copied ? (
            <>
               <Check size={14} /> Code Copied to Clipboard!
            </>
         ) : (
            <>
               <Code size={14} /> Copy Code
            </>
         )}
      </button>

      {/* Reset — secondary */}
      <button
         className={secondaryBtn}
         onClick={onReset}
         aria-label="Reset all settings to defaults"
      >
         <RotateCcw size={13} />
         Reset to Defaults
      </button>
   </div>
);

export default PanelActions;
