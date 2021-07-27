import Link from 'next/link'
const Deneme = () => {
    return (
        <div>
            Burası bir deneme sayfasıdır
            <div>
                <Link href="/Test">
                    <a>Test Sayfasına Git</a>
                </Link>
                <Link href="/">
                    <a>Anasayfa</a>
                </Link>
            </div>
        </div>
    )
}
export default Deneme