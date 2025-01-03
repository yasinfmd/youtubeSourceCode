class MyCounter extends HTMLElement {
    constructor() {
        super() 
        this.attachShadow({mode:"open"})
        this.shadowRoot.innerHTML=`
        <div>
        <h1>Ben bir counter</h1>
        <span id='counter_el_span'>0</span>
        </div>
        `       
        this.counterElement=this.shadowRoot.getElementById('counter_el_span')

    }

    set count(value){
        this._count=value
        this.updateCount()
    }
    get count(){
        return this._count
    }

    updateCount(){
        this.counterElement.textContent=this._count
    }
}
customElements.define("my-counter",MyCounter)