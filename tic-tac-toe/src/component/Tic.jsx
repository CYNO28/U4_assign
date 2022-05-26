import React from "react";

const Tic = () => {
  let arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const [board, setBoard] = React.useState(arr);
  const [turn, setTurn] = React.useState(false);
    const [winner, setWinner] = React.useState(null);
  let move = (turn, row, col) => {
    if (turn) {
      let newBoard = [...board];
      newBoard[row][col] = 1;
      setBoard(newBoard);
    } else {
      let newBoard = [...board];
      newBoard[row][col] = 2;
      setBoard(newBoard);
    }
  };
  let win=(arr)=>{
    
    
  }
  
  return (
    <div>
      {board.map((e, r) => (
        <div  key={r}> 
          {e.map((e, c) => (
            <span key={c}
              onClick={(e) => {
                move(turn, r, c)
                  // console.log(e)
                  console.log(board[r][c])
                  if(board[r][c] == 0){
                    setTurn(!turn);
                  }
                setWinner(win(board));
            
              }}
            >
              {" "}
              {board[r][c]}{" "}
            </span>
          ))}
        </div>
      ))}
  {winner?<h1>{winner}</h1>:null}
    </div>
  );
};

export default Tic;
