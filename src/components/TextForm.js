import React, {useState} from 'react'  //rfc

export default function TextForm(props) {
const [text,setText]=useState('');
//text="new text"; //wrong way to change the text
//setText("Changing the text");  //correct way to change the text
const handleOnChange=(event)=>{
    // console.log("On change")
    setText(event.target.value)
    
}


const handleUpClick=()=>{
  // console.log("Converted to Uppercase:- " + text)
  let newText=text.toUpperCase();
  setText(newText)
  props.showAlert("Converted to upper case", "success")
}

const handleLowClick=()=>{
  // console.log("Converted to LowerCase:- " + text)
  let newText=text.toLowerCase();
  setText(newText)
  props.showAlert("Converted to lower case", "success")

}

const handleCopy=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value)
  props.showAlert("Copied to clipboard","success");
}

const handleExtraSpaces=()=>{
  let newtext=text.split(/[ ]+/);
  setText(newtext.join(" "));
  props.showAlert("Removed extra spaces", "success")

}
const handleClearClick=()=>{
  let newText='';
  setText(newText);
  props.showAlert("Text cleared","success")
}

  return (
    <>
        <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>

            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>

            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert UpperCase</button>

            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert LowerCase</button>

            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>

            <button className="btn btn-primary mx-2" onClick={handleCopy}>Select Copy</button>

            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>You text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
        </div>
    </>
  )
}
