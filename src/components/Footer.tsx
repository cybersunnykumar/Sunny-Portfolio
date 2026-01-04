import { Shield, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/30 relative">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-display font-bold text-sm tracking-wider text-primary">
              Sunny<span className="text-secondary"> Kumar</span>
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono flex items-center gap-2">
            <span>&copy; {currentYear}</span>
            <span className="text-primary">|</span>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive inline animate-pulse" />
            <span>by Sunny Kumar</span>
          </p>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono flex items-center gap-1"
          >
            <span className="text-primary">&gt;</span>
            scroll_to_top()
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
