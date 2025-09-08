import { Globe, Package, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Global Shopping", href: "#shop" },
        { name: "Personal Shipping", href: "#ship" },
        { name: "Package Tracking", href: "#track" },
        { name: "Express Delivery", href: "#express" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Contact Us", href: "#contact" },
        { name: "Shipping Guide", href: "#guide" },
        { name: "Live Chat", href: "#chat" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Partners", href: "#partners" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Shipping Terms", href: "#shipping-terms" },
        { name: "Refund Policy", href: "#refunds" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook" },
    { icon: Twitter, href: "#twitter" },
    { icon: Instagram, href: "#instagram" },
    { icon: Linkedin, href: "#linkedin" }
  ];

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Globe className="h-8 w-8 text-primary" />
                <Package className="absolute -bottom-1 -right-1 h-4 w-4 text-accent" />
              </div>
              <span className="text-xl font-bold">GlobalCourier</span>
            </div>
            
            <p className="text-muted-foreground max-w-md">
              The world's most comprehensive cross-border delivery platform. 
              Ship globally, shop everywhere with complete transparency and reliability.
            </p>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-primary/10 hover:bg-primary hover:text-white rounded-lg transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 GlobalCourier. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0">
            <span className="text-sm text-muted-foreground">Available in 25+ countries</span>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Live tracking active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;