import Provid from "../we-provide-that-service"
import WhyWeBest from "../why-we-best"
import NetWorkOus from "../our-network-&-world-work-details"
import WhatSayAreClient from "../bg-shape"
import NewsLater from "../newsletter"
const Main = ({ }) => {
    return (
        <>
            <div>
                <Provid />
            </div>
            <div className="pt-[16rem]">
                <WhyWeBest />
            </div>
            <div>
                <NetWorkOus />
            </div>
            <div>
                <WhatSayAreClient />
            </div>
            <div>
                <NewsLater />
            </div>
        </>
    )
}

export default Main