import Image from "next/image"
import Link from "next/link";
let data = ""
let db = await fetch('http://localhost:3030/api/project')
const json = await db.json();
import Header from "@/components/header";

const Project = ({ }) => {
  // const item_data = item_dataFech()
  let item_data = json
  return (
    <>
      <Header/>
      <div className="container m-auto">
        <div className="flex justify-center gap-[36px] pt-[4rem] flex-wrap ">
          {
            item_data.map((item , index) => (
              <div key={index} className="w-[375px] h-fit rounded-[25px] bg-[#ffff] p-[24] flex flex-col gap-[29px] shadow-2xl">
                <Image
                  alt="Product Image"
                  width={327}
                  height={242}
                  src={'/images/next.svg'}
                  className="rounded-2xl"
                />
                <div className="w-[327px] h-[106px] flex justify-between">
                  <div className="flex flex-col justify-between">
                    <span>Name : {item.title}</span>
                    <span>Id : {item.id}</span>
                    {/* <span>description : {item_data.description}</span> */}
                    <span>$ {item.price}.00</span>
                  </div>
                  <div className="w-[40px] cursor-pointer h-[39px] rounded-[25px] bg-[#1A1A1A] text-amber-200 text-4xl flex items-center justify-center">
                    <Link 
                      href={`/project/${item.title}-${item.id}`}
                    >
                    +
                    </Link>
                    </div>
                </div>
              </div>
            ))
          }

        </div>
      </div>

    </>
  )
}

export default Project