import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PropertyUnit {
  type: string;
  sqft: string;
  price: string;
}

interface FloorPricing {
  floor: string;
  price: string;
}

interface AdditionalCharge {
  name: string;
  amount: string;
}

interface PaymentMilestone {
  stage: string;
  percentage: string;
  amount?: string;
}

interface PropertyDetails {
  name: string;
  image: string;
  units: PropertyUnit[];
  floorPricing?: FloorPricing[];
  additionalCharges?: AdditionalCharge[];
  paymentPlan?: PaymentMilestone[];
  bookingAmount?: string;
}

interface PropertyDetailDialogProps {
  property: PropertyDetails | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PropertyDetailDialog({ property, open, onOpenChange }: PropertyDetailDialogProps) {
  if (!property) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" data-testid="dialog-property-details">
        <DialogHeader>
          <DialogTitle className="text-2xl">{property.name}</DialogTitle>
          <DialogDescription>Complete pricing and payment details</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <img 
            src={property.image} 
            alt={property.name}
            className="w-full h-64 object-cover rounded-lg"
          />

          <div>
            <h3 className="font-semibold text-lg mb-3">Available Units</h3>
            <div className="grid gap-3">
              {property.units.map((unit, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                  <div>
                    <Badge variant="default" className="mb-1">{unit.type}</Badge>
                    <p className="text-sm text-muted-foreground">{unit.sqft} Sq. Ft</p>
                  </div>
                  <p className="font-bold text-xl text-primary">{unit.price}</p>
                </div>
              ))}
            </div>
          </div>

          {property.floorPricing && property.floorPricing.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="font-semibold text-lg mb-3">Floor Pricing</h3>
                <div className="grid gap-2">
                  {property.floorPricing.map((floor, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-card border rounded-lg">
                      <span className="text-sm font-medium">{floor.floor}</span>
                      <span className="font-semibold text-accent">{floor.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {property.additionalCharges && property.additionalCharges.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="font-semibold text-lg mb-3">Additional Charges</h3>
                <div className="grid gap-2">
                  {property.additionalCharges.map((charge, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-card border rounded-lg">
                      <span className="text-sm">{charge.name}</span>
                      <span className="font-semibold">{charge.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {property.paymentPlan && property.paymentPlan.length > 0 && (
            <>
              <Separator />
              <div>
                <h3 className="font-semibold text-lg mb-3">Payment Plan</h3>
                {property.bookingAmount && (
                  <div className="mb-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-sm text-muted-foreground">Booking Amount</p>
                    <p className="text-2xl font-bold text-primary">{property.bookingAmount}</p>
                  </div>
                )}
                <div className="space-y-2">
                  {property.paymentPlan.map((milestone, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{milestone.stage}</p>
                        {milestone.amount && (
                          <p className="text-sm text-muted-foreground">{milestone.amount}</p>
                        )}
                      </div>
                      <Badge variant="outline">{milestone.percentage}</Badge>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  * Interest @ 18% p.a. on delayed payments
                </p>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
