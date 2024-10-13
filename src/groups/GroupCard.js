import React from "react";
import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/outline";

const GroupCard = ({ group }) => {
  return (
    <Link
      to={`/groups/${group.id}`}
      key={group.id}
      className="bg-gray-700 shadow-md p-4 block"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{group.name}</h3>
        <EyeIcon className="h-5 w-5 text-gray-400" />
      </div>
      <hr className="my-2 border-gray-600" />
      <div className="flex justify-between text-sm">
        <div>
          <p className="text-xs text-gray-400">You Owe</p>
          <p>500</p>
        </div>
        <div>
          <p className="text-xs text-gray-400">Total Members</p>
          <p>{group.memberIds?.length}</p>
        </div>
      </div>
      <button
        className="mt-4 w-full border-2 py-2 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        Settle Up
      </button>
    </Link>
  );
};

export default GroupCard;
