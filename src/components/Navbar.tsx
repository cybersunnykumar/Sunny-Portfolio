import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' },
  ];

  const navigateToSection = (sectionId: string) => {
    window.location.hash = `#/${sectionId}`;

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    });

    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#/home"
            onClick={(e) => {
              e.preventDefault();
              navigateToSection('home');
            }}
            className="flex items-center gap-2 group"
          >
            <Shield className="w-8 h-8 text-primary group-hover:animate-pulse-glow transition-all" />
            <span className="font-display font-bold text-lg tracking-wider text-primary glow-text">
              Sunny<span className="text-secondary"> Kumar</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#/${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(link.id);
                }}
                className="relative text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 group"
              >
                <span className="text-primary/60 mr-1">&gt;</span>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 terminal-border p-4 mt-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={`#/${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(link.id);
                }}
                className="text-muted-foreground hover:text-primary transition-colors py-2 px-3 hover:bg-primary/10 rounded"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-primary/60 mr-2">[{index}]</span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
