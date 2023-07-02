import React from 'react';
import Hello from './Hello';
import Counter from './Counter';
function App() {
  return (
    <div>
      <h1>Selam SSR!</h1>
      <p>Merhaba Dünya</p>
      <Hello />

      <img src='/logo192.png' />

      <Counter />
    </div>
  );
}

export default App;
