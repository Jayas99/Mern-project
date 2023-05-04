import React, { useState, useEffect } from "react";

const MyInputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    console.log("Input value changed:", inputValue);
  }, [inputValue]); 
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
 const handleButtonClick =() => {
    console.log("Button clicked");
 };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Enter your input"
      />
      <button onClick={handleButtonClick}>click me</button>
      <p>this is {inputValue}</p>
    </div>
  );
};

export default MyInputComponent;
