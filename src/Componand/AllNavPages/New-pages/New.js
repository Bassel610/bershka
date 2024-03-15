import { useState, useEffect } from "react";
import New1 from "../../../Images/New1.webp" ;
import New2 from "../../../Images/New2.webp" ;

function New () {
// Start TggoleSizes
let [toggleSize1, settoggleSize1] = useState(false);

let toggleSizeFun1 = () =>{
    toggleSize1 ? settoggleSize1(false)  : settoggleSize1(true)
}

let [toggleSize2, settoggleSize2] = useState(false);

let toggleSizeFun2 = () =>{
    toggleSize2 ? settoggleSize2(false)  : settoggleSize2(true)
}

let [toggleSize3, settoggleSize3] = useState(false);

let toggleSizeFun3 = () =>{
    toggleSize3 ? settoggleSize3(false)  : settoggleSize3(true)
}

let [toggleSize4, settoggleSize4] = useState(false);

let toggleSizeFun4 = () =>{
    toggleSize4 ? settoggleSize4(false)  : settoggleSize4(true)
}

// End TggoleSizes

// SARAT TOGGLE COLORE
let [toggleCol1, settoggleCol1] = useState(false)

let toggleColFun1 = () =>{
    toggleCol1 ? settoggleCol1(false) : settoggleCol1(true)
}

let [toggleCol2, settoggleCol2] = useState(false)

let toggleColFun2 = () =>{
    toggleCol2 ? settoggleCol2(false) : settoggleCol2(true)
}

let [toggleCol3, settoggleCol3] = useState(false)

let toggleColFun3 = () =>{
    toggleCol3 ? settoggleCol3(false) : settoggleCol3(true)
}

let [toggleCol4, settoggleCol4] = useState(false)

let toggleColFun4 = () =>{
    toggleCol4 ? settoggleCol4(false) : settoggleCol4(true)
}
// END TOGGLE COLORE
// Start Fetch Pro
let [Products, setProducts] = useState([])
let getAllProReco = () => {
    fetch('http://localhost:9000/posts')
    .then((res) => res.json())
    .then((res) =>{
        console.log(res)
        setProducts(res)
    });
};
useEffect(() =>{
    getAllProReco()
}, [])
// End Fetch Pro
return (
        <>
            <div className="ImgesNew">
                <img className="ImgNew1" src={New1}  alt="New1"/>
                <img className="ImgNew2" src={New2} alt="New2" />
                <img className="ImgNew3" src={New2} alt="New3" />
            </div>
            
            <div className="ProNew" >
                {Products.map((Products) => {
                    return (
                        <>
                        <div className="ScobOX" key={Products.id}>
                    <div className="CardProNew"  onMouseEnter={toggleSizeFun1} onMouseLeave={toggleSizeFun1}>
                        <img className="ImgProNew1" src={Products.image} alt="1" />
                        <div className={toggleSize1 ? "SixesProNews Vaspilty" : "SixesProNews"} >
                            <p>Select Size</p>
                            <ul className="UlCardPro">
                                <li className="LiCardPro">32</li>
                                <li className="LiCardPro">33</li>
                                <li className="LiCardPro">34</li>
                                <li className="LiCardPro">35</li>
                                <li className="LiCardPro">36</li>
                                <li className="LiCardPro">40</li>
                                <li className="LiCardPro">45</li>
                            </ul>
                        </div>
                        <div className="TextCardPro">
                            <p className="TextDeti1">SEEN ON TIKTOK</p>
                            <p className="TextDeti2">{Products.title.slice(0, 15)}...</p>
                            <p className="TextDeti1">{Products.price}</p>
                            <p className={toggleSize1 ?"TextDeti2 DisplayNon" : "TextDeti2" } >+4 color</p>
                            <div className={toggleSize1 ? "colosrCard Vaspilty" : "colosrCard"} >
                                <div className={toggleCol1?  "ColorCARDRed activColor": "ColorCARDRed"} onClick={toggleColFun1}></div>
                                <div className={toggleCol2?  "ColorCARDBlue activColor": "ColorCARDBlue"} onClick={toggleColFun2} ></div>
                                <div className={toggleCol3?  "ColorCARDBlack activColor": "ColorCARDBlack"} onClick={toggleColFun3} ></div>
                                <div className={toggleCol4?  "ColorCARDBabyBlue activColor": "ColorCARDBabyBlue"} onClick={toggleColFun4} ></div>
                            </div>
                        </div>
                    </div>
                    <div className="CardProNew"  onMouseEnter={toggleSizeFun2} onMouseLeave={toggleSizeFun2}>
                        <img className="ImgProNew2" src={Products.image} alt="1" />
                        <div className={toggleSize2 ? "SixesProNews Vaspilty" : "SixesProNews"} >
                            <p>Select Size</p>
                            <ul className="UlCardPro">
                                <li className="LiCardPro">32</li>
                                <li className="LiCardPro">33</li>
                                <li className="LiCardPro">34</li>
                                <li className="LiCardPro">35</li>
                                <li className="LiCardPro">36</li>
                                <li className="LiCardPro">40</li>
                                <li className="LiCardPro">45</li>
                            </ul>
                        </div>
                        <div className="TextCardPro">
                            <p className="TextDeti1">SEEN ON TIKTOK</p>
                            <p className="TextDeti2">{Products.title.slice(0, 15)}...</p>
                            <p className="TextDeti1">{Products.price}</p>
                            <p className={toggleSize2 ?"TextDeti2 DisplayNon" : "TextDeti2" } >+4 color</p>
                            <div className={toggleSize2 ? "colosrCard Vaspilty" : "colosrCard"} >
                                <div className={toggleCol1?  "ColorCARDRed activColor": "ColorCARDRed"} onClick={toggleColFun1}></div>
                                <div className={toggleCol2?  "ColorCARDBlue activColor": "ColorCARDBlue"} onClick={toggleColFun2} ></div>
                                <div className={toggleCol3?  "ColorCARDBlack activColor": "ColorCARDBlack"} onClick={toggleColFun3} ></div>
                                <div className={toggleCol4?  "ColorCARDBabyBlue activColor": "ColorCARDBabyBlue"} onClick={toggleColFun4} ></div>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className="ScobOX" key={Products.id}>
                    <div className="CardProNew"  onMouseEnter={toggleSizeFun3} onMouseLeave={toggleSizeFun3}>
                        <img className="ImgProNew2" src={Products.image} alt="1" />
                        <div className={toggleSize3 ? "SixesProNews Vaspilty" : "SixesProNews"} >
                            <p>Select Size</p>
                            <ul className="UlCardPro">
                                <li className="LiCardPro">32</li>
                                <li className="LiCardPro">33</li>
                                <li className="LiCardPro">34</li>
                                <li className="LiCardPro">35</li>
                                <li className="LiCardPro">36</li>
                                <li className="LiCardPro">40</li>
                                <li className="LiCardPro">45</li>
                            </ul>
                        </div>
                        <div className="TextCardPro">
                            <p className="TextDeti1">SEEN ON TIKTOK</p>
                            <p className="TextDeti2">{Products.title.slice(0, 15)}...</p>
                            <p className="TextDeti1">{Products.price}</p>
                            <p className={toggleSize3 ?"TextDeti2 DisplayNon" : "TextDeti2" } >+4 color</p>
                            <div className={toggleSize3 ? "colosrCard Vaspilty" : "colosrCard"} >
                                <div className={toggleCol1?  "ColorCARDRed activColor": "ColorCARDRed"} onClick={toggleColFun1}></div>
                                <div className={toggleCol2?  "ColorCARDBlue activColor": "ColorCARDBlue"} onClick={toggleColFun2} ></div>
                                <div className={toggleCol3?  "ColorCARDBlack activColor": "ColorCARDBlack"} onClick={toggleColFun3} ></div>
                                <div className={toggleCol4?  "ColorCARDBabyBlue activColor": "ColorCARDBabyBlue"} onClick={toggleColFun4} ></div>
                            </div>
                        </div>
                    </div>
                    <div className="CardProNew"  onMouseEnter={toggleSizeFun4} onMouseLeave={toggleSizeFun4}>
                        <img className="ImgProNew1" src={Products.image} alt="1" />
                        <div className={toggleSize4 ? "SixesProNews Vaspilty" : "SixesProNews"} >
                            <p>Select Size</p>
                            <ul className="UlCardPro">
                                <li className="LiCardPro">32</li>
                                <li className="LiCardPro">33</li>
                                <li className="LiCardPro">34</li>
                                <li className="LiCardPro">35</li>
                                <li className="LiCardPro">36</li>
                                <li className="LiCardPro">40</li>
                                <li className="LiCardPro">45</li>
                            </ul>
                        </div>
                        <div className="TextCardPro">
                            <p className="TextDeti1">SEEN ON TIKTOK</p>
                            <p className="TextDeti2">{Products.title.slice(0, 15)}...</p>
                            <p className="TextDeti1">{Products.price}</p>
                            <p className={toggleSize4 ?"TextDeti2 DisplayNon" : "TextDeti2" } >+4 color</p>
                            <div className={toggleSize4 ? "colosrCard Vaspilty" : "colosrCard"} >
                                <div className={toggleCol1?  "ColorCARDRed activColor": "ColorCARDRed"} onClick={toggleColFun1}></div>
                                <div className={toggleCol2?  "ColorCARDBlue activColor": "ColorCARDBlue"} onClick={toggleColFun2} ></div>
                                <div className={toggleCol3?  "ColorCARDBlack activColor": "ColorCARDBlack"} onClick={toggleColFun3} ></div>
                                <div className={toggleCol4?  "ColorCARDBabyBlue activColor": "ColorCARDBabyBlue"} onClick={toggleColFun4} ></div>
                            </div>
                        </div>
                    </div>
                </div>
                    </>
                    )
                })}
            </div>
        </>
    )
}
export default New;