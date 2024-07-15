// src/App.js
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import "./App.css";
import { jsPDF } from "jspdf";

function App() {
   const [inputValue, setInputValue] = useState("./data/just_the_div.html");

   const handleInputChange = (value) => {
      setInputValue(value);
   };

   const handleButtonClick = async () => {
      // alert(`You entered: ${inputValue}`);

      try {
         const addressLines = await scrapeDataFromURL(inputValue);
         // await generatePDF(addressLines);
      } catch (error) {
         console.error("Error:", error);
      }
   };

   // Function to scrape data from the URL and return the result
   async function scrapeDataFromURL(url) {
      try {
         let html;

         // Fetch the HTML content based on the URL type
         const response = await fetch(url);
         if (!response.ok) {
            throw new Error(
               "Network response was not ok " + response.statusText
            );
         }
         html = await response.text();

         // Create a new DOMParser instance and parse the HTML content
         const parser = new DOMParser();
         const doc = parser.parseFromString(html, "text/html");

         // Extract address lines or any other relevant data using DOM traversal methods
         const scrapedAddressLines = [];
         const addressLines = doc.querySelectorAll(".address-lines .line");
         addressLines.forEach((line) => {
            scrapedAddressLines.push(line.textContent.trim());
         });

         console.log("Scraped Address Lines:", scrapedAddressLines);

         // Return the scraped address lines
         return scrapedAddressLines;
      } catch (error) {
         console.error("Scraping Error:", error);
         throw error; // Re-throw error to be caught in handleButtonClick
      }
   }

   // Function to generate PDF from the address lines
   // async function generatePDF(addressLines) {
   //    try {
   //       const doc = new jsPDF();

   //       // Set font size
   //       doc.setFontSize(12);

   //       // Add the address lines to the PDF
   //       addressLines.forEach((line, index) => {
   //          doc.text(line, 10, 10 + index * 10); // Adjust positions as needed
   //       });

   //       // Save the PDF and open it in a new tab
   //       const fileName = "address-label-" + addressLines[0] + ".pdf";
   //       doc.save(fileName);
   //    } catch (error) {
   //       console.error("PDF Generation Error:", error.message);
   //    }
   // }

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
