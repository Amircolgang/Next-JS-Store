export default function GET(){
    return new Response(
        JSON.stringify({message : "Api is True"}) , 
        {status : 200}
    )
}