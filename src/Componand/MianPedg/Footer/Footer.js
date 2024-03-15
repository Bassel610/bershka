import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faFacebook,faYoutube,faTiktok,faSnapchat,faPinterest,faDeezer } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHandsBubbles,faGlobe } from '@fortawesome/free-solid-svg-icons';
function Footer () {
    return (
        <>
            <div className="AllBoxesFooter">
            <div className="Box1Footer">
                <h2 className='h2Footer'>Can we help you? </h2>
                <p className='PFooter'><FontAwesomeIcon icon={faHandsBubbles} /> Start chat <span className='Span'>Out of service</span></p>
                <p className='PFooter'>From Mondays to Sundays from 10:00 to 22:00</p>
                <p className='PFooter'><FontAwesomeIcon icon={faEnvelope} /> Send email</p>
                <p className='PFooter'>We  Will reply asap</p>
                </div>
                <div className="Box1Footer">
                    <h2 className='h2Footer'>Help</h2>
                    <p className='PFooter'>Shop online</p>
                    <p className='PFooter'>payment</p>
                    <p className='PFooter'>Delivery</p>
                    <p className='PFooter'>Returns</p>
                    <p className='PFooter'>Electronic receipt</p>
                </div>
                <div className="Box1Footer">
                    <h2 className='h2Footer'>We are Bershka</h2>
                    <p className='PFooter'>About Bershka</p>
                    <p className='PFooter'>Join Life</p>
                    <p className='PFooter'>Work with us</p>
                    <p className='PFooter'>Press</p>
                    <p className='PFooter'>Our stores</p>
                </div>
                <div className="Box1Footer">
                    <h2 className='h2Footer'>You might be interested in</h2>
                    <p className='PFooter'>Coats</p>
                    <p className='PFooter'>Jackets</p>
                    <p className='PFooter'>Suits</p>
                    <p className='PFooter'>Skirts</p>
                    <p className='PFooter'>Waistcoats</p>
                    <p className='PFooter'>Sweatshirts and hoodies</p>
                    <p className='PFooter'>Trousers</p>
                    <p className='PFooter'>Cargo</p>
                </div>
                <div className="Box1Footer">
                    <FontAwesomeIcon className='IconFooter' icon={faInstagram} />
                    <FontAwesomeIcon className='IconFooter' icon={faFacebook} />
                    <FontAwesomeIcon className='IconFooter' icon={faDeezer} />
                    <FontAwesomeIcon className='IconFooter' icon={faTiktok} />
                    <FontAwesomeIcon className='IconFooter' icon={faSnapchat} />
                    <FontAwesomeIcon className='IconFooter' icon={faYoutube} />
                    <FontAwesomeIcon className='IconFooter' icon={faPinterest} />
                </div>
            </div>
            <hr className='HrBefor' />
            <div className='ENdFooter'>
                <div className='EndRaght'>
                Terms and conditions of purchase • Privacy policy • Cookies policy • Cookie settings • SiteMap
                </div>
                <div className='EndLeft'>                    
                <span><FontAwesomeIcon icon={faGlobe} />  Egypt|English</span>
                <span className='LastWord'>© 2023 Bershka</span>
                </div>
            </div>
        </>
    )
}
export default Footer;