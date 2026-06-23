import ProfileCard from "../components/ProfileCard";
import ViewProfile from "../components/utils/ViewProfile";

function Profile() {
  return (
    <div className="flex flex-row py-10 px-5 gap-10">
      <div className="flex flex-col justify-center  select-none">
        <div className="flex flex-col gap-5">
          <h1 className="text-[24px] font-bold">My Account</h1>
          <ProfileCard />
        </div>
      </div>
      <div className="pt-10 w-full">
        <ViewProfile />
      </div>
    </div>
  );
}

export default Profile;
