import { createBrowserRouter, createRoutesFromElements, defer, redirect, Route, useRouteError } from "react-router-dom";
import App from '../src/App'
import Home from '../src/Home'
import MyHome from '../src/MyHome'
import YourHome from '../src/YourHome'


const myDataFunction=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
                reject("Hatasız kul olmaz")
        },5000)
    })
}
const getMyDatas=async ()=>{
    return defer({myData:myDataFunction()})
}

const ErrorComponent=()=>{
    const data=useRouteError()
    console.log('data',data)
    return(
        <div>Error Componentiii {data.message}</div>
    )
}
const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        errorElement:<ErrorComponent />,
        hasErrorBoundary:true,
        children:[
            {
                errorElement:<div>Hata Sayfasıııı 2</div>,
                path:'deneme',
                caseSensitive:true,
                element:<div>Deneme Sayfası  </div>
            },
            {
                errorElement:<div>Hata Sayfasıııı 2</div>,
                path:'test',
                caseSensitive:true,
                element:<div>Test Sayfası</div>
            },
            {
                errorElement:<div>Hata Sayfasıııı 3</div>,
                path:'test3',
                caseSensitive:false,
                element:<div>Test 3 Sayfası</div>
            }
        ]
    },
    {
        loader:async ()=>{
           const data= await  fetch('https://jsonplaceholder.typicode.com/todos/1')
           const result = await data.json()
           const data2= await  fetch('https://jsonplaceholder.typicode.com/todos')
           const result2 = await data2.json()
           return {result,result2,result3:[1,2,3,4,5]}
        },
        errorElement:<ErrorComponent />,
        path:'/home',
        element:<Home />
    },
    {
        loader:getMyDatas,
        errorElement:<ErrorComponent />,
        path:'/myhome',
        element:<MyHome />
    },
    {
        loader:async (ctx)=>{
            console.log(ctx)
            // signal üzerinden istedğim değişken gelmedi yada iptal oldu gibi gibi 
            // redirect('/redirectpage')
            const data= await  fetch('https://jsonplaceholder.typicode.com/todos/1')
            const result = await data.json()
            const data2= await  fetch('https://jsonplaceholder.typicode.com/todos')
            const result2 = await data2.json()
            return {result,result2,result3:[1,2,3,4,5]}
         },
        errorElement:<ErrorComponent />,
        path:'/yourhome/:id',
        element:<YourHome />
    }
])

const router2=createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='/' element={<App />} />
    <Route path='/home' element={<Home />} />
    </>
))
export {router2}
export default router