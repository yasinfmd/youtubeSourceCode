import { useRouter } from 'next/router'
import Head from "next/head"
const Test = ({ mesaj, data }) => {
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
            {JSON.stringify(mesaj)}
            <ul>
                {data?.length && data.map((item, i) => {
                    return (
                        <li key={i}>
                            {item.title}
                        </li>
                    )
                })}
            </ul>
            Ben Bir Test Sayfasıyım


        </div>
    )
}
export default Test

export async function getServerSideProps(context) {
    console.log("context", context)
    let data = []
    setTimeout(async () => {
        console.log("ben Çalıştım")
        const result = await fetch("https://jsonplaceholder.typicode.com/todos/")
        data = await result.json()
        return {
            props: {
                mesaj: "Veri Yok",
                data
            }
        }
    }, 2000)


    return {
        props: {
            mesaj: "Veri Var",
            data
        }
    }

}
