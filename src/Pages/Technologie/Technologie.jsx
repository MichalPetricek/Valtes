import React from "react";
import "./Technologie.css";
import {Card} from "react-bootstrap";
import Img1 from "../../Images/technologie/soustruh.png";
import Img2 from "../../Images/technologie/vrtacka.png";
import Img3 from "../../Images/technologie/pila.png";
import Img4 from "../../Images/technologie/svarovani.png";

const Technologie = () => {
    return(
        <div className="technologie-page">
            <div className="grid4-container">
                <div className="grid4-item d-flex align-items-stretch">
                    <Card>
                        <Card.Img className="cardimg-technologie" variant="top"  src={Img1} />
                            <h3 className="cardmain-technologie">Hrotový soustruh SV-18RA/1000</h3>
                            <h4 className="cardmain2-technologie">Pracovní parametry:</h4>
                            <Card.Text className="cardtext-technologie">
                                <p>Maximální délka soustružení<strong> 1000 </strong>mm</p>
                                <p>Průměr soustružení nad ložem (max)<strong> 380 </strong>mm</p>
                                <p>Točný průměr nad suportem (max)<strong> 215 </strong>mm</p>
                                <p>Vrtání vřetena<strong> 41 </strong>mm</p>    
                            </Card.Text>
                    </Card>
                </div>
                <div className="grid4-item d-flex align-items-stretch">
                    <Card>
                        <Card.Img className="cardimg-technologie" variant="top"  src={Img2} />
                            <h3 className="cardmain-technologie">Sloupová vrtačka</h3>
                            <h4 className="cardmain2-technologie">Pracovní parametry:</h4>
                            <Card.Text className="cardtext-technologie">
                                <p>Lze vrtat otvory od 1-40mm následně lze doplnit závity dle požadavku.</p>
                                <p>Materiál který běžně zpracováváme je ocel,nerez,plast i dřevo.</p>
                                <p>Typy profilů lze využít téměř všechny hranoly, kulatiny, jekly, ploché tyče apod.</p>   
                            </Card.Text>
                    </Card>
                </div>
                <div className="grid4-item d-flex align-items-stretch">
                    <Card>
                        <Card.Img className="cardimg-technologie" variant="top"  src={Img3} />
                            <h3 className="cardmain-technologie">Pásová pila Pilous ARG220 Plus</h3>
                            <h4 className="cardmain2-technologie">Pracovní parametry:</h4>
                            <Card.Text className="cardtext-technologie">
                                <p>Maximální délka pro řezání<strong> 3000 </strong>mm</p>
                                <p>nastavitelný rozsah řezných úhlu<strong> 60°- 45° a 90°</strong></p>
                            </Card.Text>
                    </Card>
                </div>
                <div>
                    <Card className="d-flex align-items-stretch">
                        <Card.Img className="cardimg-technologie" variant="top"  src={Img4} />
                            <h3 className="cardmain-technologie">Svařovací inventor ALFA IN PEGAS 200 AC/DC PULSE PFC</h3>
                            <h4 className="cardmain2-technologie">Pracovní parametry:</h4>
                            <Card.Text className="cardtext-technologie">
                                <p>Standardní svařování výrobků provádíme do<strong> 2000x2000 </strong>mm</p>
                                <p>Materiál který pro vás zpracujme je: uhlíková ocel, nerezová ocel a hliník.</p>
                                <p>Po domluvě lze u svařovacích výrobků zajistit i povrchová úprava.</p>
                                <p>Poradíme si s veškerými tvary materiálu pro svařování.</p>    
                            </Card.Text>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default Technologie;