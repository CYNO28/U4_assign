import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Navbar = () => {
    const {isAuth,logout}=useContext(AuthContext)
    const navigate =useNavigate()
    const handleLoginClick=()=>{
        navigate('/login')
        if(isAuth){
            logout()
            navigate('/')
        }
    }
  return (
    <div style={{padding:'15px',display:"flex",gap:"10%"}}>
        <Link to=''>Home</Link>
        <Link to='/feeds'>Feeds</Link>
        <Link to='/posts'>Posts</Link>
        <button onClick={handleLoginClick}> {isAuth?"Logout":"Login"}</button>
    </div>
  )
}

export default Navbar