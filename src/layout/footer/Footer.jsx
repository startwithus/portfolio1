import React from 'react'
import '../footer/footer.css'
import {BsTwitter,BsFacebook,BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
   <div className="footer-container">
    <div className="footer-content">
    <div className="about-footer">
      <h2>About</h2>
      <p>I am a software developer with over 1.8 year’s experience working on complex software development initiatives. I’m passionate about software development and I’m looking forward to getting to work on new projects in the near future.</p>
      <div className="social-icon">
      <BsTwitter className='icon-fac'/>
        <BsFacebook  className='icon-fac'/>
        <BsLinkedin  className='icon-fac'/>
      </div>
    </div>
    <div className="links-footer">
      <h2>Links</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
     
      </ul>
    </div>
    <div className="links-footer">
      <h2>Links</h2>
      <ul>
        <li>Web Design</li>
        <li>Web Development</li>
        <li>Business Strategy</li>
        <li>Data Analysis</li>
        <li>Graphic Design</li>
     
      </ul>
    </div>
    <div className="question-footer">
      <h2>Have a Quesgtions</h2>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      <div className="social-icon">
        <BsTwitter className='icon-fac'/>
        <BsFacebook  className='icon-fac'/>
        <BsLinkedin  className='icon-fac'/>
      </div>
    </div>
    </div>
   </div>   
  )
}

export default Footer