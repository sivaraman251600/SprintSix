import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    console.log("it's Calling")
    switch(action.type){
        case "SET_NAME" : 
        return {
            state : action.payload
        }

        default : return state
    }
}

export const StateHookWithReducer = () => {
    const [name, setName] = useState('')
    const [state, dispatch] = useReducer(reducer,'')
  return (
    <div>
        <input type={'text'} onChange={(e)=>setName(e.target.value)} />
        <button onClick={()=>dispatch({type:"SET_NAME",payload:name})}>Name</button>
        <p>{state}</p>
    </div>
  )
}
