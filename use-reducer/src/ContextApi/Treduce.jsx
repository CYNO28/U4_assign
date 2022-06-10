export const reducer=(state,{type,payload})=>{
    switch(type){
        case 'ADD_TODO':
        return [...state,payload]
    
        case 'DELETE_TODO':
        return state.filter((e)=>e.id!==payload.id)
       
        default:
        return state;
            

}
}