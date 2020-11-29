import React, {useEffect} from 'react'
import fade from "../../libs/fade"
import scrollTo from "../../libs/scrollTo"
import './Skills.css'

const Skills = ({loading, setLoading})=>{
    let interv;
    let skills = [
        
        {
            icon : "devicon-html5-plain ",
            skillName : "Html5"
        },
        {
            icon : "devicon-css3-plain ",
            skillName : "Css3"
        },
        {
            icon : "devicon-javascript-plain ",
            skillName : "Javascript"
        },
        {
            icon : "devicon-c-plain ",
            skillName : "C"
        },
        {
            icon : "devicon-cplusplus-plain ",
            skillName : "C++"
        },
        {
            icon : "devicon-python-plain ",
            skillName : "Python"
        },
        {
            icon : "devicon-react-plain ",
            skillName : "React"
        },
        {
            icon : "devicon-mysql-plain ",
            skillName : "Mysql"
        }


    ]; 

    const animateText = ()=>{
        console.log("test");
        let text1 = "S";
        let text2 = "kills";
        
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
        return ()=>{
            clearInterval(interv);
        }
    },[loading, interv])

    return(
        <>
            <div className = "section-title" id="skill-page" >
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
                    <div style={{display: "flex"}}>
                        <button 
                            onClick={()=>{scrollTo(document.getElementById("skill-section"))}} 
                            className="fade"
                        >
                            Check out my skills
                        </button>
                        <button className="fade">Download my resume</button>
                    </div>
                </div>
            </div>

            <div id="skill-section">
                <div className="desc">
                    During my developper life, I had the chance to get in touch with several tools, 
                    languages and frameworks. 
                    <br />
                    Here, you will find some of the tools i use.
                </div>
                <div className="s-section">
                    <div className="skill-scroll">
                    {
                        skills.map(element => 
                        {
                            return(
                                <div className="skillholder">
                                    <div className={element.icon +" skill"} >
                                    
                                    </div>
                                    <span  className="skill-name">{element.skillName}</span>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )


}

export default Skills;