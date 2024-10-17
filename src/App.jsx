import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App1 from './App1';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Update from './Pages/update';
import Error from './Pages/Error';
function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App1/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/reg" element={<Register/>}></Route>
                <Route path="/update" element={<Update/>}></Route>
                <Route path="/*" element={<Error/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App
