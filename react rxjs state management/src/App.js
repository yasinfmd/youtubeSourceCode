import logo from './logo.svg';
import './App.css';
import {useCounter} from "./store/counter";
import  HelloWorld from  './HelloWorld'
function App() {
  const {addCount}=useCounter()
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={()=>{addCount(Math.random())}}>Tıkla</button>
          <HelloWorld />
      </header>
    </div>
  );
}

export default App;
