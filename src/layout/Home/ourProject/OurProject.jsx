import React from 'react'
import '../ourProject/ourproject.css'
import var1 from '../../../assets/doctor.jpg';
import farmers from '../../../assets/farmers1.jpg';
import crm from '../../../assets/crm3.png';
import oneMoney from '../../../assets/onemoney.png';
import visa from '../../../assets/visa1.jpg';
import cloud from '../../../assets/cloud3.jpg';

const OurProject = () => {
    const data = [
        {
            img:var1,
            head:"VAR'S DOCTOR APP",
          para:"A mobile application for online medication and appointments with Doctor's"
        },
        {
            img:farmers,
            head:"IARI MOBILE APPLICATION",
          para:"A mobile application for farmers for getting notification for crops care"
        },
        {
            img:crm,
            head:"CRM",
          para:"A customer relationship management tool designed using Node and React"
        },
        {
            img:oneMoney,
            head:"ONEMONEY",
          para:"A Fintech company which provides FIU, AA, FIP to banks and loan providers across India"
        },
        {
            img:visa,
            head:"ASKEPRO",
          para:"A online visa filing application as well as website"
        },
        {
            img:cloud,
            head:"CLOUD APP",
          para:"A app where user can purchase virtual machines online"
        },

    ]
  return (
    <div className='our-project-container'>
        <h1>Our Projects</h1>
        <p className='container-para'>I worked on the following projects using different tech stacks</p>
        <div className="portfolio-container">
                {
                    data.map((el, i) => (
                        <div className="portfolio-box" key={i}>
                            <img src={el.img} alt="" />
                            <div className="portfolio-layer">
                                <p className='head-layer'>{el.head}</p>
                                <p className='para-layer'> {el.para} </p>
                              
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default OurProject