import axios from "axios";
import React, { useState } from "react";

const AddCategoryPopUp = ({ onClose }) => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/api/admin/create-category`,
        { name }
      );

      console.log("Category added successfully", response.data);
      onClose();
    } catch (error) {
      console.log("getting error while adding the category", error);
    } finally {
      setIsLoading(true);
    }
  };
  return (
    <div className="popup md:min-w-[1080px]">
      <div className="flex w-full justify-between">
        <h2 className="text-[24px] text-secondary font-bold">Add Category</h2>
        <button onClick={onClose}>Close</button>
      </div>

      <div className="mt-10 flex items-start w-full">
        <form
          className="flex flex-col items-start gap-5 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center gap-10 w-full">
            <div className="flex flex-col items-start w-full">
              <label className="text-secondary font-semibold">
                Name of the Category
              </label>
              <input
                type="text"
                className="w-full border-2 px-2 py-3 rounded-xl outline-none"
                placeholder="Name of the Category"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-secondary text-background rounded-lg py-[8px] px-[24px]"
            disabled={isLoading}
          >
            {isLoading ? "Adding Category..." : "Add Category"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryPopUp;
