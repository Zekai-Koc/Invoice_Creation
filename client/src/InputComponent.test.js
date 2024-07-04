// src/InputComponent.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputComponent from "./InputComponent";
import { act } from "react";

test("renders input component and allows input", () => {
   render(<InputComponent />);

   const inputElement = screen.getByPlaceholderText(/enter text here/i);
   expect(inputElement).toBeInTheDocument();

   act(() => {
      fireEvent.change(inputElement, { target: { value: "Hello, world!" } });
   });

   expect(inputElement.value).toBe("Hello, world!");
});
