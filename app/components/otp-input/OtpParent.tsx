"use client";
import React, { useEffect, useRef, useState } from "react";

interface OtpParentProps {
  count: number;
}

const OtpParent: React.FC<OtpParentProps> = ({ count }) => {
  const [inputArr, setInputArr] = useState(new Array(count).fill(""));
  const refArr = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (!/^\d$/.test(value) && value !== "") return;
    const temp = [...inputArr];
    temp[index] = value.slice(-1);
    setInputArr(temp);
    if (value !== "" && index < count - 1) {
      refArr.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const target = e.target as HTMLInputElement;
    if (!target.value && e.key === "Backspace") {
      const temp = [...inputArr];
      temp[index] = "";
      setInputArr(temp);
      if (index > 0) {
        refArr.current[index - 1]?.focus();
      }
    }
  };
  return (
    <div className="flex space-x-3 justify-center">
      {inputArr.map((item, index) => {
        return (
          <input
            key={index}
            type="text"
            className="w-14 h-14 text-xl font-semibold text-center border-2 border-gray-300 
                     focus:border-blue-500 focus:outline-none rounded-lg shadow-sm transition-all duration-200"
            value={inputArr[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(input) => {
              refArr.current[index] = input;
            }}
          />
        );
      })}
    </div>
  );
};

export default OtpParent;
