import Image from "next/image"

const NetWorkOus = ({ }) => {
    return (
        <>

            <div className="h-fit flex flex-col gap-[4rem] pb-[4.5rem] bg-[#E2F3F9] justify-center  pt-[5rem]">
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <span className="text-[55px]">
                            Our network & world
                            work details.
                        </span>
                    </div>
                    <div className="flex justify-center pt-[2.5rem]">
                        <Image
                            alt="Map"
                            width={1400}
                            height={799.7}
                            src={'/images/map.png'}
                        />
                    </div>
                    <div className="flex flex-wrap gap-[2.5rem] justify-between">
                        <div className="w-[307] h-[248] rounded-[20px] flex flex-col p-[1.5rem] bg-[#ffff] shadow-2xl">
                            <div className="flex items-center gap-[.5rem]">
                                <div className="w-[64px] h-[64px] bg-amber-500 rounded-[50%]">

                                </div>
                                <div>
                                    <span>Bangladesh</span>
                                </div>

                            </div>
                            <div className="h-[1px] bg-[#C4C4C4] mt-[1rem] mb-[3rem]">

                            </div>
                            <div className="">
                                <span>Event madness gathering
                                    innoies, & tech enthusiasts in Speced.</span>
                            </div>
                        </div>

                        <div className="w-[307] h-[248] rounded-[20px] flex flex-col p-[1.5rem] bg-[#ffff] shadow-2xl">
                            <div className="flex items-center gap-[.5rem]">
                                <div className="w-[64px] h-[64px] bg-amber-500 rounded-[50%]">

                                </div>
                                <div>
                                    <span>Bangladesh</span>
                                </div>

                            </div>
                            <div className="h-[1px] bg-[#C4C4C4] mt-[1rem] mb-[3rem]">

                            </div>
                            <div className="">
                                <span>Event madness gathering
                                    innoies, & tech enthusiasts in Speced.</span>
                            </div>
                        </div>

                        <div className="w-[307] h-[248] rounded-[20px] flex flex-col p-[1.5rem] bg-[#ffff] shadow-2xl">
                            <div className="flex items-center gap-[.5rem]">
                                <div className="w-[64px] h-[64px] bg-amber-500 rounded-[50%]">

                                </div>
                                <div>
                                    <span>Bangladesh</span>
                                </div>

                            </div>
                            <div className="h-[1px] bg-[#C4C4C4] mt-[1rem] mb-[3rem]">

                            </div>
                            <div className="">
                                <span>Event madness gathering
                                    innoies, & tech enthusiasts in Speced.</span>
                            </div>
                        </div>
                        <div className="w-[307] h-[248] rounded-[20px] flex flex-col p-[1.5rem] bg-[#ffff] shadow-2xl">
                            <div className="flex items-center gap-[.5rem]">
                                <div className="w-[64px] h-[64px] bg-amber-500 rounded-[50%]">

                                </div>
                                <div>
                                    <span>Bangladesh</span>
                                </div>

                            </div>
                            <div className="h-[1px] bg-[#C4C4C4] mt-[1rem] mb-[3rem]">

                            </div>
                            <div className="">
                                <span>Event madness gathering
                                    innoies, & tech enthusiasts in Speced.</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default NetWorkOus