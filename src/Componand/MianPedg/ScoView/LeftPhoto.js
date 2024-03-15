import { useState } from "react";
import { Link } from "react-router-dom";
function LeftPhoto () {
    let [ToggleOverLay, setToggleOverLay] = useState(false);

    let toggleOverLay = () => {
        ToggleOverLay ? setToggleOverLay(false) : setToggleOverLay(true);
    }
    return ( 
        <>
        <div className="BoxLeft">
        <Link to={"/CLOTHES"}><img 
        className={ToggleOverLay ? "PhoLeft active" : "PhoLeft"}  
        src="https://static.bershka.net/4/static/images/home/2023/0120/D_slide_woman_jeans_-1.jpg?20230127081700" 
        alt="Pho3"  
        onMouseEnter={toggleOverLay} 
        onMouseLeave={toggleOverLay} 
        /></Link>
        </div>
        </>
    )
}
export default LeftPhoto;