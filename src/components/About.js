import React from 'react'
import bgimagehome1 from '../images/bgimage.jpg';

import { motion } from 'framer-motion';

const About = () => {

  return (
    <div style={{ backgroundImage: `url(${bgimagehome1})`, "height": "100vh", "width": "100vw", "position": "absolute", "background-size": "cover" }}>
    <motion.div className='container' 
      initial={{y:"-10vh",opacity:0}}
      animate={{y:"0vh",opacity:1}}
      transition= {{ duration: 0.8 }}>
      <h2 className="my-5">
        About Duly Noted.
      </h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              General Overview.
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body" >
              <strong>Duly Noted. A CRUD app made using MERN stack. </strong> 
              <p>A backend database has been created which stores user data and notes linked to that particular user.</p>
              <p>Users can create, read, update and delete only their notes. They will not have access to other user's notes. This was made possible using an authorization token which is associated with each user.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Technology Stack used.
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>The following are the frameworks,languages and packages used to implement this project :</strong> 
              <p>
                Frontend was implemented using Reactjs and react router etc.
              </p>
              <p>
                Backend was implemented using Expressjs,cors,Nodejs
              </p>
              <p>
                Datebase used is MongoDB.
              </p>
              <p>Styling was done using Bootstrap and Fontawesome.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </div>
  )
}

export default About;