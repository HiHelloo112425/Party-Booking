import StoreIcon from "../../assets/store-icon.svg";
import RoomIcon from "../../assets/room-icon.svg";
import CalendarIcon from "../../assets/calendar-icon.svg";
import EventIcon from "../../assets/event-icon.svg";
import Button from "../../components/Button.jsx";
import McStoreStore from "../../assets/mc-store.png";
const items = [
  { icon: StoreIcon, text: "McDonald's Makati - Valero St." },
  { icon: RoomIcon, text: "Party Room A", sub: "80 guests" },
  {
    icon: CalendarIcon,
    text: "Friday, June 25, 2026",
    sub: "11:00 am - 1:00 pm",
  },
  { icon: StoreIcon, text: "Birthday Party" },
];

function BookingCard() {
  return (
    <div className="flex flex-row h-200 md:h-80 border border-gray-200 rounded-2xl shadow-xl">
      <div className="hidden sm:block bg-primary-red w-5 rounded-s-2xl" />
      <div className="flex flex-col gap-5 p-3 sm:grid sm:grid-cols-3 sm:grid-rows-4 sm:grid-flow-col sm:gap-y-5 sm:gap-x-5">
        {/* Title */}
        <div>
          <h1 className="text-[20px] font-bold">McDonald's Marcos Highway</h1>
          <p className="text-gray-500">#100-325-52143</p>
        </div>

        {/* Items list */}
        <div className="flex flex-col gap-1">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <img src={item.icon} className="w-5 h-5 block shrink-0" />
              <p className="m-0 leading-none">
                {item.text}
                {item.sub && (
                  <>
                    <span className="text-text-gray">·</span> {item.sub}
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Divider — hidden on xs, shown on sm+ */}
        <div className="hidden sm:block col-span-2 mt-15 mr-20">
          <hr className="border-[#6A6A6A33] w-full" />
        </div>

        {/* Action buttons */}
        <div className="flex w-full gap-10">
          <Button
            bgColor="bg-white"
            textColor="text-black"
            borderColor="border border-gray-200"
            widthSize="w-35"
          >
            View Details
          </Button>
          <button className="font-bold text-primary-red">Cancel Booking</button>
        </div>

        {/* Confirmed badge */}
        <div className="flex sm:justify-center">
          <div className="bg-blue-500 h-7 flex justify-center items-center p-2 rounded-2xl text-white">
            <p>Confirmed</p>
          </div>
        </div>

        {/* Amount info */}
        <div className="flex flex-col justify-center items-start sm:ms-10">
          <div>
            <p className="text-text-gray">Total Amount</p>
            <p className="font-bold">₱10,000</p>
          </div>
          <div>
            <p className="text-text-gray">Remaining Balance</p>
            <p className="font-bold text-[25px] text-primary-red">₱7,000</p>
          </div>
          <div className="flex justify-center">
            <div className="bg-yellow-300 h-7 flex justify-center items-center p-2 rounded-2xl text-white">
              <p>Partial</p>
            </div>
          </div>
        </div>

        {/* Spacer — only needed in grid layout */}
        <div className="hidden sm:block"></div>

        {/* Store image */}
        <div className="sm:row-span-3">
          <img src={McStoreStore} className="w-full sm:w-auto" />
        </div>
      </div>
    </div>
  );
}

export default BookingCard;
