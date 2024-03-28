import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useSWR from 'swr'


function App() {
  const fetcher = (...args)=>{
    console.log(args)
    return fetch(...args).then(res => res.json())
  }


  const { data, error, isLoading ,isValidating,mutate} = useSWR('https://jsonplaceholder.typicode.com/photos',fetcher,{
    revalidateOnMount:true,
    revalidateOnFocus :true,
    refreshInterval :1000,
    refreshWhenHidden :true,
    loadingTimeout :5000,
    keepPreviousData: true,
    onSuccess(data, key, config){
      console.log('onSuccess')
    },
    onLoadingSlow(key, config){
      console.log('onLoadingSlow')
    },
    onError(){
      console.log('onError')
    }
  })
  console.log('isValidating',isValidating)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  console.log(data)
  console.log(error)
  console.log(isLoading)

  return (
    <>
    <button onClick={()=>{
      mutate("https://jsonplaceholder.typicode.com/photos")
    }}>tıkla</button>
    {JSON.stringify(data)}
    </>
  )
}

export default App
