import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App, { Home, User, UserDetail } from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom"
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user" element={<User />} >
        {/* <Route
          index
          element={
            <div>
              Lütfen Bir Kullanıcı Idsi Girin Yoksa Sayfa Görünmez :)
            </div>
          } /> */}
        <Route index path="detail" element={<div>
          Detay Sayfası İçin Id Gir
        </div>} />
        <Route path="detail/:userId" element={<UserDetail />} />

      </Route>

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

