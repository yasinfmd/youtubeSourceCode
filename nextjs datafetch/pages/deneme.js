
import Head from "next/head"
const Deneme = ({ data }) => {
    return (
        <>
            <Head>
                <title>Deneme Sayfası</title>
            </Head>
            <div>

                <ul>
                    {data?.map((item, index) => {
                        return (
                            <li key={index}>{item.title}</li>
                        )
                    })}
                </ul>
                Burası bir deneme sayfasıdır

            </div>
        </>
    )
}
export default Deneme

export async function getStaticProps(context) {
    console.log("context", context)
    setTimeout(async () => {
        console.log("bende")
        const result = await fetch("https://jsonplaceholder.typicode.com/todos/")
        const data = await result.json()
        return {
            props: {
                data
            }
        }
    }, 5000)


    return {
        props: {
            data: []
        }
    }
}