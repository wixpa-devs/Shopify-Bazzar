import { createElement } from "react";
import {
   ArrowRight,
   Award,
   Box,
   Clock,
   Code2,
   ExternalLink,
   Gauge,
   Palette,
   PencilLine,
   ShieldCheck,
   Star,
   Store,
   UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FinalShopifyBanner from "../components/FinalShopifyBanner/FinalShopifyBanner";
import featuredShopifyWorkImage from "../../../temp-assets/featured-shopify-work-img.png";
import fiverrLogo from "../../../temp-assets/fiverr-logo.png";
import upworkLogo from "../../../temp-assets/upwork-logo.png";

const freelanceProfileUrl = "https://www.upwork.com/freelancers/malikzeeshanhaider";

const pageShell = "min-h-screen bg-white";
const hero =
   "relative isolate overflow-hidden border-b border-[#e8f0eb] bg-[#f4fbf5] px-5 py-16 font-[var(--inter-font)] sm:px-8 sm:py-20 lg:px-12 lg:py-[84px]";
const heroPattern =
   "absolute inset-0 -z-10 opacity-75 [background-image:radial-gradient(rgba(26,89,47,0.16)_1px,transparent_1px)] [background-size:24px_24px]";
const heroGlow =
   "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.92)_0%,rgba(244,251,245,0.76)_46%,rgba(238,249,241,0.92)_100%)]";
const heroInner =
   "mx-auto flex min-h-[190px] max-w-[980px] flex-col items-center justify-center text-center";
const title =
   "text-[clamp(3.5rem,7vw,6rem)] font-black leading-[0.98] tracking-[-0.055em] text-[#090d0b]";
const description =
   "mt-8 max-w-[800px] text-[clamp(1.08rem,1.45vw,1.62rem)] font-semibold leading-[1.55] tracking-[-0.015em] text-[#59636c] max-[640px]:mt-6";
const servicesSection =
   "bg-white px-5 py-14 font-[var(--inter-font)] sm:px-8 sm:py-[72px] lg:px-12 lg:py-[78px]";
const servicesInner = "mx-auto max-w-[1320px]";
const servicesHeader = "mx-auto mb-10 max-w-[760px] text-center sm:mb-12";
const servicesEyebrow =
   "mb-3 block text-[0.76rem] font-black uppercase tracking-[0.13em] text-[#159447]";
const servicesTitle =
   "text-[clamp(2.15rem,3.25vw,3.45rem)] font-black leading-[1.04] tracking-[-0.052em] text-[#07100a]";
const servicesCopy =
   "mt-3 text-[0.98rem] font-semibold leading-[1.65] text-[#5f6875]";
const servicesGrid = "grid gap-6 md:grid-cols-2 xl:grid-cols-3";
const serviceCard =
   "group flex min-h-[252px] flex-col items-start rounded-[16px] border border-[#e1e9e4] bg-white p-8 shadow-[0_14px_34px_rgba(17,24,39,0.052)] transition-colors duration-200 hover:border-[#b8dfc4] max-[640px]:min-h-0 max-[640px]:p-6";
const serviceIcon =
   "grid h-[58px] w-[58px] place-items-center rounded-[10px] bg-[#eaf9ee] text-[#159447] shadow-[inset_0_0_0_1px_rgba(29,168,75,0.1)]";
const serviceTitle =
   "mt-7 text-[1.16rem] font-black leading-[1.18] tracking-[-0.024em] text-[#111a15]";
const serviceText =
   "mt-3 max-w-[350px] text-[0.91rem] font-semibold leading-[1.64] text-[#5f6875]";
const serviceLink =
   "mt-auto inline-flex items-center gap-2 pt-6 text-[0.86rem] font-black text-[#159447] transition-colors hover:text-[#087c31]";
const featuredSection =
   "bg-white px-5 pb-14 font-[var(--inter-font)] sm:px-8 sm:pb-[72px] lg:px-12 lg:pb-[86px]";
const featuredShell =
   "relative isolate mx-auto grid max-w-[1320px] overflow-hidden rounded-[24px] border border-[#dbece1] bg-[#eefaf2] px-7 py-10 shadow-[0_24px_60px_rgba(17,24,39,0.075)] sm:px-10 sm:py-12 lg:min-h-[455px] lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-10 lg:px-14 lg:py-14";
const featuredPattern =
   "absolute inset-0 -z-10 opacity-65 [background-image:radial-gradient(rgba(24,149,68,0.13)_1px,transparent_1px)] [background-size:24px_24px]";
const featuredGlow =
   "absolute left-[-12%] top-[-22%] -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.46)_42%,rgba(255,255,255,0)_70%)]";
const featuredContent = "relative z-10 max-w-[520px]";
const featuredEyebrow =
   "mb-4 block text-[0.84rem] font-black uppercase tracking-[0.13em] text-[#159447]";
const featuredTitle =
   "text-[clamp(2.15rem,3vw,3.35rem)] font-black leading-[1.08] tracking-[-0.05em] text-[#07100a]";
const featuredList = "mt-8 flex flex-col gap-4";
const featuredListItem =
   "flex items-start gap-4 text-[1rem] font-semibold leading-[1.5] text-[#66717b]";
const featuredCheck =
   "mt-[1px] h-[27px] w-[27px] shrink-0 text-[#159447]";
const featuredItemStrong = "font-black text-[#18231d]";
const featuredImageWrap =
   "relative z-10 mt-10 flex items-center justify-center lg:mt-0";
const featuredImage =
   "block w-full max-w-[760px] select-none object-contain drop-shadow-[0_26px_38px_rgba(17,24,39,0.12)]";
const hireSection =
   "relative isolate overflow-hidden bg-white px-5 pb-16 pt-1 font-[var(--inter-font)] sm:px-8 sm:pb-20 lg:px-12 lg:pb-[96px]";
const hireCurveOne =
   "absolute -bottom-[360px] -left-[260px] -z-10 h-[760px] w-[760px] rounded-full border border-[#d8ecd6] opacity-80";
const hireCurveTwo =
   "absolute -right-[360px] top-[-240px] -z-10 h-[860px] w-[860px] rounded-full border border-[#d8ecd6] opacity-80";
const hireInner = "mx-auto max-w-[1320px]";
const hireHeader = "mx-auto max-w-[850px] text-center";
const hireEyebrow =
   "mb-5 block text-[0.85rem] font-black uppercase tracking-[0.12em] text-[#159447]";
const hireTitle =
   "text-[clamp(2.55rem,4.3vw,4.55rem)] font-black leading-[1.03] tracking-[-0.058em] text-[#171b24]";
const hireSubtitle =
   "mt-5 text-[clamp(1rem,1.35vw,1.36rem)] font-semibold leading-[1.6] tracking-[-0.012em] text-[#687180]";
const platformGrid = "mt-14 grid gap-7 lg:grid-cols-2 lg:gap-10";
const platformCard =
   "flex min-h-[438px] flex-col rounded-[18px] border border-[#dfe8e2] bg-white p-6 shadow-[0_22px_50px_rgba(17,24,39,0.08)] sm:p-8 lg:p-10 max-[640px]:min-h-0";
const platformTop =
   "grid items-start gap-5 sm:min-h-[176px] sm:grid-cols-[118px_minmax(0,1fr)] sm:items-center sm:gap-8 lg:grid-cols-[126px_minmax(0,1fr)] max-[640px]:text-left";
const platformLogo =
   "grid h-[118px] w-[118px] place-items-center rounded-full border border-[#e3e9e6] bg-white p-4 shadow-[0_18px_38px_rgba(17,24,39,0.075)] sm:h-[118px] sm:w-[118px] lg:h-[126px] lg:w-[126px] max-[640px]:mx-auto";
const platformLogoImage = "block max-h-[48px] w-full object-contain lg:max-h-[52px]";
const platformBadge =
   "mb-3 inline-flex w-fit items-center gap-2 rounded-[8px] bg-[#eaf8ee] px-3 py-1.5 text-[0.76rem] font-black text-[#159447] max-[640px]:mt-1";
const platformName =
   "text-[clamp(1.46rem,1.85vw,2rem)] font-black leading-[1.12] tracking-[-0.045em] text-[#171b24]";
const platformText =
   "mt-3 max-w-[430px] text-[0.9rem] font-semibold leading-[1.68] text-[#687180]";
const platformDivider = "my-7 h-px w-full bg-[#e4e9e6]";
const platformStats = "grid min-h-[74px] grid-cols-3 gap-0";
const platformStat =
   "flex min-w-0 items-center justify-center gap-2 border-r border-[#e4e9e6] px-2 text-center last:border-r-0 max-[520px]:flex-col max-[520px]:gap-2 max-[420px]:px-1";
const platformStatIcon = "shrink-0 text-[#159447]";
const platformStatValue =
   "text-[clamp(0.98rem,1.22vw,1.25rem)] font-black leading-[1.04] tracking-[-0.035em] text-[#111a15]";
const platformStatLabel =
   "mt-1 text-[0.68rem] font-bold leading-[1.18] text-[#687180]";
const platformButtonBase =
   "mt-7 inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-[8px] px-6 text-[0.98rem] font-black transition-colors duration-200 max-[640px]:mt-6 max-[420px]:min-h-[54px]";
const platformButtonPrimary =
   "bg-[#009e2c] text-white shadow-[0_16px_30px_rgba(0,158,44,0.16)] hover:bg-[#008926]";
const platformButtonOutline =
   "border border-[#8fd3a0] bg-white text-[#00933a] hover:border-[#159447] hover:bg-[#f2fbf4]";
const finalBannerWrap =
   "bg-white px-0 pb-8 pt-0 font-[var(--inter-font)] sm:pb-10 lg:pb-12";

const services = [
   {
      title: "Store Creation",
      text: "Complete Shopify store setup with the right structure, design, and apps to launch your brand successfully.",
      icon: Store,
   },
   {
      title: "Store Redesign",
      text: "Modern, conversion-focused redesigns that elevate your brand and improve customer experience.",
      icon: PencilLine,
   },
   {
      title: "Theme Customization",
      text: "Tailored theme customizations to match your brand and deliver a seamless shopping experience.",
      icon: Palette,
   },
   {
      title: "Custom Liquid Sections",
      text: "Build advanced, reusable sections with clean Liquid code, built for flexibility and performance.",
      icon: Code2,
   },
   {
      title: "Private App Development",
      text: "Custom Shopify apps and integrations to streamline operations and unlock powerful features.",
      icon: Box,
   },
   {
      title: "Speed Optimization & Bug Fixes",
      text: "Improve site speed, fix issues, and ensure your store runs smoothly across all devices.",
      icon: Gauge,
   },
];

const featuredSteps = [
   {
      label: "Strategy",
      text: "We understand your brand and goals.",
   },
   {
      label: "Design",
      text: "Clean, modern, and conversion-focused.",
   },
   {
      label: "Development",
      text: "Scalable, maintainable, and secure.",
   },
   {
      label: "Testing",
      text: "Thorough QA across devices and browsers.",
   },
   {
      label: "Launch Support",
      text: "We're here even after go-live.",
   },
];

const platforms = [
   {
      platform: "Fiverr",
      logo: fiverrLogo,
      badge: "Top Rated Seller",
      title: "Fiverr Profile",
      text: "Offering professional Shopify development, customization, and bug fixing services with satisfaction guaranteed.",
      button: "View on Fiverr",
      buttonClass: platformButtonPrimary,
      stats: [
         { value: "5.0", label: "Rating", icon: Star },
         { value: "1000+", label: "Orders Completed", icon: UsersRound },
         { value: "Top Rated", label: "Seller", icon: Award },
      ],
   },
   {
      platform: "Upwork",
      logo: upworkLogo,
      badge: "Top Rated Plus",
      title: "Upwork Profile",
      text: "Helping businesses grow with high-quality Shopify solutions, custom features, and ongoing support.",
      button: "View on Upwork",
      buttonClass: platformButtonOutline,
      stats: [
         { value: "100%", label: "Job Success", icon: Star },
         { value: "Top Rated Plus", label: "Badge", icon: ShieldCheck },
         { value: "500+", label: "Hours Worked", icon: Clock },
      ],
   },
];

const ServicesPage = () => {
   return (
      <div className={pageShell}>
         <Header />
         <main>
            <section className={hero} aria-labelledby="services-page-title">
               <div className={heroPattern} aria-hidden="true" />
               <div className={heroGlow} aria-hidden="true" />
               <div className={heroInner}>
                  <h1 id="services-page-title" className={title}>
                     Services
                  </h1>
                  <p className={description}>
                     Expert Shopify design, development, and optimization
                     services for teams building premium ecommerce experiences.
                  </p>
               </div>
            </section>

            <section className={servicesSection} aria-labelledby="services-grid-title">
               <div className={servicesInner}>
                  <div className={servicesHeader}>
                     <span className={servicesEyebrow}>Our Services</span>
                     <h2 id="services-grid-title" className={servicesTitle}>
                        What we can help you with
                     </h2>
                     <p className={servicesCopy}>
                        End-to-end Shopify solutions tailored to your business goals.
                     </p>
                  </div>

                  <div className={servicesGrid}>
                     {services.map(({ title: serviceName, text, icon: Icon }) => (
                        <article className={serviceCard} key={serviceName}>
                           <span className={serviceIcon} aria-hidden="true">
                              {createElement(Icon, { size: 30, strokeWidth: 1.9 })}
                           </span>
                           <h3 className={serviceTitle}>{serviceName}</h3>
                           <p className={serviceText}>{text}</p>
                           <Link className={serviceLink} to="/contact">
                              Learn more
                              <ArrowRight size={15} strokeWidth={2.6} />
                           </Link>
                        </article>
                     ))}
                  </div>
               </div>
            </section>

            <section
               className={featuredSection}
               aria-labelledby="featured-shopify-work-title"
            >
               <div className={featuredShell}>
                  <div className={featuredPattern} aria-hidden="true" />
                  <div className={featuredGlow} aria-hidden="true" />

                  <div className={featuredContent}>
                     <span className={featuredEyebrow}>Featured</span>
                     <h2 id="featured-shopify-work-title" className={featuredTitle}>
                        Custom Shopify work, done right.
                     </h2>

                     <ul className={featuredList} aria-label="Featured service process">
                        {featuredSteps.map(({ label, text }) => (
                           <li className={featuredListItem} key={label}>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor"
                                 className={featuredCheck}
                                 aria-hidden="true"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                                 />
                              </svg>
                              <span>
                                 <span className={featuredItemStrong}>{label}</span>
                                 {" - "}
                                 {text}
                              </span>
                           </li>
                        ))}
                     </ul>
                  </div>

                  <div className={featuredImageWrap}>
                     <img
                        className={featuredImage}
                        src={featuredShopifyWorkImage}
                        alt="Project deliverables and before-after Shopify work preview"
                        loading="lazy"
                     />
                  </div>
               </div>
            </section>

            <section className={hireSection} aria-labelledby="hire-confidence-title">
               <div className={hireCurveOne} aria-hidden="true" />
               <div className={hireCurveTwo} aria-hidden="true" />
               <div className={hireInner}>
                  <div className={hireHeader}>
                     <span className={hireEyebrow}>Let's Work Together</span>
                     <h2 id="hire-confidence-title" className={hireTitle}>
                        Hire with confidence
                     </h2>
                     <p className={hireSubtitle}>
                        Find me on trusted freelance platforms and let's build
                        something amazing.
                     </p>
                  </div>

                  <div className={platformGrid}>
                     {platforms.map(
                        ({
                           logo,
                           badge,
                           title: platformTitle,
                           text,
                           button,
                           buttonClass,
                           stats,
                        }) => (
                           <article className={platformCard} key={platformTitle}>
                              <div className={platformTop}>
                                 <div className={platformLogo} aria-hidden="true">
                                    <img
                                       className={platformLogoImage}
                                       src={logo}
                                       alt=""
                                       loading="lazy"
                                    />
                                 </div>

                                 <div>
                                    <span className={platformBadge}>
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.8"
                                          stroke="currentColor"
                                          className="h-[18px] w-[18px]"
                                          aria-hidden="true"
                                       >
                                          <path
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                             d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                                          />
                                       </svg>
                                       {badge}
                                    </span>
                                    <h3 className={platformName}>{platformTitle}</h3>
                                    <p className={platformText}>{text}</p>
                                 </div>
                              </div>

                              <div className={platformDivider} />

                              <div className={platformStats}>
                                 {stats.map(({ value, label, icon: Icon }) => (
                                    <div className={platformStat} key={`${value}-${label}`}>
                                       {createElement(Icon, {
                                          size: 25,
                                          strokeWidth: 1.9,
                                          className: platformStatIcon,
                                          "aria-hidden": true,
                                       })}
                                       <div>
                                          <div className={platformStatValue}>{value}</div>
                                          <div className={platformStatLabel}>{label}</div>
                                       </div>
                                    </div>
                                 ))}
                              </div>

                              <a
                                 className={`${platformButtonBase} ${buttonClass}`}
                                 href={freelanceProfileUrl}
                                 target="_blank"
                                 rel="noreferrer"
                              >
                                 {button}
                                 <ExternalLink size={22} strokeWidth={2.3} />
                              </a>
                           </article>
                        ),
                     )}
                 </div>
               </div>
            </section>

            <section className={finalBannerWrap} aria-label="Build Shopify stores call to action">
               <FinalShopifyBanner />
            </section>
         </main>
         <Footer />
      </div>
   );
};

export default ServicesPage;
