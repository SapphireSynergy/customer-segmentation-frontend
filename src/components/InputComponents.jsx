import React from "react";

const InputComponents = ({ elementParameters }) => {
  const elementID = `input-element-${elementParameters.elementID}`;

  const handleInputChange = (event) => {
    elementParameters.onChange(event.target.value);
  };

  return (
    <div>
      <label
        htmlFor={elementID}
        className="block text-[13px] font-semibold text-gray-700 mb-[12px]"
      >
        {elementParameters.inputLabel}
      </label>
      <input
        type="text"
        id={elementID}
        placeholder={elementParameters.placeholder}
        value={elementParameters.value}
        onChange={handleInputChange}
        className="block outline-none border-2 border-gray-700 px-[15px] py-[12px] w-full mb-[15px] rounded-[8px]"
      />
    </div>
  );
};

export default InputComponents;
