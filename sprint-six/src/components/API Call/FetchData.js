import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [id, setId] = useState(3)
    const [detail, setDetail] = useState([])
    const [show, setShow] = useState(false)
    
    const FetchDetails = () =>{
       axios.get(`http://localhost:3002/details/${id}`)
        .then((res)=>setDetail(res.data.details))
        .catch(err=>console.log(err.mess))
        setShow(true)
    }

//useEffect(()=>{
//    axios.get(`http://localhost:3002/details/${id}`)
//            .then((res)=>setDetail(res.data))
//            .catch(err=>console.log(err.mess))
//},[id])

const idHandler = (e) =>{
    setId(e.target.value)
}

  return (
    <div>
        <h1>Fetching The Data</h1>
       <form onSubmit={FetchDetails}>
        <input type={'number'} name='id' value={id} onChange={idHandler}/>
        <button type='submit'>Get Details</button>
        </form>
        { show && <p>{`${detail.position}`}</p>}
        <p>{`${detail.name}`}</p>
    </div>
  )
}

export default FetchData