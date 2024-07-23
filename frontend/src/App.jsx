import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/authContext'

function App() {
  const {currentAuthUser}=useAuthContext();
  return (
    <>
      <div className="h-screen flex items-center">
        <Routes>
          <Route path="/" element={currentAuthUser?<Home />:<Navigate to="/login" />} />
          <Route path="/login" element={currentAuthUser?<Navigate to="/" />:<Login />} />
          <Route path="/signup" element={currentAuthUser?<Navigate to="/" />:<Signup />} />
        </Routes>
        <Toaster/>
      </div>
    </>
  )
}

export default App
