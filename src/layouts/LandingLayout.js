import React from "react";

const LandingLayout = ({ children, bgColor }) => {
  return (
    <div className={`min-h-screen flex flex-col ${bgColor}`}>{children}</div>
  );
};

export default LandingLayout;
