
import { Link  } from 'react-router-dom';

function About(){
    return (
        <>
            <Link  to='/' >Home</Link>
            <Link  to='/service/domain' >Service</Link>
            <Link  to='/login' >Login</Link>
            <div> About Page</div>
        </>
        
    )
}
export default About ;