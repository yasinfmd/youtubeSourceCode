import logo from './logo.svg';
import './App.css';
import { createBrowserRouter,Link,RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
  const routes=createBrowserRouter([
    {
      path:'/',
      element:(
        <div>
          <h1>Merhaba ben anasayfayım</h1>
          <Link replace to="/otherPage">Diğer sayfaya git </Link>
        </div>
      )
    },
    {
        path:'/otherPage',
        element:(
          <div>
            <h1>Merhaba ben otherpage</h1>
            <Link to="/">Ana sayfaya git </Link>
          </div>
        )
    }
  ])

  useEffect(()=>{
      routes.subscribe((state)=>{
        console.log(state)
        // if(state.location.pathname==="/otherPage"){
        //   routes.dispose
        // }
      })
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>{
          routes.routes.push(
            {
              path:'/random-user-page',
              element:(<div><h1>Yeni bir kullanıcı sayfasıııı</h1></div>)
            }
          )
          routes.navigate('/random-user-page')
        }}>Tıkla ve yeni bir route olustur</button>
        <RouterProvider router={routes} />
      </header>
    </div>
  );
}

export default App;
