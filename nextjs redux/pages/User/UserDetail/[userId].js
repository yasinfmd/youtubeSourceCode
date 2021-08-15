import { useRouter } from "next/router"

const UserDetail = () => {
    const router = useRouter()
    const { userId, ad } = router.query

    return (
        <div>
            Kullanıcı Detay Sayfası {userId} {ad}


        </div>
    )
}
export default UserDetail