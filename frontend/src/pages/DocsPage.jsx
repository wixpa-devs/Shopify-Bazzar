import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
   ArrowRight,
   BookOpen,
   CheckCircle2,
   Code2,
   Copy,
   FileCode2,
   Rocket,
   ShieldCheck,
   Sparkles,
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const docsSections = [
   { id: "introduction", label: "Introduction" },
   { id: "why-this-library", label: "Why This Library" },
   { id: "benefits", label: "Benefits" },
   { id: "how-to-use", label: "How To Use" },
   { id: "editor-workflow", label: "Editor Workflow" },
   { id: "shopify-setup", label: "Shopify Setup" },
   { id: "best-practices", label: "Best Practices" },
   { id: "pricing-roadmap", label: "Free Today" },
];

const workflowRows = [
   ["1", "Browse components", "Explore headers, hero sections, product cards, footers, banners, FAQs, trust badges, and more."],
   ["2", "Open in editor", "Preview the component, adjust content, colors, spacing, labels, and layout settings visually."],
   ["3", "Copy clean code", "Copy production-ready Liquid, HTML, CSS, and JavaScript without extra app bloat."],
   ["4", "Paste into Shopify", "Add the section to your theme, test it, then launch a polished storefront experience."],
];

const comparisonRows = [
   ["Speed", "Start from ready-made premium sections instead of blank files."],
   ["Consistency", "Use a branded design language across pages, templates, and client builds."],
   ["Performance", "Keep sections lightweight, reusable, and friendly for Core Web Vitals."],
   ["Flexibility", "Customize visually, export code, and keep full ownership in your Shopify theme."],
];

const pageShell = "min-h-screen bg-white font-[var(--inter-font)]";
const hero =
   "relative isolate overflow-hidden border-b border-[#e8f0eb] bg-[#f4fbf5] px-4 py-14 sm:px-7 sm:py-16 lg:px-10 lg:py-20";
const heroPattern =
   "absolute inset-0 -z-10 opacity-75 [background-image:radial-gradient(rgba(26,89,47,0.16)_1px,transparent_1px)] [background-size:24px_24px]";
const heroGlow =
   "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.94)_0%,rgba(244,251,245,0.76)_48%,rgba(238,249,241,0.94)_100%)]";
const heroInner = "mx-auto max-w-[1050px] text-center";
const heroPill =
   "mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#bee5c7] bg-white px-4 py-2 text-[0.78rem] font-black uppercase tracking-[0.1em] text-[#159447] shadow-[0_10px_24px_rgba(17,24,39,0.045)]";
const heroTitle =
   "text-[clamp(3rem,6.2vw,5rem)] font-black leading-[0.98] tracking-[-0.058em] text-[#090d0b]";
const heroText =
   "mx-auto mt-6 max-w-[820px] text-[clamp(1rem,1.25vw,1.3rem)] font-semibold leading-[1.62] tracking-[-0.015em] text-[#59636c]";
const heroCards =
   "mx-auto mt-9 grid max-w-[880px] gap-4 sm:grid-cols-3";
const heroCard =
   "rounded-[18px] border border-[#dfece3] bg-white px-5 py-4 text-left shadow-[0_14px_32px_rgba(17,24,39,0.055)]";
const heroCardIcon = "mb-3 text-[#159447]";
const heroCardTitle = "text-[0.9rem] font-black text-[#132018]";
const heroCardText = "mt-1 text-[0.76rem] font-semibold leading-[1.45] text-[#68736b]";
const docsWrap = "px-4 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const docsGrid =
   "mx-auto grid max-w-[1320px] items-start gap-9 lg:grid-cols-[minmax(0,1fr)_310px]";
const docsContent =
   "min-w-0 rounded-[20px] border border-[#e1e9e4] bg-white p-6 shadow-[0_18px_44px_rgba(17,24,39,0.055)] sm:p-8 lg:p-10";
const tocPanel =
   "sticky top-[112px] rounded-[18px] border border-[#e1e9e4] bg-white p-5 shadow-[0_16px_34px_rgba(17,24,39,0.065)] max-[1023px]:static";
const tocTitle = "mb-4 flex items-center gap-2 text-[0.9rem] font-black text-[#132018]";
const tocList = "space-y-1.5";
const tocLink =
   "block rounded-[12px] px-3 py-2 text-[0.8rem] font-extrabold text-[#5d6861] transition-colors hover:bg-[#eefaf1] hover:text-[#138b3b]";
const docSection =
   "scroll-mt-[130px] border-b border-[#edf2ef] pb-10 pt-10 first:pt-0 last:border-b-0 last:pb-0";
