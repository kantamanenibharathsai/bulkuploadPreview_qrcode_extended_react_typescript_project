import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BulkUpload from './pages/bulk_upload/BulkUpload';
import GenerateQrCode from "./pages/qr_code/QrCode";
import Counter from "../src/pages/life_cycle_methods/LifeCycleMethods"



function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/bulk-upload" element={<BulkUpload />} />
     <Route path="/qr-code" element={<GenerateQrCode/>} /> 
     {/* <Route path="/" element={<Counter/>}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
