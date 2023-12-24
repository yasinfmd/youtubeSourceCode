// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Products } from '@mymonorepoapp/products';
import HelloWorld from './hello-world/hello-world';
import { Route, Routes } from 'react-router-dom';


export function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<HelloWorld />}></Route>
      <Route path="/products" element={<Products />}></Route>
    </Routes>
    </div>
  );
}

export default App;
