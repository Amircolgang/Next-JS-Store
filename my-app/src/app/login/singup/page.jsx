'use client'

import NavBar from "@/components/Navabar"
import Image from "next/image"
import { useState } from "react"


const SingUp = ({ }) => {
  const [email, setemail] = useState()
  const [name, setName] = useState()
  const [pass, setPass] = useState()
  const [username, setUsername] = useState()
  const newUser = {
    email,
    name,
    username,
    pass
  }

  const sendNewUser = () => {
    // fetch("https://example.org/post", {
    //   method: "POST",
    //   body: JSON.stringify(newUser),
    //   // … http://localhost:3000/login/singup
    // });
    fetch('http://localhost:3030/api/users' , {
          method : "POST" ,
          body : JSON.stringify(newUser)
      }).then((res) => res.json())
        .then((resData) => console.log(resData))
  }


  return (
    <>
      <div className="container m-auto">
        <NavBar />
        <div className="flex items-center justify-center pt-[4.5rem]">
          <div className="w-fit  bg-[#fff] rounded-2xl shadow-2xl flex">
            <div className="w-[540px] h-[650px]  flex items-center justify-center">
              <div className="w-[311px] flex flex-col gap-[1.5rem]">
                <div className="flex items-center justify-center w-[338px] h-[89px]">
                  <div className="text-center flex flex-col">
                    <span className="text-[34px] ">
                      Sing Up  Page
                    </span >
                    <span className="text-[14px]">
                      Welcome back! Please enter your details.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[.5rem]">
                  <div className="flex items-start flex-col gap-[0.25rem]">
                    <span>
                      Name
                    </span>
                    <input value={name} onChange={(e) => setName(e.target.value)} className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] shadow-2xl bg-[#ffffff]" type="text" placeholder="Enter your name" />
                  </div>
                  <div className="flex items-start flex-col gap-[0.25rem]">
                    <span>
                      Username
                    </span>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] shadow-2xl bg-[#ffffff]" type="text" placeholder="Enter your user name" />
                  </div>
                  <div className="flex items-start flex-col gap-[0.25rem]">
                    <span>
                      Email
                    </span>
                    <input value={email} onChange={(e) => setemail(e.target.value)} className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] shadow-2xl bg-[#ffffff]" type="text" placeholder="Enter your email" />
                  </div>
                  <div className="flex flex-col gap-[.5rem]">
                    <span>
                      Password
                    </span>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] shadow-2xl" type="text" placeholder="**********" />
                  </div>
                </div>
                <div className="felx flex-col ">
                  <div className="flex justify-between">
                    <div>
                      <input type="checkbox" name="" id="" />
                      <span>Remember me</span>
                    </div>
                    <div>
                      Forgot password
                    </div>
                  </div>
                  <div className="flex flex-col gap-[.5rem] pt-[1.5rem]">
                    <button onClick={() => sendNewUser()} className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] bg-[red] shadow-2xl">
                      Sing Up
                    </button>
                    <div className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem]  border-zinc-600 border-[1px] flex items-center justify-center shadow-2xl">
                      <span >
                        Sign Up with Google
                      </span>
                    </div>
                  </div>
                  <div className="pt-[1.5rem]">
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
        </div>

      </div>

    </>
  )
}

export default SingUp