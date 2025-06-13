import Image from "next/image"
const WhatSayAreClient = ({ }) => {
    return (
        <>
            <div className="container mx-auto">
                <div className="pb-[9rem]">
                    <div className="flex flex-col gap-[1.5rem] justify-center items-center py-[9.5rem] ">
                        <span className="text-[55px]">
                            What say clients about us.
                        </span>
                        <span className="w-[429px] text-center">
                            Event madness gathering innoies,& tech enthusiasts in Speced.
                            do more informations.
                        </span>
                    </div>
                    <div>
                        <div className="relative flex justify-center">
                            <Image
                                alt="bg-shap"
                                width={1290.66}
                                height={646.48}
                                src={'/images/bg-shape.svg'}
                            />

                            <Image
                                alt="image-ous"
                                width={1061.79}
                                height={932.68}
                                src={'/images/Section-5.png'}
                                className="absolute m-auto  top-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatSayAreClient