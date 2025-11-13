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
    <aside className="w-1/4 bg-background border-r border-soft-grey p-6 flex flex-col items-center">
      <h2 className="text-primary font-semibold mb-6 self-start">
        Profile Settings
      </h2>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-3">
          <Image
            src={imageSrc || "profile-avatar.png"}
            alt={name}
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <p className="font-medium text-custom-grey">{name}</p>
        <p className="text-xs text-foreground mt-1">USERNAME</p>
        <p className="text-sm text-custom-grey">{email}</p>
      </div>
    </aside>
  );
}
