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
          <h2 className="contact-big-title secondary">SUBMIT A MESSAGE</h2>
          <p className="contact-form-subtext">
            Fill out the form below to learn more about buying or selling a
            house in your area.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-left">
            <h2 className="contact-big-title">
              SUSTAINABLE
              <br />
              <span>LIFESTYLE</span>
            </h2>

            <p className="contact-description">
              WE PROVIDE INNOVATIVE PROPERTY SOLUTIONS THROUGH TRUSTED
              PARTNERSHIPS AND EXCEPTIONAL SERVICE.
            </p>
            <div className="contact-socials">
              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://linkedin.com/company/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://facebook.com/yourpage"
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
