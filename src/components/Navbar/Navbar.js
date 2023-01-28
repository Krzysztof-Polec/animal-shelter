import { useState } from "react"
import webLogo from "../../images/dog-house.webp"
import "./Navbar.scss"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    return(
        <nav>
            <div className="logo">
                <img src={webLogo} alt="webLogo"></img>
            </div>
            <div className="right-panel">
                <a href="#about">O schronisku</a>
                <a href="#adopt">Adoptuj pupila</a>
                <a href="#food-donation">Zbiórka jedzenia</a>
                <a href="#voluntary-organisation">Wolontariat</a>
                <a href="#white-bottom">Kontakt</a>
                <div className={`hamburger-menu ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <div className={`hamburger-menu-list ${isOpen ? "open" : ""}`}>
                    <a href="#about" onClick={() => setIsOpen(!isOpen)}>O schronisku</a>
                    <a href="#adopt" onClick={() => setIsOpen(!isOpen)}>Adoptuj pupila</a>
                    <a href="#food-donation" onClick={() => setIsOpen(!isOpen)}>Zbiórka jedzenia</a>
                    <a href="#voluntary-organisation" onClick={() => setIsOpen(!isOpen)}>Wolontariat</a>
                    <a href="#white-bottom" onClick={() => setIsOpen(!isOpen)}>Kontakt</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar