import React from 'react'
import {GiDeathNote} from 'react-icons/gi'
const Experience = () => {
    const data = [
      {
        profile : "MERN Developer",
        Company_name: "Cloudstok Technologies Private Limited",
        period: "1 year",
        location:"Noida, Uttar Pradesh, Ghaziabad"
        },
      {
        profile : "Java full stack",
        Company_name: "Ducat",
        period: " 6 month",
        location:"Mohan nagar, Uttar Pradesh, Ghaziabad"
        }
  ]
  return (
    <div className="education-container">
        <h1>Experience</h1>
        {
            data.map((el,i)=>(
                <div className="education-content">
                <div className="icon-notes"> <GiDeathNote className='notes-icon'/> </div>
                <div className="education-details">
                  <p className='para'>{el.profile}</p>
                  <h2>{el.Company_name}</h2>
                  <h3>{el.period}</h3>
                  <h3>{el.location}</h3>
                  <p className='long-para'>{}.</p>
                </div>
              </div>
            ))
        }
       
    </div>
  )
}

export default Experience