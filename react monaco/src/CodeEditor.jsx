import { Editor } from "@monaco-editor/react"
import { useEffect, useState } from "react"


const CodeEditor=()=>{
    const [html,setHtml]=useState("<h1>Hello World</h1>")
    const [js,setJs]=useState("console.log('Selam')")
    const [iframeContent,setIframeContent]=useState("")

    useEffect(()=>{
            const content=`
                        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                ${html}
            <script>
            ${js}
            </script>
            </body>
            </html>
            `
          
            setTimeout(() => {
                const blob=new Blob([content],{type:'text/html'})
                const contentUrl=URL.createObjectURL(blob)
            setIframeContent(contentUrl)
                
            }, 500);

    },[html,js])
        return(
            <div className="editors">
                <Editor
                height="200px"
                defaultLanguage="html"
                value={html}
                onChange={(value)=>setHtml(value)}
                theme="vs-dark"
                options={{
                    minimap:{enabled:false}
                 }}
                 
                />
                <Editor 
                 height="200px"
                 defaultLanguage="javascript"
                 value={js}
                 onChange={(value)=>setJs(value)}
                 options={{
                    minimap:{enabled:false}
                 }}
                 theme="vs-dark"
                />

                <iframe src={iframeContent} style={{
                    width:"100%",
                    height:"200px",
                    border:"1px solid"
                }} />

            </div>
        )
}
export default CodeEditor