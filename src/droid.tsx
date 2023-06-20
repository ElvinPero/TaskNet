import React from "react"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import App from './App'

function droid() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/x' element={<App />} />

        </Routes>

    )
}

export default droid;