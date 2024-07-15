import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter , Routes , Route, Link  } from 'react-router-dom';
import Login from './auth/Login';


function MyApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Login />} />               
            </Routes>
        </BrowserRouter>
    );
}

ReactDom.createRoot(document.getElementById('app')).render(<MyApp/>)
