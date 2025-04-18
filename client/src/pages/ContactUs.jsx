// ContactForm.jsx
import styles from "./ContactUs.module.css";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };
    setLoading(true); // start loading
    try {
      const api = import.meta.env.VITE_API_URL;

      // Example:
      const response = await fetch(`${api}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        e.target.reset();
        setToast(true);
        confetti();
        setTimeout(() => setToast(false), 3000);
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.subheading}>
          Have a question or want to work together? Fill out the form below!
        </p>

        <div className={styles.inputGroup}>
          <span className={styles.icon}>👤</span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <span className={styles.icon}>📧</span>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <span className={styles.icon}>💬</span>
          <textarea
            name="message"
            placeholder="Your Message"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? <span className={styles.spinner}></span> : null}
          {loading ? "Sending..." : "Send Message"}
        </button>

        {toast && <div className={styles.toast}>✅ Message Sent!</div>}
      </form>
    </div>
  );
}
