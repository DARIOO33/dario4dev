"use client"
import { useState } from 'react'
import './home.css'
import { Suspense } from 'react'
import Loading from '../components/Loader/Loading.jsx'
import Homec from './homec'
export default function Page1() {
    const [loading, setLoading] = useState(true);


    setTimeout(() => {
        setLoading(false);

    }, 2500);

    return (
        <>
            {loading && <div><Loading/></div>}
            {!loading && <div><Homec/></div>}
            

        </>
    )
};
