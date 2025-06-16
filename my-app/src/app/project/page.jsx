import Image from "next/image"
import Link from "next/link";
let data = ""
let db = await fetch('http://localhost:3000/api/project')
const json = await db.json();
import Header from "@/components/header";

const Project = ({ }) => {
  // console.log(titleSesionLearn)
  // const item_data = item_dataFech()
  let objectKeyinProject = []
  let titleSesionLearn = []
  let item_data = json
  let category = item_data[0].category
  category.map(item => objectKeyinProject.push(Object.keys(item)))
  objectKeyinProject.map((object => titleSesionLearn.push({name : object[0]})))
  console.log(titleSesionLearn.map(item => console.log(item.name)))
  return (
    <>
      <Header />
      <div className="container m-auto">
        <div className="flex justify-center gap-[36px] pt-[4rem] flex-wrap ">
          {
            titleSesionLearn.map((item, index) => (
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
                    <span>Name : {item[0].name}</span>
                    {/* <span>description : {item_data.description}</span> */}
                  </div>
                  <div className="w-[40px] cursor-pointer h-[39px] rounded-[25px] bg-[#1A1A1A] text-amber-200 text-4xl flex items-center justify-center">
                    <Link
                      href={`/project/${item.name}`}
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