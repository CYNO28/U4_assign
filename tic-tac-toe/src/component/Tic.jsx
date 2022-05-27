import React from "react";
import style from "./Tic.module.css";
const Tic = () => {
  let borad = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const [board, setBoard] = React.useState(borad);
  const [turn, setTurn] = React.useState(false);
  const [x, setX] = React.useState(null);
  let onClickHandler = (row, col) => {
    // console.log(board)0
    console.log("rc", board);
    if (board[row][col] === 0 ) {
      let newBoard = [...board];
      newBoard[row][col] = turn;
      setBoard(newBoard);
      setTurn(!turn);
    }
  };
  let winner = (board) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2] &&
        board[i][0] !== 0
      ) {
        return board[i][0];
      }
      for (let i = 0; i < 3; i++) {
        if (
          board[0][i] === board[1][i] &&
          board[1][i] === board[2][i] &&
          board[0][i] !== 0
        ) {
          return board[0][i];
        }
      }
      if (
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[0][0] !== 0
      ) {
        return board[0][0];
      }
    }
  };
  let draw = (board) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] ===0) {
          return false;
        }
      }
    }
    return true;
  }

  return (
    <div className={style.bigbox}>
      <h1>Let's Play <br/>Tic-Tac-Toe</h1>
      
      <h1 className={style.winner}>{x === true ? "X Win" : x === false ? "O Win" : x}</h1>
      {board.map((row, rowIndex) => {
        return (
          <div className={x==null?style.rowbox:style.faded} key={rowIndex}>
            {row.map((col, colIndex) => {
              return (
                <div
                  className={style.inbox}
                  onClick={() => {
                    onClickHandler(rowIndex, colIndex);
                    setX(winner(board));
                    if(draw(board)){
                      setX("Draw");
                    }
                  }}
                  key={colIndex}
                >
                  {board[rowIndex][colIndex] === true
                    ? "x"
                    : board[rowIndex][colIndex] === false
                    ? "o"
                    : ""}
                </div>
              );
            })}
          </div>
        );
      })}

      <button className={style.reset}
        onClick={() => {
          setBoard(borad)
          setX(null);
          draw(board);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Tic;
