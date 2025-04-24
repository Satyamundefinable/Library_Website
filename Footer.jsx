import './Footer.css';
import { NavLink } from "react-router-dom";

export const Footers = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2> Pt. Jawahar Lal Nehru Central Library</h2>
          <h3>Inaugurated by Pt. JawaharLal Nehru</h3>
          <p>Empowering knowledge since 1946</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: raxxxxxxxxxxxxxxxxxx@gmail.com</p>
          <p>Phone: +91 62XXXXXX48</p>
          <p>Address: Sagar, Madhya Pradesh [470001]</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} JNC Library. All rights reserved.</p>
      </div>
    </footer>
  );
};