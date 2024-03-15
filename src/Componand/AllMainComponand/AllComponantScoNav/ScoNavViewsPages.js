import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars} from '@fortawesome/free-solid-svg-icons'
function ScoNavViewsPages() {
let [AsideBox, setAsideBox] = useState(false)

let toggleAside = () => {
    AsideBox ? setAsideBox(false) : setAsideBox(true)
}
return (
        <>
        <div className="ScoNavViewsScroll">
            <button className="IcoSroll display"onClick={toggleAside}><FontAwesomeIcon   icon={faBars}  /></button>
        </div>
        <div className= "AsideLeft"> 
                <div className={AsideBox? "Nav" : "Nav DisplayNon"}>
                    <div className="BoxFlotLeft">
            <button className="IcoSrollMopile"onClick={toggleAside}><FontAwesomeIcon   icon={faBars}  /></button>
                    <Link to={"/"}><div className="Logo Text-Dec">Bershka</div></Link>
                    {/* <div className="TexWO ActiveClass">Women</div>
                    <div className="TexMe" >Men</div> */}
                    </div>
                </div>
            <div className={AsideBox ? "ToggleDetilActive" : "ToggleDetil"}  onMouseLeave={toggleAside} >
            <div className="AllDet">
                    <div className="FirCollAside">
                        <Link to="/New" className="DetalisAside">NEW</Link>
                        <Link to="/Sale"><div  className={AsideBox ? "DetilAvtive" : "DetalisAside" } >SALE</div></Link>
                    </div>
                    <div className="ScoCollAside">
                        <Link to="/CLOTHES" className="DetalisAside">CLOTHES</Link>
                        <Link to="/SHOES"  className="DetalisAside">SHOES</Link>
                        <Link to="/ACCESSORIES"  className="DetalisAside">ACCESSORIES</Link>
                    </div>
                    <div className="TherCollAside">
                        <Link to="/BAGS"  className="DetalisAside">BAGS</Link>
                        <Link to="/BASICS"  className="DetalisAside">BASICS</Link>
                    </div>
                    <div className="ForthCollAside">
                        <Link to="/Creators"  className="DetalisAside">Bershka Creators</Link>
                    </div>
                </div>
                <div className={AsideBox? "LinksAside" : "LinksAside DisplayNon"} >
                    <ul className="UlAsideBox">
                        <li className="LiAsideBox"><Link to="/popular"  className="DetilTohhleBox">Most popular</Link></li>
                        <li className="LiAsideBox"><Link to="/Jumpsuits"  className="DetilTohhleBox">Dresses and Jumpsuits</Link></li>
                        <div  className="LineToggle"></div>
                        <li className="LiAsideBox"><Link to="/Trousers"  className="DetilTohhleBox">Trousers and jeans</Link></li>
                        <li className="LiAsideBox"><Link to="Jackets"  className="DetilTohhleBox">Jackets and Coats</Link></li>
                        <li className="LiAsideBox"><Link to="/Sweatshirts"  className="DetilTohhleBox">Sweatshirts and Jumpers</Link></li>
                        <li className="LiAsideBox"><Link to="/T-shirts"  className="DetilTohhleBox">T-shirts and Tops</Link></li>
                        <li className="LiAsideBox"><Link to="/Shirts"  className="DetilTohhleBox">Shirts and Blouses</Link></li>
                        <li className="LiAsideBox"><Link to="/Skirts"  className="DetilTohhleBox">Skirts and Shorts</Link></li>
                        <li className="LiAsideBox"><Link to="/Shoes"  className="DetilTohhleBox">Shoes</Link></li>
                        <li className="LiAsideBox"><Link to="/Accessories"  className="DetilTohhleBox">Accessories</Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}
export default ScoNavViewsPages