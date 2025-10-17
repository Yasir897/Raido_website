import { Target } from "lucide-react";
import missionImage from "@/assets/mission-image.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Mission = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              To make everyday travel easier, safer, and more affordable for everyone. We will connect people going in the same direction — like students heading to college or workers going to their jobs — so they can share rides, save money, and travel comfortably together.
            </p>
          </div>
          
          {/* Image */}
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl h-64">
              <img 
                src={missionImage} 
                alt="Our Mission - Empowering Communities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