const eyebrow =
   "mb-3 inline-flex items-center gap-2 text-[0.72rem] font-black uppercase tracking-[0.12em] text-[#159447]";
const h2 =
   "text-[clamp(1.85rem,2.8vw,3rem)] font-black leading-[1.08] tracking-[-0.048em] text-[#07100a]";
const h3 =
   "mt-8 text-[1.08rem] font-black tracking-[-0.02em] text-[#17201a]";
const paragraph =
   "mt-4 text-[0.98rem] font-semibold leading-[1.78] text-[#59636c]";
const lead =
   "mt-5 text-[1.06rem] font-semibold leading-[1.78] text-[#59636c]";
const greenLink =
   "font-black text-[#138b3b] underline decoration-[#bde7c5] underline-offset-4";
const bulletList = "mt-5 space-y-3";
const bulletItem = "flex gap-3 text-[0.96rem] font-semibold leading-[1.65] text-[#59636c]";
const bulletIcon = "mt-[5px] shrink-0 text-[#159447]";
const numberedList = "mt-5 grid gap-4";
const numberedItem =
   "grid gap-4 rounded-[16px] border border-[#e2ebe5] bg-[#fbfdfb] p-5 sm:grid-cols-[44px_minmax(0,1fr)]";
const numberBadge =
   "grid h-11 w-11 place-items-center rounded-[12px] bg-[#16a34a] text-[0.9rem] font-black text-white shadow-[0_12px_24px_rgba(22,163,74,0.18)]";
const tableWrap =
   "mt-6 overflow-hidden rounded-[16px] border border-[#e1e9e4] bg-white";
const table =
   "w-full border-collapse text-left text-[0.88rem] font-semibold text-[#59636c]";
const th =
   "border-b border-[#e1e9e4] bg-[#f4fbf5] px-5 py-4 text-[0.78rem] font-black uppercase tracking-[0.08em] text-[#17201a]";
const td = "border-b border-[#edf2ef] px-5 py-4 align-top last:border-b-0";
const callout =
   "mt-7 rounded-[18px] border border-[#bfe8c8] bg-[#effaf2] p-6 shadow-[0_14px_32px_rgba(22,101,52,0.06)]";
const calloutTitle = "flex items-center gap-2 text-[1rem] font-black text-[#0f6f2f]";
const calloutText = "mt-3 text-[0.94rem] font-semibold leading-[1.7] text-[#59636c]";

