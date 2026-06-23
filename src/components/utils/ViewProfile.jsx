function ViewProfile() {
  return (
    <div className="flex flex-col w-full p-5 gap-5">
      <div className="flex flex-col w-full">
        <h1 className="font-bold text-[24px]">View Profile</h1>
        <p className="text-text-gray">
          Manage and update your profile details.
        </p>
      </div>
      <hr className="border-[#6A6A6A33] w-full" />
      <div className="flex flex-col">
        <div className="flex flex-row gap-52">
          <p className="text-text-gray">Full Name</p>
          <p className="">Boss B. Bossing</p>
        </div>
      </div>
      <hr className="border-[#6A6A6A33] w-full" />
      <div className="flex flex-col">
        <div className="flex flex-row gap-52">
          <p className="text-text-gray">Email</p>
          <p className="">Email Address</p>
        </div>
      </div>
      <hr className="border-[#6A6A6A33] w-full" />
      <div className="flex flex-col">
        <div className="flex flex-row gap-52">
          <p className="text-text-gray">Email</p>
          <p className="">Email Address</p>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
  