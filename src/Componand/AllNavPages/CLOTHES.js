import AllProductPages from "../AllMainComponand/AllProductsPages";
import ScoAsideLeft from "../AllMainComponand/ScoAsideLift";
import ScoNavPages from "../AllMainComponand/ScoNavPages";
import BeforFooter from "../MianPedg/Footer/BeforeFooter";
import Footer from "../MianPedg/Footer/Footer";

function CLOTHES () {
    return (
        <>
        <div className="BackNav">
        <ScoAsideLeft />
        <ScoNavPages
        h2="CLOTHES"
        li1="All"
        li2="Trousers and jeans"
        li3="cargo and parachute"
        li4="jackets and blazers"
        li5="Sweatshirts and knitwear"
        li6="Dreses"
        li7="T-shirt and tops"
        li8="shoes"
        li9="Accessories"
        />
        </div>
        <AllProductPages />
        <BeforFooter />
        <Footer />
        </>
    )
}
export default CLOTHES;