import React from "react";
import { DraggableItemProps } from "./DraggableListContainer";
import { STATUS } from "./DraggableContainer";

const DraggableItem: React.FC<DraggableItemProps> = ({ id, title, status }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text", `${id}`);
  };

  const colorCode: Record<string, string> = {
    [STATUS[0]]: "bg-red-300 dark:bg-red-700 border-red-500",
    [STATUS[1]]: "bg-yellow-300 dark:bg-yellow-600 border-yellow-500",
    [STATUS[2]]: "bg-green-300 dark:bg-green-700 border-green-500",
  };

  return (
    <div
      className={`p-3 border rounded-lg cursor-grab shadow-md ${colorCode[status]} transition-transform transform hover:scale-105 dark:text-gray-100`}
      draggable
      onDragStart={handleDragStart}
    >
      <h2 className="text-sm font-medium">{title}</h2>
    </div>
  );
};

export default DraggableItem;
