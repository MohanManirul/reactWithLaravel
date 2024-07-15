import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter , Routes , Route, Link  } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';


function MyApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />}/>
                <Route path='/service/domain' element={ <Service />}/>
            </Routes>
        </BrowserRouter>
    );
}

ReactDom.createRoot(document.getElementById('app')).render(<MyApp/>)
