import React, { useEffect } from 'react'
import './Home.css'
const Home =({loading})=>{
    let interv;
    const animateText = ()=>{
        console.log("test");
        let text1 = "Hello!";
        let text2 = "My name is";
        let text3 = "Sofia";
        let text4 = "I'm a computer science student and a web developer. "+ 
                    "Explore my web site to get to know more about my skills, "+
                    "work, and how to contact me.";
        
        let iter = 1; 
        let curr_letter = 0;

        interv = setInterval(()=>
        {
            if (iter === 1)
            {
                if (curr_letter < text1.length)
                {
                    document.querySelector(".intro h1").append(text1[curr_letter]);
                    curr_letter++;
                }
                else
                {
                    iter++;
                    curr_letter = 0;
                    let br = document.createElement("br")
                    document.querySelector(".intro h1").appendChild(br);
                }
            }
            else if(iter === 2)
            {
                if (curr_letter < text2.length)
                {
                    document.querySelector(".intro h1").append(text2[curr_letter]);
                    curr_letter++;
                }
                else
                {
                    iter++;
                    curr_letter = 0;
                    let span = document.createElement("span")
                    document.querySelector(".intro h1").append(" ");
                    document.querySelector(".intro h1").appendChild(span);
                }
            }
            else if(iter === 3)
            {
                if (curr_letter < text3.length)
                {
                    document.querySelector(".intro h1 span").append(text3[curr_letter]);
                    curr_letter++;
                }
                else
                {
                    iter++;
                    curr_letter = 0;

                    document.querySelector(".intro h1 span").addEventListener('mouseenter', (e) => {
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
                }
            }
            else if(iter === 4)
            {
                if (curr_letter < text4.length)
                {
                    document.querySelector(".intro p").append(text4[curr_letter]);
                    curr_letter++;
                }
                else
                {
                    clearInterval(interv);
                }
            }
            
        },60);

        
    }

    useEffect(()=>{
        if(!loading)
        {
            animateText();
        }
        return ()=>{
            clearInterval(interv);
        }
    },[loading])

    return(
        <div className="intro">
            <h1>
                
            </h1>
            <br />
            <p>

            </p>

        </div>
    )
}

export default Home;