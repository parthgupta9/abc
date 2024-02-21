import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Splashscreen from './splashscreen/Splashscreen';
import Rocket from './Rocket/Rocket';
import Register from './Register/Register';
import Resume from './Resume/Resume';
import FirstSlide from './ques/FirstSlide';
import Name from './Namw/Name';
import RollNo from './RollNo/RollNo';
import Branch from './Branch/Branch';
import Email from './Email/Email';
import Phone from './Phone/Phone';
import Domain from './Domain/Domain';
import Congrats from './congrats/Congrats';
import { useUser } from './Context';

const App = () => {
  const { userData } = useUser();
  const [dataSaved, setDataSaved] = useState(false);

  useEffect(() => {
    if (userData.name && userData.rollNo && userData.year && userData.domain && !dataSaved) {
      // All data is available and data is not yet saved, so save the data
      fetch('http://localhost:5000/name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Data saved:', data);
          setDataSaved(true); // Set dataSaved to true after saving the data
        })
        .catch((error) => {
          console.error('Error saving data:', error);
        });
    }
  }, [userData, dataSaved]);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Splashscreen />} />
            <Route path="/Rocket" element={<Rocket />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/First" element={<FirstSlide />} />
            <Route path="/Name" element={<Name />} />
            <Route path="/RollNo" element={<RollNo />} />
            <Route path="/Branch" element={<Branch />} />
            <Route path="/Email" element={<Email />} />
            <Route path="/Phone" element={<Phone />} />
            <Route path="/Domain" element={<Domain />} />
            <Route path="/Congrats" element={<Congrats />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
