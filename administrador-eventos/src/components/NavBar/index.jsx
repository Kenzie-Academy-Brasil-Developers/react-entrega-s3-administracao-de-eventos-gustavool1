import { Link } from 'react-router-dom'
import './style.css'
const NavBar = () =>{
    return(

        
        <div className='nav-container'>
            <ul>
                <li>Dashboard</li>
                <li><Link to='casamento'>Casamento</Link></li>
                <li><Link to='confraternizacao'>Confraternizacao</Link></li>
                <li><Link to='formatura'>formatura</Link></li>
            </ul>
        </div>
    )
}
export default NavBar