import Map from "../assets/icons/map.svg"
import Battery from "../assets/icons/battery-charging.svg"
import Zap from "../assets/icons/zap.svg"
import Upload from "../assets/icons/upload.svg"



export default function InfoBox({data}){
 const array1 = [
        { total: "Total distance", icon: Map, data:"17.8 KM" },
        { total: "Total battery", icon: Battery, data:"100%" },
        { total: "Averag Speed", icon: Zap, data:"45 Km/h" },
        { total: "Ride Updated", icon: Upload, data:"1 day ago" },
    ];

    return(
        array1.map((item, index) => 
        <div className="infobox" key={index}>
            <p className="infobox-title">{item.total}</p>
            <img className="infobox-img" src={item.icon} alt="" />
            <p className="infobox-data">{item.data}</p>

        </div>)
    )
}