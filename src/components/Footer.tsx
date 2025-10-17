import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Raidoo</h3>
            <p className="text-sm text-primary-foreground/80">
              Ride smart. Go Raidoo.
            </p>
            <button 
              onClick={() => {
                const aboutSection = document.getElementById('about-us');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-4 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors underline"
            >
              About Us
            </button>
          </div>
          
          {/* Contact Us */}
          <div className="text-center space-y-3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@raidoo.pk" className="hover:text-primary-foreground transition-colors">
                info@raidoo.pk
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
              <Phone className="w-4 h-4" />
              <a href="tel:+923001234567" className="hover:text-primary-foreground transition-colors">
                +92 300 1234567
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
              <MapPin className="w-4 h-4" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3 justify-center md:justify-end">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/80">
            © 2025 Raidoo. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
