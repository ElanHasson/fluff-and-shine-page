import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Heart, Sparkles, Shield } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Full Service Grooming",
    description: "Complete bath, cut, nail trim, and styling for all breeds",
    price: "Starting at $45"
  },
  {
    icon: Heart,
    title: "Spa Treatment",
    description: "Relaxing aromatherapy bath with premium products",
    price: "Starting at $35"
  },
  {
    icon: Sparkles,
    title: "Express Wash",
    description: "Quick wash and dry for busy pet parents",
    price: "Starting at $25"
  },
  {
    icon: Shield,
    title: "Nail & Dental Care",
    description: "Nail trimming and teeth cleaning services",
    price: "Starting at $20"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive grooming services to keep your pets healthy, happy, and looking their best.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-2 border-border">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-warm-gradient rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold text-primary">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;