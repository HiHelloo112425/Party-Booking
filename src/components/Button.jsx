function Button({
  children,
  onClick,
  bgColor,
  textColor,
  borderColor,
  widthSize,
}) {

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${bgColor} ${textColor} ${borderColor} font-bold text-[16px] cursor-pointer ${widthSize} transition-transform duration-200 hover:-translate-y-0.5`}
    >
      {children}
    </button>
  );
}

export default Button;
