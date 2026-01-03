import { Code2, Database, Shield, Terminal, Cpu, Network, FileCode, BarChart3, Globe } from 'lucide-react';
import profileImage from '@/assets/sunny-profile.jpg';

const AboutSection = () => {
  const skills = [
    { name: 'Python', icon: Code2 },
    { name: 'Django', icon: Terminal },
    { name: 'REST API', icon: Globe },
    { name: 'Pandas', icon: BarChart3 },
    { name: 'NumPy', icon: Cpu },
    { name: 'Scikit-learn', icon: Database },
    { name: 'Matplotlib', icon: BarChart3 },
    { name: 'HTML', icon: FileCode },
    { name: 'Nmap', icon: Network },
    { name: 'Network Security', icon: Shield },
    { name: 'Data Analysis', icon: Database },
    { name: 'Machine Learning', icon: Cpu },
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
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                
                {/* Image Container */}
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-primary/50">
                  <img
                    src={profileImage}
                    alt="Sunny Kumar - Python Developer & Cybersecurity Enthusiast"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-secondary" />
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
                  I am a technically skilled professional with strong knowledge of 
                  <span className="text-primary font-semibold"> Python, Django, and REST API</span> development. 
                  Proficient in backend development and automation scripting.
                </p>
                <p>
                  I excel in building <span className="text-secondary font-semibold">efficient, scalable web applications</span>. 
                  With a B.Sc. in Mathematics, I bring strong analytical and problem-solving abilities 
                  to every project I work on.
                </p>
                <p>
                  Currently focusing on <span className="text-primary font-semibold">cybersecurity</span> and 
                  network analysis tools, combining my development skills with security expertise 
                  to deliver reliable technical solutions.
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
