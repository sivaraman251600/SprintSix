import React, { useRef } from 'react'
import ChildButton from './ChildButton'

const ParentButton = () => {
    const buttonRef = useRef(null)
  return (
    <div>
        <button onClick={()=>buttonRef.current.changeToggle()}>Parent</button>
        <ChildButton ref={buttonRef}/>
    </div>
  )
}

export default ParentButton