import Image from "next/image"
import LoginSingUp from "../Sing-Login"
import Link from "next/link"    
const NavBar = ({ props }) => {
    // if(props != undefined){
    //     console.log(
    //         "User is Alredi hast"            
    //     )
    // }
    // console.log(props)
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
                    <Link
                    href={'/'}
                    >
                    <span>Home</span>
                    </Link>
                    <Link
                    href={'/services'}>
                    <span>Services</span>
                    </Link>
                    <Link
                        href={'/project'}
                    >
                    <span>Project</span>
                    </Link>
                    <Link
                        href={'/about'}
                    >
                    <span>About</span>
                    
                    </Link>
                    <Link
                        href={'/help'}
                    >
                    <span>Help</span>
                    
                    </Link>
                </div>
                <div>
                <LoginSingUp  />
                </div>
            </div>
        </div>
    )
}

export default NavBar