"use client";
import React, { useEffect, useState } from "react";

const data = [
  { id: "1", value: "" },
  { id: "2", value: "" },
  { id: "3", value: "" },
  { id: "4", value: "" },
  { id: "5", value: "" },
  { id: "6", value: "" },
  { id: "7", value: "" },
  { id: "8", value: "" },
  { id: "9", value: "" },
];

const WINNING_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

interface BoxDataProps {
  id: string;
  value: string;
}

const GlobalTicTacToeContainer: React.FC = () => {
  const [boxData, setBoxData] = useState<BoxDataProps[]>(data);
  const [isXTurn, setIsXTurn] = useState<boolean>(true);

  const isWinPattern = (board: BoxDataProps[]): string | null => {
    for (const pattern of WINNING_PATTERNS) {
      const [a, b, c] = pattern;
      if (
        board[a].value &&
        board[a].value === board[b].value &&
        board[a].value === board[c].value
      ) {
        return board[a].value;
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = isWinPattern(boxData);
    if (winner) {
      setTimeout(() => {
        alert(`${winner} wins!`);
        resetGame();
      }, 300);
    } else if (boxData.every((box) => box.value !== "")) {
      setTimeout(() => {
        alert("It's a draw!");
        resetGame();
      }, 300);
    }
  }, [boxData]);

  const resetGame = () => {
    setBoxData(data);
    setIsXTurn(true);
  };

  const handleClick = (box: BoxDataProps) => {
    if (box.value !== "") return;

    setBoxData((prev) =>
      prev.map((item) =>
        item.id === box.id ? { ...item, value: isXTurn ? "X" : "O" } : item
      )
    );

    setIsXTurn((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full px-8">
      <h2 className="text-lg font-bold">{isXTurn ? "X's Turn" : "O's Turn"}</h2>
      <div className="border-2 border-green-900 p-6">
        <div className="grid grid-cols-3 gap-4">
          {boxData.map((box) => (
            <div
              key={box.id}
              onClick={() => handleClick(box)}
              className="w-[75px] h-[75px] bg-green-700 cursor-pointer flex items-center justify-center text-xl font-bold text-white"
            >
              {box.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlobalTicTacToeContainer;
