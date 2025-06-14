import Link from "next/link"
const LoginSingUp = ({ props }) => {
    // console.log()
    return (
        <>
            <div className="w-[334px] h-[90px] flex justify-between items-center">
                <Link
                    href={'/login/singin'}
                >
                    <span className="flex items-center justify-center text-[20px] text-[#0075FF]">
                        Sing In
                    </span>

                </Link>
                <Link 
                    href={'/login/singup'}
                >
                <span className="w-[196px] h-[70px] bg-[#DAEBFF] text-[20px] text-[#0075FF] rounded-b-[35px] rounded-tr-[35px] flex items-center justify-center">
                    {props}
                </span>
                </Link>
            </div>
        </>
    )
}

export default LoginSingUp