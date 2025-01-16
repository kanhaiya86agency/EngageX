import React from "react";
import svg from "../../../public/ourKeyValue.svg";
import Image from "next/image";

const OurKeyValue = () => {
  return (
    <div class="relative w-[100%] md:w-[100%] lg:w-[100%] xl:w-[50%] mx-auto ">
      <p className="absolute lg:top-20 md:top-15 top-10  left-[35%] lg:text-[40px] md:text-[35px] text-[20px] text-sky-500 font-semibold">
        Our Key Value
      </p>
      <Image priority src={svg} alt="Our Key Value" />;
    </div>
  );
};

export default OurKeyValue;
