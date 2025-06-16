let db = await fetch('http://localhost:3000/api/project')
const json = await db1.json();

const SlugerPrudoct = ({ params }) => {
    let {slug} = params
    console.log(slug)
    console.log(json)        
    return (
    <>
        
    </>
  )
}

export default SlugerPrudoct