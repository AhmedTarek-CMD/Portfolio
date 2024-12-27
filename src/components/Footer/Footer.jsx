import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="##" className="footer-logo">
        Ahmed Tarek
      </a>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/ahmed-tarek-a06341322/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/AhmedTarek-CMD" target="_blank">
          <FaSquareGithub />
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100010543750190&locale=ar_AR"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
      </div>
      <div className="copy">
        <small>
          Copy Right &copy; 2024 All Rights Belongs to{" "}
          <a href="https://www.linkedin.com/in/ahmed-tarek-a06341322/">
            Ahmed Tarek
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
