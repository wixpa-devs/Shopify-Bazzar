import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiAward, FiLink, FiStar } from "react-icons/fi";
import heroImage from "../../../../temp-assets/hero-img-1.png";
import shopifyLogo from "../../../../temp-assets/shopify-logo.png";

const heroSection =
   "relative isolate overflow-hidden bg-white px-5 pb-7 pt-7 sm:px-8 sm:pb-12 sm:pt-10 lg:px-12 lg:pb-16 lg:pt-14";
const heroShell =
   "mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-7 sm:gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-5";
const heroCopy = "relative z-10 max-w-[540px] lg:pt-2";
const heroTitle =
   "max-w-[620px] text-[46px] font-black leading-[1.08] text-[#050807] sm:text-[58px] lg:text-[60px] xl:text-[66px]";
const titleGreen = "block text-[#24a248]";
const heroText =
   "mt-5 max-w-[520px] text-[16px] font-semibold leading-[1.72] text-[#5f6862] sm:mt-7 sm:text-[17px]";
const actionRow =
   "mt-6 flex flex-col gap-4 min-[520px]:flex-row min-[520px]:items-center sm:mt-8 sm:gap-5";
const primaryBtn =
   "inline-flex h-[58px] items-center justify-center gap-3 rounded-[9px] bg-[#1f990f] px-9 text-[16px] font-bold text-white shadow-[0_12px_22px_rgba(38,153,28,0.24),inset_0_1px_0_rgba(255,255,255,0.28)] ring-1 ring-[#16850b] transition-colors hover:bg-[#18850d]";
const secondaryBtn =
   "inline-flex h-[58px] items-center justify-center rounded-[9px] border-[2px] border-solid border-[#bfe6c7] bg-white px-9 text-[16px] font-bold text-[#157f2c] shadow-[0_10px_24px_rgba(32,126,47,0.08)] transition-colors hover:border-[#86cf96] hover:bg-[#f4fff6]";
const statsRow =
   "mt-8 grid max-w-[520px] grid-cols-3 gap-4 sm:mt-10 sm:gap-8 lg:mt-12";
const statItem = "flex items-center gap-3";
const statIcon =
   "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[10px] bg-[#f2f5f2] text-[#5b635d] shadow-[0_4px_12px_rgba(10,20,12,0.06)]";
const statShopifyIcon =
   "h-9 w-9 flex-shrink-0 rounded-[10px] object-cover shadow-[0_4px_12px_rgba(10,20,12,0.08)]";
const statValue =
   "block text-[15px] font-black leading-tight tracking-[-0.02em] text-[#172019]";
const statLabel =
   "mt-1 block text-[12px] font-semibold leading-tight text-[#4f5a53]";
const stars = "mb-[2px] flex items-center gap-[1px] text-[#ffc328]";

const heroVisual =
   "relative z-0 -mx-5 min-h-[310px] sm:mx-0 sm:min-h-[410px] lg:min-h-[520px] xl:min-h-[580px]";
const blobWrap =
   "pointer-events-none absolute inset-[-9%_-6%_-8%_-10%] -z-10 overflow-hidden rounded-[44px] opacity-90 [mask-image:radial-gradient(ellipse_at_center,black_42%,transparent_76%)]";
const blobOne =
   "absolute left-[10%] top-[19%] h-[420px] w-[560px] rounded-full bg-[#baf1b8]/55 blur-[64px] animate-[heroGreenFogOne_10s_ease-in-out_infinite]";
const blobTwo =
   "absolute bottom-[5%] right-[9%] h-[300px] w-[420px] rounded-full bg-[#d5f8d1]/70 blur-[76px] animate-[heroGreenFogTwo_12s_ease-in-out_infinite]";
const visualGlow =
   "absolute inset-x-[9%] bottom-[9%] h-[24%] rounded-full bg-[#a7e7aa]/35 blur-[52px]";
const visualImage =
   "relative z-10 ml-auto block w-[118%] max-w-none -translate-x-[7%] select-none object-contain drop-shadow-[0_22px_34px_rgba(24,38,28,0.12)] sm:w-full sm:translate-x-0 lg:max-w-none lg:scale-[1.05] xl:scale-[1.1]";

const Stat = ({ icon, value, label, rating }) => (
   <div className={statItem}>
      {icon}
      <div>
         {rating ? (
            <span className={stars} aria-hidden="true">
               {[0, 1, 2, 3, 4].map((item) => (
                  <FiStar key={item} size={11} fill="currentColor" />
               ))}
            </span>
         ) : null}
         <span className={statValue}>{value}</span>
         <span className={statLabel}>{label}</span>
      </div>
   </div>
);

const HeroSection = () => {
   const navigate = useNavigate();

   return (
      <section className={heroSection}>
         <div className={heroShell}>
            <div className={heroCopy}>
               <h1 className={heroTitle}>
                  <span className="block">Build premium</span>
                  <span className={titleGreen}>Shopify stores</span>
                  <span className="block">faster than ever</span>
               </h1>

               <p className={heroText}>
                  Browse beautiful components, customize visually, copy clean
                  code, and paste into Shopify Custom Liquid. No apps. No bloat.
                  Just performance.
               </p>

               <div className={actionRow}>
                  <button
                     className={primaryBtn}
                     type="button"
                     onClick={() => navigate("/components")}
                  >
                     Start Free <FiArrowRight size={18} />
                  </button>
                  <button
                     className={secondaryBtn}
                     type="button"
                     onClick={() => navigate("/components")}
                  >
                     Browse Components
                  </button>
               </div>

               <div className={statsRow}>
                  <Stat
                     icon={
                        <span className={statIcon}>
                           <FiLink size={18} />
                        </span>
                     }
                     value="10,000+"
                     label="Developers & Brands"
                  />
                  <Stat
                     icon={<img className={statShopifyIcon} src={shopifyLogo} alt="" />}
                     value="4.9/5"
                     label="Shopify Rating"
                     rating
                  />
                  <Stat
                     icon={
                        <span className={statIcon}>
                           <FiAward size={18} />
                        </span>
                     }
                     value="250+"
                     label="Five Star Reviews"
                  />
               </div>
            </div>

            <div className={heroVisual} aria-hidden="true">
               <div className={blobWrap}>
                  <div className={blobOne} />
                  <div className={blobTwo} />
                  <div className={visualGlow} />
               </div>
               <img
                  className={visualImage}
                  src={heroImage}
                  alt=""
                  draggable="false"
               />
            </div>
         </div>
      </section>
   );
};

export default HeroSection;
