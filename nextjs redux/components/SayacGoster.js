
import { useSelector } from "react-redux"
const SayacGoster = () => {
    const { count } = useSelector((state) => state)
    return (
        <div>
            Sayı {count.count}
        </div>
    )
}
export default SayacGoster