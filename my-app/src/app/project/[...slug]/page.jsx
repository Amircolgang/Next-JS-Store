let db = await fetch('http://localhost:3030/api/project')
const json = await db.json();

const SlugerPrudoct = ({ params }) => {
    let {slug} = params
    // console.log(slug)
    let categor = json[0].category
    
    return (
    <>
        {
            categor.map((item) => item )        
        }
    </>
  )
}

export default SlugerPrudoct