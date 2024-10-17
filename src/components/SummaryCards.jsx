import React from "react";
import warning from "../assets/warning.jpg";

const SummaryCards = (props) => {
  return (
    <div className="h-[130px] p-[20px] rounded-[15px] border-[2px] border-[#FAF9F9] drop-shadow-sm">
      <div className="flex justify-between">
        <p className="text-[#8D8885]">{props.summaryCard.title}</p>
        <img src={warning} alt="" className="w-[18px] h-[18px]" />
      </div>

      <h2 className="text-[#172535] absolute bottom-[20px] text-[23px] ">
        {props.summaryCard.value}
      </h2>
    </div>
  );
};

export default SummaryCards;