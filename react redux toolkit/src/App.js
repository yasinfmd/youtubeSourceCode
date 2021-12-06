import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, incremenet } from './counterSlice';
import { changeName } from './testSlice';
function App() {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(`state`, state)
  return (
    <div className="App">
      <header className="App-header">
        Redux Toolkit
        <button onClick={() => {
          dispatch(incremenet())
        }}>+</button>
        <button
          onClick={() => {
            dispatch(decrement())
          }}
        >-</button>
        <button
          onClick={() => {
            dispatch(changeName("Yeni İsim"))
          }}
        >Change Name</button>


        {state.counter.count}
        <h1>{state.test.name}</h1>
      </header>
    </div>
  );
}

export default App;
