import { Facebook, Twitter, Instagram, Linkedin, Apple, Smartphone, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-background via-background to-primary/5 border border-border">
          {/* Subtle Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
          
          {/* Gradient Orbs */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-jiffy-green/15 rounded-full blur-[100px]" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              {/* Offer Tag */}
              <div className="inline-block mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-jiffy-green blur-lg opacity-40" />
                  <div className="relative bg-gradient-to-r from-primary to-jiffy-green text-primary-foreground font-bold text-sm tracking-wider px-6 py-2 rounded-full">
                    FIRST ORDER SPECIAL
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Get <span className="text-primary">20% Off</span>
                <br />
                <span className="text-muted-foreground/70">Your First Order</span>
              </h2>

              {/* Description */}
              <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
                Download the Jiffy app and experience fashion delivered to your doorstep in 30 minutes
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button className="group bg-foreground text-background hover:bg-foreground/90 px-8 py-6 h-auto rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-foreground/10">
                  <Apple className="w-7 h-7 mr-3" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-60">Download on the</div>
                    <div className="font-semibold text-base">App Store</div>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Button>
                <Button className="group bg-foreground text-background hover:bg-foreground/90 px-8 py-6 h-auto rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-foreground/10">
                  <Smartphone className="w-7 h-7 mr-3" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-60">Get it on</div>
                    <div className="font-semibold text-base">Google Play</div>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Button>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">4.9 App Rating</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">500K+</p>
                  <p className="text-sm text-muted-foreground">Happy Users</p>
                </div>
                <div className="hidden md:block w-px h-10 bg-border" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">30 min</p>
                  <p className="text-sm text-muted-foreground">Avg. Delivery</p>
                </div>
              </div>
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
