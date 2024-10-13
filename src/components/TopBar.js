import React from "react";
import { BellIcon, UserIcon } from "@heroicons/react/24/outline";

function TopBar() {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <UserIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <div className="flex flex-1 justify-center sm:justify-center">
            <span className="text-white text-base">Split Wiser</span>
          </div>
          <div className="flex flex-shrink-0 items-center">
            <BellIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
