import { Link, NavLink } from "react-router"
export default function NavBar() {

    return (
        <nav>
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