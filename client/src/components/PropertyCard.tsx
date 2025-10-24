import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, ArrowRight } from "lucide-react";

interface PropertyUnit {
  type: string;
  sqft: string;
  price: string;
}

interface PropertyCardProps {
  name: string;
  image: string;
  units: PropertyUnit[];
  additionalInfo?: string;
  onViewDetails: () => void;
}

export default function PropertyCard({ name, image, units, additionalInfo, onViewDetails }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300">
      <div className="h-56 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="gap-2">
        <div className="flex items-center gap-2">
          <Home className="w-5 h-5 text-primary" />
          <CardTitle className="text-xl">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {units.map((unit, idx) => (
            <div key={idx} className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div>
                <Badge variant="secondary" className="mb-1">{unit.type}</Badge>
                <p className="text-sm text-muted-foreground">{unit.sqft} Sq. Ft</p>
              </div>
              <p className="font-semibold text-lg text-primary">{unit.price}</p>
            </div>
          ))}
        </div>
        {additionalInfo && (
          <p className="text-xs text-muted-foreground italic">{additionalInfo}</p>
        )}
        <Button 
          onClick={onViewDetails}
          className="w-full"
          variant="default"
          data-testid={`button-view-${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          View Details <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
}
