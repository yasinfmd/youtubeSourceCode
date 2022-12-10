import { myStore } from "."
const Count=()=>{
        return(
            <>
            <h3>Count Component {myStore.count} </h3>
            <button onClick={()=>{
                myStore.incWithParams(10)
            }}>Tıkla ve sayı artır</button>
            </>
        )
}
export default Count