import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "(555) 123-PETS",
    subtext: "Mon-Sat: 8AM-6PM"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Pet Love Lane",
    subtext: "Happy Valley, CA 90210"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Sat: 8AM-6PM",
    subtext: "Sunday: Closed"
  },
  {
    icon: Mail,
    title: "Email",
    details: "hello@petgrooming.com",
    subtext: "We'll respond within 2 hours"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Ready to Book?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contact us today to schedule your pet's grooming appointment. We can't wait to meet your furry friend!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center shadow-soft border-border">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-hero-gradient rounded-full flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg text-foreground">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-foreground mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtext}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-hero-gradient rounded-2xl p-8 md:p-12 text-center shadow-soft">
          <div className="max-w-2xl mx-auto text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Appointment Today!
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Give your pet the premium grooming experience they deserve. 
              Professional care with a personal touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Schedule Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Call (555) 123-PETS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;