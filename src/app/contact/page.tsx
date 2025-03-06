"use client"; // Required in Next.js App Router

import { useState } from "react";
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("/api/contact", {
        // ✅ Correct API route
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setResponse("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form after success
    } catch (error: unknown) {
      console.error("❌ Error sending email:", error);
      setResponse("❌ Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <div className="form">
      <h2>Contact Us</h2>
      <div className="input">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea
              placeholder="Your Message"
              name="message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
          {response && <p>{response}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
