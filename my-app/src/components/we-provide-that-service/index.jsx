import Link from "next/link"

const Provid = ({ }) => {
    let a = [1,2,4,5]
    return (
        <>
            <div className="container m-auto">
                <div className="h-[672px] flex items-center justify-between pt-[9rem]">
                    <div className="w-[625px] flex gap-[5.5rem] flex-col">
                        <div>
                            <span className="text-[55px]">We provide that service.</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-[20px]">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</span>
                            <Link
                                href={'/provid'}
                                className="text-sky-800 text-[20px]"
                            >
                                Learn more +
                            </Link>
                        </div>
                    </div>
                    <div className="w-[593px] h-[646px]">
                        <div className="relative flex justify-end">
                            <div className="z-[5] right-0 w-[526px] h-[646px] rounded-[30px] bg-[#2FB8E3]"></div>
                            <div className="z-[99] left-0 absolute  top-[4rem] flex flex-wrap  gap-[15px]">
                                {
                                    a.map((item , index) => (
                                        <div 
                                        key={index}
                                        className=" w-[263px] h-[234px] rounded-[20px]  bg-[#ffff] p-[20px] flex gap-[1.5rem] flex-col shadow-2xl"
                                    >
                                        <div className="w-[54px] h-[54px] rounded-[20px] bg-[#BC7AF2] ">
    
                                        </div>
                                        <div className="flex flex-col">
                                            <span>
                                                Marketing
                                            </span>
                                            <span>
                                                Follow a hashtag total posts, videos
                                            </span>
                                        </div>
                                    </div>
                                    ))
                                }
                               
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Provid