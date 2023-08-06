import Input from "./Input.jsx"
import './contact.css'
import OutlineButton from '../components/Buttons/OutlineButton.jsx'
export default function Page1({ fontclass }) {
    return (
        <form>
        <h1 className="title white center">
            Contact
        </h1>
        <div className="contact-container">
            <Input type="text" placeholder="Your Name"/>
            <Input type="email" placeholder="Your Email"/>
            <p>
            <textarea type="text" placeholder="Your Message"  rows={7} maxLength={400}/>
            </p>
            {/* <Input type="text" placeholder="Your Message" height="30vh"/> */}
        </div>
        <div className="btnn" style={{textAlign:"center" , paddingTop:'1rem'}}>
            <OutlineButton text="Send" paddingx="wh"/>
        </div>
        </form>
    )
};
