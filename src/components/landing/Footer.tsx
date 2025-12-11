import { Facebook, Twitter, Instagram, Linkedin, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl p-8 md:p-12 text-center glow-green">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Shop?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Download the Jiffy app now and get 20% off on your first order!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-foreground text-background hover:bg-foreground/90 px-6 py-6 h-auto rounded-xl">
              <Apple className="w-6 h-6 mr-2" />
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </Button>
            <Button className="bg-foreground text-background hover:bg-foreground/90 px-6 py-6 h-auto rounded-xl">
              <Smartphone className="w-6 h-6 mr-2" />
              <div className="text-left">
                <div className="text-xs opacity-70">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-12 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">J</span>
              </div>
              <span className="text-xl font-bold text-foreground">Jiffy</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Fashion delivered in 30 minutes. Your city's top stores, just a tap away.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Press</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Safety</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Partner with Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">List Your Store</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Become a Rider</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">For Business</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Advertise</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 py-6 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Jiffy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
