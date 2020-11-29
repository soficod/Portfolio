import React from 'react'
import { Link } from 'react-router-dom'
import './Project.css'

const Project = (props)=>{

    return(
        <>
            <div className="project">
                <img src={props.img} /> 
                <h1 className="projectName">{props.name}</h1>
                <p className="project-description" >{props.description}</p>
                <div className="button-container">
                    {
                        props.link &&
                        <>
                            <a href={props.pLink}>
                                <button className="pLink">Check it out</button>
                            </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                        </>
                    }
                    {
                        props.git &&
                        <a href={props.gLink}>
                            <button className="gLink">Github repo</button>
                        </a>
                    }
                    
                </div>
                
            </div>
        </>
    )
}

export default Project;