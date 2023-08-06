import './contact.css'
export default function Input({type,placeholder,height}) {
    console.log({height});
    return (
        <p>
            <input type={type}  placeholder={placeholder} />
        </p>
    )
};  
