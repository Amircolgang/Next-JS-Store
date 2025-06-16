export async function GET(){
    try {
        return new Response(
            JSON.stringify({message : "Ok"})    
        )
    } catch (error) {
        return new Response(
            JSON.stringify({message : error})
        )
    }
}