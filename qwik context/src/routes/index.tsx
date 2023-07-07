import {  component$, useSignal,
  createContextId,
  useContext,
  useContextProvider,
   Signal

} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export const nameContext=createContextId<Signal<string>>("nameCtx")

export default component$(() => {
  const data=useSignal("Yasin")
  useContextProvider(nameContext,data)

  return (
    <>
    <button onClick$={()=>{
      data.value=Math.random().toString(16)
    }}>Tıkla</button>
    <h1>Qwik !</h1>
    <ChildComponent />
    </>
  );
});

const ChildComponent=component$(()=>{
  const txt=useContext(nameContext)
  return(
    <div>Merhaba ben child component !!!! {txt.value}</div>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
