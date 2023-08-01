"use client"
import { Tooltip }  from 'react-tooltip'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


export default function Icon({img,direction,className}) {
    const currentRoute = usePathname();
  
    return (
        <div data-tooltip-id="my-tooltip" data-tooltip-content={direction} data-tooltip-place="left" >


        <Link href={direction} >
        <Tooltip id="my-tooltip" />
         <div className={className}>
                        <Image
                            src={img}
                            alt={"main page direction for dario web developer portfolio"}
                            />
                    </div>
        </Link>
        </div>
    )
};
