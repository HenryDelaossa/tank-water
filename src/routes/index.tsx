
import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Capacity from '../pages/capacity'
import Home from '../pages/home'

const Router:FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route path='/capacity/edit/:id' element={<Capacity />} />
                <Route path='*' element={<>404</>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router