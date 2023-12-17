import { useEffect, useRef, useState } from "react"

const useInViewport=(ref)=>{
    const [isInViewport,setIsInViewport]=useState(false)
    const targetRef=useRef(null)

    useEffect(()=>{
        const target=targetRef.current
        const observer=new IntersectionObserver(([entry])=>{
            setIsInViewport(entry.isIntersecting)
        },{
            root:null,
            rootMargin:'0px',
            threshold:0.1
        })

        if(target){
            observer.observe(target)
        }

        return ()=>{
            if(target){
                observer.unobserve(target)
            }
        }
    },[])
    return [targetRef,isInViewport]

}
export default useInViewport