function Button({ children, onClick, bgColor, textColor, addBoader }) {
  let boarder = "";

  if (addBoader) {
    boarder = "border border-gray-200";
  }
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${bgColor} ${textColor} ${boarder} font-bold text-[16px]`}
    >
      {children}
    </button>
  );
}

export default Button;
