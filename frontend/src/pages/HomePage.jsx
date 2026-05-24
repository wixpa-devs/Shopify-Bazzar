import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import VisualHighlights from "../components/VisualHighlights/VisualHighlights";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import LibraryEditorSection from "../components/LibraryEditorSection/LibraryEditorSection";
import FeaturesSection from "../components/FeaturesSection/FeaturesSection";
import ComponentsShowcase from "../components/ComponentsShowcase/ComponentsShowcase";
import TemplatesShowcase from "../components/TemplatesShowcase/TemplatesShowcase";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import CTABanner from "../components/CTABanner/CTABanner";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
   return (
      <>
         <Header />
         <main>
            <HeroSection />
            <VisualHighlights />
            <HowItWorks />
            <LibraryEditorSection />
            <FeaturesSection />
            <ComponentsShowcase />
            <TemplatesShowcase />
            <TestimonialsSection />
            <CTABanner />
         </main>
         <Footer />
      </>
   );
};

export default HomePage;
