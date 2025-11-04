
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="w-screen lg:px-6">
      <div className="w-full flex flex-col justify-center items-center  lg:mt-0">
        <h2 className="text-[#007BFF]  m-6 lg:text-left lg:self-start lg:px-8 text-2xl font-bold">
          What Makes Us Stand Out Section
        </h2>
        <div className="w-full text-gray-600 grid grid-cols-2 lg:grid-cols-4 lg:gap-14 gap-4 px-4 lg:px-8 text-center">
          <div className="flex flex-1 shadow shadow-gray-400 h-[120px] flex-col justify-center items-center p-2 rounded-2xl text-center">
            <p>
              <Image width={1000} height={1000} src="/assets/timetable.png" className="w-8 h-8" alt="timetable" />
            </p>
            <p className="text-sm">Timetable & scheduling</p>
          </div>
          <div className="flex flex-1 shadow shadow-gray-400 h-[120px] flex-col justify-center items-center p-2 rounded-2xl">
            <p>
              <Image width={1000} height={1000} src="/assets/report.png" alt="report" className="w-8 h-8" />
            </p>
            <p className="text-sm">Exam & Grading</p>
          </div>
          <div className="flex flex-1 shadow shadow-gray-400 h-[120px] flex-col justify-center items-center p-2 rounded-2xl">
            <p>
              <Image
              width={1000} height={1000}
                src="/assets/communication.png"
                alt="communication"
                className="w-8 h-8"
              />
            </p>
            <p className="text-sm">Seamless Communication</p>
          </div>
          <div className="flex flex-1 shadow shadow-gray-400 h-[120px] flex-col justify-center items-center p-2 rounded-2xl">
            <p>
              
              <Image
              width={1000} height={1000}
                src="/assets/tracking.png"
                alt="tracking"
                className="w-8 h-8"
              />
            </p>
            <p className="text-sm">Performance Tracking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

