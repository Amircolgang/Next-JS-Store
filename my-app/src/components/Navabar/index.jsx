import Image from "next/image"
import LoginSingUp from "../Sing-Login"
             
const NavBar = ({ }) => {
    return (
        <div className="containerm m-auto">
            <div className="flex items-center justify-between">
                <div className="Logo flex items-center gap-[0.5rem]">
                    <Image
                        alt="Logo Images"
                        width={50}
                        height={50}
                        src={'/images/next.svg'}
                    />
                    <span className="text-[23px]">Dsign</span>
                </div>
                <div className="flex items-center justify-around w-[457px] h-[27px] text-[20px]">
                    <span>Home</span>
                    <span>Services</span>
                    <span>Project</span>
                    <span>About</span>
                    <span>Help</span>
                </div>
                <div>
                <LoginSingUp />
                </div>
            </div>
        </div>
    )
}

export default NavBar