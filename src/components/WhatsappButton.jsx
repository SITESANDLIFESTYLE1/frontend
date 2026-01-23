import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  //   const phoneNumber = "2348012345678"; // replace with your number (no +)
  //   const message = "Hello, I would like to make an enquiry.";

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
