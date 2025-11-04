
function Team() {
  return (
    <div className="mt-20 min-h-[70vh] pt-20">
        <hr className="md:-mt-10 mb-5 bg-gray-500 border-0 h-[1px]" />
        <p className="text-2xl md:text-5xl font-bold  text-[#007BFF]">Meet the Team.</p>
        <div className="w-full flex flex-col md:flex-row gap-10 items-center justify-between mt-10">
            <div className="w-full md:w-1/2">
                <img src="/images/about.webp" alt="team" className="w-full shadow-md rounded-md" />
            </div>
            <div className="w-full md:w-1/2">
                <p className="text-lg md:text-xl leading-relaxed">
                    Our team is made up of dedicated professionals with a passion for
                    education and technology. We are committed to providing quality
                    solutions that enhance learning, streamline school management, and
                    improve academic performance.
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Team