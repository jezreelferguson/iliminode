import React from 'react';

const services = [
  { title: 'App Development', description: 'Mobile apps for iOS & Android using React Native / Expo.' },
  { title: 'Web Development', description: 'Websites and web apps using modern frameworks.' },
  { title: 'AI Integration', description: 'Chatbots, automation, and AI-powered solutions.' },
  { title: 'Data Analysis', description: 'Data visualization, dashboards, and insights.' },
  { title: 'Graphics Design', description: 'Branding, UI/UX, and marketing visuals.' },
  { title: 'Video Editing', description: 'Promotional, training, and social media videos.' },
  { title: 'Software Development', description: 'Custom desktop & enterprise applications.' },
  { title: 'Computer Networking', description: 'Network setup, security, and troubleshooting.' },
  { title: 'Computer Networking', description: 'Network setup, security, and troubleshooting.' },
  { title: 'SEO ', description: 'Search engine optimization for better visibility and ranking.' },
];

function Services() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Services for Learners & Businesses</h2>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.2s',
    cursor: 'default',
  },
  cardTitle: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: '#333',
  },
  cardDescription: {
    fontSize: '0.95rem',
    color: '#555',
  },
};

export default Services;
