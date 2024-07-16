import {  Link  } from 'react-router-dom';

function Sidebar(){
    return (      
        <div>
               <Link to="/dashboard">Admin Dashboard</Link><br/>    
               <Link to="/user">User Dashboard</Link>    
        </div>
    );
}

export default Sidebar ;