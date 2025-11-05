import Hero from "./Hero"
import Mission from "./mission"
import Partners from "./partners"
import Team from "./Team"

function About() {
  return (
    <div className="w-full text-black md:px-[5%] px-4 lg:px-[10%] flex flex-col" >
        <Hero />
        <Mission />
        <Team />
        <Partners />
    </div>
  )
}

export default About