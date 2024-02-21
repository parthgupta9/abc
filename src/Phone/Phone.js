import React, { useState, useEffect } from "react";
import bg from "../assets/bg.jpg";
import mmil from "../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png";
import tick from "../assets/Frame 13.png";
import { Link } from "react-router-dom";

const Name = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [user, setUser] = useState({
    name: " ",
  });

  const [tickmark, showTickmark] = useState(false);

  const handleShowTickmark = (e) => {
    showTickmark(true)
  };

  const Postdata = async (e) => {
    e.preventDefault();
    const { name } = user;

    const res = await fetch("/name", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
    }
  };

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
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
          background: "linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)", // Adjust as needed
          opacity: "0.6",
          padding: "10px",
          paddingTop: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          width: "26rem",
          height: "18rem"
        }}
      >
        {/* Your card content goes here */}
        <h2
          style={{
            marginLeft: "70px",
            marginRight: "40px",
            fontSize: "47px",
            height: "90px",
            color: "white",
            // width:'320px',
            fontStyle: "Montserrat",
          }}
        >
          LET'S BEGIN!
        </h2>
        <p
          style={{
            display: 'block',
            marginLeft: "70px",
            marginRight: "55px",
            fontSize: "24px",
            color: "white",
            fontStyle: "Montserrat",
            // marginTop: "-10px",
          }}
        >
          What is your Phone No. ?
        </p>
        <div
          style={{
            border: "1px solid #FFE454",
            borderRadius: "12px",
            padding: "6px",
            width: "75%",
            marginLeft: "55px",
            marginTop: "8px",
          }}
        >
          <input
            className="form"
            formMethod="POST"
            style={{
              width: "100%",
              border: "none",
              background: "none",
              borderBottom: "1px solid #FFE454",
              padding: "6px",
              color: "white",
            }}
            type="email"
            // value={user.name}
            onChange={handleInputs}
            onFocus={handleShowTickmark}
            placeholder="Text here"
            aria-label="type here"
          />
        </div>
        <Link
          to="/Domain"
          style={{
            display: "inline-block",
            marginLeft: "40%",
            marginTop: "24px",
            opacity: tickmark ? '1' : '0',
          }}
        >
          <img
            src={tick}
            alt=""
            // onClick={Postdata}
          ></img>
        </Link>

        <img
          src={mmil}
          alt="Overlay Image"
          style={{
            position: "absolute",
            marginTop: "-20%",
            top: "-20%",
            left: "30%",
            width: "46%",
            height: "35%",
            opacity: 1, 
          }}
        />
      </div>
    </div>
  );
};

export default Name;
