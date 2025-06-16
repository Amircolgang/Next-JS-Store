let db = await fetch('http://localhost:3000/api/project')
const json = await db.json();

const SlugerPrudoct = ({ params }) => {
    let {slug} = params
    let itemID = slug[0]
    let data = json
    let categoryItem = data.category
    // let data_item = json.find(item => item[0])       
    // categoryItem.map(item => console.log(Object.keys(item)))
    let product = categoryItem[itemID]
    console.log(product)
    return (
      <>
      {

      }  
    </>
  )
}

export default SlugerPrudoct