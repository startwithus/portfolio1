import React from 'react';
import '../Header-next/header-next.css'
import '../Header-next/header-next.css'
import photo from '../../../assets/DSCN1485.JPG'
import { Link } from 'react-router-dom';
const HeaderNext = () => {
    const nameData=[
        {   name:"Name", },
        {   name:"Date of birth", },
        {   name:"Address", },
        {   name:"Zip code", },
        {   name:"Email", },
        {   name:"Phone", },
    ]
    const titleData=[
        {   title:"Deepak Chauhan", },
        {   title:"May 05, 1999", },
        {   title:"Ghaziabad, INDIA", },
        {   title:"201001", },
        {   title:"imdeepakchauhan66@gmail.com", },
        {   title:"9716953601", },
    ]
  return (
    <div className='header-next-container'>
        <div className='header-next'>
            <div className='header-next-img'>
                <img src={photo} alt="" />
            </div>
            <div className='header-next-img-1'>
                <h1>About Me</h1>
                <p>I am a software developer with over 1 year’s experience working on complex software development initiatives. I’m passionate about software development and I’m looking forward to getting to work on new projects in the near future.</p>
                <div className='about-list'>
                    <ul className='name-list'>
                       {
                        nameData.map((el,i)=>(
                            <li className='name' key={i}>{el.name}: </li>
                        ))
                       }
                    </ul>
                    <ul className='title-list'>
                        {
                            titleData.map((el,i)=>(
                                <li className='title' key={i}> {el.title} </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="project-container">
                    <p> <span>4</span> Project complete </p>
                   <div className="button-link">
                   <Link className='button' to="https://drive.google.com/file/d/1vLPiaWRewFnhbJmGhLdxfyxt92C21atV/view?usp=drive_link" target='_blank'>DOWNLOAD CV</Link >
                   </div>
                </div>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default HeaderNext