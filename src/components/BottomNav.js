import React from "react";

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <span className="text-white text-base">Bottom Navigation</span>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
