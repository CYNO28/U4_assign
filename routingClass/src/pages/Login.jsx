import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {
    const [logincred,setLoginCred] = React.useState({})
    const {isAuth} = useContext(AuthContext)
    const navigate=useNavigate()
const {login}=useContext(AuthContext)
const onchange = (e)=>{
    const {name,value} = e.target
    setLoginCred({...logincred,[name]:value})
}
const onSubmit = (e)=>{
    e.preventDefault()
    console.log(logincred)
    login()
 

}
  return (
    <div>Login
        <form action="" style={{display:"flex",flexDirection:'column',width:'200px',margin:'auto',marginTop:"1rem",gap:'10px',}}>
        <input type="text" onChange={onchange} placeholder='email' />
        <input type="text" onChange={onchange} placeholder='password'/>
        <button type='submit' onClick={onSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login