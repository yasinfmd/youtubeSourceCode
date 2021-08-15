

const HelloStyleJsx = () => {
    return (
        <div>
            Merhaba Dünyaaaa
            <p>P Etiketi</p>
            <style jsx>
                {
                    `
                     p{
                         color:red;
                     }
                     .customClass{
                         background:blue;
                     }
                     @media (max-width:750px){
                         p{
                             color:blue;
                         }
                     }

                    `
                }

            </style>
            <style global jsx>
                {
                    `
                    body{
                        background:black;
                    }
                    `
                }
            </style>

            <div className="customClass">Class Değerine SAhip Bir Div</div>
        </div>
    )
}
export default HelloStyleJsx