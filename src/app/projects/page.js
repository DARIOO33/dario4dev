import { Fira_Code } from 'next/font/google'
const firaCode = Fira_Code({ subsets: ['latin'] })
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import './projects.css'
import Pcard from './Pcard.jsx'
export default function Page1() {
    return (
        <div className='cont'>
        {/* <Nav/> */}
            

       <h1 className={firaCode.className +  "  white center"} style={{fontSize :'1.75rem' ,marginTop:"3rem" , letterSpacing:".2ch"}}>
            Projects
        </h1>
        <div className="project-container">
            <Pcard img={Project1} title="rent car website" link="https://rentcarwebsite.netlify.app"/>
            <Pcard img={Project2} title="Logitech Promotion Website" link="https://logitechbetavs.netlify.app"/>

            
        </div>
        <div className={firaCode.className + " button"}>
            <button>
                
                See More
            </button>
        </div>
    

        </div>
    )
};
