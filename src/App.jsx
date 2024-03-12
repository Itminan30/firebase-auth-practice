import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Reset from './Pages/Reset'
import PrivateRoutes from './routes/PrivateRoutes'

function App() {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path='/home' element={<Home />} />
                        <Route path='/' element={<Home />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/reset' element={<Reset />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
