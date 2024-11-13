import { useState } from 'react'
import Fuse from 'fuse.js'

import './App.css'
const data = [
  { name: 'Alice', age: 25, job: 'Developer' },
  { name: 'Bob', age: 30, job: 'Designer' },
  { name: 'Charlie', age: 35, job: 'Manager' },
  { name: 'Dave', age: 40, job: 'Devops' },
];
function App() {
  const [results, setResults] = useState(data);
  const [query,setQuery]=useState('')
  const handleSearch=(e)=>{
      setQuery(e.target.value)
      const fuse=new Fuse(data,{
        keys:['name','job'],
        threshold:0.1,
        isCaseSensitive: false,
        findAllMatches: true,
        includeScore:true,
        useExtendedSearch:true
      })
      const searchResult=fuse.search(query)
      console.log(searchResult)
      setResults(searchResult.map((item)=>item.item))
  }
  return (
    <>
    <input value={query} onChange={handleSearch} />
     <ul>
        {results.map((user, index) => (
          <li key={index}>
            {user.name} - {user.job} ({user.age} yaşında)
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
