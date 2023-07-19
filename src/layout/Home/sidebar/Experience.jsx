import React from 'react'
import {GiDeathNote} from 'react-icons/gi'
const Experience = () => {
    const data = ['1','2','3','4']
  return (
    <div className="education-container">
        <h1>Experience</h1>
        {
            data.map((el,i)=>(
                <div className="education-content">
                <div className="icon-notes"> <GiDeathNote className='notes-icon'/> </div>
                <div className="education-details">
                  <p className='para'>2014-2015</p>
                  <h2>Bachelor of Science in Computer Science</h2>
                  <h3>Cambridge University</h3>
                  <p className='long-para'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
              </div>
            ))
        }
       
    </div>
  )
}

export default Experience