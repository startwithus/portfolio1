import React from 'react'
import { GiDeathNote } from 'react-icons/gi'
const Education = () => {
  const data = [
    {
      year: "2017-2021",
      degree : "B-TECH",
      steam:"Information Technology",
      university :"Dr. A. P. J. Abdul Kalam Technical University, Lucknow"
    },
    {
      year: "2014-2016",
      steam:"Science",
      university:"Central Board of Secondary Education"
      },
    {
      year: "2012-2014",
      steam:"10th",
      university:"Central Board of Secondary Education"
    },
  ]
  return (
    <div className="education-container">
      <h1>Education</h1>
      {
        data.map((el, i) => (
          <div className="education-content">
            <div className="icon-notes"> <GiDeathNote className='notes-icon' /> </div>
            <div className="education-details">
              <p className='para'>{el.year}</p>
              <h2>{el.degree}</h2>
              <h2>{el.steam}</h2>
              <h3>{el.university}</h3>
              <p className='long-para'>{el.para}</p>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default Education