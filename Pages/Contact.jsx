import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions or suggestions? Reach out to us directly or via the form below.</p>
      </section>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Library Contact Info</h2>
          <p><strong>Address:</strong> Pt. Jawahar Lal Nehru Central Library<br /> Sagar, Madhya Pradesh, India [470001]</p>
          <p><strong>Phone:</strong> +9162XXXXXX48</p>
          <p><strong>Email:</strong>raxxxxxxxxxxxxxxxxxx@gmail.com</p>
        </div>

        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="number" placeholder="Your Number" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};