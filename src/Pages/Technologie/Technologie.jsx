import React from "react";
import "./Technologie.css";
import {Card} from "react-bootstrap";
import Img1 from "../../Images/technologie/soustruh.png";
import Img2 from "../../Images/technologie/vrtacka.png";
import Img3 from "../../Images/technologie/pila.png";
import Img4 from "../../Images/technologie/svarovani.png";
import Img5 from "../../Images/technologie/freza.png";

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
                        <Card.Img className="cardimg-technologie" variant="top"  src={Img5} />
                            <h3 className="cardmain-technologie">Frézka vertikální</h3>
                            <h4 className="cardmain2-technologie">Pracovní parametry:</h4>
                            <Card.Text className="cardtext-technologie">
                                <p>Maximální délka upnutí materiálu<strong> 3000 </strong>mm</p>
                                <p>Maximální šíře upnutí<strong> 300 </strong>mm</p>
                                <p>Maximální výška obrábění<strong> 300 </strong>mm</p>  
                            </Card.Text>
                    </Card>
                </div>
                <div className="grid4-item d-flex align-items-stretch">
                    <Card id="card-pila">
                        <Card.Img className="cardimg-technologie"  variant="top"  src={Img3} />
                            <h3 className="cardmain-technologie">Pásová pila Pilous ARG220 Plus</h3>
                            <h4 className="cardmain2-technologie">Pracovní parametry:</h4>
                            <Card.Text className="cardtext-technologie">
                                <p>Maximální délka pro řezání<strong> 3000 </strong>mm</p>
                                <p>Nastavitelný rozsah řezných úhlu<strong> 60°- 45° a 90°</strong></p>
                                <p>Přehled maximálního řezu pro materiál:</p>
                                <p><strong>čtvercový:</strong> 200mm/90° | 155mm/+45° | 135mm/-45° | 95mm/+60°</p>
                                <p><strong>kruhový:</strong> 200mm/90° | 130mm/+45° | 115mm/-45° | 65mm/+60°</p>
                                <p><strong>obdélníkový:</strong> 250x140mm/90° | 160x125mm/+45° | 150x70mm/-45° | 100x60mm/ +60°</p>
                            </Card.Text>
                    </Card>
                </div>
                <div className="grid4-item d-flex align-items-stretch">
                    <Card>
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
            </div>
        </div>
    );
}
export default Technologie;