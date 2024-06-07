const couchbase=require('couchbase')

async function main(){
    const cluster=await couchbase.connect("couchbase://127.0.0.1",{
        username:'root',
        password:'rootroot'
    })
    const bucket=cluster.bucket("mydatas")
    const collection=bucket.defaultCollection()
    const user1={
        name:"qwewqe",
        surname:"phrtkklrtj"
    }
    const user2={
        name:"qwewqe2222",
        surname:"phrtkklrtj2223232"
    }
  // await collection.upsert(Math.random().toString(36),user1)
  //  await collection.upsert(Math.random().toString(36),user2)

    const query = `SELECT META().id, * FROM mydatas`;
    const queryResult = await cluster.query(query);
    queryResult.rows.forEach((item)=>{
        console.log(item)
    })
   // await collection.get("0.sd2ykhpb3zr")
    //await collection.remove("0.sd2ykhpb3zr")
   // await collection.replace("111",{})

}

main()