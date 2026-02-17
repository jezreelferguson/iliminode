import React, { useState } from 'react';

function Join() {   
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    techInterests: '',
  });



  return (
    <div style={styles.container}>

    <div style={styles.card}>
      <h2>Join Our Tech Community</h2>
      <form style={styles.form} onSubmit={(e) => {
        e.preventDefault();
        console.log('Join Request:', formData);
      }}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
         
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
         
          required
        />
        <input
          style={styles.input}
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
         
          required
        />
        <input
          style={styles.input}
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
         
          required
        />
        <textarea
          style={styles.textarea}
          name="techInterests"
          placeholder="Tech Interests (optional)"
          value={formData.techInterests}
         
        />
        <button style={styles.button} type="submit">Request to Join</button>
      </form>
    </div>
    </div>

  );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
justifyContent: 'center',
alignItems: 'center',
display: 'grid',
minHeight: '100vh',
  },
  card: {
    padding: '2rem',
    textAlign: 'center',
    maxWidth: '500px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginTop: '1rem',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.8rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    resize: 'vertical',
    minHeight: '80px',
  },
  button: {
    padding: '0.8rem',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#6639D6',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};

export default Join;
