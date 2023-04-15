const USER_PERMISSIONS_MAP={
    HOME:{
            create:false,
            read:false,
            delete:false,
            update:true,
    },
    USER:{
            create:true,
            read:true,
            delete:false,
            update:false
    }
}


export const checkPermission=(module,scopes)=>{
   let isHas=false;
   if(USER_PERMISSIONS_MAP[module]){
    for (let index = 0; index < Object.keys(USER_PERMISSIONS_MAP[module]).length; index++) {
        let isHasPermission=scopes.some((s)=>USER_PERMISSIONS_MAP[module][s]===true)
        if(isHasPermission){
            isHas=true
            break;
        }
        
    }
   }
   return isHas;
}

const PermissionLayout=(props)=>{

    const isHasPermission=checkPermission(props.module,props.scopes)

    if(isHasPermission){
        return <>{props.children}</>
    }
    return <></>
}
export default PermissionLayout