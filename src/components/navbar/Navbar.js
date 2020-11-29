import React, { useState, useEffect } from 'react'
import './Navbar.css'
import {Link}  from 'react-router-dom'
const Navbar =()=>{

    const [navOn, setNavOn] = useState(false);
    const mediaMatch = window.matchMedia("(max-width: 1024px)");
    const [isMobile, setIsMobile] = useState(mediaMatch.matches);

    useEffect(() => 
    {
        window.addEventListener('resize', () => 
        {
            if (window.matchMedia("(max-width: 1024px)").matches !== isMobile) 
            {
                setIsMobile(!isMobile);
            }
        });
    });

    const links = [
        {
            to: "/",
            ico: "fa fa-home",
            name: "Home",
            cls: "home"
        },
        {
            to: "/skills",
            ico: "fa fa-cogs",
            name: "Skills",
            cls: "skills"
        },
        {
            to: "/mywork",
            ico: "fa fa-suitcase",
            name: "My work",
            cls: "mywork"
        },
        {
            to: "/contact",
            ico: "fa fa-envelope",
            name: "Contact me",
            cls: "contact"
        },
    ]

    return(
        <div className ="navbar">
            <div className="desktop-nb"></div>
            <button className="fa fa-bars burger"
                onClick={() => setNavOn(!navOn)}
            >

            </button>
            {
                (!isMobile || (isMobile && navOn)) && 
                <div className="elems">
                    {
                        links.map((lnk) => { return(
                            <Link to={lnk.to}>
                                <button className={"nav-elem "+ lnk.cls} onClick={() => setNavOn(false)}>
                                    <i className={lnk.ico}></i> 
                                    &nbsp; 
                                    {lnk.name}
                                </button>
                            </Link>
                        )})
                    }
                </div>
            }
        </div>
    )
}

export default Navbar;