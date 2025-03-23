"use client";
import React, { useEffect, useMemo, useState } from "react";
import { getRandomColors } from "./utils";
import Board from "./Board";

export interface BoxDataProps {
  id: number;
  color: string;
  isVisible: boolean;
}

interface ParentProps {
  total: number;
}

const Parent: React.FC<ParentProps> = ({ total }) => {
  const [boxData, setBoxData] = useState<BoxDataProps[]>([]);
  const [selectedBoxes, setSelectedBoxes] =
    useState<{ id: number; color: string }[]>();
  const [totalRoundCount, setTotalRoundCount] = useState(0);
  const [disableClick, setDisableClick] = useState(false);

  const generateBoxes = () => {
    setTotalRoundCount(0);
    setSelectedBoxes([]);
    setDisableClick(false);

    const colors = getRandomColors(total / 2);
    const shuffledColors = [...colors, ...colors].sort(
      () => Math.random() - 0.5
    );

    setBoxData(
      shuffledColors.map((color, ind) => ({
        id: ind,
        color,
        isVisible: false,
      }))
    );
  };

  useEffect(() => {
    generateBoxes();
  }, []);

  const restart = useMemo(
    () => boxData?.every((item) => item.isVisible),
    [boxData]
  );

  const updateData = (index: number) => {
    setBoxData((prev) =>
      prev?.map((item) =>
        item.id === index ? { ...item, isVisible: true } : item
      )
    );
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const color = (e.target as HTMLInputElement).dataset.color;
    const index = Number((e.target as HTMLInputElement).dataset.index);
    if (disableClick || (boxData && boxData[index]?.isVisible) || !color) return;

    updateData(index);

    if (selectedBoxes?.length === 0) {
      setSelectedBoxes([{ id: index, color }]);
    } else {
      setTotalRoundCount((prev) => prev + 1);

      if (selectedBoxes && color === selectedBoxes[0].color) {
        setSelectedBoxes([]);
      } else {
        setDisableClick(true);
        setTimeout(() => {
          setBoxData((prev) =>
            prev?.map((item) =>
              item.id === index ||
              (selectedBoxes && item.id === selectedBoxes[0].id)
                ? { ...item, isVisible: false }
                : item
            )
          );
          setSelectedBoxes([]);
          setDisableClick(false);
        }, 400);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-white dark:bg-gray-900 transition-all duration-300 rounded-lg w-screen h-[75vh]">
      {restart ? (
        <div className="text-center space-y-4 p-8 ">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 ">
            Total Number of Rounds: {totalRoundCount}
          </h2>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white dark:bg-blue-400 dark:text-black rounded-lg"
            onClick={generateBoxes}
          >
            Restart
          </button>
        </div>
      ) : (
        <Board boxData={boxData} handleClick={handleClick} />
      )}
    </div>
  );
};

export default Parent;
