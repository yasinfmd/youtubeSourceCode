import logo from './logo.svg';
import './App.css';
import CustomText from './components/CustomText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomText title='Ali' text='Hello' color='purple' boldTitle titleSize='40' />
      </header>
    </div>
  );
}

export default App;
