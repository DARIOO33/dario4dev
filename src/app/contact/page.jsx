"use client"
import Input from "./Input.jsx"
import './contact.css'
export default function Page1() {
    async function handeOnSubmit(e){
        e.preventDefault()

    }
   
    return (
        <form method="post" onSubmit={handeOnSubmit}>
        <h1 className="title white center">
            Contact
        </h1>
        <div className="contact-container">
            <Input type="text" placeholder="Your Name"/>
            <Input type="email" placeholder="Your Email"/>
            <p>
            <textarea id="html" type="text" placeholder="Your Message"  rows={7} maxLength={400}/>
            </p>
        </div>
        <div className="btnn" style={{textAlign:"center" , paddingTop:'1rem'}}>
        {/* <FormButton/> */}
        <button className="wh">Send</button>

        </div>
        </form>
    )
};

