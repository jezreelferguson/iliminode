import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const postToDiscord = async () => {
    try {
      const webhookURL =import.meta.env.CONTACT_WEBHOOK_URL;
      const res = await axios.post(webhookURL, {
        content: `New Contact Message:\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (res.status === 204) {
        Swal.fire('Success', 'Your message has been sent successfully!. We will get back to you soon.', 'success');
      }else {
        Swal.fire('Error', 'There was an issue sending your message. Please try again later.', 'error');
      }
      // console.log("Posted to Discord:", res);
    } catch (err) {
      console.error("Error posting to Discord:", err);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Contact Us</h2>
        <p style={styles.subText}>
          We'd love to hear from you. Send us a message!
        </p>

        <form onSubmit={(e) => {
          e.preventDefault();
          postToDiscord();
        }} style={styles.form}> 
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            style={styles.textarea}
            rows={5}
            required
          />

          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "500px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
  },
  heading: {
    marginBottom: "10px",
    fontSize: "28px",
    textAlign: "center",
    color: "#1f2937",
  },
  subText: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#6b7280",
    fontSize: "14px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    outline: "none",
    transition: "0.3s",
  },
  textarea: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    fontSize: "14px",
    resize: "none",
    outline: "none",
  },
  button: {
    marginTop: "10px",
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    color: "#fff",
    transition: "0.3s",
  },
};
