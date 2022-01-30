import "./header.styles.scss";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/084 crown.svg';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
        <Logo className='logo'/>
    </Link>
    <div className="options">
        <Link className="option" to='/shop'>SHOP</Link>
        <Link className="option" to='/contact'>CONTACT</Link>
    </div>
  </div>
);

export default Header;