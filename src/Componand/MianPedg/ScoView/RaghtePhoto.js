import { useState } from "react";
import { Link } from "react-router-dom";
function RaghtePhoto () {
    let [Togglerght, setTogglerght] = useState(false)

    let toggleOverlay = () => {
        Togglerght ? setTogglerght(false) : setTogglerght(true) 
    }
    return (
        <>
        <div className="BoxRaght">
            <Link to={"/SHOES"}><img 
            className={Togglerght?  "Pho2Righ active" : "Pho2Righ"} 
            src="https://static.bershka.net/4/static/images/home/2023/0120/D_slide_woman_calzado_-1.jpg?20230127081700" 
            alt="Pho2" 
            onMouseEnter={toggleOverlay} 
            onMouseLeave={toggleOverlay} /></Link>
        </div>
        </>
    )
}
export default RaghtePhoto;