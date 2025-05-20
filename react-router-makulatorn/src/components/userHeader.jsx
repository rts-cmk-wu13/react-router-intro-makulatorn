import whitney from "../assets/whitney.svg"
import { Link } from "react-router"

export default function UserHeader({user, info, icon, navigation}) {

    return (
        <nav>
            <div className="nav-con">
                <img className="user-img" src={whitney} alt="whitney img" />
                <div className="nav-con-txt">
                    <h1>{user}</h1>
                    <p className="user-txt">{info}</p>
                </div>
                <Link className="nav-link" to={navigation}><img src={icon} alt="union" /></Link>
            </div>
        </nav>
    )
}