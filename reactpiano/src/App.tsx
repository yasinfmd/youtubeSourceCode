import React, {useState} from 'react';
import './App.css';

//@ts-ignore
import Do from './sounds/Do.mp3'
//@ts-ignore
import Re from './sounds/Re.mp3'
//@ts-ignore
import Mi from './sounds/Mi.mp3'
//@ts-ignore
import Fa from './sounds/Fa.mp3'
//@ts-ignore
import Sol from './sounds/Sol.mp3'
//@ts-ignore
import La from './sounds/La.mp3'
//@ts-ignore
import Si from './sounds/Si.mp3'

interface Nota{
    text:string,
    sound:any
}

function App() {
    let audio=new Audio();
    const [nota,setNota]=useState<Array<Nota>>([
        {
            text:'Do',
            sound:Do
        },
        {
            text:'Re',
            sound:Re
        },
        {
            text:'Mi',
            sound:Mi
        },
        {
            text:'Fa',
            sound:Fa
        },
        {
            text:'Sol',
            sound:Sol
        },
        {
            text:'La',
            sound:La
        },
        {
            text:'Si',
            sound:Si
        },
    ])

    const playSound= async (sound:any)=>{
        audio.src=sound;
        await  audio.play()
    }
  return (
    <div className="App">
      <header className="App-header">
          <div className='pianoWrapper'>
                <ul className='piano'>
                    {
                        nota.map((item)=>{
                            return(
                                <li className='key' key={item.text} onClick={()=>{playSound(item.sound)}}>
                                    <span className='white-key'>
                                        <em className='text'>{item.text}</em>
                                    </span>
                                </li>
                            )
                        })
                    }

                </ul>
          </div>
      </header>
    </div>
  );
}

export default App;
