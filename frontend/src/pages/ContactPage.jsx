import { createElement } from "react";
import {
   ArrowRight,
   ChevronRight,
   Clock3,
   CreditCard,
   Headphones,
   LockKeyhole,
   Mail,
   MapPin,
   Send,
   ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import wixpaLogo from "../../../temp-assets/wixpa-logo.png";
import shopifyLogo from "../../../temp-assets/shopify-logo.png";

const pageShell = "min-h-screen bg-white";
const hero =
   "relative isolate overflow-hidden border-b border-[#e8f0eb] bg-[#f4fbf5] px-4 py-14 font-[var(--inter-font)] sm:px-7 sm:py-16 lg:px-10 lg:py-20";
const heroPattern =
   "absolute inset-0 -z-10 opacity-75 [background-image:radial-gradient(rgba(26,89,47,0.16)_1px,transparent_1px)] [background-size:24px_24px]";
const heroGlow =
   "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.92)_0%,rgba(244,251,245,0.76)_46%,rgba(238,249,241,0.92)_100%)]";
const heroInner =
   "mx-auto flex min-h-[170px] max-w-[980px] flex-col items-center justify-center text-center";
const heroTitle =
   "text-[clamp(3rem,6.2vw,5rem)] font-black leading-[0.98] tracking-[-0.055em] text-[#090d0b]";
const heroDescription =
   "mt-6 max-w-[800px] text-[clamp(1rem,1.25vw,1.3rem)] font-semibold leading-[1.6] tracking-[-0.015em] text-[#59636c] max-[640px]:mt-5";
const contactSection =
   "border-b border-[#e8f0eb] bg-white px-4 py-12 font-[var(--inter-font)] sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const contactInner =
   "mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[minmax(360px,0.78fr)_minmax(520px,1fr)] lg:gap-12";
const contactCards = "grid gap-6";
const contactCard =
   "group grid min-h-[142px] grid-cols-[92px_minmax(0,1fr)_24px] items-center gap-6 rounded-[18px] border border-[#e1e9e4] bg-white px-8 py-6 shadow-[0_16px_44px_rgba(17,37,23,0.055)] transition-colors duration-200 hover:border-[#bde0c7] max-[640px]:grid-cols-[68px_minmax(0,1fr)_20px] max-[640px]:gap-4 max-[640px]:px-5";
const contactIcon =
   "grid h-[76px] w-[76px] place-items-center rounded-[18px] bg-[#edf9f0] text-[#169b43] max-[640px]:h-[58px] max-[640px]:w-[58px] max-[640px]:rounded-[15px]";
const contactCardTitle =
   "text-[clamp(1.28rem,1.6vw,1.75rem)] font-black tracking-[-0.035em] text-[#070b09]";
const contactCardText =
   "mt-3 text-[0.96rem] font-semibold leading-[1.55] text-[#56616d] max-[640px]:text-[0.88rem]";
const contactCardStrong =
   "mt-3 block text-[1.02rem] font-black leading-[1.55] text-[#18a247] max-[640px]:text-[0.9rem]";
const contactArrow = "text-[#18a247] transition-transform duration-200 group-hover:translate-x-1";
const formCard =
   "rounded-[20px] border border-[#e1e9e4] bg-white p-8 shadow-[0_18px_48px_rgba(17,37,23,0.06)] sm:p-10 max-[640px]:p-6";
const formTitle =
   "text-[clamp(1.9rem,2.6vw,3rem)] font-black leading-tight tracking-[-0.045em] text-[#070b09]";
const formSubtitle =
   "mt-3 text-[1rem] font-semibold text-[#606a65]";
const form =
   "mt-9 grid gap-7";
const formRow = "grid gap-7 sm:grid-cols-2";
const fieldWrap = "grid gap-3";
const label = "text-[0.95rem] font-black text-[#17201a]";
const input =
   "h-[58px] w-full rounded-[12px] border border-[#e0e7e3] bg-white px-5 text-[0.98rem] font-semibold text-[#17201a] outline-none transition placeholder:text-[#8a9490] focus:border-[#75cc8d] focus:ring-4 focus:ring-[#32b95b]/10";
const textarea =
   "min-h-[164px] w-full resize-y rounded-[12px] border border-[#e0e7e3] bg-white px-5 py-4 text-[0.98rem] font-semibold text-[#17201a] outline-none transition placeholder:text-[#8a9490] focus:border-[#75cc8d] focus:ring-4 focus:ring-[#32b95b]/10";
const submit =
   "inline-flex h-[60px] w-full items-center justify-center gap-4 rounded-[12px] bg-[#079b24] px-7 text-[1.08rem] font-black text-white shadow-[0_14px_28px_rgba(7,155,36,0.22)] transition-colors hover:bg-[#07891f]";
const safeNote =
   "mt-5 flex items-center justify-center gap-2 text-center text-[0.92rem] font-bold text-[#58655e]";
const companySection =
   "border-b border-[#e8f0eb] bg-white px-4 py-12 font-[var(--inter-font)] sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const companyInner = "mx-auto max-w-[1320px]";
const companyCard =
   "grid items-center gap-8 rounded-[20px] border border-[#e1e9e4] bg-white px-8 py-8 shadow-[0_16px_44px_rgba(17,37,23,0.055)] lg:grid-cols-[260px_minmax(0,1fr)] lg:px-10 max-[640px]:px-6";
const companyLogoWrap =
   "flex items-center justify-center border-[#e2e9e4] lg:border-r lg:pr-10 max-[1024px]:justify-start";
const companyLogo =
   "h-auto w-full max-w-[250px] object-contain max-[640px]:max-w-[210px]";
const companyCopy =
   "max-w-[760px] text-[clamp(1rem,1.14vw,1.18rem)] font-semibold leading-[1.7] text-[#56616d]";
const companyStrong =
   "font-black text-[#202823]";
const contactCta =
   "relative mt-10 grid min-h-[236px] overflow-hidden rounded-[24px] border border-[#293330] bg-[#070d0a] px-6 py-8 shadow-[0_22px_54px_rgba(9,14,11,0.18)] sm:px-9 sm:py-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(430px,0.82fr)_190px] lg:items-center lg:gap-8 lg:px-10";
const contactCtaGrain =
   "pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.56)_1px,transparent_0)] [background-size:18px_18px]";
const contactCtaGreen =
   "pointer-events-none absolute inset-y-0 right-0 w-[56%] bg-[radial-gradient(circle_at_74%_50%,rgba(42,178,76,0.66),rgba(30,137,54,0.2)_38%,transparent_72%)] max-[760px]:w-full";
const contactCtaContent = "relative z-10 max-w-[560px]";
const contactCtaTitle =
   "text-[clamp(2.2rem,3.3vw,3.6rem)] font-black leading-[1.08] tracking-[-0.045em] text-white";
const contactCtaText =
   "mt-5 max-w-[520px] text-[clamp(0.98rem,1.08vw,1.13rem)] font-semibold leading-[1.72] text-[rgba(255,255,255,0.82)]";
const contactCtaActions =
   "relative z-10 mt-8 flex flex-col gap-5 max-[760px]:max-w-[520px] lg:mt-0";
const contactCtaButtons = "grid gap-4 min-[520px]:grid-cols-2";
const contactPrimary =
   "inline-flex h-[58px] items-center justify-center gap-3 rounded-[12px] bg-[#20a81f] px-7 text-[1.02rem] font-black text-white shadow-[0_14px_28px_rgba(34,167,31,0.24),inset_0_1px_0_rgba(255,255,255,0.22)] ring-1 ring-[#39c53b] transition-colors hover:bg-[#1b921a]";
const contactSecondary =
   "inline-flex h-[58px] items-center justify-center gap-3 rounded-[12px] border-[1.5px] border-solid border-[rgba(255,255,255,0.36)] bg-[rgba(11,16,14,0.72)] px-7 text-[1.02rem] font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] ring-1 ring-[rgba(255,255,255,0.1)] transition-colors hover:border-[rgba(255,255,255,0.52)] hover:bg-[rgba(255,255,255,0.08)]";
const contactMetaRow =
   "grid gap-4 text-[0.98rem] font-bold text-[rgba(255,255,255,0.86)] min-[520px]:grid-cols-2";
const contactMetaItem = "inline-flex items-center gap-3";
const contactMetaIcon =
   "grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[rgba(255,255,255,0.1)] text-white ring-1 ring-[rgba(255,255,255,0.22)]";
const contactCtaVisual =
   "pointer-events-none relative z-10 mt-10 flex min-h-[150px] items-center justify-center lg:mt-0";
const contactLogoGlow =
   "absolute h-[190px] w-[190px] rounded-full bg-[#47c94d]/25 blur-[30px]";
const contactLogo =
   "relative z-10 h-[142px] w-[142px] rotate-[-3deg] select-none object-contain drop-shadow-[0_20px_38px_rgba(0,0,0,0.45)] sm:h-[166px] sm:w-[166px]";

const contactMethods = [
   {
      title: "Email Us",
      text: "Drop us a message anytime.",
      strong: "support@wixpa.com",
      Icon: Mail,
   },
   {
      title: "Office Location",
      text: "Visit our office or send us a letter.",
      strong: "Wixpa Pvt Ltd, Sargodha Road, Sargodha, Punjab 40100, Pakistan",
      Icon: MapPin,
   },
   {
      title: "Business Hours",
      text: "We're here during business days.",
      strong: "Mon - Fri: 9:00 AM - 6:00 PM PKT\nSaturday - Sunday: Closed",
      Icon: Clock3,
   },
   {
      title: "Support",
      text: "Need help with the product?",
      strong: "Our team usually responds within 24 hours on business days.",
      Icon: Headphones,
   },
];

const ContactPage = () => {
   return (
      <div className={pageShell}>
         <Header />
         <main>
            <section className={hero} aria-labelledby="contact-page-title">
               <div className={heroPattern} aria-hidden="true" />
               <div className={heroGlow} aria-hidden="true" />
               <div className={heroInner}>
                  <h1 id="contact-page-title" className={heroTitle}>
                     Contact Us
                  </h1>
                  <p className={heroDescription}>
                     Need help choosing components, templates, or workflows?
                     Reach out and we'll help you build better Shopify stores
                     faster.
                  </p>
               </div>
            </section>

            <section className={contactSection} aria-label="Contact information and form">
               <div className={contactInner}>
                  <div className={contactCards}>
                     {contactMethods.map(({ title, text, strong, Icon }) => (
                        <article className={contactCard} key={title}>
                           <span className={contactIcon} aria-hidden="true">
                              {createElement(Icon, {
                                 size: 34,
                                 strokeWidth: 2.15,
                              })}
                           </span>
                           <span>
                              <h2 className={contactCardTitle}>{title}</h2>
                              <span className={contactCardText}>{text}</span>
                              <span className={contactCardStrong}>
                                 {strong.split("\n").map((line) => (
                                    <span className="block" key={line}>
                                       {line}
                                    </span>
                                 ))}
                              </span>
                           </span>
                           <ChevronRight className={contactArrow} size={26} />
                        </article>
                     ))}
                  </div>

                  <div>
                     <div className={formCard}>
                        <h2 className={formTitle}>Send us a message</h2>
                        <p className={formSubtitle}>
                           Fill out the form and we'll get back to you.
                        </p>

                        <form className={form} onSubmit={(event) => event.preventDefault()}>
                           <div className={formRow}>
                              <label className={fieldWrap}>
                                 <span className={label}>Full Name</span>
                                 <input
                                    className={input}
                                    type="text"
                                    placeholder="Your full name"
                                 />
                              </label>
                              <label className={fieldWrap}>
                                 <span className={label}>Work Email</span>
                                 <input
                                    className={input}
                                    type="email"
                                    placeholder="you@company.com"
                                 />
                              </label>
                           </div>

                           <label className={fieldWrap}>
                              <span className={label}>Company</span>
                              <input
                                 className={input}
                                 type="text"
                                 placeholder="Your company name"
                              />
                           </label>

                           <label className={fieldWrap}>
                              <span className={label}>Subject</span>
                              <input
                                 className={input}
                                 type="text"
                                 placeholder="How can we help you?"
                              />
                           </label>

                           <label className={fieldWrap}>
                              <span className={label}>Message</span>
                              <textarea
                                 className={textarea}
                                 placeholder="Tell us more about your inquiry..."
                              />
                           </label>

                           <button className={submit} type="submit">
                              <Send size={21} />
                              Send Message
                           </button>
                        </form>
                     </div>

                     <p className={safeNote}>
                        <LockKeyhole size={17} color="#557161" />
                        Your information is safe with us. We'll never share your
                        details.
                     </p>
                  </div>
               </div>
            </section>

            <section className={companySection} aria-label="Wixpa company details">
               <div className={companyInner}>
                  <div className={companyCard}>
                     <div className={companyLogoWrap}>
                        <img
                           className={companyLogo}
                           src={wixpaLogo}
                           alt="Wixpa"
                           loading="lazy"
                           decoding="async"
                        />
                     </div>

                     <p className={companyCopy}>
                        <span className={companyStrong}>Wixpa Pvt Ltd</span> is
                        the company behind Shopify Component Library.
                        <br />
                        We build developer-friendly tools that help merchants,
                        developers, and agencies build better stores &mdash; faster.
                     </p>
                  </div>

                  <div className={contactCta}>
                     <div className={contactCtaGrain} aria-hidden="true" />
                     <div className={contactCtaGreen} aria-hidden="true" />

                     <div className={contactCtaContent}>
                        <h2 className={contactCtaTitle}>
                           Build Shopify stores in hours, not weeks.
                        </h2>
                        <p className={contactCtaText}>
                           Join 10,000+ builders and brands creating stunning,
                           high-performing stores with ease.
                        </p>
                     </div>

                     <div className={contactCtaActions}>
                        <div className={contactCtaButtons}>
                           <Link className={contactPrimary} to="/components">
                              Start Free <ArrowRight size={18} />
                           </Link>
                           <Link className={contactSecondary} to="/components">
                              Components <ArrowRight size={18} />
                           </Link>
                        </div>

                        <div className={contactMetaRow}>
                           <span className={contactMetaItem}>
                              <span className={contactMetaIcon} aria-hidden="true">
                                 <CreditCard size={15} />
                              </span>
                              No credit card required
                           </span>
                           <span className={contactMetaItem}>
                              <span className={contactMetaIcon} aria-hidden="true">
                                 <ShieldCheck size={15} />
                              </span>
                              Cancel anytime
                           </span>
                        </div>
                     </div>

                     <div className={contactCtaVisual} aria-hidden="true">
                        <div className={contactLogoGlow} />
                        <img
                           className={contactLogo}
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

export default ContactPage;
