// import New from "./New";
// import ScoNavNew from "./SocNavNew";
// import BeforFooter from "../../MianPedg/Footer/BeforeFooter";
// import Footer from "../../MianPedg/Footer/Footer";
import ScoNavPages from "../../AllMainComponand/ScoNavPages";
import AllProductPages from "../../AllMainComponand/AllProductsPages";
import ScoAsideLeft from "../../AllMainComponand/ScoAsideLift";
import BeforFooter from "../../MianPedg/Footer/BeforeFooter";
import Footer from "../../MianPedg/Footer/Footer";
// import New1 from "../../../Images/New1.webp" ;
// import New2 from "../../../Images/New2.webp" ;
function MainNew() {
    return (
        <>
            <div className="BackNav">
            <ScoAsideLeft />
            <ScoNavPages 
                    h2="New"
            />
            </div>
            
            <AllProductPages  h2="New" />
            <BeforFooter />
            <Footer />
        </>
    )
}
export default MainNew;