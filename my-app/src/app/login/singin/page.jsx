import Image from "next/image"
const SingIn = ({ }) => {
  return (
    <>
      <div className="w-[1080px] h-[1080px]">
        <div className="w-[540px] h-[650px] bg-[#ffff]">
          <div className="w-[311px] flex flex-col">
            <div className="flex items-center justify-center w-[338px] h-[89px]">
              <div className="text-center">
                <span className="text-[34px] ">
                  Welcome back
                </span >
                <span className="text-[14px]">
                  Welcome back! Please enter your details.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-[1.5rem]">
              <div className="flex items-start flex-col gap-[0.5rem]">
                <span>
                  Email
                </span>
                <input className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] shadow-2xl" type="text" placeholder="Enter your email" />
              </div>
              <div className="flex flex-col gap-[1.5rem]">
                <span>
                  Password
                </span>
                <input className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] shadow-2xl" type="text" placeholder="**********" />
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div>
                  <input type="checkbox" name="" id="" />
                  <span>Remember me</span>
                </div>
                <div>
                  Forgot password
                </div>
              </div>
              <div>
                <button className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] bg-[red] shadow-2xl">Sing in</button>
                <div className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] border-zinc-600 border-[1px] flex items-center justify-center shadow-2xl">
                  <span >
                    Sign in with Google
                  </span>
                </div>
              </div>
              <div>
                <span>Don’t have an account? </span>
                <span className="text-[blue]">Sign up fo free!</span>
              </div>
            </div>

          </div>
        </div>
        <div>
          <Image
            alt="singin"
            width={559}
            height={777}
            src={'/images/Singin.png'}
          />
        </div>
      </div>
    </>
  )
}

export default SingIn