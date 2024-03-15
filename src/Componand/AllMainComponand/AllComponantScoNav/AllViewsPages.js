import ScoNavViewsPages from "./ScoNavViewsPages";
import Cart from "./Cart";
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose, faHashtag, faAddressBook, faUsers, faBorderNone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../MianPedg/Footer/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Pagination, Navigation])
function AllViewsPages() {
    useEffect(() => window.scrollTo(0, 0), []);

    // Start Cart Pedge
// Start Verble 
let [cartVisi, setcartVis] = useState(false)

let [proInCart, setproInCart] = useState(JSON.parse(
    localStorage.getItem("Shopping-cart")
    ) || [])
    
    useEffect(() => {
        localStorage.setItem("Shopping-cart", JSON.stringify(proInCart))
    }, [proInCart])
    // End   Verble 

// Start Add FUN
let addProToCart = (Pro) => {
    let newpro = {
        ...Pro,
        count: 1,
    } 
    setproInCart([...proInCart, newpro])
    console.log(newpro)
}
// End Add FUN

// Start onQuantaty FUN
let onQuantaty = (proId, count) => {
    setproInCart((oldState) => {
        let proIndex = oldState.findIndex((item) => 
            item.id === proId
        );
        if (proIndex !== -1) {
            oldState[proIndex].count = count;
        }
        return [...oldState]
    })
};
// End onQuantaty FUN

// Start Remove FUN
let onRemove = ((proo) => {
    setproInCart((oldState) => {
        let proIndex = oldState.findIndex((item) => 
            item.id === proo.id
            )
        if (proIndex !== -1) {
            oldState.splice(proIndex, 1);
        }
        console.log(oldState)
        return [...oldState]
    })
})
// End Remove FUN

// End Cart Pedge
let [ProReco, setProReco] = useState([])

let getAllProReco = () => {
    fetch('https://bes0610.github.io/API1.json/Bershka-API.json')
    .then((res) => res.json())
    .then((res) =>{
        // console.log(res)
        setProReco(res) 
    });
};
useEffect(() =>{
    getAllProReco()
}, [])
//////

    let [productDeti, setproductDeti] = useState({})
    let params = useParams();
    let api1 = 'https://bes0610.github.io/AllProduct';
    let api2 = 'Product.json';
    // https://bes0610.github.io/AllProduct-1/Product.json

    useEffect(() => {
        fetch(`${api1}-${params.ProductId}/${api2}`)
        .then((res) => res.json())
        .then((productDeti) => setproductDeti(productDeti))
        console.log(productDeti)
    }, [])

// End Fetch Proo

//  start Toggle Size Col1
    let [toggleCol, settoggleCol] = useState(false);

    let toggleSizeColFun = () => {
        toggleCol? settoggleCol(false) : settoggleCol(true); 
    };

//  start Toggle Size Col1
//  start Toggle Size Col2
    let [toggleCol2, settoggleCol2] = useState(false);

    let toggleSizeColFun2 = () => {
        toggleCol2? settoggleCol2(false) : settoggleCol2(true); 
    };


//  start Toggle Size Col2
    return (
        <>
        <ScoNavViewsPages />
                
    <div className="ViewProduc">
            <Cart 
            visabilty={cartVisi}
            products={proInCart}
            onclose={() => {
                setcartVis(false)}
            }
            onQuantityChange={
                onQuantaty
            }
            onproductRemove={
                onRemove
            }
    />

            <div className="Head">
            </div>
        <div className="Content">
                <img  className="ImgDetil" src={productDeti.image} alt="aq"/>
            <div className="AllDetils"> 
                <div className="NameDetil">{productDeti.title} </div>
                <div
                style={{
                color: "#737171",
                fontSize: "12px",
                marginBottom: "15px"
                }}
                >Ref 0125/168/800</div>
                <div className="PriceViewsDetil">EGB {productDeti.price}</div>
                <div
                style={{
                    fontWeight: "500",
                    fontSize: "16px"
                }}
                >Select size</div>
                <div 
                style={{
                    margin: "38px"
                }}
                >
                <ul className="UlCardPro" >
                    <span className="SplitSizes">
                                <li className="LiCardViews NotAvli" >32</li>
                                <li className={toggleCol? "LiCardViews Avli BACKGROBlack" : "LiCardViews Avli"} onClick={toggleSizeColFun}>34</li>
                                <li className={toggleCol2? "LiCardViews Avli BACKGROBlack" : "LiCardViews Avli"} onClick={toggleSizeColFun2}>36</li>
                                </span>
                    <span className="SplitSizes">
                                <li className="LiCardViews NotAvli">38</li>
                                <li className="LiCardViews NotAvli">40</li>
                                <li className="LiCardViews NotAvli">42</li>
                                </span>
                            </ul>
                </div>
                <div className="AddCartBtneDetil" onClick={() => {
                addProToCart(productDeti)
                setcartVis(true)
                }}>ADD To BASKET</div>
            </div>
        </div>
    </div>
    <div className="SocContanier">
        <img className="ImgScoConta" src="https://static.bershka.net/4/photos2/2023/V/0/1/p/7284/512/712/bec65fde098e63c0c3227fd13d0da283-7284512712_2_3_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome" alt="ll" />
        <img className="ImgScoConta DisplayNonDetilsMop " src="https://static.bershka.net/4/photos2/2023/V/0/1/p/7284/512/712/3e5f4bb61a5c8e6ab3200539c418b987-7284512712_2_1_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome" alt="ll" />
        <img className="ImgScoConta" src="https://static.bershka.net/4/photos2/2023/V/0/1/p/7284/512/712/d8caa0ce60b67f39d9c831a38b11e264-7284512712_2_5_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome" alt="ll" />
    </div>
    <div className="ThirdContanier">
        <div className="DetilThirdCont">
        <h2 >Description</h2>
        <div className="DIVSTHIRD">Model size: S</div>
        <div className="DIVSTHIRD">Model height: 170 cm</div>
        <div className="DIVSTHIRD">Colour: Cream</div>
        <h2>Composition</h2>
        <div className="DIVSTHIRD"><b>Outer</b></div>
        <div className="DIVSTHIRD">43% acrylic</div>
        <div className="DIVSTHIRD">29% polyester</div>
        <div className="DIVSTHIRD">28% polyamide</div>
        <h2>Care</h2>
        <div className="ThirdIcons">
            <FontAwesomeIcon className="IconThird" icon={faWindowClose} />
            <FontAwesomeIcon className="IconThird" icon={faHashtag} />
            <FontAwesomeIcon className="IconThird"  icon={faAddressBook} />
            <FontAwesomeIcon className="IconThird" icon={faUsers} />
            <FontAwesomeIcon className="IconThird" icon={faBorderNone} />
        </div>
        </div>
        <div className="ThirdImges">
            <img className="ImgeThird1" src="https://static.bershka.net/4/photos2/2023/V/0/1/p/7284/512/712/fc19d3dcbbe0a5aa84836c2cf12327fd-7284512712_2_4_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome" alt="oo" />
            <img className="ImgeThird2" src="https://static.bershka.net/4/photos2/2023/V/0/1/p/7284/512/712/d8caa0ce60b67f39d9c831a38b11e264-7284512712_2_5_0.jpg?imwidth=850&impolicy=bershka-itxmedium&imformat=chrome" alt="oo" />
        </div>
    </div>
    <div className="SwiperContanier"
    style={{
        marginBottom: "65px"
    }}>
    <h1 
    style={{
        textAlign: "center"
    }}
    >Recommended for you</h1>
    <div className="SwiperCon" 
    style={{
        position: "relative",
        left: "-60px",
        width: "100%",
    }}
    >
            <Swiper
                spaceBetween={50}
                slidesPerView={6}
                navigation
                >
            <div className="AllCard">
            {ProReco.map((ProReco) =>{
        return (
                <SwiperSlide className="Card" key={ProReco.id}>
                <div className="DetiCard">
                    <img className="ImgCard" src={ProReco.image} alt="a" />
                    <p className="P1Crd"> {ProReco.title.slice(0,25)}</p>
                    <p className="P2Card"> {ProReco.price} </p>
                </div>
                </SwiperSlide>

        )
    })}

            </div>
            </Swiper>
        </div>
    </div>
    <Footer />
        </>
    )
}
export default AllViewsPages;