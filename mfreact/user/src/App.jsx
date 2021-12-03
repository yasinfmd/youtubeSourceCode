import React,{Suspen, Suspense} from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const  Header  = React.lazy(()=>import("home/Header"))  ;

import CustomButton from "home/CustomButton";
import {showAlert} from "home/utils"
import { useState } from "react";
import UserContent from "./UserContent";
const App = () => {
  const [show, setShow] = useState(false)
  
  return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {show &&  <Suspense fallback={<div>Wait ...</div>}>
    <Header />

    </Suspense>}
    <CustomButton />
      Selam
      <UserContent />
     <div>User App</div>
      <button onClick={() => {
        setShow(true)
      showAlert("Yasin")
    }}>Clickme</button> 
  </div>
);
}
ReactDOM.render(<App />, document.getElementById("app"));
