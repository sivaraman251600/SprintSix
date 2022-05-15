import React, { useMemo, useState } from 'react'

export const UseMemoHook = () => {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    const squaredNumber = useMemo(()=> square(num),[num])

    const SetCount = () =>{
        setCount(c => c + 1)
    }

    const SetNum = (e) =>{
        setNum(e.target.value)
    }
  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>SetCount()}>Incr</button><br/>
        <input type={'number'} value={num} onChange={SetNum} />
        <p>Squared Number : {squaredNumber}</p>
    </div>
  )
}

export const square = (num) => {
    console.log("Squaring Will Be Done")
    var result = Math.pow(num,2)

    return result
}

