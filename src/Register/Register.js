import React, { useState, useEffect } from 'react';
import bg from '../assets/bg.jpg'
import vector from '../assets/Vector (1).png'
import unstop from '../assets/unstop-logo 1.png'
import mmil from '../assets/mmil.png'
import { Link } from 'react-router-dom';

const App = () => {
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
 <>
 <div>
    <div style={{ position: 'relative' }}>
      <img
        src={bg}
        alt="Your Image"
        style={{
          width: '105vw',
          height: '105vh',
        }}
      />
 
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'linear-gradient(to right, #666666,#4d4d4d, #262626, #1a1a1a, #0d0d0d)', // Adjust as needed
          opacity:'0.6',
          padding: '20px', 
          borderRadius: '10px', 
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', 
          width:'26rem'
        }}
      >
        {/* Your card content goes here */}
        <h2 style={{
       
            fontStyle:'Montserrat',marginLeft:'140px',marginBottom:'30px',color:'white'

        }}> Rounds  </h2>
          <div className="dropdown" >
        <button className="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height:'80px',
       backgroundColor:'rgba(255, 230, 223, 1)',width:'24rem'}}>
          <p stye={{fontSize:'14px',fontWeight:'bold'}}>Round 1</p>
          
          <p style={{marginTop:'-23px',fontSize:'22px', fontWeight: 'bolder'}}> Aptitude Round</p>
      
          <p style={{marginTop:'-15px',fontSize:'10px'}}>Technical and Logical based MCQs round</p>
          <img src={vector} alt='' style={{marginTop:'-32%',marginLeft:'20rem'}}></img>
        </button>

        <ul className="dropdown-menu" style={{ backgroundColor:'rgba(255, 230, 223, 1)',width:'24rem',marginTop:'0px'
        }}>
        <li style={{fontSize:'12px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'60px', fontWeight:'bold',marginBottom:'4px',marginTop:'4px'}} > Instructions for Students</li>
          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'80px'}}>The students has to go to unstop.com. 
      </li>
          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'80px'}}>Only the registered student's result will be evaluated. </li>
          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'80px'}}>The student has to submit the test in the given time.</li>
          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'80px'}}>The link to the test is provided below.png </li>
          <li> <img src={unstop} alt='' style={{marginTop:'20px',marginLeft:'145px', height: '35px'}}></img> </li>
          <li> <button style={{
           width:'16rem',marginLeft:'60px',marginTop:'20px',border:'1px solidrgba(255, 230, 223, 1)',marginBottom:'20px'
          }}>Click here</button></li>
        </ul>
      </div>
      <div className="dropdown" style={{marginTop:'20px'}}>
        <button className="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height:'80px',
       backgroundColor:'rgba(255, 250, 231, 1)',width:'24rem'}}>
          <p stye={{fontSize:'14px',fontWeight:'bold'}}>Round 2</p>
          
          <p style={{marginTop:'-23px',fontSize:'22px', fontWeight: 'bolder'}}> Technical Round</p>
      
          <p style={{marginTop:'-15px',fontSize:'10px'}}>Task round to check your skills</p>
          <img src={vector} alt='' style={{marginTop:'-32%',marginLeft:'20rem'}}></img>
        </button>

        <ul className="dropdown-menu" style={{ backgroundColor:'rgba(255, 250, 231, 1)',width:'24rem',marginTop:'0px'
        }}>
        <li style={{fontSize:'12px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'60px', fontWeight:'bold',marginBottom:'4px',marginTop:'4px'}} > Instructions for Students</li>
          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'80px'}}>Pay attention to details and follow the instructions provided.
      </li>
          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'80px'}}> Use this opportunity to showcase your skills and approach to problem-solving. </li>
          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'80px'}}>The students has to complete the task in before the deadline. </li>
          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'80px'}}>The link to.png </li>
          {/* <li> <img src={unstop} alt='' style={{marginTop:'20px',marginLeft:'120px'}}></img> </li> */}
          <li> <button style={{
           width:'16rem',marginLeft:'60px',marginTop:'30px',border:'1px solidrgba(255, 230, 223, 1)',marginBottom:'30px'
          }}>Click here</button></li>
        </ul>
      </div>
      <div className="dropup" style={{marginTop:'20px'}}>
        <button className="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{height:'100px',
       backgroundColor:'rgba(182, 232, 255, 1)',width:'24rem'}}>
          <p stye={{fontSize:'14px',fontWeight:'bold'}}>Round 3</p>
          
          <p style={{marginTop:'-23px',fontSize:'22px', fontWeight: 'bolder'}}> HR Round</p>
      
          <p style={{marginTop:'-15px',fontSize:'10px'}}>Personal interview and HR interview round to check your <br /> personality and coordination skills.</p>
          <img src={vector} alt='' style={{marginTop:'-32%',marginLeft:'20rem'}}></img>
        </button>

        <ul className="dropdown-menu" style={{ backgroundColor:'rgba(182, 232, 255, 1)',width:'24rem',marginTop:'0px'
        }}>
        <li style={{fontSize:'12px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'50px', fontWeight:'bold',marginBottom:'4px',marginTop:'4px'}} > Instructions for Students</li>
          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'65px'}}>Your interview is scheduled for [Date Yet to announce] at [Time Yet to announce]. Please ensure you are available at least 10 minutes before the scheduled time.
      </li>

          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'65px'}}> interviewer will focus on different aspects of your skills and experience. </li>
          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'65px'}}>Be ready to discuss specific examples from your past experience that demonstrate your skills,problem-solving abilities, and teamwork.</li>
          <li style={{fontSize:'10px',fontStyle:'Montserrat',listStyle:'disc',marginLeft:'65px'}}>Please have a copy of your resume for reference.</li>
          {/* <li> <img src={unstop} alt='' style={{marginTop:'20px',marginLeft:'120px'}}></img> </li> */}
          <li> <button style={{
           width:'16rem',marginLeft:'60px',marginTop:'30px',border:'1px solidrgba(255, 230, 223, 1)',marginBottom:'30px'
          }}>Click here</button></li>
        </ul>
        
      </div>
      <img
          src={mmil}
          alt="Overlay Image"
          style={{
            position: 'absolute',
            marginTop:'-20%',
            top: '-12%',
            left: '30%',
            width: '50%',
            height: '24%',
            objectFit: 'cover', // Adjust as needed
            borderRadius: '10px', // Adjust as needed
            opacity: 1, // Adjust as needed
          }}
        />
      </div>
      <button
        style={{
          position: 'absolute',
          bottom: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '10px',
          fontWeight: 'bold',
          backgroundColor: isHovering ? '#009A0F' : '#FFE454',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          width:'24rem'
        }}
      ><Link to="/First" style={{textDecoration: 'none', color:'#009A0F', color: isHovering ? '#FFE454' : '#009A0F',}}  onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}> Register</Link>
       
      </button>
     
    </div>
    </div>
 </>
  );
};

export default App;
