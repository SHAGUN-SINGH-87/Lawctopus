import { FaArrowRight } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Lawctopus Logo" />
      </div>

      <ul className="nav-links">
        <li><a href="#home">Course Overview</a></li>
        <li><a href="#curriclum">Curriculum</a></li>
        <li><a href="#why">Why Us</a></li>
        <li><a href="#freelancing">Freelancing</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>

      <div className="nav-buttons">

        <button className="prospectus">
          Get Prospectus
        </button>

        <button className="enroll">
          Enroll Now
          <FaArrowRight />
        </button>

      </div>

    </nav>
  );
}

export default Navbar;