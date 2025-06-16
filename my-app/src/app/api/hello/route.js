export async function GET(){
    return new Response(
        JSON.stringify({meesage : "Heloo"}) , 
        {status : 200}
    )
}