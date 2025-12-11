import { MapPin, Heart, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">J</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Jiffy</span>
          </div>

          {/* Location Selector */}
          <div className="hidden md:flex items-center gap-2 bg-secondary px-4 py-2 rounded-full cursor-pointer hover:bg-muted transition-colors">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Deliver to:</span>
            <span className="text-sm font-medium text-foreground">Andheri, Mumbai</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-foreground hover:bg-secondary">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-foreground hover:bg-secondary relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              Download App
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
