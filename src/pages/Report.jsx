import ReportContainer from "../components/reportComponents/ReportContainer";
import React from "react";

const Report = () => {
  return (
    <div className="py-5 px-5 md:px-10 w-full bg-container flex flex-col items-start gap-4 rounded-xl">
      <ReportContainer />
    </div>
  );
};

export default Report;
