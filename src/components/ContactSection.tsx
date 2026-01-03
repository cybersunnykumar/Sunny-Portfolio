import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9173399018',
      href: 'tel:+919173399018',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'sunny8905kumar@gmail.com',
      href: 'mailto:sunny8905kumar@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sunnykumar',
      href: 'https://linkedin.com/in/sunnykumar',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Gujarat, India',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 px-4 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-widest">
            &lt;CONTACT /&gt;
          </span>
          <h2 className="section-title text-card-foreground">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="card-cyber p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 text-muted-foreground font-mono text-sm">
              <span className="text-primary">&gt;</span>
              <span>contact --info</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div key={index}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-muted/20 hover:border-primary/50 hover:bg-primary/5 transition-all group h-full"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground font-mono block">{item.label}</span>
                        <span className="text-card-foreground font-medium text-sm">{item.value}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-lg border border-border/50 bg-muted/20 h-full">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-muted-foreground font-mono block">{item.label}</span>
                        <span className="text-card-foreground font-medium text-sm">{item.value}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Download Resume CTA */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <a
                href="/resume/sunny_kumar_resume.pdf"
                download="Sunny_Kumar_Resume.pdf"
                className="btn-cyber-filled w-full flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download My Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
