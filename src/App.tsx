import React, { useState, useEffect, useRef } from 'react';
import logo from './assets/images/iliminodem.jpg';

const IliminodeWebsite: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  interface MissionCard {
    icon: string;
    title: string;
    description: string;
  }

  const missionCards: MissionCard[] = [
    {
      icon: '💻',
      title: 'Practical Skills',
      description: 'Learn hands-on coding, design, and development skills that matter in the real world.',
    },
    {
      icon: '🛠️',
      title: 'Real Projects',
      description: 'Work on actual projects that solve community problems and build your portfolio.',
    },
    {
      icon: '🤝',
      title: 'Mentorship',
      description: 'Connect with experienced developers who guide, support, and inspire your growth.',
    },
    {
      icon: '🌍',
      title: 'Collaboration',
      description: 'Build relationships with fellow learners and creators in a supportive environment.',
    },
  ];

  const values = [
    { emoji: '📚', title: 'Learn' },
    { emoji: '🚀', title: 'Build' },
    { emoji: '🔗', title: 'Connect' },
  ];

  const stats = [
    { number: '50+', label: 'Active Members' },
    { number: '20+', label: 'Projects Built' },
    { number: '100%', label: 'Community Driven' },
  ];

  return (
    <div style={styles.container}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          33% {
            transform: translate(40px, -40px) rotate(120deg) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) rotate(240deg) scale(0.95);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.12;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0%, 100% { 
            background-position: 0% 50%; 
            filter: hue-rotate(0deg);
          }
          50% { 
            background-position: 100% 50%;
            filter: hue-rotate(15deg);
          }
        }

        @keyframes borderDance {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }
          75% {
            border-radius: 60% 40% 60% 40% / 70% 30% 50% 60%;
          }
        }

        .fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1), 
                      transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .mission-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mission-card:hover {
          transform: translateY(-12px) scale(1.02);
        }

        .value-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .value-item:hover {
          transform: scale(1.08) rotate(-2deg);
        }

        .btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-4px);
        }

        .nav-link {
          position: relative;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background: #4A1FC4;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .social-icon {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .social-icon:hover {
          transform: scale(1.3) rotate(10deg);
          color: #7D4EFF !important;
        }
      `}</style>

      {/* Background Shapes */}
      <div style={styles.bgShapes}>
        <div style={{ ...styles.shape, ...styles.shape1 }} />
        <div style={{ ...styles.shape, ...styles.shape2 }} />
        <div style={{ ...styles.shape, ...styles.shape3 }} />
        <div style={{ ...styles.shape, ...styles.shape4 }} />
      </div>

      {/* Header */}
      <header style={{
        ...styles.header,
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(74, 31, 196, 0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}>
        <div style={styles.logo}>iliminode</div>
        <nav style={styles.nav}>
          <span className="nav-link" onClick={() => scrollToSection('about')} style={styles.navLink}>About</span>
          <span className="nav-link" onClick={() => scrollToSection('mission')} style={styles.navLink}>Mission</span>
          <span className="nav-link" onClick={() => scrollToSection('values')} style={styles.navLink}>Values</span>
          <span className="nav-link" onClick={() => scrollToSection('join')} style={styles.navLink}>Join Us</span>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <img src={logo} alt="Iliminode Logo" style={{ width: '320px', marginBottom: '1.5rem', borderRadius: '20px' }} />
        <div style={styles.heroTagline}>Sowutoum's Tech Community</div>
        <p style={styles.heroSubtitle}>
          A grassroots tech community in Sowutoum–Israel, Accra, bringing people together to learn, build, and grow through technology.
        </p>
        <div style={styles.ctaContainer}>
          <button className="btn" onClick={() => scrollToSection('join')} style={{ ...styles.btn, ...styles.btnPrimary }}>
            Join the Community
          </button>
          <button className="btn" onClick={() => scrollToSection('mission')} style={{ ...styles.btn, ...styles.btnSecondary }}>
            Learn More
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section
        id="mission"
        ref={(el) => (sectionsRef.current['mission'] = el)}
        className={`fade-in-up ${visibleSections.has('mission') ? 'visible' : ''}`}
        style={styles.mission}
      >
        <h2 style={styles.sectionTitle}>What We Do</h2>
        <div style={styles.missionGrid}>
          {missionCards.map((card, index) => (
            <div key={index} className="mission-card" style={styles.missionCard}>
              <div style={styles.cardIcon}>{card.icon}</div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardDescription}>{card.description}</p>
            </div>
          ))}
        </div>
        <div style={styles.missionStatement}>
          At Iliminode, we believe technology is a tool for empowerment. Our goal is to nurture local talent, encourage innovation, and connect the Sowutoum community to global tech opportunities.
        </div>
      </section>

      {/* Values Section */}
      <section
        id="values"
        ref={(el) => (sectionsRef.current['values'] = el)}
        className={`fade-in-up ${visibleSections.has('values') ? 'visible' : ''}`}
        style={styles.values}
      >
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <div style={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className="value-item" style={styles.valueItem}>
              <span style={styles.valueEmoji}>{value.emoji}</span>
              <h3 style={styles.valueTitle}>{value.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section
        id="join"
        ref={(el) => (sectionsRef.current['join'] = el)}
        className={`fade-in-up ${visibleSections.has('join') ? 'visible' : ''}`}
        style={styles.community}
      >
        <h2 style={styles.communityTitle}>Join Our Growing Community</h2>
        <p style={styles.communityText}>
          Whether you're a beginner taking your first steps or an experienced developer looking to give back, there's a place for you at Iliminode.
        </p>
        <div style={styles.stats}>
          {stats.map((stat, index) => (
            <div key={index} style={styles.statItem}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContent}>
          <div style={styles.footerLogo}>Iliminode</div>
          <div style={styles.footerTagline}>Learn. Build. Connect.</div>
          <div style={styles.socialLinks}>
            <span className="social-icon" style={styles.socialIcon}>𝕏</span>
            <span className="social-icon" style={styles.socialIcon}>⚡</span>
            <span className="social-icon" style={styles.socialIcon}>💬</span>
            <span className="social-icon" style={styles.socialIcon}>✉️</span>
          </div>
          <div style={styles.footerInfo}>
            <p>Based in Sowutoum–Israel, Accra, Ghana</p>
            <p style={{ marginTop: '0.5rem' }}>&copy; 2026 Iliminode. Empowering our community through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    fontFamily: "'Outfit', sans-serif",
    background: '#fff',
    color: '#1a1a1a',
    overflowX: 'hidden',
    lineHeight: 1.6,
  },

  // Background Shapes
  bgShapes: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  shape: {
    position: 'absolute',
    background: '#4A1FC4',
  },
  shape1: {
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    top: '-150px',
    left: '5%',
    opacity: 0.06,
    animation: 'float 25s infinite ease-in-out',
  },
  shape2: {
    width: '300px',
    height: '300px',
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    top: '30%',
    right: '8%',
    opacity: 0.08,
    animation: 'float 20s infinite ease-in-out, borderDance 15s infinite ease-in-out',
    animationDelay: '2s',
  },
  shape3: {
    width: '350px',
    height: '350px',
    borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
    bottom: '10%',
    left: '10%',
    opacity: 0.05,
    animation: 'float 30s infinite ease-in-out, pulse 8s infinite ease-in-out',
    animationDelay: '5s',
  },
  shape4: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    bottom: '30%',
    right: '15%',
    opacity: 0.07,
    animation: 'float 22s infinite ease-in-out',
    animationDelay: '8s',
  },

  // Header
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    padding: '1.5rem 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    animation: 'slideDown 0.8s ease-out',
    transition: 'all 0.3s ease',
  },
  logo: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '2rem',
    fontWeight: 800,
    color: '#4A1FC4',
    letterSpacing: '-0.03em',
  },
  nav: {
    display: 'flex',
    gap: '2.5rem',
  },
  navLink: {
    fontWeight: 500,
    fontSize: '1.05rem',
    color: '#1a1a1a',
  },

  // Hero Section
  hero: {
    position: 'relative',
    zIndex: 1,
    padding: '8rem 5% 10rem',
    textAlign: 'center' as const,
    animation: 'fadeInUp 1s ease-out 0.3s both',
  },
  heroTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 'clamp(4rem, 10vw, 8rem)',
    fontWeight: 900,
    lineHeight: 1,
    marginBottom: '1.5rem',
    background: 'linear-gradient(135deg, #4A1FC4 0%, #7D4EFF 50%, #4A1FC4 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    animation: 'gradientShift 8s ease infinite',
    backgroundSize: '200% 200%',
    letterSpacing: '-0.04em',
  },
  heroTagline: {
    fontSize: 'clamp(1.3rem, 3vw, 2rem)',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '1.5rem',
    letterSpacing: '-0.01em',
  },
  heroSubtitle: {
    fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
    color: '#4a4a4a',
    maxWidth: '850px',
    margin: '0 auto 3.5rem',
    lineHeight: 1.8,
    fontWeight: 400,
  },
  ctaContainer: {
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
  },
  btn: {
    padding: '1.1rem 2.8rem',
    fontSize: '1.1rem',
    fontWeight: 600,
    border: 'none',
    borderRadius: '60px',
    fontFamily: "'Outfit', sans-serif",
    letterSpacing: '-0.01em',
  },
  btnPrimary: {
    background: '#4A1FC4',
    color: 'white',
    boxShadow: '0 12px 35px rgba(74, 31, 196, 0.35)',
  },
  btnSecondary: {
    background: 'transparent',
    color: '#4A1FC4',
    border: '2.5px solid #4A1FC4',
  },

  // Mission Section
  mission: {
    position: 'relative',
    zIndex: 1,
    padding: '5rem 5%',
    background: '#fafafa',
    margin: '0 5%',
    borderRadius: '50px',
    boxShadow: '0 25px 70px rgba(74, 31, 196, 0.08)',
  },
  sectionTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    textAlign: 'center' as const,
    marginBottom: '4rem',
    color: '#1a1a1a',
    letterSpacing: '-0.03em',
  },
  missionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    marginBottom: '3.5rem',
  },
  missionCard: {
    background: 'white',
    padding: '2.5rem',
    borderRadius: '30px',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    border: '2px solid transparent',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.04)',
  },
  cardIcon: {
    fontSize: '3.5rem',
    marginBottom: '1.2rem',
  },
  cardTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '1.6rem',
    fontWeight: 700,
    marginBottom: '1rem',
    color: '#4A1FC4',
    letterSpacing: '-0.02em',
  },
  cardDescription: {
    color: '#4a4a4a',
    fontSize: '1.05rem',
    lineHeight: 1.7,
  },
  missionStatement: {
    background: 'linear-gradient(135deg, #4A1FC4 0%, #6639D6 100%)',
    padding: '3.5rem 3rem',
    borderRadius: '30px',
    color: 'white',
    textAlign: 'center' as const,
    fontSize: '1.35rem',
    fontWeight: 500,
    lineHeight: 1.9,
    boxShadow: '0 20px 50px rgba(74, 31, 196, 0.25)',
  },

  // Values Section
  values: {
    position: 'relative',
    zIndex: 1,
    padding: '7rem 5%',
  },
  valuesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2.5rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  valueItem: {
    background: '#fafafa',
    padding: '3rem 2rem',
    borderRadius: '30px',
    textAlign: 'center' as const,
    border: '3px solid #f0f0f0',
  },
  valueEmoji: {
    fontSize: '4rem',
    marginBottom: '1.5rem',
    display: 'block',
  },
  valueTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '2rem',
    fontWeight: 800,
    color: '#4A1FC4',
    letterSpacing: '-0.02em',
  },

  // Community Section
  community: {
    position: 'relative',
    zIndex: 1,
    padding: '7rem 5%',
    background: '#4A1FC4',
    color: 'white',
    textAlign: 'center' as const,
  },
  communityTitle: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontWeight: 800,
    marginBottom: '2rem',
    letterSpacing: '-0.03em',
  },
  communityText: {
    fontSize: '1.3rem',
    maxWidth: '750px',
    margin: '0 auto 4rem',
    lineHeight: 1.8,
    opacity: 0.95,
    fontWeight: 400,
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '3rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  statItem: {
    padding: '2rem',
  },
  statNumber: {
    fontFamily: "'Outfit', sans-serif",
    fontSize: '4rem',
    fontWeight: 900,
    marginBottom: '0.5rem',
    letterSpacing: '-0.03em',
  },
  statLabel: {
    fontSize: '1.15rem',
    opacity: 0.9,
    fontWeight: 500,
  },

  // Footer
  footer: {
    position: 'relative',
    zIndex: 1,
    padding: '5rem 5%',
    background: '#1a1a1a',
    color: 'white',
    textAlign: 'center' as const,
  },
  footerContent: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  footerLogo: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '2.8rem',
    fontWeight: 800,
    color: '#4A1FC4',
    marginBottom: '1rem',
    letterSpacing: '-0.03em',
  },
  footerTagline: {
    fontSize: '1.3rem',
    marginBottom: '2.5rem',
    opacity: 0.85,
    fontWeight: 500,
  },
  socialLinks: {
    display: 'flex',
    gap: '2.5rem',
    justifyContent: 'center',
    marginBottom: '2.5rem',
  },
  socialIcon: {
    fontSize: '2rem',
    color: 'white',
  },
  footerInfo: {
    fontSize: '1rem',
    opacity: 0.7,
    marginTop: '2rem',
    lineHeight: 1.8,
  },
};

export default IliminodeWebsite;