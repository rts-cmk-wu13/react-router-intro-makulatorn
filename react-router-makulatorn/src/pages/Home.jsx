// Home.jsx
import { Link } from "react-router";
import Logo from "../assets/Rockit-logo.svg"
import HomeIcon from "../assets/home.svg"
import Chevron from "../assets/icons/chevrons-right.svg"

export default function Home() {
    return (
        <main>
            <section>
                <div className='home-con'>
                    <img className='home-img' src={Logo} alt="rockit logo" />
                    <h1>Rockit</h1>
                </div>

                <h2>Your scooter in one app</h2>

                <img src={HomeIcon} alt="home logo" />

                <h3>Everything you need to know about your scooter is available here in your app</h3>

                <nav className="home-link">
                    <Link to="/settings"><img src={Chevron} alt="chevron right" /></Link>
                </nav>
            </section>
        </main>
    );
}
