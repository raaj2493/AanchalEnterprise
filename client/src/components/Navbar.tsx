import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-primary">Anchal Enterprise</h1>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('properties')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="nav-properties"
            >
              Properties
            </button>
            <button 
              onClick={() => scrollToSection('highlights')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="nav-highlights"
            >
              Highlights
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              data-testid="button-nav-cta"
            >
              Book Site Visit
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <button 
              onClick={() => scrollToSection('properties')}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Properties
            </button>
            <button 
              onClick={() => scrollToSection('highlights')}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Highlights
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
            <Button 
              className="w-full"
              onClick={() => scrollToSection('contact')}
            >
              Book Site Visit
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
