"use client";
import React from "react";
import { Projects } from "@/lib/data/projects";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import Link from "next/link";

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Machine Coding Round Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {Projects.map((item, index) => (
          <Link key={index} href={item.link} className="w-full">
            <Card className="p-4 cursor-pointer transition-transform transform hover:scale-105">
              <CardHeader className="pb-0 pt-2 flex flex-col items-center text-center">
                <p className="text-md sm:text-lg lg:text-xl font-semibold uppercase">
                  {item.title}
                </p>
              </CardHeader>
              <CardBody className="overflow-hidden py-2 flex justify-center items-center">
                <Image
                  alt="Project Preview"
                  className="object-cover rounded-xl w-full max-w-[280px] h-[180px] sm:h-[200px] lg:h-[220px]"
                  src={item.imageSrc}
                  width={300}
                  height={200}
                />
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
