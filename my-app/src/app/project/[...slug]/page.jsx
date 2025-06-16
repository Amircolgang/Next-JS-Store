let db = await fetch('http://localhost:3000/api/project')
const json = await db.json();

const SlugerPrudoct = ({ params }) => {
    let {slug} = params
    console.log(slug[0])
    let data = json
    let categoryItem = data.category
    categoryItem.map(item => console.log(Object.keys(item[0])))
    // let data_item = json.find(item => item[0])       
    return (
    <>
        
    </>
  )
}

export default SlugerPrudoct