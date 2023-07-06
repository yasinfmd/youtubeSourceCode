import React from 'react';
import { Outlet , Link } from 'react-router-dom';
const App = () => {
  return (
    <>
    <h1>Merhaba!</h1>
    <nav>
          <ul>
            <li>
              <Link to={`/`}>Ana sayfa</Link>
            </li>
            <li>
              <Link to={`/users`}>Kullanıcılar</Link>
            </li>
          </ul>
        </nav>
    <Outlet />
    </>

  )
};

export default App;