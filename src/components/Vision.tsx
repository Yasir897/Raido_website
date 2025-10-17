import { Eye } from "lucide-react";
import visionImage from "@/assets/vision-image.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Vision = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image (on left for desktop) */}
          <div className={`order-2 md:order-1 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-64">
              <img 
                src={visionImage} 
                alt="Our Vision - Future of Mobility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Text Content (on right for desktop) */}
          <div className={`space-y-4 order-1 md:order-2 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Vision
              </h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To build Pakistan's most trusted and connected travel community — where shared rides become the easiest, safest, and most affordable way to travel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
