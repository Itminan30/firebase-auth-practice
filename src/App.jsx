import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Reset from './Pages/Reset'

function App() {

    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={<Home />} />
                <Route path='/reset' element={<Reset />} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}

export default App
