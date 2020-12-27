import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
  users: [
    { id: 1, name: 'UserOne' },
    { id: 2, name: 'UserTwo' },
    { id: 3, name: 'UserThree' },
  ]
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GlobalContext.Provider value={{
      users: state.users
    }}>
      {children}
    </GlobalContext.Provider>
  )
}