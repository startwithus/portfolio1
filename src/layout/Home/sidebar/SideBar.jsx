import React, { useRef, useState } from 'react'
import '../sidebar/sidebar.css'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
// import Awards from './Awards'
const SideBar = () => {
    const [index,setIndex] = useState(0)
    const scrollRef = useRef(null);

     const handleScroll = () =>{
      console.log('yto')
       if(scrollRef.current.scrollHeight === 2500){
         setIndex(2)
       }
       if(scrollRef.current.scrollHeight === 2400){
        setIndex(1)
      }
      if(scrollRef.current.scrollHeight === 2300){
        setIndex(0)
      }
     }

  return (
    <div className='sidebar-container' ref={scrollRef} onMouseOver={handleScroll}> 
        <div className="side-bar-left">
            <ul>
                <li className={`sidebar-link ${index===0 ?'active-side-bar':''}`} onClick={()=>setIndex(0)}><span className={index ===0 && "active-line"}></span>Education</li>
                <li className={`sidebar-link ${index===1 ?'active-side-bar':''}`} onClick={()=>setIndex(1)}><span className={index ===1 && "active-line"}></span>Experience</li>
                <li className={`sidebar-link ${index===2 ?'active-side-bar':''}`} onClick={()=>setIndex(2)}><span className={index ===2 && "active-line"}></span>Skills</li>
                {/* <li className={`sidebar-link ${index===3 ?'active-side-bar':''}`} onClick={()=>setIndex(3)}>Awards</li> */}
            </ul>
        </div>
        <div className="side-bar-right">
        <div className="test" onMouseOver={()=>setIndex(0)} >
       <Education/>
        </div>
        <div className="" onMouseOver={()=>setIndex(1)} >
         <Experience/>
        </div>
        <div className=""onMouseOver={()=>setIndex(2)} >
        <Skills/>
        </div>
        </div>
    </div>
  )
}

export default SideBar