import React, { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
const {state} = useLocation();
console.log(state)
    const navigate=useNavigate()
  const[isAuth, setIsAuth] = React.useState(false);
  const login = () => {
    setIsAuth(true);
    if(state.from)
    navigate(state.from,{replace:true})

    else
    navigate('/')
  };
  const logout = () => {
    setIsAuth(false);
    navigate('/login')
  };

  return (
    <AuthContext.Provider value={{ isAuth:isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
