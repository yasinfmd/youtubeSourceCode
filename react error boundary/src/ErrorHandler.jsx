import React from "react";


export default class ErrorHandler extends React.Component{
    constructor(props) {
        super(props)
        this.state={error:false}
    }

    static getDerivedStatetFromError(error) {
        console.log("getDerivedStatetFromError",error)
        return {error:true}
    }


    componentDidCatch(error, errorInfo) {
        //db loglama yap 
        const splited = error.message.split("_")
        console.log(JSON.parse(splited[1]))
        console.log("error",error.message)
        // console.log("errorInfo", errorInfo)
        //   fetch("myurl", {
        //       method: "POST",
        //       body: {
        //           data:splited[0]
        //       }
            
        //   })

        
    }

    render() {
        if (this.state.error) {
            return <h2>Bir Hata Var Bremen !</h2>
        }

        return this.props.children
    }

}