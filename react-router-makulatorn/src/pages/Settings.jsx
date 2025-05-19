import '../style/settings.sass'
import scooter from '../assets/scooter.svg'
import NavBar from "../components/navBar";

export default function Settings() {

    return (
        <main>
            <NavBar />
            <img className="scooter-img" src={scooter} alt="scooter" />
        </main>
    )
}