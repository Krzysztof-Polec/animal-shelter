import Navbar from "../Navbar/Navbar"
import dog1 from "../../images/dog1.webp"
import dog2 from "../../images/dog2.webp"
import "./BlueTop.scss"

const BlueTop = () => {
    return(
        <header className="reveal active">
            <Navbar></Navbar>
            <div className="header-info">
                <div className="header-info-left-panel">
                    <h1>Miejskie Schronisko dla Bezdomnych Zwierząt w Katowicach</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et euismod tortor. 
                        Sed blandit diam sed luctus efficitur, In eu vehicula felis, ac bibendum ligula. 
                        Donec quis porta neque, ut posuere orci. Aenean egestas ante eu dictum scelerisque. 
                        Phasellus sit amet elementum just.
                    </p>
                </div>
                <div className="header-info-right-panel">
                    <div className="bottom-image">
                        <img src={dog1} alt="dog1"></img>
                    </div>
                    <div className="top-image">
                        <img src={dog2} alt="dog2"></img>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default BlueTop