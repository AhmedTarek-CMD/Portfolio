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
    image: IMG6,
    title: "LA DIANA",
    github: "https://github.com/AhmedTarek-CMD/LA",
    demo: "https://la-azure-omega.vercel.app/",
  },
  {
    id: 2,
    image: IMG5,
    title: "Drift & Bloom",
    github: "https://github.com/AhmedTarek-CMD/DriftBloom",
    demo: "https://driftnblooms.com/",
  },
  {
    id: 3,
    image: IMG2,
    title: "Edemy",
    github: "https://github.com/AhmedTarek-CMD/Edemy",
    demo: "https://edemy-red-one.vercel.app/",
  },
  {
    id: 4,
    image: IMG1,
    title: "Forever",
    github: "https://github.com/AhmedTarek-CMD/Clothes-Ecommerce-Website",
    demo: "https://clothes-ecommerce-website.vercel.app/",
  },
  {
    id: 5,
    image: IMG3,
    title: "GYM Exercises",
    github: "https://github.com/AhmedTarek-CMD/GYM-Exercises",
    demo: "https://gym-exercises-hazel-theta.vercel.app/",
  },
  {
    id: 6,
    image: IMG4,
    title: "Dashboard",
    github: "https://github.com/AhmedTarek-CMD/Dashboard",
    demo: "https://dashboard-dusky-five-24.vercel.app/",
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
              <img src={image} alt={`${title} project preview`} />
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
