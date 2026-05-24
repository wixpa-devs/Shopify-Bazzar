import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import VisualHighlights from "../components/VisualHighlights/VisualHighlights";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import LibraryEditorSection from "../components/LibraryEditorSection/LibraryEditorSection";
import StoreTemplatesSection from "../components/StoreTemplatesSection/StoreTemplatesSection";
import LovedByBuilders from "../components/LovedByBuilders/LovedByBuilders";
import WhyTeamsChoose from "../components/WhyTeamsChoose/WhyTeamsChoose";
import FinalShopifyBanner from "../components/FinalShopifyBanner/FinalShopifyBanner";
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
            <StoreTemplatesSection />
            <LovedByBuilders />
            <WhyTeamsChoose />
            <FinalShopifyBanner />
         </main>
         <Footer />
      </>
   );
};

export default HomePage;
