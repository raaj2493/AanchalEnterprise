import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Aanchal Enterprise</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in finding premium residential properties across multiple reputed projects.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#properties" className="text-muted-foreground hover:text-primary transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#highlights" className="text-muted-foreground hover:text-primary transition-colors">
                  Highlights
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Contact Info</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <a href="tel:9667753506" className="hover:text-primary transition-colors">
                  9667753506
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <a href="mailto:Aanchalrealestate3506@gmail.com" className="hover:text-primary transition-colors break-all">
                  Aanchalrealestate3506@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Aanchal Enterprise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
