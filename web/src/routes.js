import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Logon from './pages/Login';
import Register from './pages/Register';

export default function RoutesConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Logon />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}
