
const fetchMock=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Bir hata var !!!!")
              //  resolve("Merhaba")
        }, 3000);
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
            This is a Home page {data}
        </div>
    )
}
export default Page