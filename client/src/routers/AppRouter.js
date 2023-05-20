import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/SigningComponents/Home';
import Header from '../components/Header';
import VendorProposals from '../components/vendor/VendorProposals';
import AllProposals from '../components/user/AllProposals';
import Createproposal from '../components/vendor/Createproposal';

function AppRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path="*" element={<h1>404 PAGE NOT FOUND!</h1>} />
      <Route path='/' element={<Home />} />
      <Route path='/vendor' element={<Header />}>
        <Route path='proposals' element={<VendorProposals/>}/>
      </Route>
      <Route path='/user' element={<Header />}>
        <Route path='proposals' element={<AllProposals/>}/>
      </Route>
      <Route path='/create' element={<Createproposal/>} />
      
    </Routes>
  </BrowserRouter>
}

export default AppRouter