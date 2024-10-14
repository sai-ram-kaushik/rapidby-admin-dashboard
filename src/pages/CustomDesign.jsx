import CustomDesignContainer from "../components/customDesignComponents/CustomDesignContainer";
import React from "react";

const CustomDesign = () => {
  return (
    <div className="py-5 px-5 md:px-10 w-full bg-container flex flex-col items-start gap-4 rounded-xl">
      <CustomDesignContainer />
    </div>
  );
};

export default CustomDesign;
