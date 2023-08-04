import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/nav/Nav'
import { Suspense} from 'react'
import Loading from './components/Loader/Loading'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dario Portfolio',
  description: 'Dario portfolio',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={inter.className}>
      <Nav/>

        <div className="zoom">
        <div className='container'>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
        </div>

        </body>
    </html>
  )
}
