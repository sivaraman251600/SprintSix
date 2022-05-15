import React, { useCallback, useState } from 'react'

const UseCallBackHookOne = () => {

    const [Anum, setANum] = useState(0)
    const [Bnum, setBNum] = useState(0)
    const [res, setRes] = useState(0)

    const [count, setCount] = useState(0)

    var result = useCallback(()=>{
        var results = Number (Anum) + Number (Bnum)
        setRes(results)
        console.log('Callback Function Add')
    },[Anum,Bnum])

    const SetANum = (e) => {
        setANum(e.target.value)
    }

    const SetBNum = (e) => {
        setBNum(e.target.value)
    }

    const Incr = () =>{
        console.log('Callback Function Counter')
        setCount(count + 1)
    }

  return (
    <div>
        <p>{res}</p>
        <label>A :</label>
        <input type={'number'} value={Anum} onChange={SetANum} /><br/>
        <label>B :</label>
        <input type={'number'} value={Bnum} onChange={SetBNum} /><br/>
        <button onClick={result}>ADD 2 Values</button>
        <>{count}</>
        <button onClick={Incr}>Incr</button>
    </div>
  )
}

export default UseCallBackHookOne