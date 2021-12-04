import './App.css';
import Hello from './Hello';
import ErrorHandler from './ErrorHandler';
import useErrorBoundary from "use-error-boundary"
const JustRenderMe = () => {
  throw new Error("💥")
}
function App() {
  // const { ErrorBoundary, didCatch, error } = useErrorBoundary()


  return (
    <div className="App">
      <header className="App-header">
        {/* {didCatch ? (
          <p>An error has been caught: {error.message}</p>
        ) : (
          <ErrorBoundary>
            <JustRenderMe />
          </ErrorBoundary>
        )} */}
        <ErrorHandler>
          <Hello text="yasin" />
        </ErrorHandler>
      </header>
    </div>
  );
}

export default App;
