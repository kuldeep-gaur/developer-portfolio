import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        padding: "10px 15px",
        backgroundColor: "#0d6efd",
        color: "white",
        border: "none",
        borderRadius: "50%",
        fontSize: "20px",
        cursor: "pointer",
        display: visible ? "inline" : "none",
        zIndex: 1000,
      }}
      title="Scroll to top"
    >
      ↑
    </button>
  );
};
