import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const pageShell = "min-h-screen bg-white";
const hero =
   "relative isolate overflow-hidden border-b border-[#e8f0eb] bg-[#f4fbf5] px-5 py-16 sm:py-20 lg:py-[84px] font-[var(--inter-font)]";
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
         </main>
         <Footer />
      </div>
   );
};

export default ServicesPage;
