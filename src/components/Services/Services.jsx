import "./Services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="top-section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container-services">
        <article className="card">
          <MdDesignServices className="icon" />
          <h3>Web Design</h3>
          <p>
            Designing interfaces that are intuitive, efficient, and enjoyable to
            use.
          </p>
        </article>
        <article className="card">
          <IoIosRocket className="icon" />
          <h3>Fast Performance</h3>
          <p>Get your product finished within a couple of weeks</p>
        </article>
        <article className="card">
          <FaCode className="icon" />
          <h3>Clean Code</h3>
          <p>
            Build the site in an organized way with comments to understand the
            code.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
