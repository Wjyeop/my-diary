import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Nav from './components/Nav';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {

  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="App">
      {isAuthReady ? (
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/' element={user ? <Home/> : <Navigate replace={true}
            to="/login" />}></Route>  {/* replace 속성의 값이 false 라면, 브라우저에서 뒤로 가기를  했을 때 리다이렉트 되기 이전의 url로 이동하는것이 가능하지만 true 라면 불가능합니다. */}
            <Route path='/login' element={!user ? <Login/> : <Navigate replace={true}
            to="/" />}></Route>
            <Route path='/signup' element={!user ? <Signup/> : <Navigate replace={true}
            to="/" />}></Route>
          </Routes>
        </BrowserRouter>
      ) : "loading..."}
    </div>
  );
}

export default App