const DocsPage = () => {
   const location = useLocation();

   useEffect(() => {
      document.title = "Shopify Component Library Docs | Build Better Shopify Stores";

      const descriptionContent =
         "Read the Shopify Component Library docs and learn how to browse, customize, copy, and launch premium Shopify sections faster.";
      let metaDescription = document.querySelector('meta[name="description"]');

      if (!metaDescription) {
         metaDescription = document.createElement("meta");
         metaDescription.setAttribute("name", "description");
         document.head.appendChild(metaDescription);
      }

      metaDescription.setAttribute("content", descriptionContent);
   }, []);

   useEffect(() => {
      if (!location.hash) return;

      window.setTimeout(() => {
         const target = document.getElementById(location.hash.slice(1));
         target?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
   }, [location.hash]);

   return (
      <div className={pageShell}>
         <Header />
         <main>
            <section className={hero} aria-labelledby="docs-page-title">
               <div className={heroPattern} aria-hidden="true" />
               <div className={heroGlow} aria-hidden="true" />
               <div className={heroInner}>
                  <span className={heroPill}>
                     <BookOpen size={15} strokeWidth={2.4} />
                     Documentation
                  </span>
                  <h1 id="docs-page-title" className={heroTitle}>
                     Shopify Component Library Docs
                  </h1>
                  <p className={heroText}>
                     Learn how to browse, customize, copy, and launch premium
                     Shopify sections faster with a clean component workflow built
                     for modern ecommerce teams.
                  </p>

                  <div className={heroCards}>
                     <div className={heroCard}>
                        <Rocket className={heroCardIcon} size={24} strokeWidth={2} />
                        <h2 className={heroCardTitle}>Launch Faster</h2>
                        <p className={heroCardText}>
                           Skip repetitive section setup and start from proven UI.
                        </p>
                     </div>
                     <div className={heroCard}>
                        <Copy className={heroCardIcon} size={24} strokeWidth={2} />
                        <h2 className={heroCardTitle}>Copy Clean Code</h2>
                        <p className={heroCardText}>
                           Export lightweight code and keep control inside Shopify.
                        </p>
                     </div>
                     <div className={heroCard}>
                        <Sparkles className={heroCardIcon} size={24} strokeWidth={2} />
                        <h2 className={heroCardTitle}>Free Today</h2>
                        <p className={heroCardText}>
                           Use the library now while early access remains free.
                        </p>
                     </div>
                  </div>
               </div>
            </section>

            <section className={docsWrap} aria-label="Library documentation">
               <div className={docsGrid}>
                  <article className={docsContent}>
                     <section id="introduction" className={docSection}>
                        <span className={eyebrow}>
                           <BookOpen size={15} /> Start Here
                        </span>
                        <h2 className={h2}>Introduction</h2>
                        <p className={lead}>
                           Shopify Component Library is a premium collection of
                           production-ready Shopify sections, storefront components,
                           and page-building patterns made for merchants, developers,
                           designers, freelancers, and agencies that want better
                           stores without rebuilding the same UI from scratch.
                        </p>
                        <p className={paragraph}>
                           The library helps you preview components visually, adjust
                           key settings, copy clean code, and paste it into Shopify
                           themes. It is built for speed, clarity, and practical store
                           work: no confusing setup, no bloated app dependency, and no
                           generic template feeling.
                        </p>
                     </section>

                     <section id="why-this-library" className={docSection}>
                        <span className={eyebrow}>
                           <ShieldCheck size={15} /> Why It Exists
                        </span>
                        <h2 className={h2}>Why This Library</h2>
                        <p className={paragraph}>
                           Most Shopify builds slow down because teams repeat the same
                           work: announcement bars, headers, hero sections, product
                           cards, FAQs, trust badges, footers, and conversion-focused
                           layout blocks. This library gives you a stronger starting
                           point so you can spend more time on brand strategy,
                           merchandising, and launch quality.
                        </p>
                        <ul className={bulletList}>
                           <li className={bulletItem}>
                              <CheckCircle2 className={bulletIcon} size={18} />
                              Build premium Shopify pages with reusable, polished UI
                              sections instead of empty files.
                           </li>
                           <li className={bulletItem}>
                              <CheckCircle2 className={bulletIcon} size={18} />
                              Keep the workflow developer-friendly by copying code into
                              your own theme.
                           </li>
                           <li className={bulletItem}>
                              <CheckCircle2 className={bulletIcon} size={18} />
                              Create consistent ecommerce experiences for clients,
                              brands, and internal teams.
                           </li>
                        </ul>
                     </section>

                     <section id="benefits" className={docSection}>
                        <span className={eyebrow}>
                           <Sparkles size={15} /> Built For Growth
                        </span>
                        <h2 className={h2}>Benefits For Shopify Builders</h2>
                        <p className={paragraph}>
                           The goal is simple: help you launch better Shopify stores
                           faster while keeping the final result clean, professional,
                           and easy to maintain.
                        </p>
                        <div className={tableWrap}>
                           <table className={table}>
                              <thead>
                                 <tr>
                                    <th className={th}>Benefit</th>
                                    <th className={th}>What It Means</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 {comparisonRows.map(([label, value]) => (
                                    <tr key={label}>
                                       <td className={td}>
                                          <strong className="text-[#17201a]">{label}</strong>
                                       </td>
                                       <td className={td}>{value}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     </section>

                     <section id="how-to-use" className={docSection}>
                        <span className={eyebrow}>
                           <Rocket size={15} /> Quick Workflow
                        </span>
                        <h2 className={h2}>How To Use The Library</h2>
                        <p className={paragraph}>
                           You can move from idea to working Shopify section in a few
                           focused steps. The library is designed to feel visual enough
                           for designers and practical enough for developers.
                        </p>
                        <div className={numberedList}>
                           {workflowRows.map(([number, title, text]) => (
                              <div className={numberedItem} key={number}>
                                 <span className={numberBadge}>{number}</span>
                                 <div>
                                    <h3 className="text-[1rem] font-black text-[#17201a]">
                                       {title}
                                    </h3>
                                    <p className="mt-2 text-[0.9rem] font-semibold leading-[1.65] text-[#59636c]">
                                       {text}
                                    </p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </section>

                     <section id="editor-workflow" className={docSection}>
                        <span className={eyebrow}>
                           <Code2 size={15} /> Visual Editing
                        </span>
                        <h2 className={h2}>Editor Workflow</h2>
                        <p className={paragraph}>
                           Each supported component can open in the visual editor. Use
                           it to preview layout behavior, adjust reusable settings, and
                           copy the output when the section feels ready.
                        </p>
                        <h3 className={h3}>What You Can Customize</h3>
                        <ul className={bulletList}>
                           <li className={bulletItem}>
                              <CheckCircle2 className={bulletIcon} size={18} />
                              Text, labels, content blocks, call-to-action wording, and
                              links.
                           </li>
                           <li className={bulletItem}>
                              <CheckCircle2 className={bulletIcon} size={18} />
                              Colors, spacing, section density, responsive behavior, and
                              brand-friendly visual details.
                           </li>
                           <li className={bulletItem}>
                              <CheckCircle2 className={bulletIcon} size={18} />
                              Code output that can be copied into your Shopify theme
                              without forcing a permanent third-party dependency.
                           </li>
                        </ul>
                     </section>

                     <section id="shopify-setup" className={docSection}>
                        <span className={eyebrow}>
                           <FileCode2 size={15} /> Theme Setup
                        </span>
                        <h2 className={h2}>Shopify Setup</h2>
                        <p className={paragraph}>
                           After copying a component, add it to the right place in your
                           Shopify theme. For most section-based components, you will
                           create a new section file, paste the generated code, save it,
                           and then add it from the Shopify theme editor.
                        </p>
                        <h3 className={h3}>Recommended Setup Checklist</h3>
                        <ul className={bulletList}>
                           <li className={bulletItem}>
                              <CheckCircle2 className={bulletIcon} size={18} />
                              Create a duplicate of your theme before pasting new code.
                           </li>
                           <li className={bulletItem}>
                              <CheckCircle2 className={bulletIcon} size={18} />
                              Test desktop, tablet, and mobile previews before publishing.
                           </li>
                           <li className={bulletItem}>
                              <CheckCircle2 className={bulletIcon} size={18} />
                              Keep image assets optimized and use Shopify image settings
                              where possible.
                           </li>
                        </ul>
                     </section>

                     <section id="best-practices" className={docSection}>
                        <span className={eyebrow}>
                           <ShieldCheck size={15} /> Better Store Builds
                        </span>
                        <h2 className={h2}>Best Practices</h2>
                        <p className={paragraph}>
                           Premium components work best when they support a clear store
                           goal. Choose sections that help customers understand the
                           product, trust the brand, compare options, and take action.
                        </p>
                        <div className={tableWrap}>
                           <table className={table}>
                              <thead>
                                 <tr>
                                    <th className={th}>Practice</th>
                                    <th className={th}>Why It Matters</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td className={td}>Use fewer, stronger sections</td>
                                    <td className={td}>
                                       A focused page usually converts better than a long,
                                       cluttered page.
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className={td}>Keep messaging specific</td>
                                    <td className={td}>
                                       Clear benefits, proof, and CTAs help shoppers make
                                       decisions faster.
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className={td}>Test before publishing</td>
                                    <td className={td}>
                                       Review spacing, images, mobile layout, and loading
                                       behavior before launch.
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </section>

                     <section id="pricing-roadmap" className={docSection}>
                        <span className={eyebrow}>
                           <Sparkles size={15} /> Early Access
                        </span>
                        <h2 className={h2}>Free Today, Built To Become Bigger</h2>
                        <p className={paragraph}>
                           Shopify Component Library is free today so builders can use
                           it, learn it, and ship with it while the collection grows.
                           Future versions may include paid plans, premium templates,
                           advanced editor features, and team workflows.
                        </p>
                        <div className={callout}>
                           <h3 className={calloutTitle}>
                              <ArrowRight size={18} />
                              Use it now while early access is open
                           </h3>
                           <p className={calloutText}>
                              If you build Shopify stores for clients, brands, or your own
                              products, now is the best time to explore the library,
                              bookmark your favorite sections, and start using the workflow
                              before the platform expands into a paid product.
                           </p>
                        </div>
                        <p className={paragraph}>
                           Ready to explore? Start with the{" "}
                           <Link className={greenLink} to="/components">
                              components library
                           </Link>{" "}
                           or review our{" "}
                           <Link className={greenLink} to="/services">
                              Shopify services
                           </Link>{" "}
                           if you want expert help building your store.
                        </p>
                     </section>
                  </article>

                  <aside className={tocPanel} aria-label="Documentation navigation">
                     <h2 className={tocTitle}>
                        <BookOpen size={17} strokeWidth={2.3} />
                        Docs Navigation
                     </h2>
                     <nav>
                        <ul className={tocList}>
                           {docsSections.map((section) => (
                              <li key={section.id}>
                                 <a className={tocLink} href={`#${section.id}`}>
                                    {section.label}
                                 </a>
                              </li>
                           ))}
                        </ul>
                     </nav>
                  </aside>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
};

export default DocsPage;
