import '../style/settings.sass'
import scooter from '../assets/scooter.svg'
import NavBar from "../components/navBar";
import UserHeader from '../components/userHeader';
import x from "../assets/icons/x.svg"


export default function Settings() {

    return (
        <main>
            <UserHeader 
            user="Whitney Leon"
            info="+91 6787978287"
            icon={x}
            navigation={"/MyScooter"}/>
            <NavBar />
            <img className="scooter-img" src={scooter} alt="scooter" />
        </main>
    )
}