import Image from "next/image"
const LogoCompany = ({}) => {
  return (
    <>
        <div className="container m-auto">
            <div className="flex h-[255px] items-center justify-center border-b-4">
                <Image 
                    alt="Logos"
                    height={255}
                    width={1200}
                    // fill={true}
                    src={'/images/logos.svg'}
                />
            </div>
        </div>
    </>
  )
}

export default LogoCompany