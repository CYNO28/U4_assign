import React from "react";

import Design from "./Design";
const Card = () => {

    let date=new Date();
   let dat=(`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
    console.log(date)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   let dat1=(`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`);
  return (
    <div>
      <Design 
      date={dat}
      logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2048px-Amazon_icon.svg.png"}
      heading={"Amazon Gift"}
      subHeading={"Pay"}
      devices={"Desktop - Mobile"}
      Style={'Amazon'}
/>
<Design 
      date={dat1}
      logo={"https://logolook.net/wp-content/uploads/2021/06/Apple-Logo.png"}
      heading={"Apple Gift"}
      subHeading={"Payment"}
      devices={"MacOS - Mobile"}
      Style={'Apple'}
/>
    </div>
  );
};

export default Card;
