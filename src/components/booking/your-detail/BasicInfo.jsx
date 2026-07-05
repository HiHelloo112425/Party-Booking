import { ChevronDown } from "lucide-react";
function BasicInfo() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 grid-rows-3 w-full gap-5">
        <div className="flex flex-col w-full">
          <p>First Name</p>
          <input
            value={""}
            onChange={(e) => {}}
            className="border border-gray-300 h-10 w-full px-2 rounded-md outline-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div className="flex flex-col w-full">
          <p>Last Name</p>
          <input
            value={""}
            onChange={(e) => {}}
            className="border border-gray-300 h-10  w-full px-2 rounded-md outline-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div className="flex flex-col w-full">
          <p>Mobile Number</p>
          <input
            value={""}
            onChange={(e) => {}}
            className="border border-gray-300 h-10 w-full px-2 rounded-md outline-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            type="number"
          />
        </div>
        <div className="flex flex-col w-full">
          <p>Email</p>
          <input
            value={""}
            onChange={(e) => {}}
            className="border border-gray-300 h-10 w-full px-2 rounded-md outline-none focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>
        <div>
          <p>Relation to customer</p>
          <div className="relative flex h-10 w border border-gray-300 rounded-md p-2 cursor-pointer">
            <select className="absolute inset-0 w-full h-full opacity-0 cursor-pointer">
              {/* <option>Select McDonald's Branch</option>
              <option>McDonald's Marcos Highway</option>
              <option>McDonald's Another Branch</option> */}
            </select>
            <span className="flex-1 text-gray-800">
              {/* McDonald's Marcos Highway */}
            </span>
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}
export default BasicInfo;
