import ScoVideo from "../ScoView/ScoVideo" ; 
import LeftPhoto from "../ScoView/LeftPhoto";
import RaghtePhoto from "./RaghtePhoto";
import FulklScreenImg from "./FulklScreenImg";
function MinSco () {
    return (
        <>
        <ScoVideo />
        <div className="AllFlotPho">
        <LeftPhoto />
        <RaghtePhoto />
        </div>
        <FulklScreenImg />
        </>
    )
}
export default MinSco;