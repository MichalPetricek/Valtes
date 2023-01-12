import React from "react";
import "../Header/Header.css";
import { useState } from 'react';
import { useEffect } from 'react';
import { BiPhoneCall,BiHome,BiMailSend } from "react-icons/bi";
import {BsFacebook, BsInstagram} from "react-icons/bs";

const Header = () => {
    const [show,setShow] = useState(true);
    const [none,setNone] = useState(false);
    const controlNavbar = () =>{
      if(window.scrollY > 40 && window.innerWidth >= 1200)
      {
        setShow(false)
        setNone(true)
      }
      else{
        setShow(true)
        setNone(false)
      }
    }
    useEffect(() => {
        window.addEventListener("scroll",controlNavbar)
        window.addEventListener("resize",controlNavbar)
        window.addEventListener("load",controlNavbar)
        return () =>{
          window.removeEventListener("scroll",controlNavbar)
          window.removeEventListener("resize",controlNavbar)
          window.removeEventListener("load",controlNavbar)
        }
    },[])
    return(
        <div className={`${none && "header-none"} ${show && "header-container"}`}>
           <a href="https://www.google.com/maps/place/FITNESS+LIFE/@50.7610383,15.0956606,20.75z/data=!4m5!3m4!1s0x4709369e55555555:0x45802a8d0066c1bf!8m2!3d50.7610425!4d15.0956195" className="header-text margin-text"><BiHome/> Olbrachtova 618, Starý Harcov, 460 15 Liberec</a>
           <a className="header-text"><BiPhoneCall/> +420 776 551 423</a>
           <a className="header-text"><BiMailSend/> jiri.jakoube@valtes.cz</a>
           <a className="header-text" href='https://www.facebook.com/'><BsFacebook/></a>
           <a className="header-text" href='https://www.instagram.com/'><BsInstagram/></a>  
        </div>
    );
}
export default Header;