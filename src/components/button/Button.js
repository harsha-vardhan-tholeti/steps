import React from "react";

function Button({ text, onClick, active }) {
  return (
    <button
      className={`mx-12 px-8 py-1 rounded-full text-white text-sm font-bold ${
        active ? "bg-[#7950F2]" : "bg-[#E7E7E7]"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
