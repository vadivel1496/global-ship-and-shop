import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Package, MapPin, Shield, Clock, Globe } from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: "Global Shopping",
      description: "Access products from any country with transparent pricing and reliable delivery.",
      features: ["Product search by country", "Real-time shipping costs", "Customs duty estimation"],
      buttonText: "Browse Products",
      accent: "accent"
    },
    {
      icon: Package,
      title: "Personal Shipping",
      description: "Send packages internationally with door-to-door service and complete tracking.",
      features: ["Scheduled pickup", "Customs documentation", "Delivery confirmation"],
      buttonText: "Send Package",
      accent: "primary"
    }
  ];

  const features = [
    {
      icon: MapPin,
      title: "Real-time Tracking",
      description: "Track your packages and orders from pickup to delivery with GPS precision."
    },
    {
      icon: Shield,
      title: "Secure & Insured",
      description: "All shipments are fully insured with comprehensive buyer protection."
    },
    {
      icon: Clock,
      title: "Express Delivery",
      description: "Fast international shipping with predictable delivery timeframes."
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Ship to and from 25+ countries with local expertise."
    }
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Choose Your Service</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you want to shop globally or ship personally, we've got you covered with our comprehensive platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isAccent = service.accent === "accent";
            
            return (
              <Card key={index} className="relative overflow-hidden bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 border-0">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-${service.accent}`} />
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${isAccent ? 'bg-gradient-accent' : 'bg-gradient-primary'}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-lg">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                          <div className={`w-2 h-2 rounded-full ${isAccent ? 'bg-accent' : 'bg-primary'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button className={`w-full ${isAccent ? 'bg-gradient-accent' : 'bg-gradient-primary'} hover:opacity-90 transition-opacity`}>
                      {service.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <Card key={index} className="text-center p-6 border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="space-y-4 p-0">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;