import McdoMeal from "../../assets/meal.svg";
import { Plus, Minus, Check } from "lucide-react";
import { useState } from "react";
function OrderCard({ orderData }) {
  const [qty, setQty] = useState(1);
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => setSelected((prev) => !prev)}
      className={`${selected ? "border-4 border-primary-yellow " : "border-2 border-gray-400"}  rounded-4xl cursor-pointer overflow-hidden`}
    >
      <div className="flex flex-row w-full bg">
        <div className="hidden xl:block w-5 border-primary-red bg-primary-red" />
        <div className="flex flex-col w-full">
          <div className="flex w-full h-5 lg:h-10 justify-end">
            <div
              className={` ${selected ? "flex" : "hidden"} justify-center items-center w-10 h-10 bg-primary-yellow rounded-full`}
            >
              <Check color="white" />
            </div>
          </div>

          <div className="flex flex-col p-5 gap-10 flex-1">
            <div className="flex flex-col xl:flex-row sm:gap-5">
              <div className="flex flex-col justify-center items-center">
                <img src={McdoMeal} className="w-34" />
              </div>
              <div className="flex flex-col sm:gap-3">
                <h1 className="font-bold text-[15px] sm:text-[20px]">{orderData.title}</h1>
                <div className="flex flex-col w-full">
                  <ul className="space-y-1 mt-[2vw] lg:mt-0">
                    {orderData.orderList.map((item, i) => (
                      <li
                        key={i}
                        className="flex justify-start items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                        <p className="text-[10px] sm:text-[15px]">{item.order}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse xl:flex-row w-full gap-3 justify-center xl:justify-end items-center">
              <div className="flex justify-centert items-center gap-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setQty((prev) => Math.max(prev - 1, 1));
                  }}
                  className="bg-[#F2F2F2] hover:bg-black/60 rounded-md flex items-center justify-center h-8 w-8 cursor-pointer"
                >
                  <Minus size={20} />
                </button>
                <input
                  value={qty}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    setQty(Math.max(value, 1));
                    setSelected(selected);
                  }}
                  className="border border-[#F2F2F2] h-10 w-10 px-2 text-center outline-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  type="number"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setQty((prev) => {
                      return prev + 1;
                    });
                    setSelected(selected);
                  }}
                  className="bg-[#F2F2F2] hover:bg-black/60 rounded-md flex items-center justify-center h-8 w-8 cursor-pointer"
                >
                  <Plus size={20} />
                </button>
              </div>

              <p className="text-primary-red text-[20px]">
                ₱ {qty * orderData.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderCard;
