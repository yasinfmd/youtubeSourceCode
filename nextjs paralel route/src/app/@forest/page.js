
const fetchMock=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
                resolve("Merhaba Forest")
        }, 1000);
    })
}

async function getData() {
    const res = await fetchMock()
    return res
  }
const Page=async()=>{
    const data=await getData()
    return(
        <div>
            This is a Forest page {data}
        </div>
    )
}
export default Page