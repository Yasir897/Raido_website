import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const AboutUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about-us" ref={ref} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto text-center space-y-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Raidoo is redefining urban mobility — connecting riders and drivers with smarter, safer, and community-driven rides. 
            Built with innovation and trust at its core, we're committed to making every journey comfortable, affordable, and reliable. 
            Our vision is to transform the way Pakistan moves, one ride at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
