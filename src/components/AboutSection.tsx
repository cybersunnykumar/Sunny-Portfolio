import { Code2, Shield, Terminal, Network, Monitor, Bug, FileSearch, Activity, Laptop } from 'lucide-react';
import profileImage from '@/assets/WhatsApp Image 2026-02-23 at 2.04.57 PM.jpeg';

const AboutSection = () => {
  const skills = [
    { name: 'Python', icon: Code2 },
    { name: 'Nmap', icon: Network },
    { name: 'Gobuster', icon: Terminal },
    { name: 'SQLmap', icon: Terminal },
    { name: 'Metasploit', icon: Bug },
    { name: 'Hashcat', icon: Terminal },
    { name: 'Nuclei', icon: Bug },
    { name: 'Wazuh', icon: Monitor },
    { name: 'Splunk (Basics)', icon: FileSearch },
    { name: 'Security Monitoring', icon: Monitor },
    { name: 'Threat Detection', icon: Activity },
    { name: 'Threat Hunting', icon: Shield },
    { name: 'Incident Response', icon: Shield },
    { name: 'Log Correlation', icon: FileSearch },
    { name: 'Windows', icon: Laptop },
    { name: 'Kali Linux', icon: Terminal },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-widest">
            &lt;ABOUT_ME /&gt;
          </span>
          <h2 className="section-title text-card-foreground">
            Who <span className="text-gradient">Am I</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Photo & About Text */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[30rem] md:h-[30rem] overflow-hidden rounded-3xl">
                  <img
                    src={profileImage}
                    alt="Sunny Kumar - Cybersecurity Analyst"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="card-cyber p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4 text-muted-foreground font-mono text-sm">
                <span className="text-primary">&gt;</span>
                <span>cat about.txt</span>
              </div>
              <div className="space-y-4 text-card-foreground leading-relaxed">
                <p>
                  I&apos;m an <span className="text-primary font-semibold">entry-level Cybersecurity Analyst</span> with hands-on
                  experience in SOC workflows and penetration testing labs.
                </p>
                <p>
                  I work with tools like <span className="text-secondary font-semibold">Nmap, Gobuster, SQLmap, Metasploit,
                  Hashcat, Nuclei, Wazuh, and Splunk</span> for vulnerability scanning, network enumeration,
                  and security monitoring.
                </p>
                <p>
                  My core strengths include <span className="text-primary font-semibold">networking, Linux systems, threat
                  detection, incident response, and ethical hacking fundamentals</span>, and I am focused on
                  growing in cybersecurity operations.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="card-cyber p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6 text-muted-foreground font-mono text-sm">
              <span className="text-primary">&gt;</span>
              <span>ls ./skills</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-3 rounded-lg border border-border/50 bg-muted/20 hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-default"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <skill.icon className="w-5 h-5 text-primary group-hover:text-secondary transition-colors" />
                  <span className="font-mono text-sm text-card-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
