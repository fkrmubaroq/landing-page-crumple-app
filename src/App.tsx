import Header from "@/components/Layout/Header";
import SectionHero from "@/components/Sections/SectionHero";
import SectionKeyFeatures from "@/components/Sections/SectionKeyFeatures";
import SectionTargetAudience from "@/components/Sections/SectionTargetAudience";
import SectionFeedback from "@/components/Sections/SectionFeedback";
import SectionGetStarted from "@/components/Sections/SectionGetStarted";
import Footer from "@/components/Layout/Footer";

function App() {
  return (
    <>
      <Header />
      <SectionHero />
      <SectionKeyFeatures />
      <SectionTargetAudience />
      <SectionFeedback />
      <SectionGetStarted />
      <Footer />
    </>
  );
}

export default App;
