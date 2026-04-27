import { Folder, Github, ExternalLink } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Hands-On SOC Experience (Labs / Home Setup)',
      description: 'Built a Wazuh SIEM lab to monitor Windows and Linux endpoints and analyzed alerts using MITRE ATT&CK techniques. Detected phishing attempts using email header analysis and VirusTotal lookup, investigated brute-force attempts in Windows logs using Splunk queries, and practiced Blue Team response and escalation workflows.',
      tech: ['Wazuh', 'Splunk', 'MITRE ATT&CK', 'Windows Logs', 'Blue Team'],
      githubUrl: 'https://github.com/cybersunnykumar?tab=repositories',
      color: 'primary',
    },
    {
      title: 'Human Error Firewall (HEF)',
      description: 'Developed a full-stack cybersecurity system to detect and prevent risky user behavior in web browsing. Built a FastAPI-based risk engine for real-time risk scoring, created a browser extension to detect phishing and block suspicious actions, and implemented an SOC-style dashboard for incident monitoring and workflow management. Project link available on GitHub.',
      tech: ['FastAPI', 'React', 'Browser Extension', 'SQLite', 'Risk Scoring'],
      githubUrl: 'https://github.com/cybersunnykumar?tab=repositories',
      color: 'secondary',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-4 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-widest">
            &lt;PROJECTS /&gt;
          </span>
          <h2 className="section-title text-card-foreground">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const titleHoverClass = project.color === 'primary' ? 'group-hover:text-primary' : 'group-hover:text-secondary';
            const folderColorClass = project.color === 'primary' ? 'text-primary' : 'text-secondary';

            return (
              <div
                key={index}
                className="card-cyber p-6 md:p-8 group hover:-translate-y-2 transition-all duration-300"
              >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <Folder className={`w-10 h-10 ${folderColorClass}`} />
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <h3 className={`text-xl font-display font-semibold mb-3 transition-colors text-card-foreground ${titleHoverClass}`}>
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs font-mono rounded ${
                      project.color === 'primary' 
                        ? 'text-primary bg-primary/10' 
                        : 'text-secondary bg-secondary/10'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              </div>
            );
          })}
        </div>

        {/* More Projects Indicator */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-muted-foreground font-mono text-sm">
            <span className="text-primary">&gt;</span>
            More projects coming soon...
            <span className="w-2 h-4 bg-primary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
