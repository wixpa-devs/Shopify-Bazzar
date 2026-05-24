import { Check, X } from "lucide-react";
import timeSavingImage from "../../../../temp-assets/time-saving.png";

const manualPoints = [
   "Takes weeks to design and code",
   "Requires repeated custom development",
   "Hard to maintain consistent UI",
   "Slower launch and testing process",
   "Higher development cost",
];

const libraryPoints = [
   "Ready-made premium sections",
   "Faster store and page building",
   "Consistent Shopify-style design",
   "Easy customization workflow",
   "Reusable components for every project",
];

const section = "bg-white px-4 pb-14 pt-4 sm:px-7 sm:pb-16 lg:px-10 lg:pb-20";
const shell =
   "mx-auto grid max-w-[1320px] gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-stretch";
const visualCol = "flex min-w-0 flex-col";
const title =
   "max-w-[430px] text-[28px] font-black leading-[1.08] tracking-[-0.03em] text-[#111815] sm:text-[36px] lg:text-[38px]";
const visualWrap =
   "mt-6 flex flex-1 items-end justify-center overflow-hidden rounded-[18px] bg-white";
const visualImage = "block h-auto w-full select-none object-contain";
const compare =
   "grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr] sm:gap-5 lg:min-h-full";
const column =
   "flex min-w-0 flex-col rounded-[18px] border border-[#f4d6d6] bg-[#fff5f5] p-4 shadow-[0_16px_42px_rgba(60,20,20,0.055)] sm:p-5";
const greenColumn =
   "flex min-w-0 flex-col rounded-[18px] border border-[#cfe9d6] bg-[#f2fbf4] p-4 shadow-[0_16px_42px_rgba(20,31,24,0.06)] sm:p-5";
const columnTitle =
   "mb-4 text-center text-[17px] font-black tracking-[-0.01em] text-[#ef5353] sm:text-[20px]";
const columnTitleGreen =
   "mb-4 text-center text-[17px] font-black tracking-[-0.01em] text-[#15923b] sm:text-[20px]";
const box =
   "flex flex-1 items-center rounded-[14px] bg-white p-4 shadow-[0_10px_26px_rgba(20,31,24,0.045)] sm:p-5";
const greenBox =
   "flex flex-1 items-center rounded-[14px] bg-white p-4 shadow-[0_10px_26px_rgba(20,31,24,0.045)] sm:p-5";
const list = "w-full space-y-4";
const item =
   "flex items-start gap-3 text-[13px] font-bold leading-snug text-[#4f5a54] sm:text-[14px] lg:text-[15px]";
const xIcon =
   "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#fff0f0] text-[#ef5353]";
const checkIcon =
   "mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#e8f8ed] text-[#1f9d48]";
const vs =
   "mx-auto self-center flex h-14 w-14 items-center justify-center rounded-full bg-[#111815] text-[18px] font-black text-white shadow-[0_12px_24px_rgba(17,24,20,0.18)] sm:h-16 sm:w-16";

const WhyTeamsChoose = () => (
   <section className={section}>
      <div className={shell}>
         <div className={visualCol}>
            <h2 className={title}>Why Teams Choose Shopify Component Library</h2>
            <div className={visualWrap}>
               <img
                  className={visualImage}
                  src={timeSavingImage}
                  alt="Fast component building compared with manual development"
                  draggable="false"
               />
            </div>
         </div>

         <div className={compare}>
            <div className={column}>
               <h3 className={columnTitle}>Manual Development</h3>
               <div className={box}>
                  <ul className={list}>
                     {manualPoints.map((point) => (
                        <li className={item} key={point}>
                           <span className={xIcon} aria-hidden="true">
                              <X size={13} strokeWidth={3} />
                           </span>
                           <span>{point}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className={vs}>VS</div>

            <div className={greenColumn}>
               <h3 className={columnTitleGreen}>Shopify Component Library</h3>
               <div className={greenBox}>
                  <ul className={list}>
                     {libraryPoints.map((point) => (
                        <li className={item} key={point}>
                           <span className={checkIcon} aria-hidden="true">
                              <Check size={13} strokeWidth={3} />
                           </span>
                           <span>{point}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </section>
);

export default WhyTeamsChoose;
