import { HandleScroll } from "../../utils/HandleScroll"
import dog3and4 from "../../images/dog3and4.webp"
import dog5 from "../../images/dog5.webp"
import dog6 from "../../images/dog6.webp"
import dog7 from "../../images/dog7.webp"
import "./SalmonMid.scss"

const SalmonMid = () => {
    const revealRefs = HandleScroll()
    
    return(
        <div className="salmon-mid">
            <div id="about" className="reveal" ref={el => revealRefs.current.push(el)}>
                <div className="about-left-panel">
                    <h1>O Schronisku</h1>
                    <p>Miejskie Schronisko dla Bezdomnych Zwierząt działa już od końca lat 80. Jest calkowicie finansowane przez Urząd Miasta
                        w Katowicach. Schronisko jest umiejscowione na obrzeżach Dąbrówki Małej w Katowicach. Otoczone zielenią wtapia się
                        w krajobraz, a zwierzęta zaznają tu ciszy i spokoju.</p>
                    <p>W naszym schronisku przebywają zarówno psy jak i koty. Każde trafiające do schroniska zwierzę musi zostać poddane
                        14- dniowej kwarantannie. Jest to czas, w którym czekamy na odbiór zwierzaka przez właściciela, a także obserwujemy
                        zwierzęta pod kątem chorób, ponieważ ich przeszlość jest nam nieznana. Gdy właściciel nie zgłosi się w ciągu 14 dni
                        do schroniska prawowitym właścicielem zwierzaka staje się schronisko. Wtedy zwierzaki są przygotowywane do adopcji.
                        Wykonywane są szczepienia, zabiegi kastracji/ sterylizacji, oceniamy dokladnie również charakter i cechy zwierzaka,
                        które mogą wpływać na proces adopcji. Dorosle psy przeznaczone do adopcji przebywają w dwóch pawilonach z dostępem
                        do wybiegów, szczeniaki maja namiastkę domu w szczeniarni, a koty rezydują w kociarni z dostępem do wybiegu.
                    </p>
                </div>
                <div className="about-right-panel">
                    <img src={dog3and4} alt="dog3and4"></img>
                </div>
            </div>
            <div id="adopt" className="reveal" ref={el => revealRefs.current.push(el)}>
                <div className="adopt-header">
                    <h1>Adoptuj pupila</h1>
                </div>
                <div className="adopt-content">
                    <div className="adoption-proposal">
                        <div className="adoption-proposal-header">
                            <img src={dog3and4} alt="dog3and4"></img>
                        </div>
                        <div className="adoption-proposal-footer">
                            <h1>Peepi</h1>
                            <p>2 letni</p>
                            <p>Rasa pieska - piękny</p>
                            <p>Male</p>
                        </div>
                    </div>
                    <div className="adoption-proposal">
                        <div className="adoption-proposal-header">
                            <img src={dog5} alt="dog5"></img>
                        </div>
                        <div className="adoption-proposal-footer">
                            <h1>Lucky</h1>
                            <p>3 letni</p>
                            <p>Rasa pieska - piękny</p>
                            <p>Male</p>
                        </div>
                    </div>
                    <div className="adoption-proposal">
                        <div className="adoption-proposal-header">
                            <img src={dog6} alt="dog6"></img>
                        </div>
                        <div className="adoption-proposal-footer">
                            <h1>Woowe</h1>
                            <p>8 letni</p>
                            <p>Rasa pieska - piękny</p>
                            <p>Male</p>
                        </div>
                    </div>
                    <div className="adoption-proposal">
                        <div className="adoption-proposal-header">
                            <img src={dog7} alt="dog7"></img>
                        </div>
                        <div className="adoption-proposal-footer">
                            <h1>Dogo</h1>
                            <p>1 letni</p>
                            <p>Rasa pieska - piękny</p>
                            <p>Male</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalmonMid