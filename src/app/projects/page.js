import { Fira_Code } from 'next/font/google'
const firaCode = Fira_Code({ subsets: ['latin'] })
import Project1 from '../../assets/project1.png'
import './projects.css'
import Pcard from './Pcard.jsx'
export default function Page1() {
    return (
        <div className='cont'>
            

       <h1 className={firaCode.className +  "  white center"} style={{fontSize :'1.75rem' ,marginTop:"3rem" , letterSpacing:".2ch"}}>
            Projects
        </h1>
        <div className="project-container">
            <Pcard img={Project1} title="rent car website"/>
            <Pcard img={Project1} title="rent car website"/>

            
        </div>
        <div className={firaCode.className + " button"}>
            <button>
                
                See More
            </button>
        </div>
    

        </div>
    )
};
