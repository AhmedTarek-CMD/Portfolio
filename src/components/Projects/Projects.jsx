import "./Projects.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5.png";
import IMG6 from "../../assets/project6.png";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Project 1",
    github: "https://github.com/AhmedTarek-CMD/Clothes-Ecommerce-Website",
    demo: "https://startling-gelato-d13ef8.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Project 2",
    github: "https://github.com/AhmedTarek-CMD/Food-Ecommerce",
    demo: "https://jade-youtiao-3c2a0e.netlify.app/",
  },
  {
    id: 6,
    image: IMG4,
    title: "Project 3",
    github: "https://github.com/AhmedTarek-CMD/Dashboard",
    demo: "https://dashboard-dusky-five-24.vercel.app/",
  },
  {
    id: 4,
    image: IMG5,
    title: "Project 4",
    github: "https://github.com/AhmedTarek-CMD/XFactory",
    demo: "https://ahmedtarek-cmd.github.io/XFactory/",
  },
  {
    id: 5,
    image: IMG3,
    title: "Project 5",
    github: "https://github.com/AhmedTarek-CMD/Spering",
    demo: "https://ahmedtarek-cmd.github.io/Spering/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Project 6",
    github: "https://github.com/AhmedTarek-CMD/Project",
    demo: "https://ahmedtarek-cmd.github.io/Project/",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="top-section">
        <h5>The Recent Work</h5>
        <h2>MY PROJECTS</h2>
      </div>
      <div className="container container-projects">
        {portfolioData.map(({ id, image, title, github, demo }) => (
          <article key={id} className="project-item">
            <div className="project-item-image">
              <img src={image} alt="Image" />
              <h3>{title}</h3>
              <div className="project-item-btns">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
