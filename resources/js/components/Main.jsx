import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter , Routes , Route, Link  } from 'react-router-dom';
import Login from './auth/Login';
import Dashboard from './Dashboard';
import User from './User';



function MyApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login />} />               
                <Route path='/dashboard' element={ <Dashboard />} />               
                <Route path='/user' element={ <User />} />               
            </Routes>
        </BrowserRouter>
    );
}

ReactDom.createRoot(document.getElementById('root')).render(<MyApp/>)
