import React from "react";

const InputComponents = (props) => {
  const elementID = `input-element-${props.elementParameters.elementID}`;
  return (
    <div>
      <label
        htmlFor={elementID}
        className="block text-[13px] font-semibold text-[#A9A9A9] mb-[12px]"
      >
        {props.elementParameters.inputLabel}
      </label>
      <input
        type="text"
        name=""
        id={elementID}
        placeholder={props.elementParameters.placeholder}
        className="block outline-none border-2 px-[15px] py-[12px] w-full mb-[36px] rounded-[8px]"
      />
    </div>
  );
};

export default InputComponents;
