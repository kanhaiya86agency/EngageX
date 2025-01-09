import React from "react";

const MarkerPin = ({ visibleProfile }) => {
  return (
    <div>
      {" "}
      <img
        className="lg:w-[92px] w-[60px] rounded-full opacity-100 text-sky-50 p-1"
        src="https://goozzby-storage.s3.ap-south-1.amazonaws.com/public/Professional/location-pin1_1735993012196.png"
        alt="locationPin"
      />
      <img
        className="absolute top-[3px] lg:top-[5px] left-[10px] lg:left-[16px] lg:w-[60px] w-[40px] rounded-full opacity-100 text-sky-50 p-1"
        src={visibleProfile?.profilePicture}
        alt={visibleProfile?.name}
      />
    </div>
  );
};

export default MarkerPin;
