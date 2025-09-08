import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Package, Truck, CheckCircle } from "lucide-react";

const TrackingSection = () => {
  const trackingSteps = [
    {
      icon: Package,
      title: "Package Received",
      description: "Your package has been picked up and is being processed",
      status: "completed",
      time: "2 hours ago"
    },
    {
      icon: Truck,
      title: "In Transit",
      description: "Package is on its way to destination country",
      status: "active",
      time: "Current"
    },
    {
      icon: MapPin,
      title: "Customs Clearance",
      description: "Processing through customs",
      status: "pending",
      time: "Estimated 6 hours"
    },
    {
      icon: CheckCircle,
      title: "Delivered",
      description: "Package delivered to recipient",
      status: "pending",
      time: "Estimated 24 hours"
    }
  ];

  return (
    <section className="py-24" id="track">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Track Your Package</h2>
              <p className="text-xl text-muted-foreground">
                Real-time tracking with complete transparency. Know exactly where your package is at every step.
              </p>
            </div>

            <Card className="shadow-medium border-0">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter tracking number (e.g., GC1234567890)"
                      className="flex-1"
                    />
                    <Button className="bg-gradient-primary hover:opacity-90">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    You can also track using order number or reference ID
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">1.2M+</div>
                <div className="text-sm text-muted-foreground">Packages Tracked</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">15s</div>
                <div className="text-sm text-muted-foreground">Avg Update Time</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Real-time Updates</div>
              </div>
            </div>
          </div>

          <Card className="shadow-strong border-0">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Tracking: GC1234567890</h3>
                  <div className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                    In Transit
                  </div>
                </div>

                <div className="space-y-4">
                  {trackingSteps.map((step, index) => {
                    const Icon = step.icon;
                    const isCompleted = step.status === "completed";
                    const isActive = step.status === "active";
                    
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`mt-1 p-2 rounded-full ${
                          isCompleted ? 'bg-primary text-white' :
                          isActive ? 'bg-accent text-white' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className={`font-medium ${
                              isCompleted || isActive ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {step.title}
                            </h4>
                            <span className="text-sm text-muted-foreground">{step.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;