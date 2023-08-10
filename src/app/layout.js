import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './assets/components/nav/Nav'
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
        {children}
        </div>
        </div>

        </body>
    </html>
  )
}
