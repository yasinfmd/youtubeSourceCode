import { useRouter } from "next/router"

const UserDetail = ({ data }) => {
    const router = useRouter()
    const { userId, ad } = router.query

    return (
        <div>
            Kullanıcı Detay Sayfası {userId} {ad}


            {JSON.stringify(data)}
        </div>
    )
}
export default UserDetail

export async function getStaticProps(context) {
    console.log("context", context)
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/" + context.params.userId)
    const data = await result.json()

    return {
        props: {
            data
        }
    }
}

export async function getStaticPaths(context) {
    return {
        paths: [
            { params: { userId: "" } }
        ],
        fallback: true
    }
}