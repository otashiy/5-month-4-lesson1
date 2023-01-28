import { Link } from "react-router-dom";
import Login from "../Login/Login";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <ul className="navbar-list">
            <li className="navbar-item">
                <Link to="/contact">Contact</Link>
            </li>
            <li className="navbar-item">
                <Link to="/ozod-me">OzodMe</Link>
            </li>
            <li className="navbar-item">
                <Link to="/add-person">+ Add person</Link>
            </li>
            </ul>
            <Login />
        </div>
    )
}

export default Navbar;