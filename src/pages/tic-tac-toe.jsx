import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true); // X = You, O = Computer
  const winner = calculateWinner(board);

  useEffect(() => {
    if (!isXTurn && !winner && board.includes(null)) {
      const bestMove = getBestMove(board);
      const newBoard = [...board];
      newBoard[bestMove] = "O";
      setTimeout(() => {
        setBoard(newBoard);
        setIsXTurn(true);
      }, 300); // Delay for realism
    }
  }, [isXTurn, board, winner]);

  const handleClick = (index) => {
    if (board[index] || winner || !isXTurn) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsXTurn(false);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-6">Tic Tac Toe - Single Player</h1>

      <div className="grid grid-cols-3 gap-4 mb-4">
        {board.map((cell, index) => (
          <button
            key={index}
            className="w-20 h-20 text-3xl font-bold bg-gray-800 border-2 border-gray-600 hover:bg-gray-700 transition-colors"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
      </div>

      <div className="text-xl mb-4">
        {winner
          ? winner === "X"
            ? "🎉 You Win!"
            : "💻 Computer Wins!"
          : board.includes(null)
          ? `Your Turn`
          : "🤝 It's a draw!"}
      </div>

      <button
        onClick={handleReset}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white font-semibold"
      >
        Restart Game
      </button>
    </div>
  );
};

// 🧠 Check if there's a winner
function calculateWinner(cells) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],     // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],     // Columns
    [0, 4, 8], [2, 4, 6],                // Diagonals
  ];
  for (let [a, b, c] of lines) {
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }
  return null;
}

// 🤖 Minimax algorithm for perfect AI
function getBestMove(board) {
  let bestScore = -Infinity;
  let move;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = "O";
      let score = minimax(board, 0, false);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return move;
}

function minimax(board, depth, isMaximizing) {
  const winner = calculateWinner(board);
  if (winner === "O") return 10 - depth;
  if (winner === "X") return depth - 10;
  if (!board.includes(null)) return 0; // draw

  if (isMaximizing) {
    let maxEval = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "O";
        const evalScore = minimax(board, depth + 1, false);
        board[i] = null;
        maxEval = Math.max(maxEval, evalScore);
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = "X";
        const evalScore = minimax(board, depth + 1, true);
        board[i] = null;
        minEval = Math.min(minEval, evalScore);
      }
    }
    return minEval;
  }
}

export default TicTacToe;
