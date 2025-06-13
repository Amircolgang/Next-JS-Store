import Image from "next/image"
const NewsLater = ({ }) => {
    return (
        <>
            <div className="relative ">
                <div className="h-[544] bg-[#ffff]">

                </div>
                <div className="bg-[#000321] h-[235px]">

                </div>
                <div className="container flex m-auto justify-center">
                    <div className="flex justify-between items-center p-[1.5rem] absolute top-[354px] w-[1296px] h-[401px] rounded-[30px] bg-sky-700">
                        <div>
                            <Image 
                            alt="Images Of Post"
                            width={588}
                            height={334.32}
                                src={'/images/Layer_2.png'}
                            />
                        </div>
                        <div className="flex flex-col justify-between gap-[1.5rem]">  
                            <div className="flex flex-col">
                                <span className="text-[55px] w-[370px] text-amber-50">
                                Sign up to our newsletter.
                                </span>
                                <span className="text-[16px] w-[500px] text-[#ffff]">
                                Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum.
                                </span>
                            </div>
                            <div className="w-[526px] h-[69px] bg-[#ffff] flex justify-between items-center pl-[1.5rem] rounded-[9px]" >
                                <input type="text" className="outline-none pr-[1.5rem] w-[400px]" placeholder="@enter email-address " />
                                <div className="w-[69px] h-[69px] bg-sky-950 flex items-center justify-center rounded-tr-[9px]">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewsLater