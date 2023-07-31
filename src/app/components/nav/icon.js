"use client"
import { Tooltip }  from 'react-tooltip'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import home from '../../../assets/home.png'

export default function Icon({img,direction,className}) {
    const currentRoute = usePathname();
  
    return (
        <>
        <Tooltip id="my-tooltip" />


        <Link href={direction} data-tooltip-id="my-tooltip" data-tooltip-content={direction} data-tooltip-place="left" >
         <div className={className}>
                        <Image
                            src={img}
                            alt={"main page direction for dario web developer portfolio"}
                            />
                    </div>
        </Link>
        </>
    )
};
