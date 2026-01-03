import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'Advance Diploma in Computer Application (ADCA)',
      issuer: 'Bharatiya Computer Technology',
      year: '2024',
      description: 'Covering MS Office, Tally, DTP, Computer Maintenance, C Language, HTML. Gained strong practical and theoretical skills in office productivity tools, accounting software, and basic programming.',
      skills: ['MS Office', 'Tally', 'C Language', 'HTML'],
    },
    {
      title: 'Python Essentials 1 & 2',
      issuer: 'Cisco',
      year: '2025',
      description: 'Strong skills in Python programming, problem-solving, data structures, OOP, file handling, and foundational network automation.',
      skills: ['Python', 'OOP', 'Data Structures', 'Network Automation'],
    },
    {
      title: 'Python Django 101',
      issuer: 'Simplilearn',
      year: '2025',
      description: 'Completed certified training covering Django fundamentals, including models, views, templates, routing, and basic CRUD operations.',
      skills: ['Django', 'Models', 'Views', 'Templates', 'CRUD'],
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 px-4 relative">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-widest">
            &lt;CERTIFICATIONS /&gt;
          </span>
          <h2 className="section-title text-card-foreground">
            Awards & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-cyber p-6 group hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-mono text-muted-foreground px-2 py-1 rounded bg-muted/50">
                  {cert.year}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-secondary font-mono mb-3">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1 px-2 py-1 text-xs font-mono text-primary/80 bg-primary/5 rounded"
                  >
                    <CheckCircle className="w-3 h-3" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
