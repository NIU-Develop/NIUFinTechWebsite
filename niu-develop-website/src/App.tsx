import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Leadership from './pages/Leadership'
import Contact from './pages/Contact'
import Login from './pages/Login'


function App() {
  return (
    <Header>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/leadership' element={<Leadership />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Header>
  )
}

export default App
