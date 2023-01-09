import React from "react";
import "../Sluzby.css";
import Img1 from "../../../Images/Svarovani/Svarovani1.png";

const Svarovani = () => {
    return(<>
        <div className="obrabeni">
            <h1 className="obrabeni-main">Svařování</h1>
            <div className="grid2-container">
                <div className="grid2-item-img">
                    <img className="obrabeni-img" alt="" src={Img1}/>
                </div>
                <div className="grid2-item-text">
                    <div className="text-sluzba2">Disponujeme zázemím které je schopno pro vás poskytnout kvalitně zavařené komponenty ať už se jedná o standardní nebo nerezovou ocel.</div>
                </div>
            </div>
        </div>
        <div className="containertext3">
            <h1 className="vysledku">STROJNÍ VYBAVENÍ PRO DOSAŽENÍ NEJLEPŠÍCH VÝSLEDKŮ</h1>
            <div className="vysledkupad">
                <div className="vysledku1"><div className="dot"></div> Dbáme na naše strojní vybavení tak, aby bylo vždy v perfektním stavu.</div>
                <div className="vysledku2"><div className="dot"></div> Naše obsluha má desítky let zkušeností a je odborně zaškolena.</div>
                <div className="vysledku3"><div className="dot"></div> Provádíme kontrolu kvality výrobků pro dosažení stanovených parametrů.</div>
            </div>
        </div>
        </>
    );
}
export default Svarovani;