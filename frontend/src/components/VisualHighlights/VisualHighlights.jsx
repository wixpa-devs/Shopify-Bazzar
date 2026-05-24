import visualOne from "../../../../temp-assets/visual-img-1.png";
import visualTwo from "../../../../temp-assets/visual-img-2.png";
import visualThree from "../../../../temp-assets/visual-img-3.png";
import visualFour from "../../../../temp-assets/visual-img-4.png";
import visualFive from "../../../../temp-assets/visual-img-5.png";

const visuals = [
   { src: visualOne, alt: "Visual editor controls card" },
   { src: visualTwo, alt: "Responsive first preview card" },
   { src: visualThree, alt: "Performance score card" },
   { src: visualFour, alt: "Developer friendly code card" },
   { src: visualFive, alt: "Conversion focused analytics card" },
];

const section =
   "bg-[#f5f6f4] px-4 py-6 sm:px-7 sm:py-10 lg:px-10 lg:py-12";
const shell = "mx-auto max-w-[1320px]";
const grid =
   "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5 lg:gap-4";
const card = "min-w-0";
const image =
   "block h-auto w-full select-none rounded-[14px] object-contain shadow-[0_14px_34px_rgba(25,31,28,0.08)]";

const VisualHighlights = () => (
   <section className={section} aria-label="Component library visual highlights">
      <div className={shell}>
         <div className={grid}>
            {visuals.map((visual) => (
               <div className={card} key={visual.src}>
                  <img
                     className={image}
                     src={visual.src}
                     alt={visual.alt}
                     loading="lazy"
                     draggable="false"
                  />
               </div>
            ))}
         </div>
      </div>
   </section>
);

export default VisualHighlights;
