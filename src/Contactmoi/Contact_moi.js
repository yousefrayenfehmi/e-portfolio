import React from 'react'
import './Contact_mo.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact_moi = () => {
  return (
    <section className="contact">
    <h2>Contactez-moi</h2>
    <div className="contact-info">
      <p>Vous pouvez me contacter via le formulaire ou directement par email :</p>
      <p>Email : <a href="mailto:yousseffehmi96@gmail.com">yousseffehmi96@gmail.com</a></p>
      <p>Téléphone : <a href="tel:+21626118373">+216 26 11 83 73</a></p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/youssef-rayen-fehmi-b765a1216/" target="_blank" rel="noopener noreferrer"><LinkedInIcon/></a>
        <a href="https://github.com/youssef-rayen" target="_blank" rel="noopener noreferrer"><GitHubIcon/></a>
      </div>
    </div>
  
  </section>
  )
}

export default Contact_moi