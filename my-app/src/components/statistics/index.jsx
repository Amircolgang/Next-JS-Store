import Image from "next/image"



const Statistics = ({ }) => {
    let a = [1, 2, 3, 4, 5, 6]
    return (
        <>
            <div className="container m-auto">
                <div className="flex h-fit items-center justify-center pb-[5rem] pt-[9.5rem]">
                    <div className="flex items-center justify-center flex-wrap gap-[35px] w-[1283px] h-fit">
                        {
                            a.map((item, index) => (
                                <div key={index} className="w-[306px] h-[300px] rounded-[26px] shadow-2xl py-[0.75rem]">
                                    <div className="flex flex-col justify-between h-[278px]  text-center">
                                        <div className="flex items-center justify-center flex-col pt-[1.5rem]">
                                            <div className="h-[45px] w-[45px] border-[0.5px] border-[#3335]  flex items-center justify-center rounded-[12px] p-[0.5rem]">
                                                <Image
                                                    alt="shopping-bag"
                                                    width={35}
                                                    height={35}
                                                    src={'/images/shopping-bag.svg'}
                                                />
                                            </div>
                                            <span className="text-[65px]">80%</span>
                                        </div>
                                        <div className="flex flex-col gap-[1.5rem]">
                                            <span className="text-[24px]">Happy buyers</span>
                                            <span className="text-[18px]">Follow a hashtag growth total posts, videos and images.</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistics