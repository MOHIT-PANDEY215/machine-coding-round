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

const DraggableListContainer: React.FC<DraggableListContainerProps> = ({
  title,
  items,
  index,
  handleChangeItemData,
}) => {
  const itemsData = items.filter((item) => item.status === STATUS[index]);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const itemIndex = Number(e.dataTransfer.getData("text")) - 1;

    const newItemData = items.map((item, _) => {
      if (_ === itemIndex) item.status = STATUS[index];
      return item;
    });

    handleChangeItemData(newItemData);
  };

  return (
    <div
      className="flex flex-col gap-4 border rounded-lg shadow-lg bg-white dark:bg-gray-800 p-4 min-w-[300px] min-h-[400px] w-full md:w-[30%] transition-transform"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 border-b pb-2 text-center">
        {title}
      </h2>
      <div className="flex flex-col gap-2">
        {itemsData.map((item) => (
          <DraggableItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DraggableListContainer;
