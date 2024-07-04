import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import "./App.css";

function App() {
   const [inputValue, setInputValue] = useState("./data/just_the_div.html");

   const handleInputChange = (value) => {
      setInputValue(value);
   };

   const handleButtonClick = () => {
      alert(`You entered: ${inputValue}`);
   };

   return (
      <div className="App">
         <header className="App-header">
            <h1>Create New Invoice</h1>
            <InputComponent
               onChange={handleInputChange}
               defaultValue={inputValue}
            />
            <ButtonComponent
               onClick={handleButtonClick}
               label="Create Invoice"
            />
         </header>
      </div>
   );
}

export default App;
