import './card.css'
import Image from 'next/image'
import { Fira_Code } from 'next/font/google'
const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Card({img,title,details}) {
    return (
        <>
            <div className="card" style={{width:"80%" , textAlign:"center"  }}>
                <div className="logo">
                    <Image
                    alt ="Image for card"
                    src={img}
                    placeholder="blur"
                    loading='lazy'
                    /> 
                </div>
                <div className={firaCode.className +" title white center"} style={{fontSize:"1.25rem" , letterSpacing:'0.1ch' , marginTop:"2rem"}}>
                    {title}
                </div>
                <div className="details red" style={{marginTop:"2rem"}}>
                   {details}
                </div>
            </div>
        </>
    )
};
