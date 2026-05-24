import { ArrowRight, Rocket, ShieldCheck, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import sarahAvatar from "../../assets/avatars/sarah-mitchell.svg";
import danielAvatar from "../../assets/avatars/daniel-carter.svg";
import oliviaAvatar from "../../assets/avatars/olivia-bennett.svg";

const reviews = [
   {
      name: "Sarah Mitchell",
      role: "Shopify Developer",
      avatar: sarahAvatar,
      text: "This library helped me build polished Shopify sections much faster without starting from scratch every time.",
   },
   {
      name: "Daniel Carter",
      role: "Store Owner",
      avatar: danielAvatar,
      text: "The components feel premium and production-ready. It made our store redesign process much smoother.",
   },
   {
      name: "Olivia Bennett",
      role: "Ecommerce Designer",
      avatar: oliviaAvatar,
      text: "A clean, flexible component system that saves time while keeping the final store design professional.",
   },
];

const stats = [
   { value: "4.9/5", label: "Shopify App Rating", Icon: Star },
   { value: "250+", label: "Five-Star Reviews", Icon: ShieldCheck },
   { value: "1,000+", label: "Stores Launched", Icon: Rocket },
];

const section = "bg-white px-4 pb-9 pt-2 sm:px-7 sm:pb-12 lg:px-10 lg:pb-14";
const shell = "mx-auto max-w-[1320px]";
const header =
   "mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between";
const title =
   "text-[28px] font-black tracking-[-0.03em] text-[#111815] sm:text-[34px]";
const link =
   "inline-flex w-fit items-center gap-2 text-[13px] font-bold text-[#247b3e] transition-colors hover:text-[#1f9c45]";
const layout = "grid items-stretch gap-4 lg:grid-cols-[minmax(0,1fr)_190px]";
const reviewsGrid = "grid gap-4 md:grid-cols-3";
const reviewCard =
   "flex h-full min-h-[214px] flex-col rounded-[16px] border border-[#e3eae5] bg-white p-6 shadow-[0_12px_32px_rgba(20,31,24,0.06)]";
const stars = "flex gap-1.5 text-[#22a84d]";
const quote =
   "mt-4 flex-1 text-[15px] font-semibold leading-[1.62] text-[#4f5a54]";
const person = "mt-6 flex items-center gap-3.5";
const avatar =
   "h-[52px] w-[52px] rounded-full border border-[#e0e7e2] object-cover shadow-[0_8px_18px_rgba(20,31,24,0.08)]";
const name = "text-[14px] font-black text-[#161d19]";
const role = "mt-1 text-[12.5px] font-semibold text-[#66716b]";
const statRail =
   "grid h-full grid-cols-1 gap-3 rounded-[16px] border border-[#e3eae5] bg-white p-3 shadow-[0_12px_32px_rgba(20,31,24,0.06)] min-[520px]:grid-cols-3 lg:grid-cols-1";
const statItem = "flex items-center gap-3 rounded-[12px] p-2.5";
const statIcon =
   "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#eef9f1] text-[#24a64c]";
const statValue = "text-[16px] font-black text-[#101714]";
const statLabel = "mt-0.5 text-[11px] font-bold leading-snug text-[#66716b]";

const LovedByBuilders = () => {
   const navigate = useNavigate();

   return (
      <section className={section}>
         <div className={shell}>
            <div className={header}>
               <h2 className={title}>Loved by Builders</h2>
               <button
                  className={link}
                  type="button"
                  onClick={() => navigate("/reviews")}
               >
                  See All Reviews <ArrowRight size={15} />
               </button>
            </div>

            <div className={layout}>
               <div className={reviewsGrid}>
                  {reviews.map((review) => (
                     <article className={reviewCard} key={review.name}>
                        <div className={stars} aria-label="Five star rating">
                           {[0, 1, 2, 3, 4].map((item) => (
                              <Star key={item} size={16} fill="currentColor" />
                           ))}
                        </div>
                        <p className={quote}>&ldquo;{review.text}&rdquo;</p>
                        <div className={person}>
                           <img
                              className={avatar}
                              src={review.avatar}
                              alt={`${review.name} avatar`}
                           />
                           <div>
                              <p className={name}>{review.name}</p>
                              <p className={role}>{review.role}</p>
                           </div>
                        </div>
                     </article>
                  ))}
               </div>

               <div className={statRail} aria-label="Builder trust stats">
                  {stats.map((stat) => (
                     <div className={statItem} key={stat.label}>
                        <span className={statIcon} aria-hidden="true">
                           <stat.Icon size={20} strokeWidth={2.2} />
                        </span>
                        <div>
                           <p className={statValue}>{stat.value}</p>
                           <p className={statLabel}>{stat.label}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default LovedByBuilders;
