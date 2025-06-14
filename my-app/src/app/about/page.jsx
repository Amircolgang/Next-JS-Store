import NavBar from "@/components/Navabar"

const About = ({}) => {
  return (
    <>
        <div className="container m-auto">
          <NavBar />
          <div className="flex justify-center flex-col gap-16 pt-[4.5rem]">
            <div className="flex flex-col text-center">
              <span className="text-[3rem]">About</span>
              <span className="text-[1rem]">Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <div>
                <div className="w-[325px] bg-[#ffff] rounded-2xl shadow-2xl h-[540px]">

                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default About