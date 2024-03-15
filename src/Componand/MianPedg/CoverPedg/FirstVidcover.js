import ee from "../../../Videos/ee.mp4" ;
function FirstVideoPag () {
    return (
        <>
            <div>
                <video  className="FirVid" autoPlay loop muted >
                    <source src={ee} />
                </video>
            </div>
        </>
    )
}
export default FirstVideoPag;