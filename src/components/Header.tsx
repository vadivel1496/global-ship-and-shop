import { Button } from "@/components/ui/button";
import { Globe, Package, User, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Globe className="h-8 w-8 text-primary" />
              <Package className="absolute -bottom-1 -right-1 h-4 w-4 text-accent" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              GlobalCourier
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#shop" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Shop Globally
          </a>
          <a href="#ship" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Ship Packages
          </a>
          <a href="#track" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Track Orders
          </a>
          <a href="#support" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Support
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;