import React, { createContext } from 'react'
import UserB from './UserB'


export const AppContext = createContext(null)

const AppProvider = () => {
    
  return (
    <AppContext.Provider value={{Name:'Praveen',Position:'Java Developer',Manager:'Prashant'}}>
        <UserB />
    </AppContext.Provider>
  )
}

export default AppProvider