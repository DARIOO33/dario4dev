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

// import { useState } from 'react'
import { usePathname } from 'next/navigation';
import { Fira_Code } from 'next/font/google'
const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Nav() {
    function func (){
        document.querySelector('.menu').classList.toggle('active')

        document.querySelector('body').classList.toggle('overflow')
    }
    function closemenu(){
        
        document.querySelector('.menu').classList.remove('active')
        document.querySelector('body').classList.remove('overflow')

        

    }
    const currentRoute = usePathname();
    console.log( 'current route =  ' + currentRoute);
    
    // const [active,setActive] = useState(false)
    return (
        <>
        <div className='menu-container'  onClick={func}>
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
                   <Icon  img={home} direction="home/" className={currentRoute === "/home" 
       ? "activenav" : "icon"}/>
                   <Icon img={profile} direction="about/"  className={currentRoute === "/about" 
       ? "activenav" : "icon"}/>
                   <Icon img={skills} direction="skills/"  className={currentRoute === "/skills" 
       ? "activenav" : "icon"}/>
                   <Icon img={projects} direction="projects/"  className={currentRoute === "/projects" 
       ? "activenav" : "icon"}/>
                   <Icon img={contact} direction="contact/"  className={currentRoute === "/contact" 
       ? "activenav" : "icon"}/>
                </div>
            </div>
        </>
    )
};
