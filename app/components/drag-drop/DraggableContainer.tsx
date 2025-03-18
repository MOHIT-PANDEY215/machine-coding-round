"use client";
import React, { useEffect, useState } from "react";
import DraggableListContainer, {
  DraggableItemProps,
} from "./DraggableListContainer";

const listData = [
  { id: "todo", title: "To Do" },
  { id: "in-progress", title: "In Progress" },
  { id: "completed", title: "Completed" },
];

export const STATUS = ["To Do", "In Progress", "Completed"];

const itemData = [
  { id: 1, title: "Complete authentication", status: STATUS[0] },
  { id: 2, title: "Complete login page", status: STATUS[0] },
  { id: 3, title: "Complete signup page", status: STATUS[0] },
  { id: 4, title: "Complete dashboard page", status: STATUS[0] },
  { id: 5, title: "Complete about us page", status: STATUS[0] },
];

const DraggableContainer: React.FC = () => {
  const [items, setItems] = useState<DraggableItemProps[]>(itemData);

  useEffect(() => {
    setItems(itemData);
  }, []);

  const handleChangeItemData = (data: DraggableItemProps[]) => {
    setItems(data);
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900 mx-4 lg:mx-0">
      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center px-2">
        {listData.map((item, index) => (
          <DraggableListContainer
            key={index}
            index={index}
            title={item.title}
            items={items}
            handleChangeItemData={handleChangeItemData}
          />
        ))}
      </div>
    </div>
  );
};

export default DraggableContainer;
