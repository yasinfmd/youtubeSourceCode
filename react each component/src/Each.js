import {Children} from "react";

export const Each=({render,of,options={}})=>{
    if(options.filter){
        return Children.toArray(
            of.filter(options.filter).map((item,index)=>{
                return render(item,index)
            })
        )
    }
    return Children.toArray(
        of.map((item,index)=>{
            return render(item,index)
        })
    )
}
