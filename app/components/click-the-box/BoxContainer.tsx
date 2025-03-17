"use client";
import React, { useEffect, useState } from "react";

const boxData = [
  {
    id: 1,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 2,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 3,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 4,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 5,
    isClicked: false,
    isVisible: false,
  },
  {
    id: 6,
    isClicked: false,
    isVisible: false,
  },
  {
    id: 7,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 8,
    isClicked: false,
    isVisible: true,
  },
  {
    id: 9,
    isClicked: false,
    isVisible: true,
  },
];

interface BoxDataProps {
  id: number;
  isClicked: boolean;
  isVisible: boolean;
}

const BoxContainer: React.FC = () => {
  const [data, setData] = useState<BoxDataProps[]>([]);
  const [indexQueue, setIndexQueue] = useState<number[]>([]);
  const [isClickAllowed,setIsClickAllowed] = useState<boolean>(true)

  useEffect(() => {
    setData(boxData);
  }, []);
  useEffect(() => {
    if (indexQueue.length === 7) {
      setIsClickAllowed(false)
      for (let i = 0; i < indexQueue.length; ++i) {
        setTimeout(() => {
          setData((prev) => {
            const temp = [...prev];

            temp[indexQueue[i] - 1].isClicked = false;
            return temp;
          });
          setIndexQueue((prev) => {
            const temp = [...prev];
            temp.shift();
            return temp;
          });
        }, i * 1000);
      }
    }
  }, [indexQueue]);

  const handleBoxClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(indexQueue,boxData)
    const isClicked = (e.target as HTMLInputElement).getAttribute('data-isclicked')
    const id =  Number((e.target as HTMLInputElement).getAttribute('data-id'))
    if(isClicked === 'hidden' || isClicked === null) return;
    if(indexQueue.length === 0) setIsClickAllowed(true)
    if (isClicked==='true' || (!isClickAllowed && indexQueue.length !== 0)) return;
    setData((prev) => {
      const temp = prev?.map((ele) => {
        if (id !== ele.id) return ele;
        return { ...ele, isClicked: true };
      });
      return temp;
    });
    setIndexQueue((prev) => {
      const temp = [...prev];
      temp.push(id);
      return temp;
    });
  };

  return (
    <div className="grid grid-cols-3  gap-4" onClick={(e)=>{handleBoxClick(e)}}>
      {data?.map((item, index) => {
        if (!item.isVisible) return <div key={index} data-isclicked={`hidden`}></div>;
        return (
          <div
            key={index}
            data-id={item.id}
            data-isclicked={item.isClicked}
            className={`w-[80px] h-[80px] ${
              item.isClicked ? "bg-green-700" : "bg-yellow-300"
            } text-black text-lg flex items-center justify-center cursor-pointer`}
          >
            {item.id}
          </div>
        );
      })}
    </div>
  );
};

export default BoxContainer;
