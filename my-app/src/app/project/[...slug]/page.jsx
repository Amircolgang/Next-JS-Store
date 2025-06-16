let db = await fetch('http://localhost:3000/api/project')
const json = await db.json();

const SlugerPrudoct = ({ params }) => {
    let {slug} = params
    console.log(slug)
    let data        
    return (
    <>
        
    </>
  )
}

export default SlugerPrudoct