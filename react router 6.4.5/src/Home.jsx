import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Home=()=>{
    const data=useLoaderData()
    console.log(data)
    return(
        <div>
            Home Sayfası
        </div>
    )
}
export default Home