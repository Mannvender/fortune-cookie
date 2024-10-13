import React from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen text-white">
      <div className="absolute top-0 left-0 w-full h-1/4 bg-blue-600"></div>
      <div className="absolute top-1/4 left-0 w-full h-3/4 bg-black"></div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <TopBar />
        <div className="flex-1 px-4">{children}</div>
        <BottomNav />
      </div>
    </div>
  );
};

export default MainLayout;
