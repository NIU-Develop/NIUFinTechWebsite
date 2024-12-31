import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Navbar>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/leadership' element={<Leadership />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Navbar>
  )
}

export default App
