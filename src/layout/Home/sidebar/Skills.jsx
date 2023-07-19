import React from 'react'

const Skills = () => {
    const data = [
        {
            name:"node"
        },
        {
            name1:"SQL"
        },
        {
            name2: "React"
        }
    ]
    
    const data1 = ['1','2']
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
                        90%
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
                            <h4>HTML</h4>
                            <h4>90%</h4>
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