"use client";
import React from "react";
import { Projects } from "@/lib/data/projects";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";
import Link from "next/link";

const Dashboard: React.FC = () => {
  return (
    <div className="flex items-center flex-col gap-12">
      <div className="flex text-[36px]">Machine Coding Round Projects</div>
      <div className="flex flex-wrap gap-8 w-full">
        {Projects.map((item, index) => {
          return (
            <div key={index}>
              <Link href={item.link}>
                <Card className="py-4 cursor-pointer">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                    <p className="text-lg uppercase font-bold">{item.title}</p>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <Image
                      alt="Card background"
                      className="object-cover rounded-xl w-full h-[200px]"
                      src={item.imageSrc}
                      width={270}
                    />
                  </CardBody>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
