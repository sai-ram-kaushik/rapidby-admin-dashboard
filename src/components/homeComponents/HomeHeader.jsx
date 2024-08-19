import React, { useContext, useState } from "react";
import Button from "../../utils/Button";
import AddCatalogPopup from "../productComponents/AddCatalogPopUp";
import AddCategoryPopUp from "../productComponents/AddCategoryPopUp";
import { AuthContext } from "../../context/AuthContext";

const HomeHeader = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCategoryPopupOpen, setIsCategoryPopupOpen] = useState(false);
  const { authData } = useContext(AuthContext);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const categoryPopupOpen = () => {
    setIsCategoryPopupOpen(true);
  };

  const categoryPopupClose = () => {
    setIsCategoryPopupOpen(false);
  };

  return (
    <div className="w-full">
      {isPopupOpen && <AddCatalogPopup onClose={closePopup} />}{" "}
      <div
        className={`overlay ${isPopupOpen ? "show" : ""}`}
        onClick={closePopup}
      ></div>{" "}
      {isCategoryPopupOpen && <AddCategoryPopUp onClose={categoryPopupClose} />}{" "}
      <div
        className={`overlay ${isCategoryPopupOpen ? "show" : ""}`}
        onClick={categoryPopupClose}
      ></div>{" "}
      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-3">
        <div className="flex flex-col items-start">
          {authData.accessToken ? (
            <p className="text-[24px] text-secondary font-bold">
              Hello, {authData.adminData.username}{" "}
            </p>
          ) : (
            <p></p>
          )}
          <p className="text-paraHelper">
            This is what we&apos;ve got for you today!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button title="Add Products +" onClick={openPopup} />
          <Button title="Add Category +" onClick={categoryPopupOpen} />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
