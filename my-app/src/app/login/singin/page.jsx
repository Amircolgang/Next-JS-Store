// "use client"
// import Alert from "@/components/alert"
// import { useState } from "react"
// import Image from "next/image"
// import NavBar from "@/components/Navabar"
// const SingIn = ({ }) => {
//   const [email, setemail] = useState('')
//   const [pass, setPass] = useState('')
//   let show = false
//   let a = true
//   const newUser = {
//     email,
//     pass
//   }
//   let res = ''
//   const sendNewUser = () => {
//     // fetch("https://example.org/post", {
//     //   method: "POST",
//     //   body: JSON.stringify(newUser),
//     //   // … http://localhost:3000/login/singup
//     // });
//     fetch('http://localhost:3030/api/login/singin', {
//       method: "POST",
//       body: JSON.stringify(newUser)
//     }).then((res) => res.json())
//       .then((resData) => {
//         console.log(resData)
//         res = resData.message
//         a = true
//         console.log(a)
//       })


//   }
//   if (show) {
//     setTimeout(() => {
//       a = false
//     }, 2000)
//   }
//   show = true

//   return (
//     <>
//       <div className="container m-auto">
//         <NavBar />
//         {
//           a
//           &&
//           <Alert
//             type="success"
//             message={`${res}`}
//             onClose={() => setShow(false)}
//           />
//         }
//         <div className="flex items-center justify-center pt-[4.5rem]">
//           <div className="w-fit  bg-[#fff] rounded-2xl shadow-2xl flex">
//             <div className="w-[540px] h-[650px]  flex items-center justify-center">
//               <div className="w-[311px] flex flex-col gap-[1.5rem]">
//                 <div className="flex items-center justify-center w-[338px] h-[89px]">
//                   <div className="text-center flex flex-col">
//                     <span className="text-[34px] ">
//                       Welcome back
//                     </span >
//                     <span className="text-[14px]">
//                       Welcome back! Please enter your details.
//                     </span>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-[.5rem]">
//                   <div className="flex items-start flex-col gap-[0.25rem]">
//                     <span>
//                       Email
//                     </span>
//                     <input value={email} onChange={(e) => setemail(e.target.value)} className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] shadow-2xl bg-[#ffffff]" type="text" placeholder="Enter your email" />
//                   </div>
//                   <div className="flex flex-col gap-[.5rem]">
//                     <span>
//                       Password
//                     </span>
//                     <input value={pass} onChange={(e) => setPass(e.target.value)} className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] shadow-2xl" type="text" placeholder="**********" />
//                   </div>
//                 </div>
//                 <div className="felx flex-col ">
//                   <div className="flex justify-between">
//                     <div>
//                       <input type="checkbox" name="" id="" />
//                       <span>Remember me</span>
//                     </div>
//                     <div>
//                       Forgot password
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-[.5rem] pt-[1.5rem]">
//                     <button className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] bg-[red] shadow-2xl" onClick={(e) => sendNewUser()}>Sing in</button>
//                     <div className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] border-zinc-600 border-[1px] flex items-center justify-center shadow-2xl">
//                       <span >
//                         Sign in with Google
//                       </span>
//                     </div>
//                   </div>
//                   <div className="pt-[1.5rem]">
//                     <span>Don’t have an account? </span>
//                     <span className="text-[blue]">Sign up fo free!</span>
//                   </div>
//                 </div>

//               </div>
//             </div>
//             <div>
//               <Image
//                 alt="singin"
//                 width={559}
//                 height={777}
//                 src={'/images/Singin.png'}
//               />
//             </div>
//           </div>
//         </div>

//       </div>

//     </>
//   )
// }

// export default SingIn


"use client"
import Alert from "@/components/alert"
import { useState } from "react"
import Image from "next/image"
import NavBar from "@/components/Navabar"

const SingIn = () => {
  const []
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [alertMsg, setAlertMsg] = useState('')
  const [alertType, setAlertType] = useState('info')
  const [showAlert, setShowAlert] = useState(false)
  const [resPons , setResPons] = useState('')
  const sendNewUser = () => {
    fetch('http://localhost:3030/api/login/singin', {
      method: "POST",
      body: JSON.stringify({ email, pass }),
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then((resData) => {
        setResPons(resData.user)
        console.log(resPons)
        if (resData.message) {
          setAlertMsg(resData.message)
          setAlertType('success')
        } else {
          setAlertMsg(resData.error || "خطا در ورود")
          setAlertType('error')
        }
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 3000)
      })
      .catch(() => {
        setAlertMsg("ارتباط با سرور برقرار نشد")
        setAlertType('error')
        setShowAlert(true)
        setTimeout(() => setShowAlert(false), 3000)
      })
  }

  
  return (
    <>
      <div className="container m-auto">
        {
           resPons &&
           <NavBar {...resPons}  /> 
        } 

        {showAlert && (
          <Alert
            type={alertType}
            message={alertMsg}
            onClose={() => setShowAlert(false)}
          />
        )}
        <div className="flex items-center justify-center pt-[4.5rem]">
          <div className="w-fit  bg-[#fff] rounded-2xl shadow-2xl flex">
            <div className="w-[540px] h-[650px]  flex items-center justify-center">
              <div className="w-[311px] flex flex-col gap-[1.5rem]">
                <div className="flex items-center justify-center w-[338px] h-[89px]">
                  <div className="text-center flex flex-col">
                    <span className="text-[34px] ">
                      Welcome back
                    </span >
                    <span className="text-[14px]">
                      Welcome back! Please enter your details.
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[.5rem]">
                  <div className="flex items-start flex-col gap-[0.25rem]">
                    <span>
                      Email
                    </span>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] shadow-2xl bg-[#ffffff]" type="text" placeholder="Enter your email" />
                  </div>
                  <div className="flex flex-col gap-[.5rem]">
                    <span>
                      Password
                    </span>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] shadow-2xl" type="password" placeholder="**********" />
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
                    <button className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] bg-[red] shadow-2xl" onClick={sendNewUser}>Sign in</button>
                    <div className="w-[313.97px] h-[41px] rounded-[12px] pl-[0.5rem] border-zinc-600 border-[1px] flex items-center justify-center shadow-2xl">
                      <span >
                        Sign in with Google
                      </span>
                    </div>
                  </div>
                  <div className="pt-[1.5rem]">
                    <span>Don’t have an account? </span>
                    <span className="text-[blue]">Sign up for free!</span>
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

export default SingIn