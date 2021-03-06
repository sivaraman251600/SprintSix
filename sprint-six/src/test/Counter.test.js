import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import TestElementOne from '../components/TestElement/TestElementOne'

let getByTestId
beforeEach(()=>{
    const component = render(<TestElementOne />)
    getByTestId = component.getByTestId
})

afterAll(()=>{
    cleanup()
})

test('Here I Am Testing the TestElementOne', () => { 
    const headerEl = getByTestId('header')
    const buttonEl = getByTestId('buttonCheck')
    expect(headerEl.textContent).toBe('My Test State')
    expect(buttonEl.textContent).toBe('Add Name')
 })

test("Test the Display Counter Value with initial 0",()=>{
    const displayEl = getByTestId("displayValue")

    expect(displayEl.textContent).toBe('0')
})

test("Test the display subtract button -",()=>{
    const subtractBtn = getByTestId("subtract-btn")

    expect(subtractBtn.textContent).toBe('-')
})

test("input type Number value of the ",()=>{
    const inputEl = getByTestId('input-value')

    expect(inputEl.value).toBe('1')
})

test("Test the display add button +",()=>{
    const subtractBtn = getByTestId("add-btn")

    expect(subtractBtn.textContent).toBe('+')
})

test("Test the input field value as Dynamic", ()=>{
    const inputEl = getByTestId("input-value")

    expect(inputEl.value).toBe('1')

    fireEvent.change(inputEl,{
        target:{
            value : '10'
        }
    })

    expect(inputEl.value).toBe('10')
})

test('we going to test the display value as dynamic when i click the add btn',()=>{
    const addBtn = getByTestId('add-btn')
    const displayEl = getByTestId("displayValue")

    expect(displayEl.textContent).toBe('0')
    
    fireEvent.click(addBtn);

    expect(displayEl.textContent).toBe('1')
})

test('when i click the add btn input work fine based on what i type',()=>{
    const addBtn = getByTestId('add-btn')
    const displayEl = getByTestId("displayValue")
    const inputEl = getByTestId('input-value')

    fireEvent.change(inputEl,{
        target:{
            value:'5'
        }
    })
    
    fireEvent.click(addBtn);

    expect(displayEl.textContent).toBe('5')
})

test('when i click the subtract btn input work fine based on what i type',()=>{
    const subBtn = getByTestId('subtract-btn')
    const displayEl = getByTestId("displayValue")
    const inputEl = getByTestId('input-value')

    fireEvent.change(inputEl,{
        target:{
            value:'5'
        }
    })
    
    fireEvent.click(subBtn);

    expect(displayEl.textContent).toBe('-5')
})

test('we checking the add and subtract working fine',()=>{
    const addBtn = getByTestId('add-btn')
    const subBtn = getByTestId('subtract-btn')
    const displayEl = getByTestId("displayValue")
    const inputEl = getByTestId('input-value')

    fireEvent.change(inputEl,{
        target:{
            value:'5'
        }
    })
    
    fireEvent.click(addBtn);
    fireEvent.click(addBtn);
    fireEvent.click(subBtn);

    expect(displayEl.textContent).toBe('5')
})

test('Here i change the color of the display value based on the + and -',()=>{
    const addBtn = getByTestId('add-btn')
    const subBtn = getByTestId('subtract-btn')
    const displayEl = getByTestId("displayValue")
    const inputEl = getByTestId('input-value')

    expect(displayEl.textContent).toBe('0')

    fireEvent.change(inputEl,{
        target:{
            value:'50'
        }
    })

    fireEvent.click(addBtn);
    fireEvent.click(addBtn);

    expect(displayEl.textContent).toBe('100')

    expect(displayEl.className).toBe('green')

    fireEvent.click(subBtn);
    fireEvent.click(subBtn);
    fireEvent.click(subBtn);

    expect(displayEl.className).toBe('red')

})