import Image from "next/image"
const WhyWeBest = ({ }) => {
    return (
        <div className="container mx-auto">
            <div className="flex    justify-between pb-[15rem] ">
                <div>
                    <div className="w-[593px] h-[646px] ">
                        <div className="relative flex justify-end">
                            <div className="z-[5] right-0 w-[526px] h-[646px] rounded-[30px] bg-[#eb9de7] shadow-2xl"></div>
                            <div className="z-[99] left-0 absolute  top-[19rem] flex flex-wrap  gap-[15px]">
                                <Image
                                    alt="Image"
                                    width={1087}
                                    height={700}
                                    src={'/images/mockup.png'}
                                />

                            </div>

                        </div>
                    </div>
                </div>

                <div className="w-[636px] flex flex-col gap-[3.5rem]">
                    <div className=" flex flex-col">
                        <span className="text-[55px]">Why we best?</span>
                        <span>Don’t waste time on search manual tasks. Let Automation do it for you. Simplify workflows, reduce errors, and save time.</span>
                    </div>
                    <div className="flex flex-col justify-between w-[586px] h-[394px]">
                        <div className="flex gap-4 items-center rounded-2xl shadow-2xl pl-[25px]">
                            <div className="w-[45px] h-[45px] bg-[#0AA857] rounded-[50px] "></div>
                            <div className="flex flex-col">
                                <span className="text-[24px]">
                                    Quality
                                </span>
                                <span className="w-[462px]">
                                    Follow a hashtag growth total posts, videos and images.more revitions
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center rounded-2xl shadow-2xl pl-[25px]">
                            <div className="w-[45px] h-[45px] bg-[#0AA857] rounded-[50px] "></div>
                            <div className="flex flex-col">
                                <span className="text-[24px]">
                                    Communication
                                </span>
                                <span className="w-[462px]">
                                    Follow a hashtag growth total posts, videos and images.more revitions
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center rounded-2xl shadow-2xl pl-[25px]">
                            <div className="w-[45px] h-[45px] bg-[#0AA857] rounded-[50px] "></div>
                            <div className="flex flex-col">
                                <span className="text-[24px]">
                                    Reliability
                                </span>
                                <span className="w-[462px]">
                                    Follow a hashtag growth total posts, videos and images.more revitions
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyWeBest