import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to uppercase","success")
    // let prev = text;
    // console.log(prev);
    // setText(text.toUpperCase());
    // setTimeout(() => {
    //   setText(prev);
    //   console.log("back");
    // }, 5000);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to lowercase","success")
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text is cleared","success")
  };
  const handleCapitalClick = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text is converted to Capitalcase","success")
  };
  const [text, setText] = useState("");
  //   setText("new text"); // way to change
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className="btn btn-primary danger mx-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalClick}>
          Capitalized case
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.trim() === ""
            ? "0 words and 0 characters"
            : `${text.split(" ").length} words and ${text.length} characters`}
        </p>

        <p>
          {text.trim() === ""
            ? "0 minutes required to read"
            : `${0.08 * text.split(" ").length} minutes required to read`}
        </p>
        <h3>Preview</h3>
        <p>{text.trim() === "" ? "Enter something to preview it." : text}</p>
      </div>
    </>
  );
}
