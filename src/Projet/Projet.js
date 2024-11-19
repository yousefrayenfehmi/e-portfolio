import React from 'react'
import './Projet.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
const Projet = () => {
  return (
    <section className="projects">
    <h2>Mes Projets</h2>
<div className="project-list">
  <div className="project">
    <h3>Projet 1: Application de gestion des horaires de train</h3>
    <p>-Développer une application fullstackJS(React,Nodejs)
permettant aux utilisateurs de consulter les horaires
de train et de montrer les positions des trains sur
une carte.</p>
    <div className="project-links">
      <a href="https://github.com/yousefrayenfehmi/front_train" target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
      
    </div>
  </div>

  <div className="project">
    <h3>Projet 2: Plateforme de formation en ligne</h3>
    <p>Création d'une plateforme pour vendre des cours en ligne, notamment dans le domaine de l'intelligence artificielle et du développement web.</p>
    <div className="project-links">
      <a href="https://github.com/yousefrayenfehmi/front-end-formationIA" target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
      <a href="https://www.mathilda-learning.com/" target="_blank" rel="noopener noreferrer">
        <LanguageIcon />
      </a>
      
    </div>
  </div>
</div>
    </section>
  )
}

export default Projet