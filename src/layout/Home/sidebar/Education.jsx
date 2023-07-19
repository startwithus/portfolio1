import React from 'react'
import {GiDeathNote} from 'react-icons/gi'
const Education = () => {
    const data = ['1','2','3','4']
  return (
    <div className="education-container">
        <h1>Education</h1>
        {
            data.map((el,i)=>(
                <div className="education-content">
                <div className="icon-notes"> <GiDeathNote className='notes-icon'/> </div>
                <div className="education-details">
                  <p className='para'>2018-2021</p>
                  <h2>Bachelors's in Computer Application</h2>
                  <h3>Cambridge University</h3>
                  <p className='long-para'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
              </div>
            ))
        }
       
    </div>
  )
}

export default Education