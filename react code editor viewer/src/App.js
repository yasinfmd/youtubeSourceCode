import React, {useState} from "react";
import './App.css'
import CodeEditor from '@uiw/react-textarea-code-editor'

export default function App() {
    const [selectedLanguage, setSelectedLanguage] = useState('js')
    const [langs] = useState(['js', 'jsx', 'json', 'php', 'dotnet', 'scss', 'dockerfile', 'css', 'html', 'java', 'sql'])
    const [code, setCode] = useState({
        js: `function add( a , b ){\n return a+b \n}`,
        jsx: `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);`,
        json: ` "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },`,
        php: `
        <?php
echo "echo için parantez gerekmez";
?>
        `,
        dotnet:`List<string> AuthorList = new List<string>();`,
        scss:`$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}`,
        dockerfile:`from : node16`,
        css:`.myclass{\n backgroud:red;\n}`,
        html:`<div>Selam</div>`,
        java:`import java.io.*;
  
class GFG {
    public static void main(String[] args)
    {
        System.out.println("Welcome");
        System.out.println("To");
        System.out.println("GeeksforGeeks");
    }
}`,
        sql:'SELECT * FROM mytable',

    })
    return (
        <>
            <CodeEditor language={selectedLanguage} placeholder="Yaz..." value={code[selectedLanguage]}
                        className="myeditor" onChange={() => {
            }}/>
            <div className="langsarea">
                {langs.map((item) => {
                    return (
                        <div key={item}>
                            <input type="radio" checked={selectedLanguage === item} value={item} name="lang"
                                   onChange={(e) => {
                                       setSelectedLanguage(e.target.value)
                                   }}/>
                            <label htmlFor={item}>{item}</label>
                        </div>
                    )
                })}
            </div>
        </>
    );
}
