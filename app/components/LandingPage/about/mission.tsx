import { FaSchool } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { useState } from "react";

const stats = [
  {
    title: "schools",
    count: "1000+",
  },
  {
    title: "students",
    count: "50000+",
  },
  {
    title: "teachers",
    count: "1000+",
  },
];
function Mission() {
    const [viewMore,setViewMore] = useState(false);
  return (
    <div>
        <hr className="md:-mt-10 bg-gray-500 border-0 h-[1px]" />
      <p className="text-[#007BFF] text-xl md:text-3xl font-bold mt-10  mb-10">
        Our Stats
      </p>
      <div className="w-full flex flex-col-reverse md:flex-row-reverse md:gap-10 items-center justify-between">
        {/* //our mission section */}
        <div className="w-full md:w-1/2 mt-2 bg-gray-100 p-4 rounded-md shadow-lg">
          <p className="text-[#007BFF] text-xl md:text-3xl font-bold mb-5">
            Our Mission
          </p>
          <p className={`${viewMore ? 'line-clamp-4' : ''} text-gray-700 text-lg md:text-xl leading-relaxed `}>
           Since 2020, We have been providing affordable, accessible digital solutions to empower
            schools, teachers, students, and parents. Our goal is to enhance
            learning, simplify school management, and improve academic
            performance through innovative technology, making quality education
            available to all.
          </p>
          <div className="text-blue-500 hover:cursor-pointer" onClick={()=> setViewMore(prev => !prev)}>
            {viewMore ? 'Read More' : 'Read less'}
          </div>
        </div>
        <div className="w-full md:w-2/4 flex flex-wrap gap-4 md:gap-6 items-center  justify-start">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex bg-slate-100 flex-1 rounded-md shadow-md p-4 flex-col items-center justify-center"
            >
              <div className="w-[100px] h-[100px] bg-[#FFC004] rounded-full flex items-center justify-center">
                {index === 0 && <FaSchool className="text-4xl text-white" />}
                {index === 1 && <IoIosSchool className="text-5xl text-white" />}
                {index === 2 && <GiTeacher className="text-4xl text-white" />}
              </div>
              <h1 className="text-2xl font-semibold mt-4">{stat.count}</h1>
              <p className="text-center">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mission;
