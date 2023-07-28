
const Page=({params})=>{
    console.log(params)
    return(
        <div>Blog Detail Page {params.blogId}</div>
    )
}
export default Page