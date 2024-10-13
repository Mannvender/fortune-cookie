import React from "react";
import PropTypes from "prop-types";

// Utility function to get initials
const getInitials = (name) => {
  const names = name.split(" ");
  const initials = names.map((n) => n[0]).join("");
  return initials.toUpperCase();
};

const InitialsAvatar = ({
  name,
  size = 10,
  bgColor = "bg-gray-500",
  textColor = "text-white",
}) => {
  const sizePx = `${size * 4}px`; // Tailwind's size scale (e.g., 10 -> 40px)
  return (
    <div
      className={`rounded-full ${bgColor} ${textColor} flex items-center justify-center`}
      style={{ height: sizePx, width: sizePx }}
    >
      {getInitials(name)}
    </div>
  );
};

InitialsAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default InitialsAvatar;
