import { Github } from "@deemlol/next-icons";

import Image from "next/image"
const Dashbord = ({ }) => {
    return (
        <>
            <div className="container m-auto">
                <div className="flex items-center justify-center">
                    <div className="w-[1213px] h-[767px] flex relative flex-col items-center justify-center">
                        <div className="w-[1076px] h-[598px] rounded-[39px] ">
                            <Image
                                alt='Baner Image'
                                width={1076}
                                height={598}
                                className="rounded-[39px] shadow-lg"
                                src={'/images/dashbord.png'}
                            />
                        </div>
                        <div className="w-[294px] h-[166px] absolute right-0 bottom-0 ">
                            <Image
                                alt='Baner Image'
                                width={294}
                                height={166}
                                className="rounded-[13px] shadow-lg"
                                src={'/images/miniDashborde.png'}
                            />
                        </div>
                        <div className="rotate-[-30deg] w-[136px] absolute top-[212px] left-[0px] py-[45px] bg-zinc-700 shadow-lg flex items-center justify-center rounded-[25px]">
                            <Github className="w-[45px] h-[45px] text-[#ffff]" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
// miniDashborde.png
export default Dashbord