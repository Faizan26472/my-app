import React, { useState } from "react";

function TextForm(props) {
  const toUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.popAlert("Converted to UpperCase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log(event);
  };

  const toLowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.popAlert("Converted to LowerCase", "success");
  };

  const clearText = () => {
    setText("");
    props.popAlert("Text Cleard", "success");
  };

  const removeSpace = () => {
    let newText = text.replaceAll(/\s/g, "");
    setText(newText);
    props.popAlert("Spaces Removed", "success");
  };

  const [text, setText] = useState("");
  // const [length, setLength] = useState(0);

  return (
    <>
      <div className="container">
        <div
          className={`mb-3 text-${props.mode === "light" ? "dark" : "light"}`}
        >
          <h1 className="my-3">Enter Text Here</h1>
          <textarea
            className={`form-control text-${
              props.mode === "light" ? "dark" : "light"
            } bg-${props.mode}`}
            value={text}
            onChange={handleOnChange}
            id="textare"
            rows="8"
          ></textarea>
          <button className={`btn btn-primary`} onClick={toUpCase}>
            Convert to UpperCase
          </button>
          <button className={`btn btn-primary m-3`} onClick={toLowCase}>
            Convert to LowerCase
          </button>
          <button className={`btn btn-primary`} onClick={clearText}>
            Clear Text
          </button>
          <button className={`btn btn-primary m-3`} onClick={removeSpace}>
            Remove Space
          </button>
        </div>
        <div
          className={`conatiner2 text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <h2>Your Text Summary</h2>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <h3>Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
