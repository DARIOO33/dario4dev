"use client"
import Image from 'next/image'

import Icon from './Icon/Icon'
import './nav.css'
import home from '../../../assets/home.png'
import profile from '../../../assets/about.png'
import skills from '../../../assets/skills.png'
import projects from '../../../assets/projects.png'
import contact from '../../../assets/contact.png'
import Link from 'next/link'
import { AiFillHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillThunderbolt } from "react-icons/ai";
import { AiFillFolder } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";

import { useState } from 'react'
import { usePathname } from 'next/navigation';
import { Fira_Code } from 'next/font/google'
const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Nav() {
    
    function func() {
        document.querySelector('.menu').classList.toggle('active')

        document.querySelector('body').classList.toggle('overflow')
    }
    function closemenu() {

        document.querySelector('.menu').classList.remove('active')
        document.querySelector('body').classList.remove('overflow')



    }
    const currentRoute = usePathname();
    console.log('current route =  ' + currentRoute);

    // const [active,setActive] = useState(false)
    return (
        <>
            <div className='menu-container' onClick={func}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="menu">
                <ul>
                    <li><Link href="home" onClick={closemenu} className={firaCode.className}>Home</Link></li>
                    <li><Link href="about" onClick={closemenu} className={firaCode.className}>About</Link></li>
                    <li><Link href="skills" onClick={closemenu} className={firaCode.className}>Skills</Link></li>
                    <li><Link href="projects" onClick={closemenu} className={firaCode.className}>Projects</Link></li>
                    <li><Link href="contact" onClick={closemenu} className={firaCode.className}>Contact</Link></li>
                </ul>
            </div>
            <div className="Nav-container">

                <div className="bar">
                    <Link href="home">
                        <div className={currentRoute === "/home"
                            ? "activenav" : "icon"} >
                            <AiFillHome />
                        </div>
                    </Link>

                    <Link href="about">
                        <div className={currentRoute === "/about"
                            ? "activenav" : "icon"} >
                            <AiOutlineUser />
                        </div>
                    </Link>

                    <Link href="skills">
                        <div className={currentRoute === "/skills"
                            ? "activenav" : "icon"} >
                            <AiFillThunderbolt />
                        </div>
                    </Link>

                    <Link href="projects">
                        <div className={currentRoute === "/projects"
                            ? "activenav" : "icon"} >
                            <AiFillFolder />
                        </div>
                    </Link>

                    <Link href="contact">
                        <div className={currentRoute === "/contact"
                            ? "activenav" : "icon"} >
                            <AiFillMail />
                        </div>
                    </Link>
                   
         
                  
                </div>
            </div>
        </>
    )
};
