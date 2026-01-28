import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const whatsappLink = "https://wa.me/2348144837998";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsappBtn"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={22} />
    </a>
  );
};

export default WhatsappButton;
