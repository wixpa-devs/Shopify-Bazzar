import { useEffect, useLayoutEffect, useRef } from "react";
import {
   BrowserRouter,
   Routes,
   Route,
   useLocation,
   Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComponentsLayout from "./components/ComponentsLayout/ComponentsLayout";
import ComponentsPage from "./pages/ComponentsPage";
import VariantEditorPage from "./pages/VariantEditorPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ShopifyAppsPage from "./pages/ShopifyAppsPage";
import DocsPage from "./pages/DocsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { isAuthenticated } from "./lib/formApi.js";

const ScrollToTop = () => {
   const { pathname, search, hash, key } = useLocation();
   const previousLocationRef = useRef({ pathname, search });

   useEffect(() => {
      if (!("scrollRestoration" in window.history)) return undefined;

      const previousScrollRestoration = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";

      return () => {
         window.history.scrollRestoration = previousScrollRestoration;
      };
   }, []);

   useLayoutEffect(() => {
      const previousLocation = previousLocationRef.current;
      const isSamePageHashNavigation =
         hash &&
         previousLocation.pathname === pathname &&
         previousLocation.search === search;

      previousLocationRef.current = { pathname, search };

      if (isSamePageHashNavigation) return;

      window.requestAnimationFrame(() => {
         window.scrollTo({
            top: 0,
            left: 0,
            behavior: "auto",
         });
      });
   }, [pathname, search, hash, key]);

   return null;
};

const GuestOnlyRoute = ({ children }) =>
   isAuthenticated() ? <Navigate to="/components" replace /> : children;

const App = () => (
   <BrowserRouter>
      <ScrollToTop />
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/services" element={<ServicesPage />} />
         <Route path="/shopify-apps" element={<ShopifyAppsPage />} />
         <Route path="/docs" element={<DocsPage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/contact" element={<ContactPage />} />
         <Route
            path="/login"
            element={(
               <GuestOnlyRoute>
                  <LoginPage />
               </GuestOnlyRoute>
            )}
         />
         <Route
            path="/signup"
            element={(
               <GuestOnlyRoute>
                  <SignupPage />
               </GuestOnlyRoute>
            )}
         />
         <Route
            path="/register"
            element={(
               <GuestOnlyRoute>
                  <SignupPage />
               </GuestOnlyRoute>
            )}
         />

         <Route path="/components" element={<ComponentsLayout />}>
            <Route index element={<ComponentsPage />} />
            <Route path=":section" element={<Navigate to="/components" replace />} />
         </Route>

         {/* Editor — full screen, no sidebar */}
         <Route
            path="/components/:section/:variantId"
            element={<VariantEditorPage />}
         />
      </Routes>
   </BrowserRouter>
);

export default App;
