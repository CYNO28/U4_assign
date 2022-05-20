import React from 'react'

const links = () => {
    let arr=["Services","Projects","About"];
  return (
    <div className='Links-1'>
        {arr.map((item,index)=>{
            return <a key={index} href="none">{item}</a>
        })}
    </div>
  )
}

export default links