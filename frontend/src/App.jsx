import { useEffect } from "react";
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

const ScrollToTop = () => {
   const { pathname } = useLocation();

   useEffect(() => {
      window.scrollTo({
         top: 0,
         left: 0,
         behavior: "instant",
      });
   }, [pathname]);

   return null;
};

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
         <Route path="/login" element={<LoginPage />} />
         <Route path="/signup" element={<SignupPage />} />
         <Route path="/register" element={<SignupPage />} />

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
