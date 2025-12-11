import { Facebook, Twitter, Instagram, Linkedin, Apple, Smartphone, Sparkles, Gift, Zap, Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] p-8 md:p-16">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-jiffy-green/20 to-primary/30" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.4),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--jiffy-green)/0.3),transparent_50%)]" />
          
          {/* Animated Floating Elements */}
          <div className="absolute top-8 left-8 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-jiffy-green/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-4 w-12 h-12 bg-primary/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Decorative Icons */}
          <div className="absolute top-6 right-12 text-primary/30 animate-bounce" style={{ animationDuration: '3s' }}>
            <ShoppingBag className="w-8 h-8" />
          </div>
          <div className="absolute bottom-12 left-12 text-jiffy-green/30 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
            <Gift className="w-10 h-10" />
          </div>
          <div className="absolute top-1/3 right-8 text-primary/20 animate-bounce" style={{ animationDuration: '2s', animationDelay: '1s' }}>
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="absolute bottom-1/3 left-8 text-jiffy-green/25 animate-bounce" style={{ animationDuration: '2.8s' }}>
            <Star className="w-7 h-7" />
          </div>
          
          {/* Border Glow */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-primary/30" />
          <div className="absolute inset-[1px] rounded-[2.5rem] border border-jiffy-green/20" />

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2 mb-6">
              <Zap className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-semibold text-primary">Limited Time Offer</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">Ready to </span>
              <span className="bg-gradient-to-r from-primary via-jiffy-green to-primary bg-clip-text text-transparent">
                Shop?
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-muted-foreground text-lg md:text-xl mb-4 max-w-2xl mx-auto">
              Download the Jiffy app now and get
            </p>
            
            {/* Discount Highlight */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-jiffy-green text-primary-foreground font-bold text-2xl md:text-4xl px-8 py-4 rounded-2xl mb-8 shadow-lg shadow-primary/30">
              <Gift className="w-8 h-8" />
              <span>20% OFF</span>
              <span className="text-lg font-medium opacity-80">on your first order!</span>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="group relative bg-foreground text-background hover:bg-foreground px-8 py-7 h-auto rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Apple className="w-8 h-8 mr-3" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div className="font-bold text-lg">App Store</div>
                </div>
              </Button>
              <Button className="group relative bg-foreground text-background hover:bg-foreground px-8 py-7 h-auto rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <Smartphone className="w-8 h-8 mr-3" />
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="font-bold text-lg">Google Play</div>
                </div>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <span>4.9 Rating</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <span>500K+ Downloads</span>
              <div className="w-px h-4 bg-border" />
              <span>Available Nationwide</span>
            </div>
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
