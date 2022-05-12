import React, { useState } from 'react'

export const StateHookOne = () => {
    const [name, setName] = useState('')
    const [inputValues, setInputValues] = useState()
    

    const handleNameChange = () => {
        setInputValues([name])
        document.getElementById('name').value = ''
    }

  return (
    <div>
        <input type={'text'} placeholder={'Enter Some Value...'} id={'name'} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>handleNameChange()}>Add Name</button>
        {/*inputValues.map((inputValue)=><p key={inputValue}>{inputValue}</p>)*/}
        {<p>{inputValues}</p>}
    </div>
  )
}
