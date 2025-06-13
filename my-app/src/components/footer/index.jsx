import Image from "next/image"

const Footer = ({ }) => {
    return (
        <>
            <div>
                <div className=" bg-[#000321] pt-[6rem] ">
                    <div className="container m-auto text-amber-50 flex flex-col gap-[3.5rem] justify-center">
                        <div className="flex justify-between">
                            <div className="flex flex-col gap-[1.5rem] justify-between ">
                                <div className="flex gap-[1.5rem]">
                                    <div>
                                        <Image
                                            alt="Next Logo"
                                            width={75}
                                            height={75}
                                            src={'/images/next.svg'}
                                        />
                                    </div>
                                    <span>
                                        Design
                                    </span>

                                </div>
                                <div className="flex gap-[1.5rem]">
                                    <div className="w-[53.82px] h-[53.82px] bg-[#33354d] rounded-[50%] flex items-center justify-center">

                                    </div>
                                    <div className="w-[53.82px] h-[53.82px] bg-[#33354d] rounded-[50%] flex items-center justify-center">

                                    </div>
                                    <div className="w-[53.82px] h-[53.82px] bg-[#33354d] rounded-[50%] flex items-center justify-center">

                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-[9rem]">
                                <div className="flex gap-[8.5rem]">
                                    <div className=" flex flex-col gap-[1.5rem]">
                                        <span>Home</span>
                                        <span>Home</span>
                                        <span>Home</span>
                                        <span>Home</span>
                                    </div>
                                    <div className=" flex flex-col gap-[1.5rem] ">
                                        <span>Home</span>
                                        <span>Home</span>
                                        <span>Home</span>
                                        <span>Home</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-[1.5rem]">
                                    <div className="flex flex-col gap-[0.25rem]">
                                        <span>	925 Filbert Street</span>
                                        <span>Pennsylvania</span>
                                        <span>18072</span>
                                    </div>
                                    <div>
                                        <span>
                                            +45 34 11 44 11
                                        </span>
                                    </div>

                                    <div>
                                        <span>info@mail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div>
                            <div className="h-[1px] bg-[#C4C4C4]">
                            </div>
                            <div className="flex justify-between py-[1.5rem]">
                                <div>
                                    <span>©2024. Agency.All rights reserved</span>
                                </div>
                                <div>
                                    <span>
                                        Privacy policy
                                    </span>
                                    <span> | </span>
                                    <span> Terms & conditions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer