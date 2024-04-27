import './App.css'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Footer from './components/Footer'
import Features from './page/Features'
import './index.css'
import Login from './page/Login'
import Register from './page/Register'
import {Route , Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Features" element={<Features/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
