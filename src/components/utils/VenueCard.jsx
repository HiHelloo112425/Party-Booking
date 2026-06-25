import McStore from "../../assets/mc-store.png";
function VenueCard() {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between w-full border border-gray-400 rounded-2xl p-5">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-[24px] font-bold">McDonald’s Marcos Highway</h1>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-2 grid-rows-4 w-full h-full gap-x-1 gap-y-8">
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
        <img src={McStore} />
      </div>
    </div>
  );
}

export default VenueCard;
