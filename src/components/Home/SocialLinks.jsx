import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="home-socials">
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
  );
};

export default SocialLinks;
