import React from "react";
type propsButton = {
  title: string;
};
function Button({ title }: propsButton) {
  return (
    <button className="px-3 py-1 rounded-2xl bg-red-400 text-sm md:text-base">
      {title}
    </button>
  );
}

export default Button;
