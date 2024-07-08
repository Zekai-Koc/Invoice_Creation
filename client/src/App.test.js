import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders header, input field with default value, and button, and shows alert on button click", () => {
   render(<App />);

   // Check if the header text is rendered
   const headerElement = screen.getByText(/create new invoice/i);
   expect(headerElement).toBeInTheDocument();

   // Check if the input field is rendered with the default value
   const inputElement = screen.getByPlaceholderText(/enter text here/i);
   expect(inputElement).toBeInTheDocument();
   expect(inputElement.value).toBe("./data/just_the_div.html");

   // Check if the button is rendered
   const buttonElement = screen.getByText(/create invoice/i);
   expect(buttonElement).toBeInTheDocument();

   // Mock the alert function
   window.alert = jest.fn();

   // Simulate button click and check if the alert is called with the default input value
   fireEvent.click(buttonElement);
   expect(window.alert).toHaveBeenCalledWith(
      "You entered: ./data/just_the_div.html"
   );
});
