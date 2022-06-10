export const themereducer=(state,{type})=>{
switch (type) {
case "CHANGE":{
    console.log(state)
return state=!state
}

default :
return state;
}




}