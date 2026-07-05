import PartyTheme from "../booking/party-package/PartyTheme.jsx";
import OrderCard from "../utils/OrderCard";
import Button from "../Button.jsx";

function PartyPackageBooking({
  carouselData,
  foodPackages,
  addOns,
  carouselRef,
  confirm,
}) {
  return (
    <div className="flex flex-col gap-10 w-full animate-fade-up">
      <div>
        <PartyTheme carouselData={carouselData} />
      </div>
      <div>
        <div>
          <h1 className="font-bold text-[24px]">Food Package</h1>
          <div className="max-h-250 overflow-y-auto">
            <div className="grid grid-cols-2 gap-5">
              {foodPackages.map((foodPackage, i) => (
                <OrderCard orderData={foodPackage} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-w-0">
        <h1 className="font-bold text-[24px]">Add-ons</h1>
        <div className="max-h-130 overflow-x-auto w-full">
          <div className="flex gap-10 w-max">
            {addOns.map((addOn, i) => (
              <OrderCard key={addOn.id ?? i} orderData={addOn} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <p className="italic text-gray-400">Minimum of 30 meals</p>
        <hr className="w-full border-gray-300" />
      </div>
      <div className="flex flex-col justify-center items-center lg:justify-end lg:items-end w-full">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="grid grid-row-3 grid-cols-2 gap-x-30 gap-y-2">
            <p>Party Fee</p>
            <p>₱2,500</p>
            <p>Food Package</p>
            <p>₱6,000</p>
            <p>Add-ons</p>
            <p>₱1,500</p>
            <p className="font-bold text-[15px]">Total Amount</p>
            <p className="font-bold text-primary-red">₱10,000</p>
          </div>

          <div className="flex flex-row gap-10">
            <Button
              bgColor="bg-white"
              textColor="text-black"
              borderColor="border border-gray-200"
              widthSize="w-25 "
              onClick={""}
            >
              Back
            </Button>

            <Button
              bgColor="bg-primary-red"
              textColor="text-white"
              borderColor="border border-gray-200"
              widthSize="w-40"
              onClick={() => {
                confirm(3);
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartyPackageBooking;
