import React, { useEffect } from "react";
import { useState } from "react";
const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    pass: "",
    age: 0,
    isIndian: true,
  });
  const onChange = (e) => {
    //   console.log(e)
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
}
  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Eneter Name.."
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Eneter email.."
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input
          type="text"
          name="pass"
          placeholder="Eneter password.."
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
        <input type="checkbox" checked={form.isIndian} name="isIndian" onChange={onChange} />
        <label htmlFor="">isIndian</label>
      </div>
      <div>
          <input type="radio"
          name="gender"
          onChange={onChange}
          value='male' />
    <label htmlFor="">Male</label>
      </div>
      <div>
          <input type="radio"
          name="gender"
          onChange={onChange}
          value='female' />
    <label htmlFor="">Female</label>
      </div>
      <div>
          <label>User Resume:</label>
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
