import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Cart from "./AllComponantScoNav/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function AllProductPages(props) {
  // Start Cart Page
  // Start Variable
  let [cartVisi, setcartVis] = useState(false);

  let [proInCart, setproInCart] = useState(
    JSON.parse(localStorage.getItem("Shopping-cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("Shopping-cart", JSON.stringify(proInCart));
  }, [proInCart]);
  // End Variable

  // Start Add Function
  let addProToCart = (Pro) => {
    let newpro = {
      ...Pro,
      count: 1,
    };
    setproInCart([...proInCart, newpro]);
    console.log(newpro);
  };
  // End Add Function

  // Start onQuantity Function
  let onQuantaty = (proId, count) => {
    setproInCart((oldState) => {
      let proIndex = oldState.findIndex((item) => item.id === proId);
      if (proIndex !== -1) {
        oldState[proIndex].count = count;
      }
      return [...oldState];
    });
  };
  // End onQuantity Function

  // Start Remove Function
  let onRemove = (proo) => {
    setproInCart((oldState) => {
      let proIndex = oldState.findIndex((item) => item.id === proo.id);
      if (proIndex !== -1) {
        oldState.splice(proIndex, 1);
      }
      console.log(oldState);
      return [...oldState];
    });
  };
  // End Remove Function
  // End Cart Page

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Start ToggleSizes
  let [toggleSize1, settoggleSize1] = useState(null);

  let toggleSizeFun1 = (index) => {
    settoggleSize1((prev) => {
      return prev === index ? null : index;
    });
  };
  // End ToggleSizes

  // Start ToggleColor
  let [toggleCol1, settoggleCol1] = useState(false);

  let toggleColFun1 = () => {
    toggleCol1 ? settoggleCol1(false) : settoggleCol1(true);
  };

  let [toggleCol2, settoggleCol2] = useState(false);

  let toggleColFun2 = () => {
    toggleCol2 ? settoggleCol2(false) : settoggleCol2(true);
  };

  let [toggleCol3, settoggleCol3] = useState(false);

  let toggleColFun3 = () => {
    toggleCol3 ? settoggleCol3(false) : settoggleCol3(true);
  };
  // End ToggleColor

  // Start Fetch Products
  let [Products, setProducts] = useState([]);
  let [selectedCategory, setSelectedCategory] = useState("All"); // State to store selected category
  let [selectedProducts, setSelectedProducts] = useState([]);

  let getAllProReco = () => {
    fetch("https://bes0610.github.io/API1.json/Bershka-API.json")
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setProducts(res);
        setSelectedProducts(res);
      });
  };
  useEffect(() => {
    getAllProReco();
  }, []);

  // Function to filter products based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setSelectedProducts(Products);
    } else {
      setSelectedProducts(Products.filter((product) => product.title === selectedCategory));
    }
  }, [selectedCategory, Products]);

  // End Fetch Products

  let [navbar, setnavbar] = useState(false);
  let changescrol = () => {
    if (window.scrollY >= 80) {
      setnavbar(true);
    } else setnavbar(false);
  };
  window.addEventListener("scroll", changescrol);
  /////
  let [AsideBox, setAsideBox] = useState(false);

  let toggleAside = () => {
    AsideBox ? setAsideBox(false) : setAsideBox(true);
  };
  ////
  let [state, setState] = useState([
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Trousers and jeans",
    },
    {
      id: 3,
      title: "cargo and parachute",
    },
    {
      id: 4,
      title: "jackets and blazers",
    },
    {
      id: 5,
      title: "Sweatshirts and knitwear",
    },
    {
      id: 6,
      title: "Dreses",
    },
    {
      id: 7,
      title: "T-shirt and tops",
    },
    {
      id: 8,
      title: "shoes",
    },
    {
      id: 9,
      title: "Accessories",
    },
  ]);
  /////

  let [toggle, settoggle] = useState(null);

  let toggleFun = (index) => {
    settoggle((prev) => {
      return prev === index ? null : index;
    });
  };
  let [toggleActNav, settoggleActNav] = useState(null);

  let toggleActNavFun = (index) => {
    setSelectedCategory(state[index].title); // Update selected category
    settoggleActNav((prev) => {
      return prev === index ? null : index;
    });
  };

  return (
    <>
      <Cart
        visabilty={cartVisi}
        products={proInCart}
        onclose={() => {
          setcartVis(false);
        }}
        onQuantityChange={onQuantaty}
        onproductRemove={onRemove}
      />

      <FontAwesomeIcon
        className="Ico"
        icon={faCartShopping}
        onClick={() => {
          setcartVis(true);
        }}
      />
      {proInCart.length > 0 && <span className="ProoInCart">{proInCart.length}</span>}
      <div className="ProNew">
        <div className={navbar ? "ScoNavNewScroll" : "ScoNavNew"}>
          <button className={navbar ? "IcoSroll display" : "IcoSroll"} onClick={toggleAside}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <h2 className="ProH2">{props.h2}</h2>
          <div>
            <ul className="UlScoNavNew" key={state.id}>
              {state.map((state, index) => {
                return (
                  <>
                    <li
                      className={toggleActNav === index ? "ProLiScoNavNew AvtiveScoNav" : "ProLiScoNavNew"}
                      onClick={() => {
                        toggleActNavFun(index);
                        toggleFun(index);
                      }}
                    >
                      {state.title}
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        {selectedProducts.map((product, index) => {
          return (
            <>
              <div className="CardProNew" key={index} onMouseEnter={() => toggleSizeFun1(index)} onMouseLeave={() => toggleSizeFun1(index)}>
                <Link to={`/Barshka/${product.id}`}>
                  <img className="ImgProNew1" src={product.image} alt="1" />
                </Link>
                <div className={toggleSize1 === index ? "SixesProNews Vaspilty" : "SixesProNews"}>
                <p>Select Size</p>
                <ul className="UlCardPro">
                  <li
                    className="LiCardPro"
                    onClick={() => {
                      addProToCart(product);
                    }}
                  >
                    XS
                  </li>
                  <li
                    className="LiCardPro"
                    onClick={() => {
                      addProToCart(product);
                    }}
                  >
                    S
                  </li>
                  <li
                    className="LiCardPro"
                    onClick={() => {
                      addProToCart(product);
                    }}
                  >
                    M
                  </li>
                  <li
                    className="LiCardPro"
                    onClick={() => {
                      addProToCart(product);
                    }}
                  >
                    L
                  </li>
                  <li
                    className="LiCardPro"
                    onClick={() => {
                      addProToCart(product);
                    }}
                  >
                    XL
                  </li>
                </ul>
              </div>
              <div className="TextCardPro">
                <p className="TextDeti2">{product.title.slice(0, 25)}...</p>
                <p className="TextDeti1">EGB {product.price}</p>
                <p className={toggleSize1 === index ? "TextDeti2 DisplayNon" : "TextDeti2"}>+4 color</p>
                <div className={toggleSize1 === index ? "colosrCard Vaspilty" : "colosrCard"}>
                  <div className={toggleCol3 ? "ColorCARDBlack activColor" : "ColorCARDBlack"} onClick={toggleColFun3}></div>
                  <div className={toggleCol2 ? "ColorCARDBlue activColor" : "ColorCARDBlue"} onClick={toggleColFun2}></div>
                  <div className={toggleCol1 ? "ColorCARDwhite activColor" : "ColorCARDwhite"} onClick={toggleColFun1}></div>
                </div>
              </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
export default AllProductPages;
