import "./About.css";
import AboutME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="top-section">
        <h5>Get To Know</h5>
        <h2>ABOUT ME</h2>
      </div>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={AboutME} alt="About Image" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>With React JS</small>
            </div>
            <div className="about-card">
              <FiUser className="about-icon" />
              <h5>Skills</h5>
              <small>Web Design</small>
            </div>
            <div className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>Using React JS</small>
            </div>
          </div>
          <p>
            Front-end developer using React JS with a strong understanding of
            design principles and user experience, Seeking a junior front-end
            developer role to leverage skills in creating engaging and
            user-friendly web Applications, Adept at collaborating with
            cross-functional teams to deliver high-quality projects on time.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
