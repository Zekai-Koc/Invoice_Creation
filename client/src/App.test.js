// src/App.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { act } from "react";

test("renders header and button", () => {
   act(() => {
      render(<App />);
   });

   // Check if the header text is rendered
   const headerElement = screen.getByText(/create new invoice/i);
   expect(headerElement).toBeInTheDocument();

   // Check if the button is rendered
   const buttonElement = screen.getByText(/click me!/i);
   expect(buttonElement).toBeInTheDocument();

   // Simulate button click and check if the alert is triggered
   window.alert = jest.fn(); // Mock alert
   fireEvent.click(buttonElement);
   expect(window.alert).toHaveBeenCalledWith("Button was clicked!");
});
