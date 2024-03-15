import video from "../../../Videos/video.mp4" ; 
function ScoVid () {
    return (
        <>
        <video className="FirVid" src={video} loop muted autoPlay />
        </>
    )
}

export default ScoVid;