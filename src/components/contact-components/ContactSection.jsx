import ContactForm from "./ContactForm";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-top">
          <h2 className="hero-title primary"> CONTACT US</h2>
          <p className="contact-form-subtext">
            Fill out the form below to learn more about buying or selling a
            house in your area.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <h3 className="contact-big-title-h3">
              <span className="primary">SUSTAINABLE</span>
              <br />
              <span className="secondary"> LIFESTYLE</span>
            </h3>

            <p className="contact-description">
              WE PROVIDE INNOVATIVE PROPERTY SOLUTIONS THROUGH TRUSTED
              PARTNERSHIPS AND EXCEPTIONAL SERVICE.
            </p>
            <div className="contact-socials">
              <a
                href="https://www.instagram.com/sitesandlifestyle/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/sites-nd-lifestyle/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.facebook.com/people/Sites-and-lifestyle/61571418703102/?sk=about"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div className="contact-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
