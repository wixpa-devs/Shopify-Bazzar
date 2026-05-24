import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import storePreviewOne from "../../../../temp-assets/store-preview-01.png";
import storePreviewTwo from "../../../../temp-assets/store-preview-02.png";
import storePreviewThree from "../../../../temp-assets/store-preview-03.png";
import storePreviewFour from "../../../../temp-assets/store-preview-04.png";
import storePreviewFive from "../../../../temp-assets/store-preview-05.png";
import storePreviewSix from "../../../../temp-assets/store-preview-06.png";

const templates = [
   {
      title: "Beauty Store",
      description: "A refined skincare layout built for polished product storytelling.",
      image: storePreviewOne,
      alt: "Beauty Shopify store template preview",
   },
   {
      title: "Home Essentials Store",
      description: "A warm interiors homepage for modern furniture and decor brands.",
      image: storePreviewTwo,
      alt: "Home essentials Shopify store template preview",
   },
   {
      title: "Fitness Store",
      description: "A bold activewear storefront made for performance-focused selling.",
      image: storePreviewThree,
      alt: "Fitness Shopify store template preview",
   },
   {
      title: "Pet Products Store",
      description: "A bright, friendly layout for pet care and lifestyle products.",
      image: storePreviewFour,
      alt: "Pet products Shopify store template preview",
   },
   {
      title: "Smart Home Store",
      description: "A premium tech layout for connected devices and smart setups.",
      image: storePreviewFive,
      alt: "Smart home Shopify store template preview",
   },
   {
      title: "Beverage Store",
      description: "A colorful conversion-ready design for drinks and wellness brands.",
      image: storePreviewSix,
      alt: "Beverage Shopify store template preview",
   },
];

const section = "bg-white px-4 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const shell = "mx-auto max-w-[1320px]";
const header =
   "mb-7 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between";
const copy = "max-w-[720px]";
const title =
   "text-[30px] font-black leading-tight tracking-[-0.03em] text-[#111815] sm:text-[38px] lg:text-[42px]";
const subtitle =
   "mt-3 max-w-[680px] text-[14px] font-semibold leading-[1.7] text-[#66716b] sm:text-[15px]";
const viewAll =
   "inline-flex w-fit items-center gap-2 text-[13px] font-bold text-[#2f3a34] transition-colors hover:text-[#1f9c45]";
const grid =
   "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 lg:gap-5";
const card =
   "group relative overflow-hidden rounded-[15px] border border-[#e1e8e3] bg-white shadow-[0_14px_34px_rgba(18,28,22,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#bddbc6] hover:shadow-[0_22px_48px_rgba(18,28,22,0.11)]";
const image =
   "block aspect-[1402/1122] h-auto w-full select-none object-cover";
const overlay =
   "absolute inset-0 flex translate-y-0 flex-col justify-end bg-[linear-gradient(0deg,rgba(5,9,7,0.92)_0%,rgba(5,9,7,0.62)_42%,rgba(5,9,7,0.1)_76%,rgba(5,9,7,0)_100%)] p-3 opacity-100 transition duration-300 sm:p-4 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100";
const cardTitle =
   "text-[14px] font-black tracking-[-0.01em] text-[#36c562] transition duration-300 sm:text-[17px]";
const cardText =
   "mt-1 hidden max-w-[360px] text-[11px] font-semibold leading-[1.45] !text-white transition duration-300 min-[420px]:block sm:text-[12px]";

const StoreTemplatesSection = () => {
   const navigate = useNavigate();

   return (
      <section className={section} aria-label="Launch with complete store templates">
         <div className={shell}>
            <div className={header}>
               <div className={copy}>
                  <h2 className={title}>Launch With a Complete Store</h2>
                  <p className={subtitle}>
                     Explore ready-made Shopify store layouts designed to help
                     you launch faster with polished, conversion-focused pages.
                  </p>
               </div>

               <button
                  className={viewAll}
                  type="button"
                  onClick={() => navigate("/templates")}
               >
                  View All Templates <ArrowRight size={15} />
               </button>
            </div>

            <div className={grid}>
               {templates.map((template) => (
                  <article className={card} key={template.title}>
                     <img
                        className={image}
                        src={template.image}
                        alt={template.alt}
                        loading="lazy"
                        draggable="false"
                     />
                     <div className={overlay}>
                        <h3 className={cardTitle}>{template.title}</h3>
                        <p className={cardText}>{template.description}</p>
                     </div>
                  </article>
               ))}
            </div>
         </div>
      </section>
   );
};

export default StoreTemplatesSection;
