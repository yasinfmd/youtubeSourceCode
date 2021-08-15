import React from "react"
import Link from 'next/link'


const Layout = ({ children }) => {
    return (
        <>
            <div>
                <Link href="/Test">
                    <a>Test Sayfasına Git</a>
                </Link>
                <br />
                <Link href="/deneme">
                    <a>Anasayfa</a>
                </Link>
            </div>

            <div>
                {children}
            </div>
        </>
    )

}
export default Layout