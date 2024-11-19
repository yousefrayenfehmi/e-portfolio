import React from 'react';
import './App.css';

import Contact_moi from './Contactmoi/Contact_moi';
import About from './About/About';
import Projet from './Projet/Projet';
import Competense from './Competence/Competense';
function App() {
  return (
    <div>
      <About/>
      <Projet/>
      <Competense/>    
      <Contact_moi/>
    </div>
  );
}

export default App;
