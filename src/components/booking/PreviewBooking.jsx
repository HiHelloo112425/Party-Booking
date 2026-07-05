import Button from "../Button.jsx";

function PreviewBooking({ oderList, addOnList }) {
  return (
    <div className="w-full flex flex-col gap-5 animate-fade-up">
      <div>
        <h1 className="font-bold text-[24px]">Booking Summary</h1>
        <p>Review your reservation details before finalizing your booking.</p>
      </div>
      <div className="flex flex-col gap-15">
        <div className="flex flex-col gap-3 w-full border border-gray-400 rounded-2xl shadow-2xl p-5">
          <div className="flex flex-row justify-between items-center text-[20px]">
            <p>Customer Details</p>
            <Button
              onClick={""}
              bgColor={"bg-white"}
              textColor={"text-black"}
              borderColor={"border border-gray-300"}
              widthSize={"w-25"}
            >
              Edit
            </Button>
          </div>
          <div className="grid grid-rows-3 grid-cols-2 gap-y-5 w-full">
            <div className="flex flex-col">
              <p>First Name</p>
              <p className="font-bold">Ang lupit</p>
            </div>
            <div className="flex flex-col">
              <p>Last Name</p>
              <p className="font-bold">Mo</p>
            </div>
            <div className="flex flex-col">
              <p>Phone Number</p>
              <p className="font-bold">+63-994-553-2789</p>
            </div>
            <div className="flex flex-col">
              <p>Email Address</p>
              <p className="font-bold">blabla.bla@gmail.com</p>
            </div>
            <div className="flex flex-col">
              <p>Celebrant's Name</p>
              <p className="font-bold">Ang lupit L. Mo</p>
            </div>
            <div className="flex flex-col">
              <p>Birthdate</p>
              <p className="font-bold">Jan 1 1570</p>
            </div>
            <div className="flex flex-col">
              <p>Type of celebration</p>
              <p className="font-bold">Birthday</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full border border-gray-400 rounded-2xl shadow-2xl p-5">
          <div className="flex flex-row justify-between items-center text-[20px]">
            <p>Event Information</p>
            <Button
              onClick={""}
              bgColor={"bg-white"}
              textColor={"text-black"}
              borderColor={"border border-gray-300"}
              widthSize={"w-25"}
            >
              Edit
            </Button>
          </div>
          <div className="grid grid-rows-3 grid-cols-2 gap-y-5 w-full">
            <div className="flex flex-col">
              <p>Venue</p>
              <p className="font-bold">McDonald’s Marcos Highway</p>
            </div>
            <div className="flex flex-col">
              <p>Room</p>
              <p className="font-bold">Party Room B</p>
            </div>
            <div className="flex flex-col">
              <p>Date</p>
              <p className="font-bold">July 24, 2026</p>
            </div>
            <div className="flex flex-col">
              <p>Time</p>
              <p className="font-bold">2:00 PM - 4:00 PM</p>
            </div>
            <div className="flex flex-col">
              <p>Guest Count</p>
              <p className="font-bold">80</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full border border-gray-400 rounded-2xl shadow-2xl p-5">
          <div className="flex flex-row justify-between items-center text-[20px]">
            <p>Party Details</p>
            <Button
              onClick={""}
              bgColor={"bg-white"}
              textColor={"text-black"}
              borderColor={"border border-gray-300"}
              widthSize={"w-25"}
            >
              Edit
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <p>Themes</p>
              <p className="font-bold">Grimance</p>
            </div>

            <div className="grid grid-rows-3 grid-cols-2 gap-y-5 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewBooking;
