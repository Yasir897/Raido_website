import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Raidoo made daily travel so easy!",
    author: "Ahmed Khan",
    location: "Karachi",
  },
  {
    text: "Reliable and affordable — love the app.",
    author: "Fatima Ali",
    location: "Lahore",
  },
  {
    text: "Great driver support system.",
    author: "Hassan Malik",
    location: "Islamabad",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          What Our Users Say
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real experiences from real people using Raidoo every day
        </p>
        
        <div className="max-w-3xl mx-auto relative h-64">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <Quote className="w-12 h-12 text-primary mx-auto opacity-50" />
                <p className="text-xl md:text-2xl text-foreground font-medium italic">
                  "{testimonial.text}"
                </p>
                <div className="text-muted-foreground">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
