import "./Skills.css";
import Css from "../../assets/css3.svg";
import Javascript from "../../assets/javascript.svg";
import ReactJS from "../../assets/react.svg";
import Tailwind from "../../assets/tailwindcss.svg";
import Html from "../../assets/html.svg";
import MaterialUi from "../../assets/materialui.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import Next from "../../assets/next.svg";
import { SiDotnet } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";

const SkillsData = [
  {
    id: 1,
    image: Html,
    title: "HTML",
    description: "Markup Language",
  },
  {
    id: 2,
    image: Css,
    title: "CSS",
    description: "Styling Language",
  },
  {
    id: 3,
    image: Javascript,
    title: "JavaScript",
    description: "Programming Language",
  },
  {
    id: 4,
    image: Tailwind,
    title: "Tailwind",
    description: "CSS Framework",
  },
  {
    id: 5,
    image: Bootstrap,
    title: "Bootstrap",
    description: "CSS Framework",
  },
  {
    id: 6,
    image: MaterialUi,
    title: "Material UI",
    description: "Component Library",
  },
  {
    id: 7,
    image: ReactJS,
    title: "React",
    description: "JavaScript Library",
  },
  {
    id: 8,
    image: Next,
    title: "Next.js",
    description: "React Framework",
  },
  {
    id: 9,
    icon: TbBrandCSharp,
    color: "#9b4f96",
    title: "C#",
    description: "Programming Language",
  },
  {
    id: 10,
    icon: SiDotnet,
    color: "#512bd4",
    title: "ASP.NET Core",
    description: "Backend Framework",
  },
  {
    id: 11,
    icon: FaDatabase,
    color: "#7b4bb7",
    title: "Entity Framework Core",
    description: "ORM",
  },
  {
    id: 12,
    icon: DiMsqlServer,
    color: "#cc2927",
    title: "SQL Server",
    description: "Relational Database",
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
        {SkillsData.map(
          ({ id, image, icon: Icon, color, title, description }) => (
          <article key={id}>
            <div className="card-skill">
              <div className="icon">
                {Icon ? (
                  <Icon
                    className="technology-icon"
                    style={{ color }}
                    aria-hidden="true"
                  />
                ) : (
                  <img src={image} alt={`${title} logo`} />
                )}
              </div>
              <div className="content">
                <h4>{title}</h4>
                <p className="text-light">{description}</p>
              </div>
            </div>
          </article>
          )
        )}
      </div>
    </section>
  );
};

export default Skills;
