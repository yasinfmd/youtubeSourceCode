import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';


import reportWebVitals from './reportWebVitals';
import Store from './Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
export const myStore=new Store()
root.render(
    <App2 />
);
{/* <App store={myStore} /> */}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
