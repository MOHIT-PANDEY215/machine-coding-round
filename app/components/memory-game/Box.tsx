import React from "react";
import { BoxDataProps } from "./Parent";

interface BoxProps {
  box: BoxDataProps;
}

const Box: React.FC<BoxProps> = ({ box }) => {
  return (
    <div
      style={{ backgroundColor: box.isVisible ? box.color : "white" }}
      data-color={box?.color}
      data-index={box?.id}
      className={`w-16 h-16 flex items-center justify-center rounded-md cursor-pointer transition-all duration-300`}
      
    />
  );
};

export default Box;
