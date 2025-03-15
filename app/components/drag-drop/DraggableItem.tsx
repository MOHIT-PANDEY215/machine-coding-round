import React from "react";
import { DraggableItemProps } from "./DraggableListContainer";
import { STATUS } from "./DraggableContainer";

const DraggableItem: React.FC<DraggableItemProps> = (props) => {
  const { id, title, status } = props;
  const handelDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
    e.dataTransfer.setData("text", `${id}`);
  };
  const colorCode: Record<string, string> = {
    [STATUS[0]]: "bg-red-200",
    [STATUS[1]]: "bg-yellow-400",
    [STATUS[2]]: "bg-green-700",
  };
  return (
    <div
      className={`${colorCode[status as string]} p-4`}
      draggable
      onDragStart={(e) => handelDragStart(e)}
    >
      <h2 className="text-black">{title}</h2>
    </div>
  );
};

export default DraggableItem;
