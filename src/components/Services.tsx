import React from 'react';
import { 
  FaMobileAlt, FaLaptopCode, FaRobot, FaChartLine, 
  FaPaintBrush, FaVideo, FaDesktop, FaSearch 
} from 'react-icons/fa';

const services = [
  { icon: <FaMobileAlt />, title: 'App Development', description: 'Mobile apps for iOS & Android using React Native / Expo.' },
  { icon: <FaLaptopCode />, title: 'Web Development', description: 'Websites and web apps using modern frameworks.' },
  { icon: <FaRobot />, title: 'AI Integration', description: 'Chatbots, automation, and AI-powered solutions.' },
  { icon: <FaChartLine />, title: 'Data Analysis', description: 'Data visualization, dashboards, and insights.' },
  { icon: <FaPaintBrush />, title: 'Graphics Design', description: 'Branding, UI/UX, and marketing visuals.' },
  { icon: <FaVideo />, title: 'Video Editing', description: 'Promotional, training, and social media videos.' },
  { icon: <FaDesktop />, title: 'Software Development', description: 'Custom desktop & enterprise applications.' },
  { icon: <FaSearch />, title: 'SEO', description: 'Search engine optimization for better visibility and ranking.' },
];

function Services() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Services for Learners, Innovators & Businesses Worldwide</h2>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card} className="service-card">
            <div style={styles.icon}>{service.icon}</div>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardDescription}>{service.description}</p>
            <button style={styles.button}>Request Service</button>
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
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '2.5rem',
    color: '#4A1FC4',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: '#333',
  },
  cardDescription: {
    fontSize: '0.95rem',
    color: '#555',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.6rem 1.2rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#4A1FC4',
    color: '#fff',
    fontSize: '0.95rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

// Optional: Add simple hover effect using CSS-in-JS
// If you are using a CSS file, you can move this to a CSS class
const cardHoverStyle = `
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
`;

// Inject hover style into head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = cardHoverStyle;
document.head.appendChild(styleSheet);

export default Services;