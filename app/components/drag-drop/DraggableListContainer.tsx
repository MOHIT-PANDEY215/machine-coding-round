import { title } from "process";
import React from "react";
import DraggableItem from "./DraggableItem";
import { STATUS } from "./DraggableContainer";

export interface DraggableItemProps {
  title: string;
  id: number;
  status: string;
}

interface DraggableListContainerProps {
  title: string;
  items: DraggableItemProps[];
  index: number;
  handleChangeItemData: (data: DraggableItemProps[]) => void;
}
const DraggableListContainer: React.FC<DraggableListContainerProps> = (
  props
) => {
  const { title, items, index, handleChangeItemData } = props;
  const itemsData = items.filter((item) => item.status === STATUS[index]);
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("drop", e.dataTransfer.getData("text"));
    const newItemData = items.map((item, _) => {
      const itemIndex = Number(e.dataTransfer.getData("text")) - 1;
      console.log(itemIndex, _, STATUS[index]);
      if (_ === itemIndex) item.status = STATUS[index];
      return item;
    });
    console.log("hehehhe", newItemData);
    handleChangeItemData(newItemData);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // console.log('over',e)
  };
  return (
    <div
      className="flex flex-col gap-8 border-2 p-4 min-w-[300px] min-h-[300px]"
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
    >
      <div className="text-black text-lg border-b-1 flex justify-center items-center">
        <h2>{title}</h2>
      </div>
      <div className="flex flex-col gap-4 ">
        {itemsData.map((item, index) => {
          return (
            <DraggableItem
              key={index}
              title={item.title}
              status={item.status}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DraggableListContainer;
