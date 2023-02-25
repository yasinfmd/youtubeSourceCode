console.log("Test")
console.log("Test 2")


async function fetchData() {
    const response = await fetch(
      "https://random-data-api.com/api/name/random_name"
    );
    if (response.ok) {
      const data = await response.json();
     // console.log(data);
    }
  }
  
  fetchData();
  
  const array=[
    {
        value:1
    },{
        value:2

    },{
        value:3

    },{
        value:4

    }
  ]



  console.log(array.findLast(n => n.value % 2 === 1))

  console.log(array.findLastIndex(n => n.value % 2 === 1))



  const test=require('node:test')
  const assert=require('node:assert')

  test("My First Test",async(t)=>{
        await t.test("Sayılar Eşit mi ?",()=>{
            assert.equal(3,3)
        })
  })


  test("My First Test",async(t)=>{
    await t.test("Sayılar Eşit değil mi ?",()=>{
        assert.notEqual(3,3)
    })
})




