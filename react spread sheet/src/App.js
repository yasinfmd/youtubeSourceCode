import { useState } from "react";
import Spreadsheet from "react-spreadsheet";

const App = () => {
  const [data,setData]=useState([
    [{ value: "Vanilla" }, { value: "Chocolate" },{ value: "" },{value:''}],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ])
  return <Spreadsheet data={data} 
    onBlur={()=>{
      alert()
    }}
    rowLabels={["bir","iki","üç"]}
    onSelect={(d)=>{
      console.log("seçilen",d)
    }}
    darkMode={true}
    columnLabels={["ad","soyad","o","bu","biz","siz","onlar"]}
    onChange={(d)=>{
      console.log("data",d)
      //setData(d)
    }}
  />;
};
export default App