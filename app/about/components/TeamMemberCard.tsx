
import Image from "next/image";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
  return (
  <div className="relative w-[341.33px] h-[299px] rounded-none overflow-hidden shadow-md">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover object-center"
      />

      <div className="absolute left-5 bottom-5 z-30">
        <div className="w-[300px] h-[72px] rounded-lg p-2 box-border card-overlay card-overlay-border">
          <div className="flex items-center gap-3 h-full px-2">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
              <Image src={image} alt={name} width={48} height={48} className="object-cover object-center" />
            </div>

            <div className="flex flex-col justify-center">
              <div className="text-white font-bold text-sm leading-[20px]">
                {name}
              </div>
              <div className="text-white font-semibold text-sm leading-[20px]">
                {role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
