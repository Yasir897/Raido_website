import { User, Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const audiences = [
  {
    icon: User,
    title: "For Riders",
    description: "Book rides instantly with just a few taps. Pay easily through multiple payment options and track your ride in real-time.",
    features: ["Instant booking", "Multiple payment options", "Real-time tracking", "24/7 support"],
  },
  {
    icon: Car,
    title: "For Drivers",
    description: "Earn more with flexible working hours. Be your own boss and grow your income with Raidoo's driver-friendly platform.",
    features: ["Flexible schedule", "Better earnings", "Weekly payouts", "Driver support"],
  },
];

const RidersDrivers = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            For Riders & Drivers
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you need a ride or want to earn, Raidoo has you covered
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 hover:scale-105 border-border bg-card ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <audience.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground">
                    {audience.title}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {audience.description}
                </p>
                <ul className="space-y-2">
                  {audience.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RidersDrivers;
