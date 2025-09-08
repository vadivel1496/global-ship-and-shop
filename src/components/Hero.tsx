import { Button } from "@/components/ui/button";
import { ArrowRight, Package, ShoppingBag, Truck } from "lucide-react";
import heroImage from "@/assets/hero-shipping.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
      <div className="container relative py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Ship Globally,
                <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Shop Everywhere
                </span>
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                The world's most comprehensive cross-border delivery platform. 
                Purchase global products or send personal items with complete transparency and reliability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-strong">
                Start Shopping
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Send Package
                <Package className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">25+</div>
                <div className="text-sm text-white/80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-white/80">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm text-white/80">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            <img
              src={heroImage}
              alt="Global shipping network"
              className="w-full rounded-2xl shadow-strong"
            />
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-3">
              <Truck className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;