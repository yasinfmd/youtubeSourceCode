import React, { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'

const MyHome=()=>{
    const data=useLoaderData()
    console.log('data', data)
return(
    <div>
        My Home 
        <Suspense fallback={<div>Birazcık Sabır ...</div>}>
            <Await resolve={data.myData} errorElement={<div>Hata oldu be brom !</div>}>
                    {(myData)=>{
                        return(
                            <div>
                                    {JSON.stringify(myData)}
                                </div>
                        )
                    }}
            </Await>
            </Suspense>
    </div>
)
}
export default MyHome