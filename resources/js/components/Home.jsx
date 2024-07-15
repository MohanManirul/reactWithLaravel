
import { Link  } from 'react-router-dom';

function Home(){
    return (
        <>
            
            <Link  to='/about' >About</Link>
            <Link  to='/service/domain' >Service</Link>
            <div> Home Page</div>
        </>
        
    )
}
export default Home ;