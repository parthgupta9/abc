import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import rocketImg from "../images/Vector-rocket.png";
import smokeImg from "../images/Frame 6.png";
import { Link, useNavigate } from "react-router-dom";
import "../Rocket/Rocket.css";

const App = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleStartClick = () => {
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const rocketElement = document.getElementById("rocket");
      const smokeElement = document.getElementById("smoke");

      rocketElement.classList.add("moveUp");
      smokeElement.classList.add("moveUp");

      setTimeout(() => {
        // Navigate to register route after animation completes
        navigate("/Register");
      }, 1500); // Adjust this delay as needed to match your animation duration
    }
  }, [isClicked, navigate]);
  //  } });

  return (
    <div style={{ position: "relative" }}>
      <img
        src={bg}
        alt="Background"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)",
          opacity: "0.8",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        {isClicked && (
          <img src={rocketImg} id="rocket" className="" alt="Rocket" />
        )}
        {isClicked && (
          <img src={smokeImg} id="smoke" className="moveUp" alt="Smoke" />
        )}

        <h2
          style={{
            marginLeft: "70px",
            marginRight: "70px",
            fontSize: "3rem",
            height: "96px",
            color: "#ffffff",
            fontStyle: "Montserrat",
          }}
        >
          MMIL
        </h2>
        <p
          style={{
            marginLeft: "55px",
            marginRight: "70px",
            fontSize: "2rem",
            height: "96px",
            color: "white",
            fontStyle: "Montserrat",
            marginTop: "-20px",
          }}
        >
          LET'S START
        </p>
        <button
          style={{
            fontWeight: "bold",
            backgroundColor: isHovering ? "#009A0F" : "#FFE454",
            height: "44px",
            width: "124px",
            marginLeft: "70px",
            marginTop: "-10px",
          }}
        >
          <Link
            to="#"
            style={{
              textDecoration: "none",
              color: "#009A0F",
              color: isHovering ? "#FFE454" : "#009A0F",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleStartClick}
          >
            START
          </Link>
        </button>
        <img
          src={mmil}
          alt="Overlay"
          style={{
            position: "absolute",
            marginTop: "-20%",
            top: "-20%",
            left: "24%",
            width: "66%",
            height: "38%",
            objectFit: "cover",
            borderRadius: "10px",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
};

export default App;
