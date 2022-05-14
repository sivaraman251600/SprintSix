import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case "SET_NAME" : 
        return {
            names : action.payload
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
        <p>{state.names}</p>
    </div>
  )
}
