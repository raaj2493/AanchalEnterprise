import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Premium_residential_building_hero_dee80a44.png";

export default function Hero() {
  const scrollToProperties = () => {
    const propertiesSection = document.getElementById('properties');
    propertiesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Anchal Enterprise
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-4 font-medium">
          Your Trusted Partner in Premium Residential Properties
        </p>
        <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto">
          Connecting you to multiple reputed residential projects with transparent pricing, flexible payment plans, and premium amenities.
        </p>
        <Button 
          size="lg" 
          onClick={scrollToProperties}
          className="bg-white/95 text-foreground hover:bg-white backdrop-blur-sm border border-white/20"
          data-testid="button-explore-properties"
        >
          Explore Our Properties
        </Button>
      </div>
    </section>
  );
}
