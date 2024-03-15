import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";    
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useState,useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Pagination, Navigation])
function SwiperFun () {

let [Products, setProducts] = useState([])

    let [ProReco, setProReco] = useState([])
    
let getAllProReco = () => {
    fetch('https://bes0610.github.io/API1.json/Bershka-API.json')
    .then((res) => res.json())
    .then((res) =>{
        console.log(res)
        setProReco(res)
    });
};
useEffect(() =>{
    getAllProReco()
}, [])
    return (
        <div className="SwiperCon" >
            <Swiper
                spaceBetween={50}
                slidesPerView={6}
                navigation
                >
            <div className="AllCard">
            {ProReco.map((ProReco) =>{
        return (
                <>
                    <SwiperSlide className="Card" key={ProReco.id}>
                        <div className="DetiCard">
                            <img className="ImgCard" src={ProReco.image} alt="a" />
                            <p className="P1Crd"> {ProReco.title.slice(0,25)}</p>
                            <p className="P2Card"> {ProReco.price} 
                            <Link to={`/Barshka/${ProReco.id}`} className='SwiperViewBTN'>
                            View
                            </Link>
                            </p>
                        </div>
                    </SwiperSlide>

                </>
        )
    })}
            </div>
            </Swiper>
        </div>
    )
}
export default SwiperFun;