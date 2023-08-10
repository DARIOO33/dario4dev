"use client"
export default function FormButton(params) {
    function send(event){
        event.preventDefault()
        const options = {
            to: 'darioanwar1@gmail.com', 
            from: 'darioanwar3@gmail.com', 
            subject: 'Hire Dario',
            text: 'The Web Developer',
            html: {text},
          };
    
        // sendgrid.send(options);
        console.log(options);
        
    }
    return (
        <>
        <button className="wh" onClick={send} >Send</button>
        </>
    )
};
