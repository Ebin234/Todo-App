import React from "react";

type Button={
    handleSubmit: ()=>void;
}

function Button({handleSubmit}:Button) {
  return (
    <button
      className="flex-1 bg-[#006A67] cursor-pointer rounded-md text-sm hover:bg-[#003161] text-white"
      onClick={handleSubmit}
    >
      Add Todo
    </button>
  );
}

export default Button;
