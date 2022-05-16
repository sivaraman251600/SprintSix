import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import TestElementOne from '../components/TestElement/TestElementOne'

test('Here I Am Testing the TestElementOne', () => { 
    const component = render(<TestElementOne />)
    const headerEl = component.getByTestId('header')
    const buttonEl = component.getByTestId('buttonCheck')
    expect(headerEl.textContent).toBe('My Test State')
    expect(buttonEl.textContent).toBe('Add Name')
 })