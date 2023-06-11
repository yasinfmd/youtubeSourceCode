import { Resource, component$, useResource$, useSignal
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
/*
const weatherResource = useResource$<any>(async ({ track, cleanup }) => {
    const cityName = track(() => store.city);
    const abortController = new AbortController();
    cleanup(() => abortController.abort('cleanup'));
    const res = await fetch(`http://weatherdata.com?city=${cityName}`, {
      signal: abortController.signal,
    });
    const data = res.json();
    return data;
  });

*/

export default component$(() => {
  const name=useSignal("yasin")
  
  const todos=useResource$<Array<{
    userId:number,
    id:number,
    title:string,
    completed:boolean
  }>>(async({track,cleanup})=>{
   // const xVariable=track(() => name.value);
   // cleanup(() => abortController.abort());
    console.log('userName',name.value)
    const abortController = new AbortController();
    
    // ?q=name.value || xVariable
      const response=await fetch('https://jsonplaceholder.typicode.com/todos/',
      {
        signal: abortController.signal,
      })
      const data=await response.json()
      return data;
  })
  return (
    <>
    <h1>Qwik !</h1>
    <input bind:value={name} onChange$={(ev)=>{
      name.value=ev.target.value
    }} />
    {name}
    <Resource
      value={todos}
      onResolved={(arr)=>(
        <ul>
          {arr.map((item)=><li>{item.title  }</li>)}
        </ul>
      )}
      onPending={()=><h1>Lütfen bekle veriler geliyor...</h1>}
      onRejected={(e)=><h1>Hata oldu buyur sebebi : {e}</h1>}
    />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
