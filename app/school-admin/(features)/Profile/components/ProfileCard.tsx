"use client";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  email?: string;
  username?: string;
  imageSrc?: string;
}

export function ProfileCard({
  name,
  email,
  username,
  imageSrc,
}: ProfileCardProps) {
  return (
    <aside className=" bg-white p-6 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-3 flex items-center justify-center ">
          <Image
            src={imageSrc || "/profile-avatar.png"}
            alt={name}
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <p className="font-normal text-custom-grey">{name}</p>
      </div>
    </aside>
  );
}
