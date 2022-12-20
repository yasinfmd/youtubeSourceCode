import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users,setUsers]=useState([])
  const getUsers=async()=>{
      const result=await fetch('http://localhost:4000/users')
      const data=await result.json()
      setUsers(data)
  }
  const saveUser=async()=>{

      // Default options are marked with *
      const response = await fetch('http://localhost:4000/users', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name:Date.now().toString(),
          surName:Math.random()*5000
        }) // body data type must match "Content-Type" header
      });

  
      const data=await response.json()
      getUsers()
      console.log('data', data)
  }
  const deleteData=async(id)=>{
    const response = await fetch('http://localhost:4000/users/'+id, {
        method: 'DELETE', 
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data=await response.json()
      console.log('data', data)
      getUsers()


  }

  const filterData=async()=>{
    const result=await fetch('http://localhost:4000/users?name='+'Yasin'+"&surName="+"Dalkılıç")
    const data=await result.json()
    setUsers(data)
  }

  const getPagination=async()=>{
    const result=await fetch('http://localhost:4000/users?_page=1&_limit=3')
    const data=await result.json()
    setUsers(data)
  }
  const likeData=async()=>{
    const result=await fetch('http://localhost:4000/users?name_like=1')
    const data=await result.json()
    setUsers(data)
  }

  const fullText=async()=>{
    const result=await fetch('http://localhost:4000/users?q=Yasin')
    const data=await result.json()
    setUsers(data)
  }
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div className="App">
      <button onClick={getPagination}>Pagination</button>

      <button onClick={getUsers}>Filtre Sıfırla</button>

      <button onClick={filterData}>Filter Data</button>

      <button onClick={likeData}>Like Data</button>

      <button onClick={fullText}>FullText</button>




      <button onClick={saveUser}>Kayıt Oluştur</button>
      <ul>
        {users.map((item)=>{
          return(
        <li key={item.id}>{item.name} - {item.surName} - {item.id} <div onClick={()=>{deleteData(item.id)}}>Sil</div></li>
            
          )
        })}
      </ul>
    </div>
  );
}

export default App;
