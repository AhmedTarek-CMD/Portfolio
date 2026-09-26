import { useEffect } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".top-section, .about-me, .about-content, .card-skill, .container-services .card, .project-item, .contact-option, .container-contact form, footer",
    );

    animatedElements.forEach((element, index) => {
      element.classList.add("reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    if (!("IntersectionObserver" in window)) {
      animatedElements.forEach((element) =>
        element.classList.add("is-visible"),
      );
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
