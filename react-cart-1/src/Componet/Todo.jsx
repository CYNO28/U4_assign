import React, { useEffect, useState } from 'react'

const Todo = () => {
    const [arr, setArr] = useState({
        name: "",
        price:'',
    })

    function changeHandler(e){
        setArr({...arr,[e.target.name]:e.target.value})
       
     console.log(arr)   
    }
   async function submitHandler(e){
        e.preventDefault()
       let r=await fetch('http://localhost:8080/products',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
            ,body:JSON.stringify(arr)
        })
        let data=await r.json()
        console.log(data)
    }
   
  return (
      

    <div>Todo
        <form onSubmit={submitHandler}>
<input type="text" onChange={changeHandler} name='name' placeholder='name' />
<input type="text" onChange={changeHandler} name='price' placeholder='price' />
<button type='submit'>Submit</button>



        </form>
    </div>
  )
}

export default Todo