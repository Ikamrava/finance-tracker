import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom/dist/index.js'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import Protected from './components/Protected.jsx'
import { GlobalProvider } from './context/globalContext.jsx'



function App() {


  return (
    <div className=' max-w-6xl mx-auto'>
    <AuthContextProvider>
   
      
        <Navbar/>
        <Routes>
        
          <Route path="/" element={<Protected><Home/></Protected>}/> 
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Protected> <Dashboard/> </Protected>}/>
        </Routes>    
      
      
      </AuthContextProvider> 
      
    </div>
  )
}

export default App
