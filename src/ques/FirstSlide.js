import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import { Link } from "react-router-dom";
import tick from "../assets/Frame 13.png";
import globalData from '../Global';
import { useUser } from '../Context';


const App = () => {

  const { userData, setUserData } = useUser();

  const handleYearChange = (year) => {
    setUserData({ ...userData, year });
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [tickmark, showTickmark] = useState(false);

  const handleShowTickmark = (e) => {
    showTickmark(true);
  };

  const [isActive1, setIsActive1] = useState(false);

  function handleActive1() {
    setIsActive1(true);
    setIsActive2(false);
    globalData.myGlobalVariable = '1st year';
  }

  const [isActive2, setIsActive2] = useState(false);

  function handleActive2() {
    setIsActive2(true);
    setIsActive1(false);
    globalData.myGlobalVariable = '2nd year';
  }

  const [isHovering1, setIsHovering1] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovering1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovering1(false);
  };
  const handleMouseEnter2 = () => {
    setIsHovering2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovering2(false);
  };

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
          width: "105vw",
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
          padding: "10px", // Adjust as needed
          paddingTop: "20px",
          borderRadius: "10px", // Adjust as needed
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Adjust as needed
          width: "26rem",
          height: "18rem"
        }}
      >
        {/* Your card content goes here */}
        <h2
          style={{
            marginLeft: "70px",
            marginRight: "40px",
            fontSize: "3rem",
            height: "96px",
            color: "white",
            fontStyle: "Montserrat",
          }}
        >
          LET'S BEGIN
        </h2>
        <p
          style={{
            display: "block",
            marginLeft: "55px",
            marginRight: "70px",
            fontSize: "2rem",
            height: "76px",
            color: "white",
            fontStyle: "Montserrat",
            marginTop: "-10px",
          }}
        >
          Choose your year?
        </p>

        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <a
            href="#"
            className="btn"
            style={{
              border: "2px solid #FFE454",
              backgroundColor: isHovering1 ? "#1a1a1a" : "#FFE454",
              backgroundColor: isActive1 ? "#1a1a1a" : "#FFE454",
              color: isHovering1 ? "#FFE454" : "#1a1a1a",
              color: isActive1 ? "#FFE454" : "#1a1a1a",
              fontWeight: "bold",
              width: "80px",
            }}
            onClick={() => handleYearChange(1)}
            onFocus={handleShowTickmark}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
            // onClick={handleActive1}
          >
            1st
          </a>
          <a
            href="#"
            className="btn"
            style={{
              border: "2px solid #FFE454",
              backgroundColor: isHovering2 ? "#1a1a1a" : "#FFE454",
              backgroundColor: isActive2 ? "#1a1a1a" : "#FFE454",
              color: isHovering2 ? "#FFE454" : "#1a1a1a",
              color: isActive2 ? "#FFE454" : "#1a1a1a",
              fontWeight: "bold",
              width: "80px",
            }}
            onClick={() => handleYearChange(2)}
            onFocus={handleShowTickmark}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            // onClick={handleActive2}
          >
            2nd
          </a>
        </div>
        <Link
          to="/Name"
          style={{
            display: "inline-block",
            marginLeft: "40%",
            marginTop: "24px",
            opacity: tickmark ? '1' : '0',
          }}
        >
          <img src={tick} alt=""></img>
        </Link>
        <img
          src={mmil}
          alt="Overlay Image"
          style={{
            position: "absolute",
            marginTop: "-20%",
            top: "-15%",
            left: "30%",
            width: "48%",
            height: "28%",
            objectFit: "cover", // Adjust as needed
            borderRadius: "10px", // Adjust as needed
            opacity: 1, // Adjust as needed
          }}
        />
      </div>
    </div>
  );
};

export default App;
