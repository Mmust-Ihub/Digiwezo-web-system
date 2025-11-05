import contactImage from "../../assets/contact_us.png";

function Hero() {
  return (
    <main className="w-screen lg:h-screen mainbg flex-col flex lg:flex-row gap-6 px-6 py-6 justify-center items-center ">
      <div className="lg:pt-0  space-y-6 pt-[100px]">
        <h1 className="text-3xl lg:text-4xl font-medium">
          We'd Love to 
          <span className=" text-[#fdbf05]"> Hear From You!</span>
        </h1>
        <p className="text-base">
          Have questions or need assistance, we're here <br />
          to help! Reach out and let's make things happen
          
        </p>
      </div>
      <div>
        <img src={contactImage} alt="hero image" />
      </div>
    </main>
  );
}

export default Hero;
