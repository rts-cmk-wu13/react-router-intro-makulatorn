import { Link, NavLink } from "react-router";
import Union from "../assets/icons/Union.svg"
import { useEffect } from "react";
import Lock from "../assets/icons/lock.svg"
import UserHeader from "../components/userHeader";
import InfoBox from "../components/infoBox";
import '../style/myscooter.sass'
export default function MyScooter() {

    useEffect(() => {
        document.body.style.backgroundColor = "#FFFFFF",
            document.body.style.color = "black"
        return () => {
            document.body.style.backgroundColor = "",
                document.body.style.color = ""

        };
    }, []);


    return (
        <main className="myscooter">
            <UserHeader
                user="Whitney Leon"
                info="Welcome back!"
                icon={Union}
                navigation={"/Settings"} />

            <section>

            </section>

            <section>
                <article className="achievement">
                    <div className="achievement-txt">
                        <h3>Whitney's Scooter</h3>
                        <p>Locked</p>
                    </div>
                    <img className="achievement-img" src={Lock} alt="lock icon" />
                </article>

                <div className="infobox-con">
                    <InfoBox />
                </div>
                
            </section>
        </main>
    )
}