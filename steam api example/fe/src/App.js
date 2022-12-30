import './App.css';
import {useEffect, useState} from "react";
import  axios from 'axios'
function App() {

  const [data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:8081/test').then((res)=>{
      console.log(res.data['730'].data)
      setData([res.data['730'].data])
//      setData(res.data.applist.apps)
    })
  },[])
  return (
    <>

      <div id="container">
        {data.map((item)=>{
          return(
              <div className="game-wrapper" key={item.steam_appid} >
                <div className="game-details">
                  <h1>{item.name}</h1>
                  <p className="information">{item.publishers[0]}</p>
                </div>
                <div className="game-image">
                  <img
                      src={item.background}
                      alt="" />
                  <div className="info">
                    <h2> Detaylar</h2>
                    <ul>
                      {item.movies.map((m)=>{
                        return(
                            <li key={m.name}>{m.name}</li>

                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
          )
        })}


      </div>


    </>
  );
}

export default App;
