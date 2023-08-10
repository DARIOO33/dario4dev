"use client"
import Input from "./Input.jsx"
import './contact.css'
export default function Page1() {
    async function handeOnSubmit(e){
        e.preventDefault();
        const formData = {}
        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value
        }),
        fetch('api/mail' , {
            method:'post',
            body:JSON.stringify(formData)
        })
        console.log(formData);

    }
   
    return (
        <form method="post" onSubmit={handeOnSubmit}>
        <h1 className="title white center">
            Contact
        </h1>
        <div className="contact-container">
            <Input type="text" placeholder="Your Name" name="name"/>
            <Input type="email" placeholder="Your Email" name="email"/>
            <p>
            <textarea id="html" type="text" placeholder="Your Message" name="message"  rows={7} maxLength={400}/>
            </p>
        </div>
        <div className="btnn" style={{textAlign:"center" , paddingTop:'1rem'}}>
        {/* <FormButton/> */}
        <button className="wh">Send</button>

        </div>
        </form>
    )
};

