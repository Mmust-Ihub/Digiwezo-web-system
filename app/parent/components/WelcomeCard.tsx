import Image from "next/image";

export const WelcomeCard = () => {
  return (
    <div className="bg-linear-to-r from-[#f7a800] to-[#f29e00] rounded-2xl p-8 flex items-center justify-between overflow-hidden">
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-white mb-3">
          Welcome back, Peter
        </h2>
        <p className="text-white/90 leading-relaxed max-w-xl">
          We&apos;re delighted to see you again. Navigate through your dashboard to access
          key information, track performance, and stay connected. Let&apos;s achieve great
          things together!
        </p>
      </div>
      
      <div className="w-48 h-48 shrink-0">
        <Image 
          src="/business-crisis.png" 
          alt="Welcome illustration" 
          className="w-full h-full object-contain"
          width={1200}
          height={800}
        />
      </div>
    </div>
  );
};
