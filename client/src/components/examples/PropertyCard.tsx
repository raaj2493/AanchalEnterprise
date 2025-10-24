import PropertyCard from '../PropertyCard';
import propertyImage from "@assets/WhatsApp Image 2025-10-24 at 12.56.15_1761291019718.jpeg";

export default function PropertyCardExample() {
  return (
    <div className="max-w-md p-6">
      <PropertyCard
        name="Lucky Homes"
        image={propertyImage}
        units={[
          { type: "3 BHK", sqft: "1700", price: "₹75.99L" },
          { type: "4 BHK", sqft: "2200", price: "₹95.99L" }
        ]}
        onViewDetails={() => console.log('View details clicked')}
      />
    </div>
  );
}
