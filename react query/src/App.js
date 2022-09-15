import './App.css';
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {useState} from "react";

const client = new QueryClient()


const Example = () => {

//https://jsonplaceholder.typicode.com/todos/
    const [randomNumber,setRandomNumber]=useState(0)
    const {isLoading, isLoadingError, isError, isSuccess, data:alias, isFetching, error,refetch, dataUpdatedAt} = useQuery(["myData",randomNumber],
        () => fetch('https://jsonplaceholder.typicode.com/todos/').then((res) => res.json()).then((data) => data), {
            onError(err) {
                console.log('hata')
            },
            onSuccess(data) {
               // client.invalidateQueries('')
                console.log('sss', data)
            },
            select:(data)=>{
                const _data=[...data]
                return _data.map((item)=>{
                    return {
                        ...item,
                        id:Number(item.id)+100
                    }
                })
            },
         /*   keepPreviousData:false,*/
            cacheTime:5000,
            staleTime:6000,
            enabled:false,
            refetchOnMount:true,
            refetchOnWindowFocus:true,
            refetchOnReconnect:true,
            retry:true,

       /*     refetchIntervalInBackground:true,
            refetchInterval:2000*/
        })
    return (
        <div>
            {isLoading ? "Loading" : '...'}
            {isError ? 'Hata' : 'hata yok'}
            {isSuccess ? 'Başarılı' : ''}
            {isFetching ? 'isFetching' : ''}
            {error ? error.message : ''}
            {dataUpdatedAt}

            {isLoadingError ? 'Loading Error' : ''}
            {console.log('data', alias)}
            <button onClick={()=>{setRandomNumber(Math.random)}}>Tıkla</button>
            <button onClick={refetch}>Tıkla2</button>

            <ReactQueryDevtools initialIsOpen/>
        </div>
    )
}

function App() {
    return (
        <QueryClientProvider client={client}>
            <Example/>
        </QueryClientProvider>
    );
}

export default App;
