import {  Link  } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return(
        <>
            <Header />
            <Sidebar />
            { children }
        </>
    );
}
export default Layout ;