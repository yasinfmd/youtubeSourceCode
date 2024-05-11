const OpenAI =require("openai");

const openai=new OpenAI({
   // apiKey:'YOURKEY'
})

const generateImage=async(p)=>{
    const response=await openai.images.generate({
        quality:"hd",
        style:"natural",
        response_format:"url",
        prompt:p
    })
    console.log('response', response)
}
generateImage("Eagle")