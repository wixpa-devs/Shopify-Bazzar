import { createElement } from "react";
import {
   ArrowRight,
   CheckCircle2,
   CreditCard,
   Globe2,
   ShieldCheck,
   Star,
   UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import wixpaLogo from "../../../temp-assets/wixpa-logo.png";
import ceoImage from "../../../temp-assets/zeeshan-haider-ceo.png";
import shopifyLogo from "../../../temp-assets/shopify-logo.png";

const pageShell = "min-h-screen bg-white";
const hero =
   "relative isolate overflow-hidden border-b border-[#e8f0eb] bg-[#f4fbf5] px-4 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20";
const heroPattern =
   "absolute inset-0 -z-10 opacity-75 [background-image:radial-gradient(rgba(26,89,47,0.16)_1px,transparent_1px)] [background-size:24px_24px]";
const heroGlow =
   "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.92)_0%,rgba(244,251,245,0.76)_46%,rgba(238,249,241,0.92)_100%)]";
const heroInner =
   "mx-auto flex min-h-[170px] max-w-[980px] flex-col items-center justify-center text-center";
const title =
   "text-[clamp(3rem,6.2vw,5rem)] font-black leading-[0.98] tracking-[-0.055em] text-[#090d0b] font-[var(--inter-font)]";
const description =
   "mt-6 max-w-[760px] text-[clamp(1rem,1.25vw,1.3rem)] font-semibold leading-[1.6] tracking-[-0.015em] text-[#59636c] font-[var(--inter-font)] max-[640px]:mt-5";

const missionSection =
   "relative overflow-hidden border-b border-[#e8f0eb] bg-white px-4 py-12 font-[var(--inter-font)] sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const missionInner =
   "mx-auto grid max-w-[1320px] items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(440px,0.86fr)] lg:gap-16";
const missionContent = "max-w-[660px] max-[1024px]:max-w-none";
const missionEyebrow =
   "mb-6 block text-[0.78rem] font-black uppercase tracking-[0.13em] text-[#1fa34a] max-[640px]:mb-5";
const missionTitle =
   "max-w-[640px] text-[clamp(2.55rem,4.2vw,4.35rem)] font-black leading-[1.08] tracking-[-0.055em] text-[#060b08] max-[640px]:text-[clamp(2.25rem,10vw,3.1rem)]";
const missionAccent = "text-[#25b14e]";
const missionText =
   "mt-6 max-w-[620px] text-[clamp(0.98rem,1.08vw,1.12rem)] font-semibold leading-[1.72] text-[#5e6874] max-[640px]:mt-5";
const missionTextSecond = `${missionText} mt-7 max-[640px]:mt-5`;
const wixpaCard =
   "relative overflow-hidden rounded-[24px] border border-[#e2e8e4] bg-white px-10 py-10 shadow-[0_22px_58px_rgba(15,25,18,0.08)] max-[1180px]:px-8 max-[640px]:rounded-[20px] max-[640px]:px-6 max-[640px]:py-7";
const logoWrap = "mb-10 flex items-center max-[640px]:mb-7";
const logoImage = "h-auto w-full max-w-[405px] object-contain max-[640px]:max-w-[285px]";
const wixpaList = "flex flex-col gap-9 max-[640px]:gap-6";
const wixpaItem =
   "grid grid-cols-[32px_minmax(0,1fr)] items-start gap-5 text-[clamp(1rem,1.2vw,1.24rem)] font-semibold leading-[1.48] text-[#56616d] max-[640px]:grid-cols-[28px_minmax(0,1fr)] max-[640px]:gap-4";
const checkIcon =
   "mt-0.5 grid h-7 w-7 place-items-center rounded-full border-2 border-[#45b965] bg-white text-[#20a84a]";

const wixpaPoints = [
   "Shopify-focused technology company",
   "Growth-focused solutions for brands and teams",
   "Helping merchants and agencies scale with the right tools",
];

const teamSection =
   "border-b border-[#e8f0eb] bg-white px-4 py-12 font-[var(--inter-font)] sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const teamInner = "mx-auto max-w-[1320px]";
const teamEyebrow =
   "mb-6 block text-[0.78rem] font-black uppercase tracking-[0.13em] text-[#1fa34a] max-[640px]:mb-5";
const ceoCard =
   "relative grid min-h-[330px] overflow-visible rounded-[24px] border border-[#e2e9e4] bg-white shadow-[0_22px_58px_rgba(17,37,23,0.065)] lg:grid-cols-[minmax(340px,0.92fr)_minmax(0,1fr)] max-[760px]:overflow-hidden";
const ceoImageWrap =
   "relative min-h-[330px] overflow-visible max-[760px]:min-h-[390px] max-[520px]:min-h-[330px]";
const ceoPortrait =
   "absolute bottom-0 left-1/2 h-[430px] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_18px_34px_rgba(12,18,14,0.1)] lg:h-[445px] max-[760px]:h-[430px] max-[520px]:h-[360px]";
const ceoContent =
   "flex flex-col justify-center px-12 py-12 max-[900px]:px-8 max-[760px]:items-center max-[760px]:pt-8 max-[760px]:text-center max-[520px]:px-6 max-[520px]:pt-6 max-[520px]:pb-9";
const ceoTitle =
   "text-[clamp(2.35rem,4vw,4.4rem)] font-black leading-[1.04] tracking-[-0.055em] text-[#070b09] max-[640px]:text-[clamp(2.15rem,9vw,3rem)]";
const rolePill =
   "mt-5 inline-flex w-fit rounded-[12px] border border-[#bddfc8] bg-[#eef9f1] px-4 py-2 text-[1rem] font-black leading-none text-[#16793a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.65)]";
const ceoCopy =
   "mt-8 max-w-[610px] text-[clamp(1rem,1.22vw,1.28rem)] font-semibold leading-[1.62] text-[#5c6672] max-[640px]:mt-6";
const ceoLink =
   "group mt-5 inline-flex w-fit items-center gap-2 text-[1rem] font-black text-[#147637] underline decoration-[#147637]/45 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-[#0d8f3a]";
const memberGrid = "mt-8 grid gap-8 lg:grid-cols-2 max-[640px]:gap-5";
const memberCard =
   "rounded-[20px] border border-[#e3eae5] bg-white p-7 shadow-[0_18px_44px_rgba(17,37,23,0.055)] max-[640px]:p-6";
const memberHeader =
   "flex flex-wrap items-center gap-x-7 gap-y-3";
const memberName =
   "text-[clamp(1.7rem,2.4vw,2.4rem)] font-black leading-tight tracking-[-0.04em] text-[#070b09]";
const memberRole =
   "inline-flex rounded-[12px] border border-[#bddfc8] bg-[#edf8f1] px-3.5 py-2 text-[0.86rem] font-black leading-none text-[#226f3b]";
const memberCopy =
   "mt-7 max-w-[560px] text-[clamp(0.95rem,1.06vw,1.13rem)] font-semibold leading-[1.52] text-[#5c6672]";
const socialRow = "mt-9 flex items-center gap-5";
const socialLink =
   "grid h-11 w-11 place-items-center rounded-[12px] border border-[#e2e9e4] bg-white text-[#070b09] shadow-[0_8px_20px_rgba(17,37,23,0.045)] transition-colors duration-200 hover:border-[#afdcbc] hover:text-[#15933e]";

const teamMembers = [
   {
      name: "M Umair Malik",
      role: "Shopify Developer",
      text: "Building high-performance Shopify sections and delivering seamless developer experiences.",
   },
   {
      name: "Zeeshan Bashir",
      role: "Junior Developer",
      text: "Supporting development, testing, and building reliable components for merchants and developers.",
   },
];

const glanceSection =
   "border-b border-[#e8f0eb] bg-white px-4 py-12 font-[var(--inter-font)] sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const glanceInner = "mx-auto max-w-[1320px]";
const glanceEyebrow =
   "mb-5 block text-[0.9rem] font-black uppercase tracking-[0.12em] text-[#1fa34a] max-[640px]:mb-4";
const statsGrid =
   "grid grid-cols-4 gap-7 max-[1100px]:grid-cols-2 max-[640px]:gap-4";
const statCard =
   "flex min-h-[132px] items-center gap-8 rounded-[20px] border border-[#e1e9e4] bg-white px-8 py-6 shadow-[0_18px_48px_rgba(17,37,23,0.055)] max-[1180px]:gap-5 max-[640px]:min-h-[104px] max-[640px]:gap-3 max-[640px]:rounded-[17px] max-[640px]:px-3.5 max-[640px]:py-4";
const statIcon =
   "grid h-16 w-16 shrink-0 place-items-center text-[#16a244] max-[640px]:h-11 max-[640px]:w-11";
const statShopifyIcon =
   "h-16 w-16 shrink-0 object-contain drop-shadow-[0_7px_14px_rgba(42,165,61,0.14)] max-[640px]:h-11 max-[640px]:w-11";
const statStarIcon =
   "grid h-16 w-16 shrink-0 place-items-center text-[#ffc20f] drop-shadow-[0_8px_15px_rgba(255,194,15,0.18)] max-[640px]:h-11 max-[640px]:w-11";
const statValue =
   "block text-[clamp(2.3rem,3vw,3.4rem)] font-black leading-none tracking-[-0.055em] text-[#070b09] max-[640px]:text-[clamp(1.45rem,7vw,2rem)]";
const statLabel =
   "mt-2 block text-[1rem] font-semibold leading-tight text-[#59636c] max-[640px]:mt-1 max-[640px]:text-[0.74rem]";
const aboutCta =
   "relative mt-10 grid min-h-[236px] overflow-hidden rounded-[24px] border border-[#293330] bg-[#070d0a] px-6 py-8 shadow-[0_22px_54px_rgba(9,14,11,0.18)] sm:px-9 sm:py-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(430px,0.82fr)_190px] lg:items-center lg:gap-8 lg:px-10";
const aboutCtaGrain =
   "pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.56)_1px,transparent_0)] [background-size:18px_18px]";
const aboutCtaGreen =
   "pointer-events-none absolute inset-y-0 right-0 w-[56%] bg-[radial-gradient(circle_at_74%_50%,rgba(42,178,76,0.66),rgba(30,137,54,0.2)_38%,transparent_72%)] max-[760px]:w-full";
const aboutCtaContent = "relative z-10 max-w-[560px]";
const aboutCtaTitle =
   "text-[clamp(2.2rem,3.3vw,3.6rem)] font-black leading-[1.08] tracking-[-0.045em] text-white";
const aboutCtaText =
   "mt-5 max-w-[520px] text-[clamp(0.98rem,1.08vw,1.13rem)] font-semibold leading-[1.72] text-[rgba(255,255,255,0.82)]";
const aboutCtaActions =
   "relative z-10 mt-8 flex flex-col gap-5 max-[760px]:max-w-[520px] lg:mt-0";
const aboutCtaButtons = "grid gap-4 min-[520px]:grid-cols-2";
const aboutPrimary =
   "inline-flex h-[58px] items-center justify-center gap-3 rounded-[12px] bg-[#20a81f] px-7 text-[1.02rem] font-black text-white shadow-[0_14px_28px_rgba(34,167,31,0.24),inset_0_1px_0_rgba(255,255,255,0.22)] ring-1 ring-[#39c53b] transition-colors hover:bg-[#1b921a]";
const aboutSecondary =
   "inline-flex h-[58px] items-center justify-center gap-3 rounded-[12px] border-[1.5px] border-solid border-[rgba(255,255,255,0.36)] bg-[rgba(11,16,14,0.72)] px-7 text-[1.02rem] font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] ring-1 ring-[rgba(255,255,255,0.1)] transition-colors hover:border-[rgba(255,255,255,0.52)] hover:bg-[rgba(255,255,255,0.08)]";
const aboutMetaRow =
   "grid gap-4 text-[0.98rem] font-bold text-[rgba(255,255,255,0.86)] min-[520px]:grid-cols-2";
const aboutMetaItem = "inline-flex items-center gap-3";
const aboutMetaIcon =
   "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[rgba(255,255,255,0.1)] text-white ring-1 ring-[rgba(255,255,255,0.22)]";
const aboutCtaVisual =
   "pointer-events-none relative z-10 mt-10 flex min-h-[150px] items-center justify-center lg:mt-0";
const aboutLogoGlow =
   "absolute h-[190px] w-[190px] rounded-full bg-[#47c94d]/25 blur-[30px]";
const aboutLogo =
   "relative z-10 h-[142px] w-[142px] rotate-[-3deg] select-none object-contain drop-shadow-[0_20px_38px_rgba(0,0,0,0.45)] sm:h-[166px] sm:w-[166px]";

const glanceStats = [
   { value: "1000+", label: "Clients globally", Icon: UsersRound },
   { value: "15+", label: "Countries served", Icon: Globe2 },
   { value: "3", label: "Shopify apps", image: shopifyLogo },
   { value: "4.9", label: "Rating", Icon: Star, star: true },
];

const AboutPage = () => {
   return (
      <div className={pageShell}>
         <Header />
         <main>
            <section className={hero} aria-labelledby="about-page-title">
               <div className={heroPattern} aria-hidden="true" />
               <div className={heroGlow} aria-hidden="true" />
               <div className={heroInner}>
                  <h1 id="about-page-title" className={title}>
                     About Us
                  </h1>
                  <p className={description}>
                     We're a team of Shopify experts and builders on a mission to
                     help merchants, developers, and agencies build better stores
                     &mdash; faster.
                  </p>
               </div>
            </section>

            <section className={missionSection} aria-labelledby="about-mission-title">
               <div className={missionInner}>
                  <div className={missionContent}>
                     <span className={missionEyebrow}>Our Mission</span>
                     <h2 id="about-mission-title" className={missionTitle}>
                        Helping you
                        <br />
                        build better,{" "}
                        <span className={missionAccent}>faster.</span>
                     </h2>

                     <p className={missionText}>
                        Shopify Component Library gives you production-ready
                        sections and components that are clean, flexible, and
                        performance-optimized.
                     </p>
                     <p className={missionTextSecond}>
                        Whether you're a merchant, developer, freelancer, or
                        agency, we built this library to help you save time,
                        reduce effort, and launch premium Shopify stores with
                        confidence.
                     </p>
                  </div>

                  <aside className={wixpaCard} aria-label="Wixpa company highlights">
                     <div className={logoWrap}>
                        <img
                           className={logoImage}
                           src={wixpaLogo}
                           alt="Wixpa"
                           loading="lazy"
                           decoding="async"
                        />
                     </div>

                     <div className={wixpaList}>
                        {wixpaPoints.map((point) => (
                           <div className={wixpaItem} key={point}>
                              <span className={checkIcon} aria-hidden="true">
                                 <CheckCircle2 size={17} strokeWidth={2.8} />
                              </span>
                              <span>{point}</span>
                           </div>
                        ))}
                     </div>
                  </aside>
               </div>
            </section>

            <section className={teamSection} aria-labelledby="about-team-title">
               <div className={teamInner}>
                  <span className={teamEyebrow}>Meet The Team</span>

                  <article className={ceoCard}>
                     <div className={ceoImageWrap}>
                        <img
                           className={ceoPortrait}
                           src={ceoImage}
                           alt="Zeeshan Haider, CEO of Wixpa Pvt Ltd"
                           loading="lazy"
                           decoding="async"
                        />
                     </div>

                     <div className={ceoContent}>
                        <h2 id="about-team-title" className={ceoTitle}>
                           Zeeshan Haider
                        </h2>
                        <span className={rolePill}>CEO, Wixpa Pvt Ltd</span>
                        <p className={ceoCopy}>
                           Leading product strategy, partnerships, and growth at
                           Wixpa. Focused on building tools that empower Shopify
                           builders and help brands grow online.
                        </p>
                        <a
                           className={ceoLink}
                           href="https://wixpa.com"
                           target="_blank"
                           rel="noreferrer"
                        >
                           wixpa.com{" "}
                           <ArrowRight
                              className="transition-transform duration-200 group-hover:translate-x-1"
                              size={16}
                           />
                        </a>
                     </div>
                  </article>

                  <div className={memberGrid}>
                     {teamMembers.map((member) => (
                        <article className={memberCard} key={member.name}>
                           <div className={memberHeader}>
                              <h3 className={memberName}>{member.name}</h3>
                              <span className={memberRole}>{member.role}</span>
                           </div>

                           <p className={memberCopy}>{member.text}</p>

                           <div className={socialRow} aria-label={`${member.name} social links`}>
                              <a
                                 className={socialLink}
                                 href="https://www.linkedin.com/"
                                 aria-label={`${member.name} on LinkedIn`}
                              >
                                 <FaLinkedinIn size={22} />
                              </a>
                              <a
                                 className={socialLink}
                                 href="https://github.com/"
                                 aria-label={`${member.name} on GitHub`}
                              >
                                 <FaGithub size={23} />
                              </a>
                           </div>
                        </article>
                     ))}
                  </div>
               </div>
            </section>

            <section className={glanceSection} aria-labelledby="company-glance-title">
               <div className={glanceInner}>
                  <span id="company-glance-title" className={glanceEyebrow}>
                     Company At A Glance
                  </span>

                  <div className={statsGrid}>
                     {glanceStats.map(({ value, label, Icon, image, star }) => (
                        <article className={statCard} key={label}>
                           {image ? (
                              <img
                                 className={statShopifyIcon}
                                 src={image}
                                 alt=""
                                 loading="lazy"
                                 decoding="async"
                              />
                           ) : (
                              <span
                                 className={star ? statStarIcon : statIcon}
                                 aria-hidden="true"
                              >
                                 {createElement(Icon, {
                                    size: star ? 58 : 52,
                                    strokeWidth: star ? 0 : 2.1,
                                    fill: star ? "currentColor" : "none",
                                 })}
                              </span>
                           )}
                           <span>
                              <span className={statValue}>{value}</span>
                              <span className={statLabel}>{label}</span>
                           </span>
                        </article>
                     ))}
                  </div>

                  <div className={aboutCta}>
                     <div className={aboutCtaGrain} aria-hidden="true" />
                     <div className={aboutCtaGreen} aria-hidden="true" />

                     <div className={aboutCtaContent}>
                        <h2 className={aboutCtaTitle}>
                           Build Shopify stores in hours, not weeks.
                        </h2>
                        <p className={aboutCtaText}>
                           Join 10,000+ builders and brands creating stunning,
                           high-performing stores with ease.
                        </p>
                     </div>

                     <div className={aboutCtaActions}>
                        <div className={aboutCtaButtons}>
                           <Link className={aboutPrimary} to="/components">
                              Start Free <ArrowRight size={18} />
                           </Link>
                           <Link className={aboutSecondary} to="/components">
                              Components <ArrowRight size={18} />
                           </Link>
                        </div>

                        <div className={aboutMetaRow}>
                           <span className={aboutMetaItem}>
                              <span className={aboutMetaIcon} aria-hidden="true">
                                 <CreditCard size={15} />
                              </span>
                              No credit card required
                           </span>
                           <span className={aboutMetaItem}>
                              <span className={aboutMetaIcon} aria-hidden="true">
                                 <ShieldCheck size={15} />
                              </span>
                              Cancel anytime
                           </span>
                        </div>
                     </div>

                     <div className={aboutCtaVisual} aria-hidden="true">
                        <div className={aboutLogoGlow} />
                        <img
                           className={aboutLogo}
                           src={shopifyLogo}
                           alt=""
                           draggable="false"
                        />
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
};

export default AboutPage;
