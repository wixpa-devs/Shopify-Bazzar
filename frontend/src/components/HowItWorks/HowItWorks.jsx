import { Code2, Grid2X2, Pencil, SlidersHorizontal } from "lucide-react";
import shopifyLogo from "../../../../temp-assets/shopify-logo.png";

const STEPS = [
   {
      number: "1",
      title: "Browse Components",
      text: "Explore 120+ premium sections & elements.",
      Icon: Grid2X2,
   },
   {
      number: "2",
      title: "Open in Editor",
      text: "Launch the visual editor with one click.",
      Icon: SlidersHorizontal,
   },
   {
      number: "3",
      title: "Customize",
      text: "Adjust content, styles and settings visually.",
      Icon: Pencil,
   },
   {
      number: "4",
      title: "Copy Code",
      text: "Get clean Liquid code instantly.",
      Icon: Code2,
   },
   {
      number: "5",
      title: "Paste into Shopify",
      text: "Add to your theme, save and launch live.",
      logo: shopifyLogo,
   },
];

const section =
   "bg-white px-4 pb-12 pt-8 sm:px-8 sm:pb-16 lg:px-12 lg:pb-24 lg:pt-6";
const shell = "mx-auto max-w-[1210px]";
const title =
   "text-center text-[25px] font-black tracking-[-0.02em] text-[#171b18] sm:text-[28px]";
const flow =
   "relative mt-7 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-7 lg:mt-9 lg:grid-cols-5 lg:gap-0";
const step = "relative flex flex-col items-center text-center";
const iconWrap =
   "relative z-20 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#e1e9e3] bg-[#f7f7f7] text-[#636b65] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_10px_28px_rgba(17,24,39,0.04)] sm:h-[82px] sm:w-[82px]";
const iconClass = "h-[27px] w-[27px] stroke-[2.2] sm:h-[30px] sm:w-[30px]";
const shopifyIcon = "h-[32px] w-[32px] rounded-[8px] object-cover sm:h-[36px] sm:w-[36px]";
const badge =
   "flex h-[27px] min-w-[27px] items-center justify-center rounded-[8px] bg-[#26a84b] px-2 text-[12px] font-black text-white shadow-[0_7px_14px_rgba(38,168,75,0.22)]";
const titleRow = "mt-5 flex items-center justify-center gap-2 sm:mt-6";
const stepTitle =
   "text-[14px] font-black tracking-[-0.01em] text-[#1f2521] sm:text-[15px]";
const stepText =
   "mt-3 max-w-[150px] text-[12px] font-semibold leading-[1.55] text-[#6a726d] sm:max-w-[158px]";
const connector =
   "absolute left-[calc(50%+44px)] top-[40px] z-10 hidden h-3 w-[calc(100%-96px)] lg:block";

const ConnectorArrow = ({ id }) => (
   <svg
      className={connector}
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      aria-hidden="true"
   >
      <defs>
         <marker
            id={id}
            markerHeight="8"
            markerWidth="8"
            orient="auto"
            refX="7.2"
            refY="4"
         >
            <path d="M0.8 1.1L7.2 4L0.8 6.9Z" fill="#31a65a" />
         </marker>
      </defs>
      <path
         d="M1 6H94"
         fill="none"
         markerEnd={`url(#${id})`}
         stroke="#9bcdaa"
         strokeLinecap="round"
         strokeWidth="1.35"
      />
   </svg>
);

const HowItWorks = () => (
   <section className={section}>
      <div className={shell}>
         <h2 className={title}>How it works</h2>

         <div className={flow}>
            {STEPS.map((stepData, index) => (
               <article className={step} key={stepData.number}>
                  <div className={iconWrap}>
                     {stepData.logo ? (
                        <img className={shopifyIcon} src={stepData.logo} alt="" />
                     ) : (
                        <stepData.Icon className={iconClass} aria-hidden="true" />
                     )}
                  </div>

                  {index < STEPS.length - 1 ? (
                     <ConnectorArrow id={`how-it-works-arrow-${stepData.number}`} />
                  ) : null}

                  <div className={titleRow}>
                     <span className={badge}>{stepData.number}</span>
                     <h3 className={stepTitle}>{stepData.title}</h3>
                  </div>
                  <p className={stepText}>{stepData.text}</p>
               </article>
            ))}
         </div>
      </div>
   </section>
);

export default HowItWorks;
