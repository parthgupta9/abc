import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import tick from "../assets/Frame 13.png";
import astronomer from '../assets/cute-astronaut-waving-hand-to-show-peace-symbol-cartoon-icon-illustration-vector 1.png'
import { Link } from "react-router-dom";

const Name = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowSize);
    return () => {
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={bg}
        alt="Your Image"
        style={{
          width: "110vw",
          height: "105vh",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)", // Adjust as needed
          opacity: "0.6",
          padding: "10px",
          paddingTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          width: "28rem",
          height: "25rem"
        }}
      >
        {/* Your card content goes here */}
        <h2
          style={{
            marginLeft: "50px",
            marginRight: "40px",
            fontSize: "47px",
            height: "90px",
            color: "white",
            fontStyle: "Montserrat",
          }}
        >
          Congratulations!
        </h2>
       <img src={astronomer} alt="" 
       style={{
        height: '180px',
        marginTop: '-22px',
        marginLeft: '120px',
        marginBottom: '12px'
       }}
       />
       <p
       style={{
        marginLeft: "105px",
        marginRight: "70px",
        fontSize: "24px",
        color: "white",
        fontStyle: "Montserrat",
        marginTop: "-20px",
      }}
       >
        You have registered successfully!
       </p>

        <img
          src={mmil}
          alt="Overlay Image"
          style={{
            position: "absolute",
            marginTop: "-20%",
            top: "-12%",
            left: "30%",
            width: "42%",
            height: "27%",
            opacity: 0.9, 
          }}
        />
      </div>
    </div>
  );
};

export default Name;
