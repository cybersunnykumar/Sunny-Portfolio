import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'IBM Intern',
      company: 'Dataview Analytics',
      location: 'Remote',
      period: 'October 2024 – November 2024',
      points: [
        'Gained hands-on experience with Python, Pandas, NumPy, and Scikit-Learn for data preprocessing and model building',
        'Worked on classification and regression problems, applying algorithms like SVM and Decision Trees',
        'Performed data cleaning, feature engineering, and model evaluation to improve accuracy',
        'Learned industry practices in data analysis, visualization (Matplotlib, Seaborn), and reporting',
      ],
    },
  ];

  const education = {
    degree: 'B.Sc. Mathematics',
    institution: 'Atmanand Saraswati Science College, Surat (Gujarat)',
    year: '2023',
    cgpa: '6.3 / 10',
  };

  return (
    <section id="experience" className="py-20 md:py-32 px-4 relative">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-mono text-sm mb-4 tracking-widest">
            &lt;EXPERIENCE /&gt;
          </span>
          <h2 className="section-title text-card-foreground">
            My <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div className="space-y-8">
            <h3 className="text-xl font-display font-semibold text-primary flex items-center gap-3">
              <Briefcase className="w-6 h-6" />
              Work Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                
                <div className="card-cyber p-6">
                  <h4 className="text-lg font-semibold text-card-foreground mb-1">{exp.title}</h4>
                  <p className="text-primary font-mono text-sm mb-3">{exp.company}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-sm text-card-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-xl font-display font-semibold text-secondary flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </h3>
            
            <div className="card-cyber p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-[60px]" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-4 text-muted-foreground font-mono text-sm">
                  <span className="text-secondary">&gt;</span>
                  <span>education --details</span>
                </div>
                
                <h4 className="text-2xl font-display font-bold text-card-foreground mb-2">
                  {education.degree}
                </h4>
                <p className="text-secondary font-mono mb-4">{education.institution}</p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <span className="text-xs text-muted-foreground font-mono block mb-1">GRADUATED</span>
                    <span className="text-lg font-semibold text-card-foreground">{education.year}</span>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/30 border border-border/50">
                    <span className="text-xs text-muted-foreground font-mono block mb-1">CGPA</span>
                    <span className="text-lg font-semibold text-primary">{education.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
