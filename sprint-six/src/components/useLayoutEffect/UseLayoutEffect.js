import React, { useEffect, useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const inputRef = useRef(null)
    useLayoutEffect(()=>{
        console.log('This is useLayoutEffect Value :',inputRef.current.value)
    })

    useEffect(()=>{
        inputRef.current.value = 'Prashant'
        console.log('This Is useEffect Value :',inputRef.current.value)
    })
  return (
    <div>
        <input type={'text'} value={'Praveen'} ref={inputRef} readOnly/>
    </div>
  )
}

export default UseLayoutEffect