import map from "../../images/map.webp"
import "./WhiteBottom.scss"

const WhiteBottom = () => {
    return(
        <div id="white-bottom">
            <div className="footer">
                <div className="footer-left-panel">
                    <h1>Napisz do nas</h1>
                    <input type="text" placeholder="Imię i nazwisko"></input>
                    <input type="text" placeholder="Adres email"></input>
                    <input type="text" placeholder="Typ zapytania"></input>
                    <textarea placeholder="Treść wiadomości"></textarea>
                    <div className="footer-check">
                        <input type="radio" name="check"></input>
                        <p>Qui incididunt voluptate enim proident qui nulla aliqua incididunt minim do ea.
                            Labore officia labore.
                        </p>
                    </div>
                    <div className="footer-check">
                        <input type="radio" name="check"></input>
                        <p>Qui incididunt voluptate enim proident qui nulla aliqua incididunt minim do ea.
                            Labore officia labore.
                        </p>
                    </div>
                    <div className="footer-button">
                        <p>Wyślij</p>
                    </div>
                </div>
                <div className="footer-right-panel">
                    <img src={map}></img>
                </div>
            </div>
        </div>
    )
}

export default WhiteBottom