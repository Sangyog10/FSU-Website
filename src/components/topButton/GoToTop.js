import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const [goToTop, setGoToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setGoToTop(true);
      } else {
        setGoToTop(false);
      }
    });
  }, []);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="top-btn" onClick={goToBtn}>
      {goToTop && (
        <FaArrowUp
          style={{
            position: "fixed",
            bottom: "50px",
            right: "10px",
            color: "rgba(221,181,34,255)",
            fontSize: "40px",
          }}
        />
      )}
    </div>
  );
};

export default GoToTop;
