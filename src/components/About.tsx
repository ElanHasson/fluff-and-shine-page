import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const features = [
  "15+ Years Experience",
  "Certified Groomers",
  "All Breed Specialists",
  "Gentle, Patient Care",
  "Premium Products Only",
  "Stress-Free Environment"
];

const About = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4 text-sm">
              ABOUT US
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Where Pets Feel 
              <span className="text-primary"> at Home</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We're passionate pet lovers dedicated to providing the highest quality grooming services. 
              Our experienced team treats every pet like family, ensuring a safe, comfortable, and 
              enjoyable experience for both pets and their parents.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-warm-gradient rounded-2xl p-8 text-center shadow-warm">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Happy Pets</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">98%</div>
                  <div className="text-sm opacity-90">Customer Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold">24/7</div>
                  <div className="text-sm opacity-90">Care & Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;