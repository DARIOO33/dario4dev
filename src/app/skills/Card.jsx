import './card.css'
import './skills.css'
import Image from 'next/image'
import { Fira_Code } from 'next/font/google'
const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Card({img,title,details}) {
    return (
        <>
            <div className="card">
                <div className="logo">
                    <Image
                    alt ="Image for card"
                    src={img}
                    placeholder="blur"
                    loading='lazy'
                    /> 
                </div>
                <div className={firaCode.className +" title white center"}>
                    {title}
                </div>
                <div className="details red">
                   {details}
                </div>
            </div>
        </>
    )
};
