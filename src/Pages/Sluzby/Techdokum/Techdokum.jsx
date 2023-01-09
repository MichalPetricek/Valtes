import React from "react";
import "../Sluzby.css";
import Img1 from "../../../Images/Techdokum/techdokum1.png";

const Techdokum = () => {
    return(<>
        <div className="obrabeni">
            <h1 className="obrabeni-main">Technická dokumentace</h1>
            <div className="grid2-container">
                <div className="grid2-item-img">
                    <img className="obrabeni-img" alt="" src={Img1}/>
                </div>
                <div className="grid2-item-text">
                    <div id="techdokum-text" className="text-sluzba2">Nutným podkladem pro každou výroby je technická dokumentace. V případě, že žádnou dokumentaci nemáte, 
                    tak se o vše postaráme.  Společně se sejdeme, vyřešíme potřebné podklady a specifikace a následně dokumentaci zajistíme.
                    </div>
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
export default Techdokum;