export async function GET(){
    try {
        throw new Error ("Khata")
        return new Response(
            JSON.stringify({message : "Ok"})    
        )
    } catch (error) {
        return new Response(
            JSON.stringify({message : "no"})
        )
    }
}