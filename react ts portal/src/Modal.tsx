import React from 'react';
import { createPortal } from 'react-dom'

const Portal = ({ children,targetElement }: any) => {
    const el:any = document.getElementById("root")
    return createPortal(children,targetElement.current)
}


const Modal = (props: any) => {
    return (
          <>
            {props.show ? <Portal targetElement={props.elementRef}>
                <div>
            <div>
                Merhaba Ben Bir Modalım
            </div>
            <div>Bende Modalın Footer Kısmıyım</div>
            </div>
            </Portal> : null}

        </>
    )
}
export default Modal