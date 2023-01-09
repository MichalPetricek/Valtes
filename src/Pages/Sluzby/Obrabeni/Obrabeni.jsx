import React from "react";
import "../Sluzby.css";
import Img1 from "../../../Images/Obrabeni/obrabeni1.png";
import Img2 from "../../../Images/Obrabeni/obrabeni2.png";

const Obrabeni = () => {
    return(<>
        <div className="obrabeni">
            <h1 className="obrabeni-main">Obrábění</h1>
            <div className="grid2-container">
                <div className="grid2-item-img">
                    <img className="obrabeni-img" alt="" src={Img1}/>
                </div>
                <div className="grid2-item-text">
                    <h2 className="main-2">Soustružení</h2>
                    <div className="text-sluzba">Pro soustružení využíváme konvenční soustruh, který pro vás zajistí zakázkovou až malosériovou část výroby.</div>
                </div>
            </div>
            <div className="grid2-container">
                <div className="grid2-item-img">
                    <img className="obrabeni-img" alt="" src={Img2}/>
                </div>
                <div className="grid2-item-text">
                    <h2 className="main-2">Frézování</h2>
                    <div className="text-sluzba">Pro frézování využíváme univerzální frézku, která pro vás zajistí zakázkovou až malosériovou část výroby.</div>
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
export default Obrabeni;