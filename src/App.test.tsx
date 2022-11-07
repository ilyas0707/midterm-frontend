import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders textarea", () => {
    render(<App />)

    type TestElement = Document | Element | Window | Node

    function hasInputValue(e: TestElement, inputValue: string) {
        return screen.getByDisplayValue(inputValue) === e
    }

    const textarea = screen.getByLabelText("Your message")
    expect(hasInputValue(textarea, "")).toBe(true)
})
