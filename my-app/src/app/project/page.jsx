import Image from "next/image"

const feschData  =  fetch('http://localhost:3030/api/project')
let item_dataFech = async () => {
  let data = ''
  await feschData.then( res =>data = res.json())
  return data
} 

const Project = ({ }) => {
  const item_data = item_dataFech()
  console.log(item_data)
  return (
    <>
    <div>
      <div className="w-[375px] h-fit rounded-[25px] bg-[#ffff] p-[24] flex flex-col gap-[29px]">
        <Image
          alt="Product Image"
          width={327}
          height={142}
          src={'/images/next.svg'}
          className="rounded-2xl"
        />
        <div className="w-[327px] h-[106px] flex justify-between">
          <div className="flex flex-col justify-between">
            <span>Name : {item_data.title}</span>
            <span>Id : {item_data.id}</span>
            {/* <span>description : {item_data.description}</span> */}
            <span>$ {item_data.price}.00</span>
          </div>
          <div className="w-[40px] cursor-pointer h-[39px] rounded-[25px] bg-[#1A1A1A] text-amber-200 text-4xl flex items-center justify-center">+</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Project