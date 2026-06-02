import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// ── Tailwind Classes ───────────────────────────────────────────

const shell = "flex flex-col min-h-screen bg-[var(--color-bg-white)]";
const middleRow = "flex flex-1";

// Sticky sidebar — hidden on mobile (≤900px)
// Main content area
const mainContent =
   "flex-1 min-w-0 bg-[var(--color-bg-white)] px-4 py-12 sm:px-7 sm:py-14 lg:px-10 lg:py-16";
const indexMainContent =
   "flex-1 min-w-0 w-full bg-[var(--color-bg-white)]";

// Mobile hamburger — fixed, only visible ≤900px
const menuBtn =
   "hidden fixed top-[108px] left-[14px] z-[200] bg-white border border-[var(--color-sidebar-border)] p-[7px_10px] rounded-[6px] cursor-pointer shadow-[var(--shadow-sm)] text-[var(--color-nav-text)] transition-colors duration-150 hover:bg-[var(--color-bg-light)] max-[900px]:block max-[520px]:top-[76px]";

// ── Component ──────────────────────────────────────────────────

const ComponentsLayout = () => {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   const location = useLocation();
   const isComponentsIndex = location.pathname.replace(/\/$/, "") === "/components";

   return (
      <div className={shell}>
         {/* ── Row 1: Full-width Header ── */}
         <Header />

         {/* ── Row 2: Sticky sidebar + page content ── */}
         <div className={middleRow}>
            {/* Sticky sidebar — desktop only */}
            {!isComponentsIndex ? (
               <aside
                  className={[
                     "w-[var(--sidebar-width,260px)] flex-shrink-0 sticky top-24",
                     "h-[calc(100vh-96px)] self-start border-r border-[var(--color-sidebar-border)]",
                     "bg-[var(--color-sidebar-bg)] z-40 overflow-hidden",
                     "hidden [&]:block max-[900px]:![display:none]",
                  ].join(" ")}
                  style={{ display: "block" }}
               >
                  <Sidebar
                     isOpen={sidebarOpen}
                     onClose={() => setSidebarOpen(false)}
                  />
               </aside>
            ) : null}

            {/* Mobile hamburger */}
            {!isComponentsIndex ? (
               <button
                  className={menuBtn}
                  aria-label="Toggle Navigation"
                  onClick={() => setSidebarOpen(true)}
               >
                  <Menu size={16} />
               </button>
            ) : null}

            {/* Page content */}
            <main className={isComponentsIndex ? indexMainContent : mainContent}>
               <Outlet />
            </main>
         </div>

         {/* ── Row 3: Full-width Footer ── */}
         <Footer />
      </div>
   );
};

export default ComponentsLayout;
