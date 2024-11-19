import React from 'react'
import './competence.css'
const Competense = () => {
  return (
    <section className="skills">
  <h2>Mes Compétences</h2>

  {/* Frontend Section */}
  <div className="skills-section">
    <h3>Frontend</h3>
    <div className="skills-list">
      <div className="skill">
        <p>HTML, CSS, JavaScript, React, Angular, jQuery</p>
      </div>
    </div>
  </div>

  {/* Backend Section */}
  <div className="skills-section">
    <h3>Backend</h3>
    <div className="skills-list">
      <div className="skill">
        <p>Node.js, Symfony, Django</p>
      </div>
    </div>
  </div>

  {/* Langages de Programmation Section */}
  <div className="skills-section">
    <h3>Langages de Programmation</h3>
    <div className="skills-list">
      <div className="skill">
        <p>JavaScript, Python, PHP, C#</p>
      </div>
    </div>
  </div>

  {/* Bases de Données Section */}
  <div className="skills-section">
    <h3>Bases de Données</h3>
    <div className="skills-list">
      <div className="skill">
        <p>MySQL, PostgreSQL, MongoDB, Oracle</p>
      </div>
    </div>
  </div>

  {/* Outils de Développement Section */}
  <div className="skills-section">
    <h3>Outils de Développement</h3>
    <div className="skills-list">
      <div className="skill">
        <p>Git,NPM, Visual Studio Code</p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Competense