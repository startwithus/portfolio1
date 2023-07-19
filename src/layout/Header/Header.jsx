import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import "./header.css";
import { BsArrowDown } from 'react-icons/bs';
import logo from '../../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="container">
      <div className="head">
        <div className="head-left"></div>
        <div className="head-right"></div>
      </div>

      <div className="Header">
        <div className="menu-icon">
          {
            open ? <div className="icon" onClick={() => setOpen(false)}> <AiOutlineClose /> </div> : <div className="icon" onClick={() => setOpen(true)}> <AiOutlineMenu /></div>
          }
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className={`links ${open ? 'active-menu' : ""} `}>
          <Link to="#"> Home </Link>
          <Link to="#"> About </Link>
          <Link to="#"> Resume </Link>
          <Link to="#"> Services </Link>
          <Link to="#"> Projects </Link>
          <Link to="#"> Contact </Link>
        </div>
      </div>
      <div >< BsArrowDown className="down-arrow" /></div>
      <div className="text-head">
        <h3>HEY! I AM</h3>
        <h1>Prashant Gupta</h1>
        {/* <p> I'm a
        <span className='span-1'> Developer.</span>
        <span className='spa-1'> Web Designer.</span>
        </p> */}
        <p style={{ textAlign: 'center', marginRight: '10rem', display: 'block', fontSize: '30px' }}>
          I'm a 
          <TypeAnimation
            sequence={[
              'Developer.', // Types 'One'
              2000, // Waits 1s
              'Web Designer.', // Deletes 'One' and types 'Two'
              2000, // Waits 2s
            ]}
            wrapper="span"
            cursor={true}
            speed={1}
            deletionSpeed={3}
            repeat={Infinity}
            style={{ color: '#3e64ff', textDecoration: 'underline' }}
          />
        </p>
      </div>
    </div>
  );
};

export default Header;
