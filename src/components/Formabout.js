import react, { useState } from "react"

function Formabout(props) {
    const [text, settext] = useState('Enter your text here');

    const upercase =()=>{
        console.log('upercase was clicked'+ text);
        settext=("you have cliked on upercase")
    }
    const handleonchange =(event)=>{
        console.log('onchange');
        settext(event.target.value);
    }
  return (
    <>
    <h2> {props.heading} </h2>
    <div className="mb-3">
   <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="3"onChange={handleonchange}></textarea>
   <button className="btn btn-primary my-3" onClick={upercase} >convert text to uper case</button>
  </div>
    </>
  );
}

export default Formabout;
