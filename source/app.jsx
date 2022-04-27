import React from 'react';

import  './styles.scss';

import {
    Routes,
    Route
  } from "react-router-dom";

import Bucket from './Pages/Bucket';
import Home from './Pages/Home';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App = () => {
    return (
            <div className="white-page">
                <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/bucket' element={<Bucket />} />
                    </Routes>
                <Footer />
            </div>
    )
}


export default App;