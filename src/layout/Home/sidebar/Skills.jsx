import React from 'react'

const Skills = () => {
    const data = [
        {
            name:"node",
            per:{
                sqlP:"80%",
            }
        },
        {
            name1:"SQL",
            per:{
                sqlP:"70%",
            }
        },
        {
            name2: "React",
            per:{
                sqlP:"70%",
            }
        }
    ]
    
    const data1 = [
        {
            name3 : "HTML",
            per1 : "80%"
        },
        {
            name4 : "CSS",
            per2 : "70%"
        }
    ]
  return (
    <div className='education-container'>
        <h1>Skills</h1>
        <div className="skills-card">
            {
                data.map((el,i)=>(
                    <div className="skills-content">
                    <div>
                    <h4>{el.name}</h4>
                    <h4>{el.name1}</h4>
                    <h4>{el.name2}</h4>
                    <div className="loader">
                        <h4>{el.per.sqlP}</h4>
                    </div>
                    </div>
                </div>
                ))
            }
        </div>
        <div className='progress-container'>
        {
                data1.map((el,i)=>(
                    <div className="progress-content">
                        <div className="progress-name">
                            <h4>{el.name3} </h4>
                            <h4>{el.per1}</h4>
                
                        </div>
                        <div className="progress-name">
                        <h4>{el.name4}</h4>
                            <h4>{el.per2}</h4>
                        </div>
                       <input type="range" name="" id="" className='progress' />
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Skills