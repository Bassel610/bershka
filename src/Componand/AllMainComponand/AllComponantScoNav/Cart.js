import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Cart ({
    visabilty,
    products,
    onproductRemove,
    onQuantityChange,
    onclose
}) {
    let totalPrice = products.reduce((acc, products) => {
        acc += products.price * products.count;
        return acc
    }, 0)
    return (
        <>
        <div className="Cart " style={{
            display: visabilty
            ? "block"
            :"none"
        }}>
            <div className="CartProduct">
                {products.length === 0 && (
                    <>
                        <span className="EmpatyCart" > your basket currantle is empaty <br/> <Link to={"/"}> Go To Shopping</Link></span>
                    </>
                    )} 
                    <div className="Closebtn">
                    <FontAwesomeIcon className="CloseIcop" icon={faClose} onClick={onclose} />
                        <h3 className="BaskeTx">Basket 
                            <div className="ProoLenght">
                            ({
                            products.length
                            })   
                            </div>
                        </h3>
                    </div>
                    <div className="AllProCartr">
                    {products.map((product) => (
                        <div className="CartPro" key={product.id}>
                            <div className="AllDetiCart">
                                    <img className="ImgCart" src={product.image}  alt="aa" />
                                    <div className="TilteCart"> {product.category} </div>
                                    <div className="CartPrice"><b className="EGB">EGB</b>{product.price * product.count}</div>
                                <select  
                                    className="CountCart"
                                    value={product.count} 
                                    onChange={(e) => {
                                        onQuantityChange(   
                                        product.id,
                                        e.target.value
                                    )
                                }}
                                >
                                {
                                    [
                                        ...Array(10).keys(),
                                    ].map((number) => {
                                        let num = number + 1 ;
                                        return <option value={num} key={num}> {num}</option>
                                    })
                                }
                                </select>
                                    <FontAwesomeIcon 
                                    className="RempveProCart" 
                                    onClick={() =>{
                                    // console.log(onproductRemove)
                                    onproductRemove(product)
                                    }
                                } 
                                icon={faTrashCan}
                                />
                            </div>
                        </div>
                        
                    ))} 
                    </div>
                    <div className="ProcedBox">
                        {
                            products.length > 0 && 
                        <>
                            <button className="ProcedBtnCart">proceed to chekOut </button>
                            <div className="AllTotal">
                                <div className="TotalTx">Total</div>
                                <div className="TotalNum">EGB {totalPrice}</div>
                            </div>
                        </>
                        }
                    </div> 
            </div>
        {/* </div> */}
        </div>
        </>
    )
}
export default Cart;
