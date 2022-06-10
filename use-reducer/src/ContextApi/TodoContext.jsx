import React, { createContext } from 'react'
import { reducer } from './Treduce'
export const TodoContext = createContext()
export const TodoProvider = ({ children }) => {
   
const [todos,dispatch] = React.useReducer(reducer,[])
  
    return (
    <TodoContext.Provider value={{todos,dispatch}}>{children}</TodoContext.Provider>)

}