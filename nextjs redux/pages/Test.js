import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import SayacGoster from '../components/SayacGoster'
const Test = () => {
    const dispatch = useDispatch()
    return (
        <div>
            Test Saytfası
            <button
                onClick={() => {
                    dispatch({ type: "INC", payload: 5 })
                }}
            >Arttır</button>
            <button
                onClick={() => {
                    dispatch({ type: "DEC", payload: 3 })
                }}
            >Azalt</button>


            <SayacGoster />

        </div>
    )
}
export default Test
