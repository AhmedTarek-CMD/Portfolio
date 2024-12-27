import "./Skills.css";
import Css from "../../assets/css3.svg";
import Javascript from "../../assets/javascript.svg";
import ReactJS from "../../assets/react.svg";
import Tailwind from "../../assets/tailwindcss.svg";
import Html from "../../assets/html.svg";
import MaterialUi from "../../assets/materialui.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import Next from "../../assets/next.svg";

const SkillsData = [
  {
    id: 1,
    image: Html,
    title: "HTML",
    disc: "Structure",
  },
  {
    id: 2,
    image: Css,
    title: "CSS",
    disc: "User Interface",
  },
  {
    id: 3,
    image: Javascript,
    title: "JavaScript",
    disc: "Interaction",
  },
  {
    id: 4,
    image: Tailwind,
    title: "Tailwind",
    disc: "User Interface",
  },
  {
    id: 5,
    image: Bootstrap,
    title: "Bootstrap",
    disc: "User Interface",
  },
  {
    id: 6,
    image: MaterialUi,
    title: "Material UI",
    disc: "User Interface",
  },
  {
    id: 7,
    image: ReactJS,
    title: "React",
    disc: "Framework",
  },
  {
    id: 8,
    image: Next,
    title: "Next",
    disc: "Framework",
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="top-section">
        <h5>What Skills I Have</h5>
        <h2>MY EXPERIENCE</h2>
      </div>
      <div className="container container-skills">
        {SkillsData.map(({ id, image, title, disc }) => (
          <article key={id}>
            <div className="card-skill">
              <div className="icon">
                <img src={image} alt="Image" />
              </div>
              <div className="content">
                <h4>{title}</h4>
                <p className="text-light">{disc}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
