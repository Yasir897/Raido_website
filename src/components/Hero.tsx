import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import phoneMockup from "@/assets/phone-mockup.png";
import TypewriterText from "@/components/TypewriterText";
import AnimatedCircles from "@/components/AnimatedCircles";

const Hero = () => {
  const scrollToQR = () => {
    const qrSection = document.getElementById('qr-section');
    qrSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 w-full overflow-hidden">
      {/* Background Image with Overlay - Fixed Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50 bg-fixed"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-accent/15" />
      </div>
      
      {/* Animated SVG Circles */}
      <AnimatedCircles />
      
      {/* Content */}
      <div className="w-full px-4 py-20 relative z-10">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 relative text-primary min-h-[120px] md:min-h-[140px] lg:min-h-[160px]">
                <TypewriterText text="More than a ride — it's Raido" />
                <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-full" />
              </h2>
            </div>
            <p className="text-lg md:text-xl text-white max-w-xl leading-relaxed">
              Raido — Pakistan's first homegrown ride-hailing company — is committed to making travelling more affordable, easier, safer, not just for passengers, but for riders too.
            </p>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="flex justify-end items-start animate-fade-in animate-delay-200 -mt-12 lg:-mt-20">
            {/* Phone Mockup */}
            <div className="relative animate-float">
              <img 
                src={phoneMockup}
                alt="Raidoo App Interface"
                className="w-48 md:w-64 lg:w-80 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
