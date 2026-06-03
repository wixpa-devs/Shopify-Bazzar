import { createElement } from "react";
import {
   ArrowRight,
   BarChart3,
   CheckCircle2,
   ExternalLink,
   Globe2,
   ShieldCheck,
   Star,
   UsersRound,
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FinalShopifyBanner from "../components/FinalShopifyBanner/FinalShopifyBanner";
import shopifyAppsImage from "../assets/shopify-apps-main-img.png";
import nexusLogo from "../assets/nexus-function-shopify-app.jpeg";
import optimaLogo from "../assets/optima-tiktok-shop-connector-shopify-app.png";
import wixpaAdsLogo from "../assets/wixpa-google-ads-shopify-app.webp";
import wixpaAnalyticsLogo from "../assets/wixpa-google-analytics-4-shopify-app.png";
import wixpaShoppingLogo from "../assets/wixpa-google-shopping-feed-shopify-app.png";

const partnerProfileUrl = "https://apps.shopify.com/partners/easyfeed";

const pageShell = "min-h-screen bg-white";
const hero =
   "relative isolate overflow-hidden bg-[#f4fbf5] px-4 py-14 font-[var(--inter-font)] sm:px-7 sm:py-16 lg:px-10 lg:py-20";
const heroPattern =
   "absolute inset-0 -z-10 opacity-75 [background-image:radial-gradient(rgba(26,89,47,0.16)_1px,transparent_1px)] [background-size:24px_24px]";
const heroGlow =
   "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_24%_42%,rgba(255,255,255,0.98)_0%,rgba(244,251,245,0.88)_46%,rgba(236,249,240,0.94)_100%)]";
const heroCurveOne =
   "absolute -right-24 top-0 -z-10 h-[560px] w-[560px] rounded-full border border-[#cfe8d6]/70 opacity-70";
const heroCurveTwo =
   "absolute -right-10 top-24 -z-10 h-[430px] w-[430px] rounded-full border border-[#cfe8d6]/70 opacity-60";
const heroInner =
   "mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(520px,1.12fr)] lg:gap-8";
const heroContent = "relative z-10 max-w-[700px] max-[1024px]:max-w-none";
const eyebrow =
   "mb-8 block text-[0.92rem] font-black uppercase tracking-[0.14em] text-[#20a84a] max-[640px]:mb-5";
const title =
   "max-w-[710px] text-[clamp(2.8rem,5vw,5rem)] font-black leading-[1.08] tracking-[-0.055em] text-[#060b08] max-[640px]:text-[clamp(2.35rem,11vw,3.35rem)]";
const titleAccent = "text-[#20a84a]";
const description =
   "mt-6 max-w-[690px] text-[clamp(1rem,1.18vw,1.2rem)] font-semibold leading-[1.72] text-[#5e6874] max-[640px]:mt-5";
const actions =
   "mt-11 flex flex-wrap items-center gap-5 max-[640px]:mt-8 max-[520px]:grid max-[520px]:grid-cols-1";
const primaryButton =
   "inline-flex h-[56px] min-w-[200px] items-center justify-center gap-3 rounded-[12px] bg-[#079537] px-7 text-[0.98rem] font-black text-white shadow-[0_16px_32px_rgba(7,149,55,0.25)] transition-colors duration-200 hover:bg-[#087c31]";
const secondaryButton =
   "inline-flex h-[56px] min-w-[210px] items-center justify-center gap-3 rounded-[12px] border border-[#e0e8e2] bg-white px-7 text-[0.98rem] font-black text-[#159447] shadow-[0_14px_30px_rgba(17,24,39,0.08)] transition-colors duration-200 hover:border-[#9ddfac] hover:bg-[#f5fcf7]";
const trustRow =
   "mt-12 grid max-w-[760px] grid-cols-3 gap-5 max-[720px]:grid-cols-1 max-[640px]:mt-8";
const trustItem = "flex items-start gap-3";
const trustIcon =
   "mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 border-[#37b65e] bg-white text-[#22a64c]";
const trustTitle = "text-[0.84rem] font-black text-[#23312a]";
const trustText = "mt-1 text-[0.76rem] font-semibold text-[#6a747d]";
const heroVisual = "relative min-h-[510px] max-[1024px]:min-h-0";
const heroImage =
   "relative z-10 ml-auto block w-full max-w-[780px] object-contain drop-shadow-[0_26px_58px_rgba(16,37,22,0.1)] max-[1024px]:mx-auto";

const appsSection =
   "bg-white px-4 py-12 font-[var(--inter-font)] sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const appsInner = "mx-auto max-w-[1320px]";
const appsHeader =
   "mb-9 flex items-start justify-between gap-5 max-[720px]:flex-col max-[720px]:items-start";
const appsEyebrow =
   "mb-5 block text-[0.78rem] font-black uppercase tracking-[0.13em] text-[#159447]";
const appsTitle =
   "max-w-[780px] text-[clamp(2.05rem,3vw,3.25rem)] font-black leading-[1.08] tracking-[-0.052em] text-[#07100a]";
const appsProfileLink =
   "mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-[12px] border border-[#e2e9e4] bg-white px-5 text-[0.82rem] font-black text-[#159447] shadow-[0_12px_26px_rgba(17,24,39,0.07)] transition-colors duration-200 hover:border-[#a8dfb5] hover:bg-[#f7fcf8] hover:text-[#087c31] max-[720px]:mt-0";
const appsGrid = "grid gap-7 md:grid-cols-2 xl:grid-cols-6";
const appCard =
   "group flex min-h-[265px] flex-col rounded-[18px] border border-[#e1e9e4] bg-white p-7 shadow-[0_14px_34px_rgba(17,24,39,0.06)] transition-colors duration-200 hover:border-[#b8dfc4] md:col-span-1 xl:col-span-2";
const appCardWide = "xl:col-span-3";
const appTop = "grid grid-cols-[76px_minmax(0,1fr)] gap-5";
const appLogoFrame =
   "flex h-[76px] w-[76px] items-center justify-center overflow-hidden rounded-[16px] border border-[#edf2ef] bg-white shadow-[0_12px_24px_rgba(17,24,39,0.08)]";
const appLogo = "h-full w-full object-cover";
const appTitle = "text-[1.14rem] font-black leading-[1.18] tracking-[-0.025em] text-[#111a15]";
const appMeta =
   "mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.82rem] font-black text-[#17201a]";
const appStar = "fill-[#f2b705] text-[#f2b705]";
const appDot = "text-[#8b949e]";
const appPlan = "font-bold text-[#68736b]";
const appText =
   "mt-5 max-w-[420px] text-[0.88rem] font-semibold leading-[1.65] text-[#5f6875]";
const appBadge =
   "mt-4 inline-flex w-fit items-center gap-1.5 rounded-[6px] bg-[#dff0ff] px-3 py-1 text-[0.74rem] font-black text-[#126da3]";
const appButton =
   "mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[12px] bg-[#079537] px-5 text-[0.82rem] font-black text-white shadow-[0_12px_24px_rgba(7,149,55,0.2)] transition-colors duration-200 hover:bg-[#087c31]";
const statsSection =
   "bg-white px-4 py-12 font-[var(--inter-font)] sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const statsShell =
   "mx-auto grid max-w-[1320px] overflow-hidden rounded-[20px] border border-[#e0e8e3] bg-[#fbfdfc] shadow-[0_14px_36px_rgba(17,37,23,0.06)] md:grid-cols-2 xl:grid-cols-4";
const statItem =
   "grid min-h-[128px] grid-cols-[70px_minmax(0,1fr)] items-center gap-5 px-8 py-6 max-[640px]:grid-cols-[58px_minmax(0,1fr)] max-[640px]:px-6 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[#e5ece7] md:[&:not(:last-child)]:border-r xl:[&:not(:last-child)]:border-b-0";
const statIcon =
   "grid h-[52px] w-[52px] place-items-center text-[#159447] max-[640px]:h-11 max-[640px]:w-11";
const statValue =
   "text-[clamp(2rem,2.6vw,3rem)] font-black leading-none tracking-[-0.045em] text-[#050807]";
const statLabel =
   "mt-2 max-w-[150px] text-[0.9rem] font-semibold leading-[1.45] text-[#5f6875]";
const finalBannerWrap =
   "bg-white px-0 py-0";

const trustItems = [
   {
      title: "Built for Shopify",
      text: "Trusted & verified",
   },
   {
      title: "Free plans available",
      text: "Start free, pay as you grow",
   },
   {
      title: "Made by experts",
      text: "100% focus on merchants",
   },
];

const apps = [
   {
      title: "Wixpa Google Shopping Feed",
      text: "Multi Product Feeds for Google Shopping, Facebook, XML, and text.",
      rating: "4.9",
      reviews: "219",
      plan: "Free plan available",
      logo: wixpaShoppingLogo,
      href: "https://apps.shopify.com/easyfeed-for-google-shopping-feeds?search_id=8b01e486-507b-4cb0-b584-52b4fb8d1b71&surface_detail=wixpa&surface_inter_position=1&surface_intra_position=5&surface_type=search",
   },
   {
      title: "Wixpa Google Ads - GA4 - GTM",
      text: "Easily add Google Ads, Google Analytics 4, and Google Tag Manager.",
      rating: "4.9",
      reviews: "36",
      plan: "Free plan available",
      logo: wixpaAdsLogo,
      href: "https://apps.shopify.com/wixpa-tag-manager?search_id=8b01e486-507b-4cb0-b584-52b4fb8d1b71&surface_detail=wixpa&surface_inter_position=1&surface_intra_position=7&surface_type=search",
   },
   {
      title: "Wixpa Google Analytics 4 (GA4)",
      text: "Easily connect your store to Google Analytics 4 in just minutes.",
      rating: "5.0",
      reviews: "50",
      plan: "Free plan available",
      logo: wixpaAnalyticsLogo,
      href: "https://apps.shopify.com/wixpa-google-analytics-4?search_id=8b01e486-507b-4cb0-b584-52b4fb8d1b71&surface_detail=wixpa&surface_inter_position=1&surface_intra_position=6&surface_type=search",
   },
   {
      title: "Optima TikTok Shop Connector",
      text: "Sync and manage TikTok Shop products, inventory, orders, and fulfillment from Shopify.",
      rating: "5.0",
      reviews: "77",
      plan: "Free plan available",
      logo: optimaLogo,
      href: "https://apps.shopify.com/optimaconnector?search_id=8b01e486-507b-4cb0-b584-52b4fb8d1b71&surface_detail=wixpa&surface_inter_position=1&surface_intra_position=9&surface_type=search",
      wide: true,
   },
   {
      title: "Nexus Functions Creator & Discount",
      text: "Create custom discounts, payments, delivery, and validation functions with no coding needed.",
      rating: "5.0",
      reviews: "38",
      plan: "Free to install",
      logo: nexusLogo,
      href: "https://apps.shopify.com/nexus-functions-creator?search_id=40b91ab7-be31-4ce9-874f-586d1067a06f&surface_detail=nexus+function&surface_inter_position=1&surface_intra_position=5&surface_type=search",
      wide: true,
   },
];

const appStats = [
   {
      value: "10,000+",
      label: "Merchants trust our apps",
      icon: UsersRound,
   },
   {
      value: "150+",
      label: "Countries served",
      icon: Globe2,
   },
   {
      value: "1M+",
      label: "Orders powered every month",
      icon: BarChart3,
   },
   {
      value: "99.9%",
      label: "Uptime & reliable performance",
      icon: ShieldCheck,
   },
];

const ShopifyAppsPage = () => {
   const scrollToApps = () => {
      document.getElementById("all-shopify-apps")?.scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   };

   return (
      <div className={pageShell}>
         <Header />
         <main>
            <section className={hero} aria-labelledby="shopify-apps-page-title">
               <div className={heroPattern} aria-hidden="true" />
               <div className={heroGlow} aria-hidden="true" />
               <div className={heroCurveOne} aria-hidden="true" />
               <div className={heroCurveTwo} aria-hidden="true" />

               <div className={heroInner}>
                  <div className={heroContent}>
                     <span className={eyebrow}>Shopify Apps</span>
                     <h1 id="shopify-apps-page-title" className={title}>
                        Power your store with{" "}
                        <span className={titleAccent}>Shopify Apps</span>
                     </h1>
                     <p className={description}>
                        Built by Shopify experts and trusted partners to help merchants
                        grow faster with smarter tools, deeper insights, and advanced
                        automations.
                     </p>

                     <div className={actions}>
                        <button className={primaryButton} type="button" onClick={scrollToApps}>
                           Explore All Apps
                           <ArrowRight size={18} strokeWidth={2.5} />
                        </button>
                        <a
                           className={secondaryButton}
                           href={partnerProfileUrl}
                           target="_blank"
                           rel="noreferrer"
                        >
                           View App Profile
                           <ExternalLink size={17} strokeWidth={2.4} />
                        </a>
                     </div>

                     <div className={trustRow} aria-label="Shopify apps benefits">
                        {trustItems.map((item) => (
                           <div className={trustItem} key={item.title}>
                              <span className={trustIcon} aria-hidden="true">
                                 <CheckCircle2 size={16} strokeWidth={2.8} />
                              </span>
                              <div>
                                 <p className={trustTitle}>{item.title}</p>
                                 <p className={trustText}>{item.text}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className={heroVisual}>
                     <img
                        className={heroImage}
                        src={shopifyAppsImage}
                        alt="Shopify apps analytics dashboard with app cards and install trend chart"
                        loading="eager"
                        decoding="async"
                     />
                  </div>
               </div>
            </section>

            <section id="all-shopify-apps" className={appsSection}>
               <div className={appsInner}>
                  <div className={appsHeader}>
                     <div>
                        <span className={appsEyebrow}>Our Shopify Apps</span>
                        <h2 className={appsTitle}>
                           Premium tools to grow, sell, and scale
                        </h2>
                     </div>
                     <a
                        className={appsProfileLink}
                        href={partnerProfileUrl}
                        target="_blank"
                        rel="noreferrer"
                     >
                        View all on Shopify
                        <ArrowRight size={16} />
                     </a>
                  </div>

                  <div className={appsGrid}>
                     {apps.map((app) => (
                        <article
                           className={`${appCard} ${app.wide ? appCardWide : ""}`}
                           key={app.title}
                        >
                           <div className={appTop}>
                              <span className={appLogoFrame}>
                                 <img
                                    className={appLogo}
                                    src={app.logo}
                                    alt={`${app.title} logo`}
                                    loading="lazy"
                                    decoding="async"
                                 />
                              </span>
                              <div>
                                 <h3 className={appTitle}>{app.title}</h3>
                                 <div className={appMeta}>
                                    <span>{app.rating}</span>
                                    <Star className={appStar} size={15} />
                                    <span>({app.reviews})</span>
                                    <span className={appDot}>•</span>
                                    <span className={appPlan}>{app.plan}</span>
                                 </div>
                              </div>
                           </div>

                           <p className={appText}>{app.text}</p>
                           <span className={appBadge}>Built for Shopify</span>

                           <a
                              className={appButton}
                              href={app.href}
                              target="_blank"
                              rel="noreferrer"
                           >
                              View App
                              <ArrowRight size={16} strokeWidth={2.4} />
                           </a>
                        </article>
                     ))}
                  </div>
               </div>
            </section>

            <section className={statsSection} aria-label="Shopify apps impact">
               <div className={statsShell}>
                  {appStats.map(({ value, label, icon: Icon }) => (
                     <div className={statItem} key={value}>
                        <span className={statIcon} aria-hidden="true">
                           {createElement(Icon, {
                              size: 48,
                              strokeWidth: 1.9,
                           })}
                        </span>
                        <div>
                           <p className={statValue}>{value}</p>
                           <p className={statLabel}>{label}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </section>

            <div className={finalBannerWrap}>
               <FinalShopifyBanner />
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default ShopifyAppsPage;
