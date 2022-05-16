import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const FetchData = () => {
    const [id, setId] = useState(3)
    const [detail, setDetail] = useState([])
    
    const FetchDetails = useCallback((id) =>{
        axios.get(`http://localhost:3002/details/${id}`)
        .then((res)=>console.log(res.data))
        .catch(err=>console.log(err.mess))
    },[id])

//useEffect(()=>{
//    axios.get(`http://localhost:3002/details/${id}`)
//            .then((res)=>setDetail(res.data))
//            .catch(err=>console.log(err.mess))
//},[id])

const SetIdDetails = (e) =>{
    setId(e.target.value)
}

  return (
    <div>
        <h1>Fetching The Data</h1>
       <form onSubmit={()=>FetchDetails(id)}>
        <input type={'number'} value={id} onChange={SetIdDetails}/>
        <button type='submit'>Get Details</button>
        </form>
        <p>{`${detail.position}`}</p>
    </div>
  )
}

export default FetchData