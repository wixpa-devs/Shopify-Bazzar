import { ArrowRight, BadgeCheck, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import shopifyLogo from "../../../../temp-assets/shopify-logo.png";

const section = "bg-white px-4 py-4 sm:px-7 sm:py-5 lg:px-10";
const banner =
   "relative mx-auto grid max-w-[1320px] overflow-hidden rounded-[22px] border border-[#293330] bg-[#070d0a] px-6 py-8 shadow-[0_18px_50px_rgba(9,14,11,0.18)] sm:px-9 sm:py-9 lg:grid-cols-[minmax(0,1fr)_210px] lg:items-center lg:gap-x-8 lg:gap-y-6 lg:px-10 lg:py-9 xl:grid-cols-[minmax(470px,1fr)_minmax(360px,0.72fr)_170px] xl:gap-5";
const grain =
   "pointer-events-none absolute inset-0 opacity-[0.11] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.55)_1px,transparent_0)] [background-size:18px_18px]";
const greenField =
   "pointer-events-none absolute inset-y-0 right-0 w-[52%] bg-[radial-gradient(circle_at_72%_50%,rgba(42,178,76,0.62),rgba(30,137,54,0.18)_38%,transparent_70%)]";
const content = "relative z-10 max-w-[520px]";
const title =
   "text-[34px] font-black leading-[1.08] tracking-[-0.032em] text-white sm:text-[42px] lg:text-[42px] xl:text-[44px]";
const text =
   "mt-5 max-w-[440px] text-[15px] font-semibold leading-[1.7] text-[rgba(255,255,255,0.82)] sm:text-[16px]";
const actionArea =
   "relative z-10 mt-7 flex w-full max-w-[500px] flex-col items-start gap-4 lg:col-start-1 lg:row-start-2 lg:mt-0 lg:justify-self-start xl:col-start-auto xl:row-start-auto";
const buttonRow = "grid w-full grid-cols-1 gap-3 min-[500px]:grid-cols-2";
const primaryBtn =
   "inline-flex h-[58px] min-w-[176px] items-center justify-center gap-3 rounded-[9px] bg-[#20a81f] px-7 text-[16px] font-black text-white shadow-[0_14px_28px_rgba(34,167,31,0.24),inset_0_1px_0_rgba(255,255,255,0.22)] ring-1 ring-[#39c53b] transition-colors hover:bg-[#1b921a]";
const secondaryBtn =
   "inline-flex h-[58px] min-w-[210px] items-center justify-center rounded-[9px] border-[1.5px] border-solid border-[rgba(255,255,255,0.36)] bg-[rgba(11,16,14,0.72)] px-7 text-[16px] font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] ring-1 ring-[rgba(255,255,255,0.1)] transition-colors hover:border-[rgba(255,255,255,0.52)] hover:bg-[rgba(255,255,255,0.08)]";
const metaRow = "grid w-full grid-cols-1 gap-3 text-[14px] font-bold text-[rgba(255,255,255,0.86)] min-[500px]:grid-cols-2";
const metaItem = "inline-flex items-center gap-2.5 whitespace-nowrap";
const metaIcon =
   "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] text-white ring-1 ring-[rgba(255,255,255,0.22)]";
const visual =
   "pointer-events-none relative z-10 mt-8 flex min-h-[130px] items-center justify-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:min-h-[170px] lg:justify-self-center xl:col-start-auto xl:row-span-1 xl:row-start-auto";
const logoGlow =
   "absolute h-[170px] w-[170px] rounded-full bg-[#47c94d]/24 blur-[28px] lg:h-[210px] lg:w-[210px]";
const logo =
   "relative z-10 h-[126px] w-[126px] rotate-[-3deg] select-none object-contain drop-shadow-[0_20px_38px_rgba(0,0,0,0.45)] sm:h-[150px] sm:w-[150px] lg:h-[164px] lg:w-[164px] xl:h-[172px] xl:w-[172px]";

const FinalShopifyBanner = () => {
   const navigate = useNavigate();

   return (
      <section className={section} aria-label="Start building Shopify stores">
         <div className={banner}>
            <div className={grain} aria-hidden="true" />
            <div className={greenField} aria-hidden="true" />

            <div className={content}>
               <h2 className={title}>Build Shopify stores in hours, not weeks.</h2>
               <p className={text}>
                  Join 10,000+ builders and brands creating stunning,
                  high-performing stores with ease.
               </p>
            </div>

            <div className={actionArea}>
               <div className={buttonRow}>
                  <button
                     className={primaryBtn}
                     type="button"
                     onClick={() => navigate("/components")}
                  >
                     Start Free <ArrowRight size={18} />
                  </button>
                  <button
                     className={secondaryBtn}
                     type="button"
                     onClick={() => navigate("/components")}
                  >
                     Explore Components
                  </button>
               </div>

               <div className={metaRow}>
                  <span className={metaItem}>
                     <span className={metaIcon} aria-hidden="true">
                        <CreditCard size={15} />
                     </span>
                     No credit card required
                  </span>
                  <span className={metaItem}>
                     <span className={metaIcon} aria-hidden="true">
                        <BadgeCheck size={15} />
                     </span>
                     Cancel anytime
                  </span>
               </div>
            </div>

            <div className={visual} aria-hidden="true">
               <div className={logoGlow} />
               <img
                  className={logo}
                  src={shopifyLogo}
                  alt=""
                  draggable="false"
               />
            </div>
         </div>
      </section>
   );
};

export default FinalShopifyBanner;
