import React, { useEffect } from 'react'
import fade from "../../libs/fade"
import './Work.css'
import prj1 from './project-images/react.png'
import Project from './Project'
const Work = ({loading}) =>{

    let interv;
    const animateText = ()=>{
        console.log("test");
        let text1 = "M";
        let text2 = "y Work";
        
        let iter = 1; 
        let curr_letter = 0;

        interv = setInterval(()=>
        {
            if (iter === 1)
            {
                if (curr_letter < text1.length)
                {
                    document.querySelector(".section-title h1 span").append(text1[curr_letter]);
                    curr_letter++;
                }
                else
                {
                    document.querySelector(".section-title h1 span").addEventListener('mouseenter', (e) => {
                        const colors = [
                            'red',
                            'blue',
                            'yellow',
                            'green', 
                            'rgba(255, 60, 239, 0.89)',
                        ];

                        let color = colors[Math.floor(Math.random() * colors.length)];
                        while(color === e.target.style.color)
                        {
                            color = colors[Math.floor(Math.random() * colors.length)];
                        }

                        e.target.style.color = color;
                    });

                    iter++;
                    curr_letter = 0;
                }
            }
            else if(iter === 2)
            {
                if (curr_letter < text2.length)
                {
                    document.querySelector(".section-title h1").append(text2[curr_letter]);
                    curr_letter++;
                }
                else
                {
                    clearInterval(interv)
                    let element = document.querySelectorAll(".section-title .fade");
                    for(let  i=0 ; i < element.length; i++)
                    {
                        fade('in',500,element[i]);
                    }
                }

            }
            
        },150);   
    }

    useEffect(()=>{
        if(!loading)
        {
            animateText();
        }

    },[loading])

    let project = [
        {
            img: prj1,
            name: "React Web",
            description:"i created this website with the best person in this world.",
            link: true,
            pLink: "http://www.google.com",
            git: true,
            gLink: "http://www.github.com"
        },
        {
            img: prj1,
            name: "React Web",
            description:"i created this website with the best person in this world.",
            link: false,
            pLink: "http://www.google.com",
            git: true,
            gLink: "http://www.github.com"
        },
        {
            img: prj1,
            name: "React Web",
            description:"i created this website with the best person in this world.",
            link: true,
            pLink: "http://www.google.com",
            git: false,
            gLink: "http://www.github.com"
        }

    ]
    return(
        <>
            <div className = "section-title" id="work-page" >
                <div>
                    <h1><span></span></h1>
                    <br />
                    <p className="fade">
                        <span>
                            "I'm not a great programmer; 
                            I'm just a good programmer with great habits."
                        </span>
                        <br />  
                        -Kent Beck
                    </p>    
                    <br />
                    <div style={{
                        display: "flex",
                        justifyContent:"center"
                    }}>
                        <button 
                            className="fade"
                        >
                            Check out my work
                        </button>
                        
                    </div>
                </div>
            </div>
            <div className="mywork">
                {
                    project.map((elem)=>{
                        return(
                            <Project 
                                img={elem.img}
                                name={elem.name}
                                description={elem.description}
                                link={elem.link}
                                pLink={elem.pLink}
                                git={elem.git}
                                gLink={elem.gLink}
                            />
                        )
                    })
                }
            </div>
        </>
    )


}

export default Work;