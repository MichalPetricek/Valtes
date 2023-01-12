import React from "react";
import "./Kontakt.css";
import {ImLocation} from "react-icons/im";
import {GoPerson} from "react-icons/go";
import { BiHome,BiPhoneCall,BiMailSend } from "react-icons/bi";

const Kontakt = () => {
    return(
        <div className="kontakt-page">
            <div className="grid5-container">
                <div className="grid5-item1 align-items-stretch">
                    <h3 className="kontakt1"><ImLocation className="icon-kontakt"></ImLocation> Olbrachtova 618, Starý Harcov, 460 15 Liberec</h3>
                    <h3 className="kontakt2"><GoPerson className="icon-kontakt"></GoPerson> Ing. Jiří Jakoubě
                        <p className="text-kontakt"><BiPhoneCall className="icon-kontakt2"></BiPhoneCall> +420 776 551 423</p>
                        <p className="text-kontakt"><BiMailSend className="icon-kontakt2"></BiMailSend> jiri.jakoube@valtes.cz</p>
                    </h3>
                    <h3 className="kontakt3"><GoPerson className="icon-kontakt"></GoPerson> Ing. Jiří Jakoubě
                        <p className="text-kontakt"><BiPhoneCall className="icon-kontakt2"></BiPhoneCall> +420 776 551 423</p>
                        <p className="text-kontakt"><BiMailSend className="icon-kontakt2"></BiMailSend> jiri.jakoube@valtes.cz</p>
                    </h3>
                </div>
                <div className="grid5-item2 align-items-stretch">
                <iframe className="map-kontakt" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.787119235731!2d15.093501515940526!3d50.76098087282146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470934417211cf9b%3A0xa7ba433bfc5d65bb!2sOlbrachtova%20618%2C%20Star%C3%BD%20Harcov%2C%20460%2015%20Liberec!5e0!3m2!1scs!2scz!4v1673501982944!5m2!1scs!2scz"  
                loading="lazy" 
                allowFullScreen="yes"
                referrerpolicy="no-referrer-when-downgrade">
                    
                </iframe>
                </div>
            </div>
        </div>
    );
}
export default Kontakt;