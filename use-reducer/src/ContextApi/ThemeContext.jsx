import React, { useReducer } from 'react'
import { themereducer } from './theme-reducer'

export const ThemeContext = React.createContext()
export const ThemeProvider = ({ children }) => {
    const [mode, dispatch1]=useReducer(themereducer,true)
return (
<ThemeContext.Provider value={{mode,dispatch1}}>{children}</ThemeContext.Provider>
)
}