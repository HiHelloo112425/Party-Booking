import McStore from "../../../assets/mc-store.png";
function VenueCard() {
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse xl:flex-row justify-between items-center w-full border border-gray-400 rounded-2xl gap-5 xl:gap-0 p-5 shadow-2xl sm:shadow-none">
        <div className="flex flex-col justify-center items-center xl:items-start gap-5 w-full">
          <div className="flex w-full">
            <h1 className="text-[24px] font-bold">McDonald’s Marcos Highway</h1>
          </div>
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-2 grid-rows-4 w-full h-full gap-x-1 gap-y-0.5 xl:gap-y-3">
              <div>
                <p>Opening Hour</p>
              </div>
              <div className="font-bold">
                <p>6:00 am - 11:00 pm</p>
              </div>
              <div>
                <p>Contact Number</p>
              </div>
              <div className="font-bold">
                <p>02-6462813</p>
              </div>
              <div>
                <p>Address</p>
              </div>
              <div className="font-bold">
                <p>Marcos Highway, Antipolo City</p>
              </div>
              <div>
                <p>Parking Space:</p>
              </div>
              <div className="font-bold">
                <p>Yes</p>
              </div>
            </div>
          </div>
        </div>
        <img src={McStore}  className="w-100 xl:w-80"/>
      </div>
    </div>
  );
}

export default VenueCard;
