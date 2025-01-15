import React from "react";

const MarkerPin = ({ visibleProfile }) => {
  return (
    <img
      className="absolute top-[-10px] lg:top-[-28px] left-[16px] lg:left-[14px] lg:w-[60px] w-[50px]  rounded-full opacity-100 text-sky-50 p-1"
      src={visibleProfile?.profilePicture}
      alt={visibleProfile?.name}
    />
  );
};

export default MarkerPin;
