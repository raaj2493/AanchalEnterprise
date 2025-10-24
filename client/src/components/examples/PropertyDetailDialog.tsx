import { useState } from 'react';
import PropertyDetailDialog from '../PropertyDetailDialog';
import { Button } from '@/components/ui/button';
import propertyImage from "@assets/WhatsApp Image 2025-10-24 at 12.56.16 (1)_1761291019719.jpeg";

export default function PropertyDetailDialogExample() {
  const [open, setOpen] = useState(false);

  const sampleProperty = {
    name: "Calista Heights",
    image: propertyImage,
    units: [
      { type: "3 BHK Premium Floor", sqft: "1720", price: "₹1.03 Cr" },
      { type: "4 BHK Penthouse", sqft: "2775", price: "₹1.66 Cr" }
    ],
    additionalCharges: [
      { name: "Development Charges", amount: "As applicable" },
      { name: "Parking Charges", amount: "As applicable" },
      { name: "Club Membership", amount: "As applicable" }
    ],
    bookingAmount: "₹5,00,000",
    paymentPlan: [
      { stage: "At Booking", percentage: "10%", amount: "₹10.30 Lacs" },
      { stage: "On Start of Foundation", percentage: "10%", amount: "₹10.30 Lacs" },
      { stage: "On Completion of Plinth", percentage: "15%", amount: "₹15.45 Lacs" },
      { stage: "On Completion of 1st Floor Slab", percentage: "15%", amount: "₹15.45 Lacs" },
      { stage: "On Offer of Possession", percentage: "50%", amount: "₹51.50 Lacs" }
    ]
  };

  return (
    <div className="p-6">
      <Button onClick={() => setOpen(true)} data-testid="button-open-dialog">
        Open Property Details
      </Button>
      <PropertyDetailDialog 
        property={sampleProperty}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
}
