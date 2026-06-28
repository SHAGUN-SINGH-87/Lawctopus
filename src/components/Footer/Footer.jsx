import {
    FaEnvelope,
    FaShareAlt,
} from "react-icons/fa";
import "./Footer.css";

import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-about">

          <img
            src={logo}
            alt="Lawctopus"
            className="footer-logo"
          />

          <p>
            © 2026 Lawctopus Legal Education. All rights reserved.
            Promoting professional excellence, legal drafting rigor,
            and global freelancing competency.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-column">

          <h3>QUICK LINKS</h3>

          <ul>

            <li>
              <a href="#">Terms of Service</a>
            </li>

            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Contact Support</a>
            </li>

          </ul>

        </div>

        {/* Ecosystem */}

        <div className="footer-column">

          <h3>ECOSYSTEM</h3>

          <ul>

            <li>Faculty & Advisory Board</li>

            <li>Accreditation & Certification</li>

            <li>Student & Alumni Portal</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-column">

          <h3>CONNECT WITH US</h3>

          <p className="contact-text">
            Have questions regarding admissions?
            Reach out directly via our verified helpdesk.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaShareAlt />
            </a>

            <a href="#">
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}