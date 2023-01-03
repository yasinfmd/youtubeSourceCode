import logo from './logo.svg';
import './App.css';
import {useEffect, useLayoutEffect} from "react";
function App() {
  function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
  const connectToGoogle=()=>{
    window.google.accounts.id.initialize({
      context:'signup',
      client_id: '92379549679-p61aomeg9a3sbv1vjnovfo0fi1jdfidu.apps.googleusercontent.com',
      auto_select:false,
      cancel_on_tap_outside:true,
      callback: (result)=>{
        const r =parseJwt(result.credential)
        console.log('res',result,r)
      }
    });
    window.google.accounts.id.prompt((notification) => {
      console.log(notification)
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        // continue with another identity provider.
      }
    });
    const opt={
      type:'outline',
      width:"300px",
      click_listener:()=>{
        alert()
        return
        connectToGoogle()
      }
    }
    window.google.accounts.id.renderButton(document.getElementById('mybtn'),opt)

   window.google.accounts.id.prompt();
  }
  const closeAutoSelect=()=>{
   window.google.accounts.id.disableAutoSelect();
  }
/*  useLayoutEffect(()=>{
    setTimeout(()=>{

    },3000)

  },[])*/
  return (
    <div className="App">
      <header className="App-header">
        <div id="mybtn"></div>
        <button onClick={connectToGoogle}>Google ile giriş yap</button>
      </header>
    </div>
  );
}

export default App;
