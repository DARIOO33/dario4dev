import './contact.css'
export default function Input({type,placeholder,height,name}) {
    console.log({height});
    return (
        <p>
            <input type={type} name={name} placeholder={placeholder} />
        </p>
    )
};  
