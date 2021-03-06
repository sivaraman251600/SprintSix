import React, { useState } from 'react'
import axios from "axios"

const PostData = () => {
    const [details, setDetails] = useState({ name:"", age:"", salary:0, position:""})
    

    const DetailsHandle = (e) => {
        setDetails({...details,[e.target.name]:e.target.value})
    }
    

    const DetailsSubmit = () =>{
        axios.post("http://localhost:3002/details",details)
        .then(res=>console.log(res.data))
        .catch(err=>console.log(err.message))
    }
  return (
    <div>
        <h1>Posting The Data</h1>
        <>
        <form onSubmit={()=>DetailsSubmit()}>
            <label>Name :</label>
            <input type={'text'} name="name" onChange={DetailsHandle}/><br/>
            <label>Age :</label>
            <input type={'number'} name="age" onChange={DetailsHandle}/><br/>
            <label>Salary :</label>
            <input type={'number'} name="salary" onChange={DetailsHandle}/><br/>
            <label>Position :</label>
            <input type={'text'} name="position" onChange={DetailsHandle}/><br/>
            <button type='submit'>Submit Details</button>
        </form>
        </>
    </div>
  )
}

export default PostData