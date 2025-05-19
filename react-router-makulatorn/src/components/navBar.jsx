import x from "../assets/icons/x.svg"
import whitney from "../assets/whitney.svg"
import { Link, NavLink } from "react-router"
export default function NavBar() {

    return (
        <nav>
            <div className="nav-con">
                <img className="user-img" src={whitney} alt="whitney img" />
                <div className="nav-con-txt">
                    <h1>Whitney Leon</h1>
                    <address className="user-txt">+91 6787978287</address>
                </div>
                <Link className="nav-link" to="/MyScooter"><img src={x} alt="union" /></Link>
            </div>
            <ul>
                <li><NavLink className="active" to="/">Home</NavLink></li>
                <li><NavLink >Profile</NavLink></li>
                <li><NavLink >Travel History</NavLink></li>
                <li><NavLink >Scooter Settings</NavLink></li>
                <li><NavLink >Help</NavLink></li>
                <li><NavLink >Privacy Policy</NavLink></li>
                <li><NavLink >Terms & Conditions</NavLink></li>
            </ul>
        </nav>
    )
}