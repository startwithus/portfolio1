import React from 'react'
import '../ourBlog/ourBlog.css'
import {FaMapSigns} from 'react-icons/fa'
import {FaPhoneAlt} from 'react-icons/fa'
import {SiMinutemailer} from 'react-icons/si'
import {BiWorld} from 'react-icons/bi'
import myphoto from '../../../assets/myphoto.jpg'

const OurBlog = () => {
  return (
    <div className='ourblog-container'>
        <h1 className="our-blog-h1">Contact Me</h1>
        <p className="our-blog-para">Far far away, behind the word mountains, far from the countries Vokalia and <br /> Consonantia</p>
         <div className="blog-img-container">
            <div className="blog-img-box">
                <div className="blog-icon">
                    <span><FaMapSigns/></span>
                </div>
                <h4 className="blog-h4">Address</h4>
                <p className="our-blog-para2">198 West 21th Street, Suite <br /> 721 New York NY 10016</p>
            </div>
            <div className="blog-img-box">
                <div className="blog-icon">
                    <span><FaPhoneAlt/></span>
                </div>
                <h4 className="blog-h4">Contact Number</h4>
                <p className="blog-para">+ 1235 2355 98</p>
            </div>
            <div className="blog-img-box">
                <div className="blog-icon">
                    <span><SiMinutemailer/></span>
                </div>
                <h4 className="blog-h4">Email Address</h4>
                <p className="blog-para">info@yoursite.com</p>
            </div>
            <div className="blog-img-box">
                <div className="blog-icon">
                    <span><BiWorld/></span>
                </div>
                <h4 className="blog-h4">Website</h4>
                <p className="blog-para">yoursite.com</p>
            </div>
         </div>

         <div className="contact-form-container">
            <div className="contact-img">
                <img src={myphoto} alt="" width={560} height={580}/>
            </div>
            <div className="contact-form">
                <input type="text" id='name' name='name' placeholder='your name' /> <br />
                <input type="email" id='email' name='email' placeholder='your email' /> <br />
                <input type="subject" id='subject' name='subject' placeholder='subject' /> <br />

                <textarea name="" id="" cols="30" rows="7" placeholder='message'></textarea>
                <div className="send-button">
                    <button>send message</button>
                </div>
            </div>
         </div>
    </div>
  )
}

export default OurBlog