import React from "react";

const ProfileCard = () => {
  return (
    <section className="bg-white shadow rounded-xl p-6 mb-8 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full" />
        <div>
          <p className="font-semibold">Peter Johnson</p>
          <p className="text-sm text-gray-500">2734boo@bacademy</p>
          <p className="text-sm text-gray-500">Adm No: 2734</p>
        </div>
      </div>
      <span className="text-primary font-bold text-lg">BOOKER ACADEMY</span>
    </section>
  );
};

export default ProfileCard;
