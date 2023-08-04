import { Fira_Code } from 'next/font/google'
import Image from 'next/image'
import img from '../../assets/me.png'
import Link from 'next/link'
import Nav from '../components/nav/Nav.jsx'
const firaCode = Fira_Code({ subsets: ['latin'] })

export default function Homec(params) {
    return (
        <>
        <h1 className={firaCode.className + " title center"}>
                Portfolio V1
            </h1>
            <div className="home-container">
                <div className="text-container">
                    <div className={"bigtitle white strong"}>
                        <h1 className={firaCode.className} style={{ fontSize: "2.5rem" }}>
                            Hello I`m <br /> Dario a front end web <span className='red'>developer</span> .
                        </h1>
                    </div>
                    <div className={"description white"}>
                        <p className={firaCode.className}>
                            I`m responsible for the user-facing aspects
                            of a website or web application. They use HTML, CSS,
                            and JavaScript to create the layout, design, and functionality
                            of a website.
                        </p>
                    </div>
                </div>
                <div className="image-container">
                    <Image
                        // placeholder="blur"
                        quality={80}
                        width={300}
                        height={300}
                        // loading="lazy"
                        src={img}
                        placeholder="https://via.placeholder.com/100x100"
                        blurDataURL="https://via.placeholder.com/100x100/gray"
                        alt='Dario web developer home content image'
                    />
                </div>
            </div>
            <div className="phone-container">
                <div className="image-container">
                    <Image
                        height={225}
                        width={225}
                        src={img}
                        alt='Dario web developer home content image'
                    />
                </div>
                <div className="text-container">
                    <div className={"bigtitle white strong"}>
                        <h1 className={firaCode.className} style={{ fontSize: "2.5rem" }}>
                            Hello I`m <br /> Dario a front end web <span className='red'>developer</span>
                        </h1>
                    </div>

                </div>
            </div>
            <Link href="projects">
                <div className="button">
                    <button className={firaCode.className} style={{ color: "white" }}>Projects</button>
                </div>
            </Link>

        </>
    )
};
