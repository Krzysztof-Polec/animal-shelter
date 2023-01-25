import foodDonation from "../../images/food-donation.webp"
import dog8 from "../../images/dog8.webp"
import "./BlueBottom.scss"

const BlueBottom = () => {
    return(
        <div className="blue-bottom">
            <div id="food-donation">
                <div className="food-donation-left-panel">
                    <img src={foodDonation} alt="foodDonation"></img>
                </div>
                <div className="food-donation-right-panel">
                    <h1>Zbiórka jedzenia</h1>
                    <p>Miejskie Schronisko dla Bezdomnych Zwierząt działa już od końca lat 80. Jest calkowicie finansowane przez Urząd Miasta
                        w Katowicach. Schronisko jest umiejscowione na obrzeżach Dąbrówki Małej w Katowicach. Otoczone zielenią wtapia się
                        w krajobraz, a zwierzęta zaznają tu ciszy i spokoju.
                    </p>
                    <p>W naszym schronisku przebywają zarówno psy jak i koty. Każde trafiające do schroniska zwierzę musi zostać poddane
                        14- dniowej kwarantannie. Jest to czas, w którym czekamy na odbiór zwierzaka przez właściciela, a także obserwujemy
                        zwierzęta pod kątem chorób, ponieważ ich przeszlość jest nam nieznana. Gdy właściciel nie zgłosi się w ciągu 14 dni
                        do schroniska prawowitym właścicielem zwierzaka staje się schronisko. Wtedy zwierzaki są przygotowywane do adopcji.
                        Wykonywane są szczepienia, zabiegi kastracji/ sterylizacji, oceniamy dokladnie również charakter i cechy zwierzaka,
                        które mogą wpływać na proces adopcji. Dorosle psy przeznaczone do adopcji przebywają w dwóch pawilonach z dostępem
                        do wybiegów, szczeniaki maja namiastkę domu w szczeniarni, a koty rezydują w kociarni z dostępem do wybiegu.
                    </p>
                </div>
            </div>
            <div id="voluntary-organisation">
                <div className="voluntary-organisation-left-panel">
                    <h1>Wolontariat</h1>
                    <p>Miejskie Schronisko dla Bezdomnych Zwierząt działa już od końca lat 80. Jest calkowicie finansowane przez Urząd Miasta
                        w Katowicach. Schronisko jest umiejscowione na obrzeżach Dąbrówki Małej w Katowicach. Otoczone zielenią wtapia się
                        w krajobraz, a zwierzęta zaznają tu ciszy i spokoju.
                    </p>
                    <p>W naszym schronisku przebywają zarówno psy jak i koty. Każde trafiające do schroniska zwierzę musi zostać poddane
                        14- dniowej kwarantannie. Jest to czas, w którym czekamy na odbiór zwierzaka przez właściciela, a także obserwujemy
                        zwierzęta pod kątem chorób, ponieważ ich przeszlość jest nam nieznana. Gdy właściciel nie zgłosi się w ciągu 14 dni
                        do schroniska prawowitym właścicielem zwierzaka staje się schronisko. Wtedy zwierzaki są przygotowywane do adopcji.
                        Wykonywane są szczepienia, zabiegi kastracji/ sterylizacji, oceniamy dokladnie również charakter i cechy zwierzaka,
                        które mogą wpływać na proces adopcji. Dorosle psy przeznaczone do adopcji przebywają w dwóch pawilonach z dostępem
                        do wybiegów, szczeniaki maja namiastkę domu w szczeniarni, a koty rezydują w kociarni z dostępem do wybiegu.
                    </p>
                </div>
                <div className="voluntary-organisation-right-panel">
                    <img src={dog8} alt="dog8"></img>
                </div>
            </div>
        </div>
    )
}

export default BlueBottom