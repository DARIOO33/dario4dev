"use client"
import { Tooltip } from 'react-tooltip'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { AiFillHome } from "react-icons/ai";



export default function Icon({ icon, direction, className }) {
    const currentRoute = usePathname();

    const router = useRouter();



    return (
        // <div>


        // {/* <Tooltip id="my-tooltip" /> */}
        <Link href={direction}>
            <div className={className} >
                <AiFillHome />
            </div>
        </Link>
    )
};
