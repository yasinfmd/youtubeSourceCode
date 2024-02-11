class VNode{
    constructor(tag,props,children)
    {
        this.tag=tag
        this.props=props
        this.children=children
    }
    diff(){
      //  JSON.stringify('virtualdıom')===JSON.stringify('realdom')
    }

    render(){
        const element=document.createElement(this.tag)
        for (const key in this.props) {
            element.setAttribute(key,this.props[key])
        }
        this.children.forEach((child)=>{
            const childElement=(child instanceof VNode) ? child.render():document.createTextNode(child)
            element.appendChild(childElement)
        })
        return element
    }

}
export default VNode