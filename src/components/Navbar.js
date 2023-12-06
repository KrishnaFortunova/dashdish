import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import cart_icon from '../img/cart_icon.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo" >
                <img src={logo} alt="" />
                <p>DASHDISH</p>
            </div>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;