import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import PhotoContainer from './components/Header/PhotoContainer/PhotoContainer';
import SkillContainer from './components/SkillContainer/skillcontainer';
import Contact from './components/Contact/contact';
import ProjectContainer from './components/ProjectContainer/projectcontainer';

function App() {
  return (
    <div>
      <Header/>
      <PhotoContainer/>
      <SkillContainer/>
      <ProjectContainer />
      <Contact />
    </div>
  )
}

export default App