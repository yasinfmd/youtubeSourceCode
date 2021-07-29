import { useRouter } from 'next/router'

const Test = () => {
    const router = useRouter()
    return (
        <div>
            <button onClick={() => {
                router.push("/deneme")
            }}>
                Yönlendir Beni
            </button>
            Ben Bir Test Sayfasıyım
        </div>
    )
}
export default Test