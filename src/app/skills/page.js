import { Fira_Code } from 'next/font/google'
const firaCode = Fira_Code({ subsets: ['latin'] })
import Card from './Card.jsx'
import ui from '../assets/user-experience.png'
import web from '../assets/html.png'
import graphic from '../assets/curve.png'
import './skills.css'
export default function Page1() {
    return (
        <>
        <h1 className={firaCode.className +  " white center"} style={{marginTop:"3rem" , letterSpacing:".2ch"}}>
            Skills
        </h1>
        <div className="cards-container">
            <Card img={ui} title="Ui/Ux Design" details="+2 Years Experience"/>
            <Card img={web} title="Web Development" details="+2 Years Experience"/>
            <Card img={graphic} title="Graphic Design" details="+4 Years Experience"/>
        </div>
        
        </>
    )
};
