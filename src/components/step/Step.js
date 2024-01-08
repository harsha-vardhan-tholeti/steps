import React from "react";

function Step({ step, active }) {
  return (
    <div
      className={`rounded-[50%] p-2 w-10 flex justify-center items-center ${
        active ? "bg-[#7950F2]" : "bg-[#E7E7E7]"
      }`}
    >
      {step}
    </div>
  );
}

export default Step;
