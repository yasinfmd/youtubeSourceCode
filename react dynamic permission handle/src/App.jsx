import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MODULES, SCOPES } from './PermissionHelper'
import PermissionLayout, { checkPermission } from './PermissionLayout'
function App() {
  const [count, setCount] = useState(0)
  const [isCheckingPermission,setIsCheckingPermission]=useState(true)
  useEffect(()=>{
    const isHasPermission=checkPermission(MODULES.HOME,[SCOPES.canRead])
    if(isHasPermission){
      alert("Yetki var devam et")
      setIsCheckingPermission(false)
    }else{
      alert("Yetki yok kullanıcıyı dışarı at")
    }
  },[])

  return (
      <>
      {isCheckingPermission ===false ?    <div className="App">
      <div>
        <PermissionLayout module={MODULES.HOME} scopes={[SCOPES.canCreate,SCOPES.canDelete]}>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        </PermissionLayout>

        <PermissionLayout module={MODULES.HOME} scopes={[SCOPES.canUpdate]}>
  <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        </PermissionLayout>
      
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>:<h1>Yetkiler kontrol ediliyor bekleyiniz ....</h1>}
      </>
  )
}

export default App
