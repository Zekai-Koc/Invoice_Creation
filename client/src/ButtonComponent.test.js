// src/ButtonComponent.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent from "./ButtonComponent";
import { act } from "react";

test("renders button component and handles click", () => {
   const handleClick = jest.fn();

   act(() => {
      render(<ButtonComponent onClick={handleClick} label="Click Me!" />);
   });

   const buttonElement = screen.getByText(/click me!/i);
   expect(buttonElement).toBeInTheDocument();

   act(() => {
      fireEvent.click(buttonElement);
   });

   expect(handleClick).toHaveBeenCalledTimes(1);
});
