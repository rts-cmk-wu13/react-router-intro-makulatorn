import { Link, NavLink } from "react-router";
import { useEffect } from "react";
import Union from "../assets/icons/Union.svg"
import whitney from "../assets/whitney.svg"
import '../style/myscooter.sass'
export default function MyScooter() {

    useEffect(() => {
        document.body.style.backgroundColor = "#FFFFFF",
        document.body.style.color ="black"
        return () => {
            document.body.style.backgroundColor = "",
            document.body.style.color = ""
            
        };
    }, []);
    
    return (
        <main className="myscooter">
            <nav>
                <div className="nav-con">
                    <img className="user-img" src={whitney} alt="whitney img" />
                    <div className="nav-con-txt">
                        <h1>Whitney Leon</h1>
                        <p className="user-txt">Welcome back!</p>
                    </div>
                    <Link className="nav-link" to="/Settings"><img src={Union} alt="union" /></Link>
                </div>
            </nav>

            <section>

            </section>
        </main>
    )
}