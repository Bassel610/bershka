import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { useState } from "react"

function ScoNavPages(props) {

    
    let [navbar,setnavbar] = useState(false)
    let changescrol = () =>{
        if(window.scrollY >= 80){
            setnavbar(true)
        }else(
            setnavbar(false)
        )
    }
    window.addEventListener("scroll", changescrol)
/////
let [AsideBox, setAsideBox] = useState(false)

let toggleAside = () => {
    AsideBox ? setAsideBox(false) : setAsideBox(true)
}
////
let [state, setState] = useState(
[    
    {
    "id": 1,
    "Num": "All",
    "Num2": "Fir"
},
{
    "id": 2,
    "Num": "Trousers and jeans",
    "Num2": "sco"
},
{
    "id": 3,
    "Num": "cargo and parachute",
    "Num2": "thir"
},
{
    "id": 4,
    "Num": "jackets and blazers",
    "Num2": "fif"
    },
    {
        "id": 5,
    "Num": "Sweatshirts and knitwear"
    },
    {
    "id": 6,
    "Num": "Dreses"
    },
    {
    "id": 7,
    "Num": "T-shirt and tops"
    },
    {
    "id": 8,
    "Num": "shoes"
    },
    {
    "id": 9,
    "Num": "Accessories"
    },
]
)
/////
let [toggle, settoggle] = useState(null);

let toggleFun = (index) => {
    settoggle((prev) => {
        return prev === index ? null : index
    })
    console.log("clicked2", index)
}
let [toggleActNav, settoggleActNav] = useState(null);

    let toggleActNavFun = (index) => {

        settoggleActNav((prev) => {
            return prev === index ? null : index
        });
        console.log("clicked", index)
    };
return (
        <>
        <div className= "AsideLeft"> 
                <div className={AsideBox? "Nav" : "Nav DisplayNon"}>
                    <div className="BoxFlotLeft">
                    <Link to={"/"}><div className="Logo Text-Dec"><FontAwesomeIcon icon={faBars} />Bershka</div></Link>
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
export default ScoNavPages;