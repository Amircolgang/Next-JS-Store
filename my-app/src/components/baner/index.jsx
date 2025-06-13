import Dashbord from "../dashboard"
import LogoCompany from "../logo"
import Statistics from "../statistics"
const Baner = ({ }) => {
    let a = [1, 2, 3, 4, 5]
    return (
        <>
            <div className="container m-auto ">
                <div className="flex items-center justify-center flex-col py-[5.5rem]">
                    <div className="w-[856px] h-[324px] flex flex-col text-center">
                        <span className="text-[72px]">Solve problem with an integrated agency.</span>
                        <span className="text-[20px]">Ehya is the Instagram analytics platform teams use to stay focused on the goals, track
                            engagement for report your business .
                        </span>
                    </div>
                    <div>
                        <div className="w-fit h-[90px] flex justify-between items-center gap-[1.5rem]">
                            <span className="shadow-xl w-[196px] h-[70px] bg-[#DAEBFF] text-[20px]  border-[#AEC7E4]-[3px]  text-[#0075FF] rounded-b-[35px] rounded-tr-[35px] flex items-center justify-center">See our portfolio</span>
                            <span className="shadow-xl w-[196px] h-[70px] bg-[#DAEBFF] text-[20px]  border-[#AEC7E4]-[3px] text-[#0075FF] rounded-b-[35px] rounded-tr-[35px] flex items-center justify-center">More info</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-col py-[5.5rem]">
                    <Dashbord />
                </div>
                <div>
                    <LogoCompany />
                </div>
                <div className="flex">

                    <Statistics/>

                </div>
            </div>
        </>
    )
}

export default Baner