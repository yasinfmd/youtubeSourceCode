import { component$, useSignal , $,
useOnDocument,
useOnWindow,
useOn,
useStore
} from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

  //window nesnesi
  function useMove(){
    const position=useStore({x:0,y:0})
    useOnWindow('mousemove',$((e)=>{
      console.log('e',e)
      position.x=(e as MouseEvent).x
      position.y=(e as MouseEvent).y

    }))
    return position
  }

  // document nesnesi
  // useOnDocument('mousemove',$((e)=>{
  //   console.log('e',e)
  // }))

  //root comp mevcut comp
  // useOn('mousemove',$((e)=>{
  //   console.log('e',e)
  // }))

  const count=useSignal(0)
  const handleClick=$((e:any)=>{
    console.log('e',e)
    console.log('Merhabaaa !!!!')
  })
  const pos=useMove()
  return (
    <>
    {pos.x}
    ----------
    {pos.y}

    <a href='/kullanicilar'
    preventdefault:click
    >Kullanıcılara git !!!</a>
    <button onClick$={handleClick}>Tıkla bakalım !!!</button>
    <button onClick$={(e,c)=>{
      console.log(e)
      console.log(c)
      count.value++
    }}>Tıkla</button>
    {count}
    <h1>Qwik !</h1>
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
