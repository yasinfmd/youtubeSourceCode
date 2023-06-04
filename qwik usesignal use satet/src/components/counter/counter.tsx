import { component$, useSignal, useStore } from '@builder.io/qwik';

export const Counter= component$(() => {
    const count=useSignal(50)
    const user=useSignal({name:'Yasin'})

    const product=useStore({name:'Ürün 1'},{
        reactive:true,
        deep:true
    })


    return (
        <>
        <button onClick$={()=>{
            count.value++
        }}>Tıkla</button>
        {count.value}
        {user.value.name}
        <button onClick$={()=>{
            user.value={name:'YENI ISIM'}
        }}>İsim değiştir</button>
        {product.name}
        <button onClick$={()=>{
           product.name="Yeni bir ürün"
        }}>Ürün adı değiştir</button>
        </>
    );
  });