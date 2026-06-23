function Button({
  children,
  onClick,
  bgColor,
  textColor,
  addBoader,
  widthSize,
}) {
  let boarder = "";

  if (addBoader) {
    boarder = "border border-gray-200";
  }
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${bgColor} ${textColor} ${boarder} font-bold text-[16px] cursor-pointer ${widthSize} transition-transform duration-200 hover:-translate-y-0.5`}
    >
      {children}
    </button>
  );
}

export default Button;
