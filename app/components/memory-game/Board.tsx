import React from "react";
import { BoxDataProps } from "./Parent";
import Box from "./Box";

interface BoardProps {
  boxData: BoxDataProps[];
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Board: React.FC<BoardProps> = ({ boxData, handleClick }) => {
  return (
    <div
      className="grid grid-cols-4 gap-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {boxData.map((box) => (
        <Box key={box.id} box={box} />
      ))}
    </div>
  );
};

export default Board;
