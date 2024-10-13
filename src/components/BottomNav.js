import React from "react";
import { NavLink } from "react-router-dom";
import {
  UsersIcon,
  UserGroupIcon,
  ChartBarIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline"; // Importing icons from @heroicons/react v2

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <NavLink
            to="/groups"
            className={({ isActive }) =>
              `flex flex-col items-center text-base px-4 ${
                isActive ? "text-blue-500" : "text-white"
              }`
            }
          >
            <UsersIcon className="h-6 w-6" />
            <span className="text-xs">Groups</span>
          </NavLink>
          <NavLink
            to="/friends"
            className={({ isActive }) =>
              `flex flex-col items-center text-base px-4 ${
                isActive ? "text-blue-500" : "text-white"
              }`
            }
          >
            <UserGroupIcon className="h-6 w-6" />
            <span className="text-xs">Friends</span>
          </NavLink>
          <NavLink
            to="/activity"
            className={({ isActive }) =>
              `flex flex-col items-center text-base px-4 ${
                isActive ? "text-blue-500" : "text-white"
              }`
            }
          >
            <ChartBarIcon className="h-6 w-6" />
            <span className="text-xs">Activity</span>
          </NavLink>
          <NavLink
            to="/expense/add"
            className={({ isActive }) =>
              `flex flex-col items-center text-base px-4 ${
                isActive ? "text-blue-500" : "text-white"
              }`
            }
          >
            <PlusCircleIcon className="h-6 w-6" />
            <span className="text-xs">Add Expense</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
