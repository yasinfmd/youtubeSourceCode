import { useRouter } from 'next/router'
import Head from "next/head"
const Test = () => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Test Sayfası</title>
                <meta charset="UTF-8" />
                <meta name="description" content="Free Web tutorials" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doe" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
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