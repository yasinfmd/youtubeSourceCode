import React from 'react';
import './App.css';
import Modal from './Modal'
function App() {
  const myRef:any = React.useRef();
  const [show,setShow]=React.useState<Boolean>(false)
  return (
    <div className="App">
    
        <button onClick={() => {
          setShow(!show)
      }}>Göster / Gizle</button>
      <div ref={myRef}>
          Merhaba
      </div>
     
      {myRef && myRef?.current &&  <Modal elementRef={myRef} show={show} />}
    </div>
  );
}

export default App;
