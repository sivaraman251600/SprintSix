import React, { useContext } from 'react'
import { AppContext } from './AppProvider'

const UserB = () => {
    const PassedValue = useContext(AppContext)
  return (
    <div>
        <p><b>Name:</b> {PassedValue.Name}</p>
        <p><b>Job Position:</b> {PassedValue.Position}</p>
        <p><b>Manager:</b> {PassedValue.Manager}</p>
    </div>
  )
}

export default UserB