import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-grooming.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-gradient overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Premium Pet Grooming
            <span className="block text-accent">Your Pets Deserve</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
            Professional, loving care for your furry family members. 
            We make every pet feel pampered and beautiful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              View Services
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional pet grooming service" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;