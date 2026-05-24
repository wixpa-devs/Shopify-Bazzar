import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowRight, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import shopifyLogo from "../../../../temp-assets/shopify-logo.png";

const NAV_LINKS = [
   { label: "Components", path: "/components", hasMenu: true },
   { label: "Templates", path: "/templates" },
   { label: "Docs", path: "/docs" },
   { label: "Pricing", path: "/pricing" },
   { label: "Changelog", path: "/changelog" },
];

const shell =
   "sticky top-0 z-50 bg-white border-b border-[#edf0ed] shadow-[0_1px_8px_rgba(17,24,39,0.04)]";
const announcement =
   "relative h-8 px-4 border-b border-[#d9efdd] bg-[#effbf1] text-[#184321] flex items-center justify-center";
const announcementInner =
   "min-w-0 flex items-center justify-center gap-3 text-[12px] leading-none font-medium whitespace-nowrap";
const newPill =
   "inline-flex h-[18px] items-center rounded-full bg-[#31a844] px-3 text-[10px] font-bold text-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.12)]";
const announceCopy = "hidden min-[520px]:inline text-[#323b35]";
const announceLink =
   "hidden sm:inline-flex items-center gap-1 text-[#2d4b35] hover:text-[#1d7f32] transition-colors";

const navBar = "h-16 px-5 sm:px-7 lg:px-12";
const navInner =
   "mx-auto flex h-full max-w-[1320px] items-center justify-between gap-5";
const brandButton =
   "flex min-w-0 items-center gap-3 text-left transition-opacity hover:opacity-80";
const logoMark =
   "h-12 w-12 flex-shrink-0 rounded-[12px] object-cover";
const logoText = "flex min-w-0 flex-col leading-none";
const brandName =
   "text-[20px] font-extrabold tracking-[-0.03em] text-[#111827] sm:text-[21px]";
const brandSub = "mt-[5px] text-[12px] font-semibold text-[#28312b]";

const desktopNav = "hidden lg:flex items-center gap-10";
const navButton =
   "inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#1f2933] transition-colors hover:text-[#208a34]";
const navButtonActive = "text-[#1f8b34]";

const actions = "hidden md:flex items-center gap-6";
const loginBtn =
   "text-[13px] font-semibold text-[#1f2933] transition-colors hover:text-[#208a34]";
const ctaBtn =
   "inline-flex h-10 items-center gap-2 rounded-[12px] bg-[#2da53d] px-5 text-[13px] font-bold text-white shadow-[0_8px_18px_rgba(45,165,61,0.22)] transition-colors hover:bg-[#238d32]";
const mobileMenuBtn =
   "inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#e1e6e2] text-[#1f2933] md:hidden";

const mobilePanel =
   "border-t border-[#edf0ed] bg-white px-5 py-4 shadow-[0_12px_24px_rgba(17,24,39,0.08)] md:hidden";
const mobileNav = "flex flex-col gap-1";
const mobileLink =
   "flex items-center justify-between rounded-lg px-2 py-3 text-[14px] font-semibold text-[#1f2933] hover:bg-[#f6faf6]";
const mobileActions = "mt-4 grid grid-cols-2 gap-3";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();

   const go = (path) => {
      navigate(path);
      setMenuOpen(false);
   };

   const isActive = (path) =>
      path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

   return (
      <header className={shell}>
         <div className={announcement}>
            <div className={announcementInner}>
               <span className={newPill}>New</span>
               <span className={announceCopy}>
                  v2.0 just launched - 120+ new components, performance
                  boosters & UI improvements.
               </span>
               <button
                  className={announceLink}
                  type="button"
                  onClick={() => go("/changelog")}
               >
                  See what's new <FiArrowRight size={12} />
               </button>
            </div>
         </div>

         <div className={navBar}>
            <div className={navInner}>
               <button
                  className={brandButton}
                  type="button"
                  aria-label="Go to home"
                  onClick={() => go("/")}
               >
                  <img className={logoMark} src={shopifyLogo} alt="" />
                  <span className={logoText}>
                     <span className={brandName}>Shopify</span>
                     <span className={brandSub}>Component Library</span>
                  </span>
               </button>

               <nav className={desktopNav} aria-label="Main navigation">
                  {NAV_LINKS.map((link) => (
                     <button
                        key={link.label}
                        className={`${navButton} ${isActive(link.path) ? navButtonActive : ""}`}
                        type="button"
                        onClick={() => go(link.path)}
                     >
                        {link.label}
                        {link.hasMenu ? <FiChevronDown size={13} /> : null}
                     </button>
                  ))}
               </nav>

               <div className={actions}>
                  <button className={loginBtn} type="button">
                     Log in
                  </button>
                  <button
                     className={ctaBtn}
                     type="button"
                     onClick={() => go("/components")}
                  >
                     Start Free <FiArrowRight size={14} />
                  </button>
               </div>

               <button
                  className={mobileMenuBtn}
                  type="button"
                  aria-label={menuOpen ? "Close menu" : "Open menu"}
                  onClick={() => setMenuOpen((open) => !open)}
               >
                  {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
               </button>
            </div>
         </div>

         {menuOpen ? (
            <div className={mobilePanel}>
               <nav className={mobileNav} aria-label="Mobile navigation">
                  {NAV_LINKS.map((link) => (
                     <button
                        key={link.label}
                        className={mobileLink}
                        type="button"
                        onClick={() => go(link.path)}
                     >
                        {link.label}
                        {link.hasMenu ? <FiChevronDown size={14} /> : null}
                     </button>
                  ))}
               </nav>
               <div className={mobileActions}>
                  <button className={loginBtn} type="button">
                     Log in
                  </button>
                  <button
                     className={ctaBtn}
                     type="button"
                     onClick={() => go("/components")}
                  >
                     Start Free <FiArrowRight size={14} />
                  </button>
               </div>
            </div>
         ) : null}
      </header>
   );
};

export default Header;
