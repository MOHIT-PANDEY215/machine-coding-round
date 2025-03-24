import React, { ReactNode } from "react";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <div className="flex flex-col gap-8 items-center w-full min-h-[calc(100vh-48px)] py-10">
        <h2 className="text-xl"> {title}</h2>
        {children}
      </div>
    </>
  );
};

export default Layout;
