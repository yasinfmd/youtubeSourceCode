import './App.css';

import { Link, Outlet, useParams, Navigate, useSearchParams, useNavigate, generatePath } from "react-router-dom"
const Home = () => {
  return (
    <div>
      Home Component
      <Link to="/"> Main</Link>
    </div>
  )
}
const User = () => {
  return (
    <div>
      User Component
      <Link to="/"> Main</Link>
      <Link to="/user/detail/5?ad=Yasin&soyad=Dalkılıç&ad=ayse"> User Detail</Link>
      <Outlet />

    </div>
  )
}

const UserDetail = () => {
  const { userId } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const test = generatePath("/test/abc/:id", { id: 1 })
  console.log("test", test)
  return (
    <div>
      UserDetail Component {userId}
      {searchParams.get("ad")}
      {searchParams.get("soyad")}
      <button onClick={() => {
        navigate("/")
      }}>Tıkla Ve Git</button>
      {JSON.stringify(searchParams.getAll("ad"))}
      {Number(userId) > 10 && <Navigate to="/user/detail" />}

    </div>
  )
}
export { Home, User, UserDetail }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        REACT ROUTER 6
        <Link to="/home" >
          Home
        </Link>
        <Link to="/user" >
          User

        </Link>

      </header>
    </div>
  );
}

export default App;
