import React from "react";
import "../Obrabeni/Obrabeni.css"
import Img1 from "../../../Images/Obrabeni/obrabeni1.jpg";
import Img2 from "../../../Images/Obrabeni/obrabeni2.jpg";

const Obrabeni = () => {
    return(
        <div className="obrabeni">
            <h1 className="obrabeni-main">Obrábění</h1>
            <div className="grid2-container">
                <div className="grid2-item 1">
                    <img className="obrabeni-img" src={Img1}/>
                </div>
                <div className="grid2-item 2">
                    <h2 className="main-2">Soustružení</h2>
                    <div className="text-soustruh">Pro soustružení využíváme konvenční soustruh, který pro vás zajistí zakázkovou až malosériovou část výroby.</div>
                </div>
            </div>
            <div className="grid2-container">
                <div className="grid2-item 3">
                    <img className="obrabeni-img" src={Img2}/>
                </div>
                <div className="grid2-item 4">
                    <h2 className="main-2">Frézování</h2>
                    <div className="text-freza">Pro frézování využíváme univerzální frézku, která pro vás zajistí zakázkovou až malosériovou část výroby.</div>
                </div>
            </div>
        </div>
    );
}
export default Obrabeni;