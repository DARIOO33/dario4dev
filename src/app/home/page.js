// "use client"
import './home.css'
import Loading from '../components/Loader/Loading.jsx'
import Homec from './homec'
export default function Page1() {
  
    return (
        <>
              {/* <Suspense fallback={<Loading />}> */}
                        <Homec />
                {/* </Suspense> */}


        </>
    )
};
