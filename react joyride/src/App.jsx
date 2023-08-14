import React, { useState } from 'react';
import './App.css';
import Joyride from 'react-joyride'

function App() {
  const [start,setStart]=useState(false)
  const [steps]=useState(
    [
      {
        content:<h1>Hadi tur başlasın !!!</h1>,
        placement:'center',
        target:'body'
      },
      {
        target:'.step-1',
        content:'Burası birinci adımdır takip et'
      },
      {
        target:'.step-2',
        content:'Burası ikinci adımdır takip et'

      },
      {
        target:'.step-3',
        content:'Burası ücüncü adımdır takip et'

      }
    ]
    )

    const handleCallback=(data)=>{
      console.log('data',data)
      if(data.status==='finished'){
        setStart(false)
      }
    }
  return (
    <div className="App">
      Joyride !

      <button onClick={()=>setStart(!start)}>Turu başlat</button>


      <div className='step-1'>

        <h1>Burası step 1</h1>
        <h2>Buradan çıkıs var</h2>
      </div>

      <div className='step-2'>

    <h1>Burası step 2</h1>
    <h2>Buradan çıkıs var</h2>
    </div>

    
    <div className='step-3'>

<h1>Burası step3 </h1>
<h2>Buradan çıkıs var</h2>
</div>

    <Joyride
    locale={
      {
        back:'Geri',
        close:'Kapat',
        next:'İleri',
        last:'Son',
        open:'Aç',
        skip:'Atla'
      }
    }
      callback={handleCallback}
    steps={steps} run={start} showProgress showSkipButton continuous scrollToFirstStep />
    </div>
  );
}

export default App;
