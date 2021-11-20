
import { useRouter } from "next/router"
const User = () => {
    const _router = useRouter()
    console.log("q", _router.query)
    return (
        <div>
            User Sayfası
        </div>
    )
}
export default User