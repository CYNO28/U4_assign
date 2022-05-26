import React, { useEffect } from "react";
import { useState } from "react";
const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    pass: '',
    age: ''
  });
  const onChange=(e)=>{
      let {name,value}=e.target;
        setForm({
            ...form,
            [name]:value
        })
    }
useEffect(()=>{
    console.log(form)
})
        
  return (<form>
      <div>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" placeholder="Eneter Name.." onChange={onChange} />
      </div>

      <div>
        <label htmlFor="">Email:</label>
        <input type="email" name="email" placeholder="Eneter email.." onChange={onChange}/>
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input type="text" name='pass'placeholder="Eneter password.." onChange={onChange}/>
      </div>
      <div>
        <label htmlFor="">Age:</label>
        <input type="text"name="age" placeholder="Eneter Age.."onChange={onChange} />
      </div>
    </form>
  );
};

export default Form;
