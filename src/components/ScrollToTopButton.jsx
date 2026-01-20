import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.8;

      setIsVisible(scrollPosition > triggerPoint);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      className="scrollToTopBtn"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={18} />
    </button>
  );
};

export default ScrollToTopButton;
