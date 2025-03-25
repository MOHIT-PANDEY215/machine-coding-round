"use client";
import React, { useEffect, useState } from "react";
import { DATA } from "./data";

type CountryCapitalProps = string[];

const CountryCapital: React.FC = () => {
  const [countryData, setCountryData] = useState<CountryCapitalProps>([]);
  const [selectedOption, setSelectedOption] = useState<CountryCapitalProps>([]);
  const [matchedItem, setMatchedItem] = useState<Set<string>>(new Set());

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log((e.target as HTMLInputElement).getAttribute("data-item"));
    const dataItem = (e.target as HTMLInputElement).getAttribute("data-item");
    if (dataItem) {
      setSelectedOption((prev) => [...prev, dataItem]);
      if (selectedOption.length == 1) {
        if (
          DATA[dataItem] === selectedOption[0] ||
          DATA[selectedOption[0]] === dataItem
        ) {
          setMatchedItem((prev) =>
            new Set(prev).add(dataItem).add(selectedOption[0])
          );
        }

        setTimeout(function reset() {
          setSelectedOption([]);
          setCountryData((prev) =>
            prev.filter((item) => {
              if (matchedItem.has(item)) return false;
              if (
                DATA[dataItem] === selectedOption[0] ||
                DATA[selectedOption[0]] === dataItem
              ) {
                if (item === dataItem || item === selectedOption[0])
                  return false;
              }
              return true;
            })
          );
        }, 1000);
      }
    }
  };

  const generateData = () => {
    setMatchedItem(new Set());
    setSelectedOption([]);
    const temp = Object.entries(DATA).flat();
    setCountryData(temp.sort(() => Math.random() - 0.5));
  };
  useEffect(() => {
    generateData();
  }, []);

  if (matchedItem.size === Object.keys(DATA).length * 2) {
    return (
      <div className="flex flex-col items-center space-y-4 text-white">
        <h2 className="text-xl font-semibold text-gray-300">
          🎉Congratulations🎉
        </h2>
        <button
          className="px-3 py-1 border border-gray-600 rounded-md text-gray-400 hover:bg-gray-700 transition-all"
          onClick={generateData}
        >
          Restart
        </button>
      </div>
    );
  }
  return (
    <div
      className="p-4 flex flex-wrap gap-4 w-[75%] md:w-[40%] justify-center"
      onClick={handleClick}
    >
      {countryData.map((item) => {
        const isSelected = selectedOption.includes(item);
        const isCorrect = matchedItem.has(item);
        const isIncorrect =
          selectedOption.length === 2 && isSelected && !isCorrect;

        const borderColor = isCorrect
          ? "border-green-500"
          : isIncorrect
          ? "border-red-500"
          : isSelected
          ? "border-blue-500"
          : "border-gray-500";

        return (
          <div
            key={item}
            data-item={item}
            className={`border-2 ${borderColor} px-4 py-2 rounded-lg cursor-pointer hover:shadow-md transition-all`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default CountryCapital;
