import { Metadata } from "next";
import MyProfile from "./components/MyProfile";

export const metadata: Metadata = {
  title: "My Profile",
  description: "Manage your profile and details.",
};

const ProfilePage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <MyProfile />
      </div>
    </div>
  );
};

export default ProfilePage;
