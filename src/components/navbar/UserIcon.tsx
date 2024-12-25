import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";

const UserIcon = async () => {
  const profileImage = await fetchProfileImage();

  return profileImage ? (
    <div className="w-6 h-6 rounded-full overflow-hidden">
      <Image
        src={profileImage}
        alt="User Profile"
        width={24}
        height={24}
        className="object-cover"
      />
    </div>
  ) : (
    <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />
  );
};

export default UserIcon;
