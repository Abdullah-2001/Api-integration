import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import PhotosDetails from '../Pages/Photos-details';

const routerApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/details" element={<PhotosDetails />} />
                <Route path="/details/:id" element={<PhotosDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default routerApp;