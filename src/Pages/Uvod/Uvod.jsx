import React, {useState} from "react";
import "./Uvod.css";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Card} from "react-bootstrap";
import Img1 from "../../Images/Sluzby-uvod/obrabeni.jpg";
import Img2 from "../../Images/Sluzby-uvod/zamecnicke.jpg";
import Img3 from "../../Images/Sluzby-uvod/svareni.jpg";
import Img4 from "../../Images/Sluzby-uvod/dokumentace.jpg";
import { LinkContainer } from "react-router-bootstrap";

const Uvod = () => {
    
    return(
        <>
        <div className="bg">
        <h1 className="main-text">Zakázkové obrábění na míru.</h1>
        </div>
        <div className="grid-container">
            <div className="grid-item 1">
                <LinkContainer className="cardsluzby" to={"./obrabeni"}>  
                    <Card>
                        <Card.Img className="cardimg" variant="top"  src={Img1} />
                            <h3 className="cardtext">Obrábění</h3>
                    </Card>
                </LinkContainer>    
            </div>
            <div className="grid-item 2">
            <Link className="cardsluzby" to={"./zamprace"}>  
                    <Card>
                        <Card.Img className="cardimg" variant="top"  src={Img2} />
                            <h3 className="cardtext" id="textbla">Zámečnické práce</h3>
                    </Card>
                </Link>  
            </div>
            <div className="grid-item 3">
            <Link className="cardsluzby" to={"./svarovani"}>  
                    <Card>
                        <Card.Img className="cardimg" variant="top"  src={Img3} />
                            <h3 className="cardtext">Svařování</h3>
                    </Card>
                </Link>  
            </div>
            <div className="grid-item 4">
            <Link className="cardsluzby" to={"./techdokum"}>  
                    <Card>
                        <Card.Img className="cardimg" variant="top"  src={Img4} />
                        <h3 className="cardtext">Technická dokumentace</h3>
                    </Card>
                </Link>  
            </div>
        </div>
        {/*End of sluzby grid*/} 
        <h1 className="sronazev" >VALTES s.r.o</h1>
        <div className="containertext">
            <div className="firsttext">
            Specializujeme se na výrobu soustružených a frézovaných dílů dle vašich potřeb, tím jsme pro vás schopni zajistit celkový servis.
            </div>
            <div className="lineblue"></div>
            <div className="secondtext">
            Zaměřujeme se na zakázkovou a malosériovou výrobou soustružených i frézovaných 
            dílů z celé řady železných, nerezových i ostatních typů materiálů jako je například plast a dřevo.
            </div>
        </div>
        <div className="containertext2">
            <h1 className="vysledku">STROJNÍ VYBAVENÍ PRO DOSAŽENÍ NEJLEPŠÍCH VÝSLEDKŮ</h1>
            <div className="vysledkupad">
                <div className="vysledku1"><div className="dot"></div> Dbáme na naše strojní vybavení tak, aby bylo vždy v perfektním stavu.</div>
                <div className="vysledku2"><div className="dot"></div> Naše obsluha má desítky let zkušeností a je odborně zaškolena.</div>
                <div className="vysledku3"><div className="dot"></div> Provádíme kontrolu kvality výrobků pro dosažení stanovených parametrů.</div>
            </div>
        </div>
        <div className="containertext3">
            <h1 className="vysledku">VÝHODY SPOLUPRÁCE S NÁMI</h1>
            <div className="vysledkupad">
                <div className="vysledku1"><div className="dot"></div> Našim zákazníkům se věnujeme po celou dobu spolupráce kdykoliv je potřeba.</div>
                <div className="vysledku2"><div className="dot"></div> Disponujeme vlastním vybavením, které máme kdykoliv k dispozici</div>
                <div className="vysledku3"><div className="dot"></div> Všechny zakázky pečlivě zpracováváme a ke každé přistupujeme individuálně a flexibilně.</div>
            </div>
        </div>
        </>
    );
}
export default Uvod;