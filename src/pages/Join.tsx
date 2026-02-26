import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
function Join() {   
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    techInterests: '',
  });

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }
  
  const webHookURL = import.meta.env.JOIN_US_WEBHOOK_URL;
  console.log("Webhook URL:", webHookURL); // Debugging line to check if the webhook URL is loaded correctly
  const postToDiscord = async () => {
  try {
    const res = await axios.post(
      webHookURL,
      {
        content: `New Join Request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nTech Interests: ${formData.techInterests}`
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    if (res.status === 204) { 
      Swal.fire({
        title: 'Request Sent!',
        text: 'Your request to join has been sent successfully. We will get back to you soon.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'There was an issue sending your request. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }


    console.log("Posted to Discord:", res);
  } catch (err) {
    console.error("Error posting to Discord:", err);
  }
};

  return (
    <div style={styles.container}>

    <div style={styles.card}>
      <h2>Join Our Tech Community</h2>
        <form style={styles.form} onSubmit={(e) => {
          e.preventDefault();
          postToDiscord();
        }}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Full Name"
         value={formData.name}
         onChange={handleChange}
          required
        />
        <input
          style={styles.input}
          type="email"
          name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          
         
          required
        />
        <input
          style={styles.input}
          type="tel"
          name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
         
          required
        />
        <input
          style={styles.input}
          type="text"
          name="location"
          placeholder="Location"
         value={formData.location}
         onChange={handleChange}
          required
        />
        <textarea
          style={styles.textarea}
          name="techInterests"
          placeholder="Tech Interests (optional)"
          value={formData.techInterests}
          onChange={handleChange}
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
