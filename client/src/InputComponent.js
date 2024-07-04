import React, { useState, useEffect } from "react";

const InputComponent = ({ onChange, defaultValue }) => {
   const [inputValue, setInputValue] = useState(defaultValue);

   useEffect(() => {
      setInputValue(defaultValue);
   }, [defaultValue]);

   const handleChange = (event) => {
      setInputValue(event.target.value);
      onChange(event.target.value); // Call the onChange prop function
   };

   return (
      <div style={{ width: "100%" }}>
         <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter text here"
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
         />
         <p>You entered: {inputValue}</p>
      </div>
   );
};

export default InputComponent;
