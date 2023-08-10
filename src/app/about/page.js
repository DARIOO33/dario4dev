import Image from 'next/image'
import { Fira_Code } from 'next/font/google'
import './about.css'
import Link from 'next/link'
import OutlineButton from './../assets/components/Buttons/OutlineButton'
import img from './../assets/abouti.png'
const firaCode = Fira_Code({ subsets: ['latin'] })
export default function Page1({ fontclass }) {
    return (
        <>
        <div className="about-container">
            <div className="imagee-container">
                <Image
                        priority

                src={img}
                alt='test'
                placeholder="blur"
                        quality={80}
                />
            </div>
            <div className="text-containerr">
                <div className={firaCode.className} style={{color:"white", fontSize:"2rem" ,fontWeight:"800"}}>
                    About me
                </div>
                <div className={firaCode.className} style={{color:"white", fontSize:"1.1rem" ,fontWeight:"500" , width:"80%" , margin:" auto" , paddingTop:"2rem"}}>
                Hey there! I`m Anwer Dario, a 
                skilled front-end web developer with over 
                2 years of professional experience. I specialize
                in HTML, CSS, and JavaScript, and I`m particularly
                 proficient in React.js and Next.js. I take pride in
                 my ability to tackle complex problems and find effective
                  solutions. Let`s create some amazing web experiences together!
                </div>
               
         <Link href="contact">
                 <div className='btn' style={{marginTop:"5%" }}>

                <OutlineButton text="Hire Me"/>
                 </div>
                </Link>
            </div>
        </div>
        
        </>
    )
};
