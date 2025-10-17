import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import WaitlistModal from "./WaitlistModal";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToQR = () => {
    const qrSection = document.getElementById("qr-section");
    qrSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-primary shadow-md transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1
            className={`font-bold text-primary-foreground transition-all duration-300 ${
              isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
            }`}
          >
            Raidoo
          </h1>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              size={isScrolled ? "default" : "lg"}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold rounded-full px-6 md:px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Join the Waitlist
            </Button>
          </DialogTrigger>

          <WaitlistModal />
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
