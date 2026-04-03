import HeroSection from "@/components/landing/HeroSection";
import DescriptionGallerySection from "@/components/landing/DescriptionGallerySection";
import StructureSection from "@/components/landing/StructureSection";
import PromoSection from "@/components/landing/PromoSection";
import IncludedSection from "@/components/landing/IncludedSection";
import IdealSection from "@/components/landing/IdealSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import LocationSection from "@/components/landing/LocationSection";
import FooterCTASection from "@/components/landing/FooterCTASection";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">

      <HeroSection />
      <DescriptionGallerySection />
      <StructureSection />
      <PromoSection />
      <IncludedSection />
      <IdealSection />
      <ReviewsSection />
      <LocationSection />
      <FooterCTASection />
      <WhatsAppFloat />

    </div>
  );
}