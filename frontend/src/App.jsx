import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComponentsLayout from "./components/ComponentsLayout/ComponentsLayout";
import ComponentsPage from "./pages/ComponentsPage";
import ComponentCategoryPage from "./pages/ComponentCategoryPage";
import VariantEditorPage from "./pages/VariantEditorPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ShopifyAppsPage from "./pages/ShopifyAppsPage";

const App = () => (
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/services" element={<ServicesPage />} />
         <Route path="/shopify-apps" element={<ShopifyAppsPage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/contact" element={<ContactPage />} />

         <Route path="/components" element={<ComponentsLayout />}>
            <Route index element={<ComponentsPage />} />
            <Route path=":section" element={<ComponentCategoryPage />} />
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
