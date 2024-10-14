import React from "react";
import CustomerSupportContainer from "../components/customerSupport/CustomerSupportContainer";

const CustomerSupport = () => {
  return (
    <div className="py-5 px-5 md:px-10 w-full bg-container flex flex-col items-start gap-4 rounded-xl">
      <CustomerSupportContainer />
    </div>
  );
};

export default CustomerSupport;
