import { ChevronDown, Github, Linkedin, Mail, Terminal, Download } from 'lucide-react';
import TypeWriter from './TypeWriter';

const HeroSection = () => {
  const roles = [
    'SOC Analyst (L1)',
    'Security Monitoring',
    'Incident Triage',
    'Blue Team (Defensive)',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal Header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-muted/30 backdrop-blur-sm mb-8 opacity-0 animate-fade-in-up">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono">
              <span className="text-primary">guest@sunny</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-secondary">~</span>
              <span className="text-muted-foreground">$ </span>
              <span className="text-card-foreground">./welcome.sh</span>
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-wider mb-6 opacity-0 animate-fade-in-up animation-delay-200">
            <span className="text-card-foreground">Hello, I'm </span>
            <span className="text-gradient glow-text">SUNNY KUMAR</span>
          </h1>

          {/* Role Typewriter */}
          <div className="text-xl md:text-2xl lg:text-3xl font-mono mb-8 h-12 opacity-0 animate-fade-in-up animation-delay-400">
            <span className="text-muted-foreground">I'm a </span>
            <TypeWriter texts={roles} speed={80} deleteSpeed={40} pauseDuration={2500} />
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up animation-delay-600">
            Entry-level SOC Analyst (L1) trained in security monitoring, log analysis, and incident triage.
            Strong foundation in networking, Linux, and defensive security workflows.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up animation-delay-800">
            <a
              href="/resume/sunny_kumar_resume.pdf"
              download="Sunny_Kumar_Resume.pdf"
              className="btn-cyber-filled w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span className="relative z-10">Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-cyber w-full sm:w-auto"
            >
              <span className="relative z-10">Get In Touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-in-up animation-delay-800">
            <a
              href="https://www.linkedin.com/in/sunny-kumar-a94634275/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border/50 bg-muted/30 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/sunnykumar8905"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border/50 bg-muted/30 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:sunny8905kumar@gmail.com"
              className="p-3 rounded-lg border border-border/50 bg-muted/30 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
