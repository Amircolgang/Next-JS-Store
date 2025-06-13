import Image from "next/image"
const SingIn = ({ }) => {
  return (
    <>
    <div>
      <div className="w-[540px] h-[650px] bg-[#ffff]">
        <div className="flex items-center justify-center w-[338px] h-[89px]">
          <div>
            <span className="text-[34px] ">
              Welcome back
            </span text>
            <span>
              Welcome back! Please enter your details.
            </span>
          </div>
        </div>
        <div>
          <div>
            <span>
              Email
            </span>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div>
            <span>
              Password
            </span>
            <input type="text" placeholder="**********" />
          </div>
        </div>
        <div>
          <div>
            <div>
              <input type="checkbox" name="" id="" />
              <span>Remember me</span>
            </div>
            <div>
              Forgot password
            </div>
          </div>
          <div>
            <button></button>
            <div>
              <span>
                Sign in with Google
              </span>
            </div>
          </div>
          <div>
            <span>Don’t have an account? </span>
            <span>Sign up fo free!</span>
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