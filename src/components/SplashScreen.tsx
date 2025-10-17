import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-primary transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-6xl md:text-7xl font-bold text-primary-foreground">
          Raidoo
        </h1>
        <p className="text-xl text-primary-foreground/80">Ride Smart. Go Raidoo.</p>
      </div>
    </div>
  );
};

export default SplashScreen;
