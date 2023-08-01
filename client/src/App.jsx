import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom/dist/index.js'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import Protected from './components/Protected.jsx'



function App() {


  return (
    <>
    <AuthContextProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Protected> <Dashboard/> </Protected>}/>
      </Routes>    
      </AuthContextProvider> 
    </>
  )
}

export default App
