"use client";
import Image from "next/image";

interface ProfileCardProps {
    name: string;
    avatarSrc?: string;
}

export function ProfileCard({ name, avatarSrc }: ProfileCardProps) {
    const defaultAvatar = '/assets/default-avatar.png';
    const imageSource = avatarSrc || defaultAvatar;
    return (
        <div className="w-1/4 pr-8 border-r border-gray-200 flex flex-col items-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden mb-4">
                <Image
                    src={imageSource}
                    alt={`${name}'s avatar`}
                    width={1000}
                    height={1000}
                    className="object-cover w-full h-full"
                    priority
                />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        </div>
    );
}