import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "ahmedtarekofficial799@gmail.com",
    link: "mailto:ahmedtarekofficial799@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Ahmed Tarek",
    link: "https://m.me/100010543750190",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "01029645794",
    link: "https://api.whatsapp.com/send?phone=201029645794",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1zcsgcs",
      "template_yk1jmjv",
      form.current,
      "nwE3L5N7BJmngEoiP"
    );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="top-section">
        <h5>Get In Touch</h5>
        <h2>CONTACT ME</h2>
      </div>
      <div className="container container-contact">
        <div className="contact-options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact-option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">
                Send Message
              </a>
            </article>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <input type="text" placeholder="Email" name="email" />
          <textarea
            type="text"
            rows={10}
            placeholder="Message"
            name="message"
          ></textarea>
          <button className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
