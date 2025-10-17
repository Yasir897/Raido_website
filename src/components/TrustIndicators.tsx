import { Users, MapPin } from "lucide-react";

const TrustIndicators = () => {
  return (
    <section className="py-8 bg-accent/10 border-y border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-foreground">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <span className="text-base md:text-lg font-medium">
              Trusted by <strong className="text-primary">10,000+</strong> users
            </span>
          </div>
          
          <div className="hidden md:block w-px h-8 bg-border" />
          
          <div className="flex items-center gap-3 animate-fade-in animate-delay-200">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <span className="text-base md:text-lg font-medium">
              Operating in <strong className="text-primary">3 major cities</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
