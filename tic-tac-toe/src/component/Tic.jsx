import React from 'react'

const Tic = () => {
    let arr=[
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]

    const [board,setBoard]=React.useState(arr)
    const [turn,setTurn]=React.useState(false)
    const [winner,setWinner]=React.useState(0)

    let move=(turn,row,col)=>{
if (turn){
arr[row][col]=1
}else{
    arr[row][col]=2
}
    }
  return (
    <div>{board.map((e,row)=>{e.map((e,col)=>{<div>{board[row][col]}</div>})})}</div>
  )
}

export default Tic