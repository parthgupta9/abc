import React, { useState, useEffect, useRef } from 'react';
import bg from '../assets/bg.jpg';
import mmil from '../assets/1000058712_f1beee89cb94ffdbc7b3a05cbdf6e5cc-30_9_2023, 1_42_36 pm 2.png';
import { Link } from 'react-router-dom';
import '../Resume/Resume.css'

const App = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('Files', files);
    console.log(Array.from(formData.getAll()));
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };

  // React hooks must be called unconditionally at the top level
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const updateWindowSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <img src={bg} alt="Your Image" style={{ width: '100vw', height: '100vh' }} />

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(to right, #666666, #4d4d4d, #262626, #1a1a1a, #0d0d0d)', // Adjust as needed
          opacity: '0.8',
          padding: '20px', // Adjust as needed
          borderRadius: '10px', // Adjust as needed
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Adjust as needed
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2
          style={{
            marginLeft: '70px',
            marginRight: '70px',
            fontSize: '3rem',
            height: '96px',
            color: '#ffffff',
            fontStyle: 'Montserrat',
          }}
        >
          LET'S BEGIN
        </h2>
        <p
          style={{
            marginLeft: '55px',
            marginRight: '70px',
            fontSize: '2rem',
            height: '96px',
            color: 'white',
            fontStyle: 'Montserrat',
            marginTop: '-20px', 
          }}
        >
          Please upload your Resume
        </p>
        <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
          <h4 style={{color:'white'}}>Drag and Drop or </h4>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          <a href onClick={() => inputRef.current.click()} style={{color:'green'}}>Choose Files</a>
        </div>
        <img
          src={mmil}
          alt="Overlay Image"
          style={{
            position: 'absolute',
            marginTop: '-20%',
            top: '-20%',
            left: '24%',
            width: '66%',
            height: '38%',
            objectFit: 'cover', // Adjust as needed
            borderRadius: '10px', // Adjust as needed
            opacity: 1, // Adjust as needed
          }}
        />
      </div>
    </div>
  );
};

export default App;
