import Button from "./Button";

function ViewProfile() {
  const fields = [
    { label: "Full Name", value: "Boss B. Bossing" },
    { label: "Email Address", value: "boss.bossing@gmail.com" },
    { label: "Contact No", value: "+63 939 123 3450" },
  ];

  return (
    <div className="flex flex-col w-full p-3 sm:p-5 gap-5 animate-fade-up">
      <div className="flex flex-col w-full">
        <h1 className="font-bold text-[20px] sm:text-[24px]">View Profile</h1>
        <p className="text-text-gray text-sm sm:text-base">
          Manage and update your profile details.
        </p>
      </div>

      <div className="flex flex-col w-full">
        {fields.map((field) => (
          <div key={field.label}>
            <hr className="border-[#6A6A6A33] w-full" />
            <div className="flex items-center justify-between py-3 gap-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 flex-1 min-w-0">
                <p className="text-text-gray text-sm sm:text-base sm:w-40 shrink-0">
                  {field.label}
                </p>
                <p className="text-sm sm:text-base truncate">{field.value}</p>
              </div>
              <Button
                bgColor="bg-white"
                textColor="text-black"
                addBoader={true}
                widthSize="w-20 sm:w-25"
              >
                Edit
              </Button>
            </div>
          </div>
        ))}
        <hr className="border-[#6A6A6A33] w-full" />
      </div>
    </div>
  );
}

export default ViewProfile;