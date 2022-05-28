import React, { useEffect } from "react";
import Style from "./Form.module.css";
import { useState,useRef } from "react";
const Form = () => {
const ref=useRef()
    const [form, setForm] = useState({
    name: "",
    email: "",
    Address: "",
    age: 0,
    isIndian: true,
    married:'',
    deparment:'',
  });
  const onChange = (e) => {
      console.log(e)
    let { name, type, value, checked, files } = e.target;
    if (type === "checkbox") {
   
        setForm({ ...form, [name]: checked });
   
    } else if (type === "file") {
        setForm({ ...form, [name]: files });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };
  useEffect(() => {
    // console.log(form);
  });
const handleOnSubmit=(e)=>{
    e.preventDefault()
    console.log(form)
    ref.current.focus()
}
  return (
    <form onSubmit={handleOnSubmit} className={Style.form}>
      <div>
        <label htmlFor="">Name:</label>
        <input
        ref={ref}
          type="text"
          name="name"
          placeholder="Eneter Name.."
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="">Age:</label>
        <input
          type="number"
          value={form.age}
          name="age"
          placeholder="Eneter Age.."
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="">Address:</label>
        <input
          type="text"
          name="Address"
          placeholder="Eneter Address"
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="">Department</label>
       <select name="department" id="" onChange={onChange}>
            <option value="none">Select Department</option>
            <option value="cs">computer Science</option>
            <option value="sv">cevil</option>
            <option value="ec">electrical</option>

       </select>
      </div>
     
      <div>
          <input type="radio"
          name="married"
          onChange={onChange}
          value='Yes' />
    <label htmlFor="">Married</label>
      </div>
      <div>
          <input type="radio"
          name="married"
          onChange={onChange}
          value='No' />
    <label htmlFor="">Single</label>
      </div>
      <div>
          <label>Profile Pic</label>
          <input type="file"
          name="resume"
          files={form.resume}
          onChange={onChange}
           />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
