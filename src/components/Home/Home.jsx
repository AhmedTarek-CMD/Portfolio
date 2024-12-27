import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "./SocialLinks";
import CV from "../../assets/Ahmed Tarek CV.pdf";

const Home = () => {
  return (
    <div className="home">
      <div className="container home-container">
        <h4>Hello I'm</h4>
        <h1>Ahmed Tarek</h1>
        <TypeAnimation
          sequence={[
            1000,
            "Frontend Developer",
            1000,
            "React Specialist",
            1000,
          ]}
          wrapper="span"
          speed={40}
          style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "2rem" }}
          repeat={Infinity}
        />
        <div className="btns">
          <a href={CV} className="btn" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <a href="#about" className="scroll">
          Scroll Down
        </a>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Home;
