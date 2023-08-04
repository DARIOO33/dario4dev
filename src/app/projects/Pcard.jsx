import Image from 'next/image'
import "./Pcard.css"
import Link from "next/link"
import { Fira_Code } from 'next/font/google'
const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Pcard({ img, title ,link}) {
    return (
        <div className="project-card">
            <div className="image">
                <Image
                    alt='project image display'
                    src={img}
                    placeholder="blur"
                    loading='lazy'
                    quality={50}
                />
            </div>
            <div className={firaCode.className + " ptitle"}>
                {title}
            </div>
            <div className={firaCode.className + " visit red "}>
                <Link className='  red' href={link} target="_blank">
                    Visit Website
                </Link>
            </div>
        </div>
    )
}
