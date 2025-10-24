import { 
  Building2, 
  ChefHat, 
  ShieldCheck, 
  Crown, 
  Dumbbell, 
  Lock, 
  Home, 
  Sun,
  Eye
} from "lucide-react";

const highlights = [
  { icon: Building2, title: "RCC Structures" },
  { icon: ChefHat, title: "Modular Kitchen" },
  { icon: ShieldCheck, title: "Gated Society" },
  { icon: Crown, title: "False Ceiling" },
  { icon: Dumbbell, title: "Club & Gym" },
  { icon: Lock, title: "Smart Locks" },
  { icon: Home, title: "Common Roof" },
  { icon: Sun, title: "Solar Lighting" },
  { icon: Eye, title: "24x7 Security" }
];

export default function ProjectHighlights() {
  return (
    <section className="py-20 bg-muted" id="highlights">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium amenities and features designed for modern living
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-card rounded-lg hover-elevate transition-all duration-300"
                data-testid={`highlight-${highlight.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-medium">{highlight.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
