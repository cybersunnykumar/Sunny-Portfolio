import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MatrixRain from '@/components/MatrixRain';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // SEO Meta Tags
    document.title = 'Sunny Kumar | SOC Analyst (L1)';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Portfolio of Sunny Kumar — entry-level SOC Analyst (L1) focused on security monitoring, log analysis, incident triage, and Blue Team fundamentals.'
      );
    }
  }, []);

  useEffect(() => {
    // HashRouter section routes like #/about should scroll to the matching section
    const section = location.pathname.replace(/^\//, '').trim();
    if (!section) return;

    const allowed = new Set([
      'home',
      'about',
      'experience',
      'projects',
      'certifications',
      'contact',
    ]);

    if (!allowed.has(section)) return;

    requestAnimationFrame(() => {
      document.querySelector(`#${section}`)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative">
      {/* Matrix Background Effect */}
      <MatrixRain />
      
      {/* Scanline Effect */}
      <div className="scanline" />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
