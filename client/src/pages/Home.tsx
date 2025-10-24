import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";
import PropertyDetailDialog from "@/components/PropertyDetailDialog";
import ProjectHighlights from "@/components/ProjectHighlights";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

import property1 from "@assets/WhatsApp Image 2025-10-24 at 12.56.15_1761291019718.jpeg";
import property2 from "@assets/WhatsApp Image 2025-10-24 at 12.56.16 (1)_1761291019719.jpeg";
import property3 from "@assets/WhatsApp Image 2025-10-24 at 12.56.16_1761291019719.jpeg";
import property4 from "@assets/WhatsApp Image 2025-10-24 at 12.56.16 (2)_1761291019719.jpeg";
import property5 from "@assets/WhatsApp Image 2025-10-24 at 12.56.16 (3)_1761291019719.jpeg";

const properties = [
  {
    name: "Lucky Homes",
    image: property1,
    units: [
      { type: "3 BHK", sqft: "1700", price: "₹75.99L" },
      { type: "3 BHK", sqft: "1750", price: "₹77.99L" },
      { type: "3 BHK", sqft: "1800", price: "₹79.99L" },
      { type: "4 BHK", sqft: "2200", price: "₹95.99L" }
    ],
    floorPricing: [
      { floor: "Upper Ground Floor", price: "₹1,50,000" },
      { floor: "First Floor", price: "₹1,00,000" },
      { floor: "Second Floor", price: "₹75,000" }
    ],
    additionalCharges: [
      { name: "Meter Connection Charge (3KW)", amount: "₹50,000" }
    ],
    bookingAmount: "₹2,00,000",
    paymentPlan: [
      { stage: "At Booking", percentage: "10%" },
      { stage: "On Start of Foundation", percentage: "10%" },
      { stage: "On Completion of Plinth", percentage: "15%" },
      { stage: "On Completion of 1st Floor Slab", percentage: "15%" },
      { stage: "On Offer of Possession", percentage: "50%" }
    ]
  },
  {
    name: "Calista Heights",
    image: property2,
    units: [
      { type: "3 BHK Premium Floor", sqft: "1720", price: "₹1.03 Cr" },
      { type: "4 BHK Penthouse", sqft: "2775", price: "₹1.66 Cr" }
    ],
    additionalCharges: [
      { name: "Development Charges", amount: "As applicable" },
      { name: "Parking Charges", amount: "As applicable" },
      { name: "Club Membership", amount: "As applicable" },
      { name: "Power Backup Charges", amount: "As applicable" }
    ],
    bookingAmount: "₹5,00,000",
    paymentPlan: [
      { stage: "At Booking", percentage: "10%", amount: "₹10.30 Lacs" },
      { stage: "On Start of Foundation", percentage: "10%", amount: "₹10.30 Lacs" },
      { stage: "On Completion of Plinth", percentage: "15%", amount: "₹15.45 Lacs" },
      { stage: "On Completion of 1st Floor Slab", percentage: "15%", amount: "₹15.45 Lacs" },
      { stage: "On Offer of Possession", percentage: "50%", amount: "₹51.50 Lacs" }
    ]
  },
  {
    name: "Radhika Group",
    image: property3,
    units: [
      { type: "2 BHK", sqft: "950", price: "₹55 Lacs" },
      { type: "3 BHK", sqft: "1450", price: "₹75 Lacs" }
    ]
  },
  {
    name: "Maharishi Enclave",
    image: property4,
    units: [
      { type: "3 BHK", sqft: "1400", price: "₹85 Lacs" },
      { type: "3 BHK", sqft: "1700", price: "₹1.02 Cr" }
    ]
  },
  {
    name: "Vihaan Group",
    image: property5,
    units: [
      { type: "2 BHK", sqft: "980", price: "₹45 Lacs" },
      { type: "3 BHK", sqft: "1550", price: "₹65 Lacs" }
    ]
  }
];

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleViewDetails = (property: typeof properties[0]) => {
    setSelectedProperty(property);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      <section className="py-20" id="properties">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Properties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our curated selection of residential properties with transparent pricing and premium amenities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, idx) => (
              <PropertyCard
                key={idx}
                name={property.name}
                image={property.image}
                units={property.units.slice(0, 2)}
                additionalInfo={property.units.length > 2 ? `+${property.units.length - 2} more options available` : undefined}
                onViewDetails={() => handleViewDetails(property)}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectHighlights />
      <ContactSection />
      <Footer />

      <PropertyDetailDialog
        property={selectedProperty}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
