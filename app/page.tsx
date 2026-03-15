import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSection";
import StatsBar from "@/components/StatsBar";
import RecentWorks from "@/components/RecentWorks";
import CTABanner from "@/components/CTABanner";
import ContactFooter from "@/components/ContactFooter";
import PageLoader from "@/components/PageLoader";

export default function Home() {
  return (
    <div className="relative">
      <PageLoader />
      <HeroSection />
      <AboutSection />
      <StatsBar />
      <ProductsSection />
      <ServicesSection />
      <ValuesSection />
      <RecentWorks />
      <CTABanner />
      <ContactFooter />
    </div>
  );
}
