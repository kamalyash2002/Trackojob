import './App.css'
import Navbar from './components/Navbar'
import Home from './page/Home'
import Footer from './components/Footer'
import './index.css'
import Login from './page/Login'
import {Route , Routes} from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
