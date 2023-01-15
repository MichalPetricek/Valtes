import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./Footer.css";
import { BiHome,BiPhoneCall,BiMailSend } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import {BrowserRouter as Router, Link} from 'react-router-dom';

export default function Footer() {
  return (
    <MDBFooter bgColor='dark' color='white' className='text-center text-lg-start text-muted'>
      <section className='footer-margin'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Valtes
              </h6>
              <p className='text-reset'>
                Zakázkové obrábění na míru.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>Služby</h6>
              <p className='text-white'>
                <Link to={"/obrabeni"} className='text-reset'>
                  Obrábění
                </Link>
              </p>
              <p className='text-white'>
                <Link to={"/zamprace"} className='text-reset'>
                  Zámečnické Práce
                </Link>
              </p>
              <p className='text-white'>
                <Link to={"/svarovani"} className='text-reset'>
                  Svařování
                </Link>
              </p>
              <p className='text-white'>
                <Link to={"/techdokum"} className='text-reset'>
                  Technická Dokumentace
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>Sociální sítě</h6>
              <p className='text-white'>
                <a href='https://www.facebook.com/' className='text-reset'>
                <BsFacebook icon="phone" className="me-2" />Facebook
                </a>
              </p>
              <p className='text-white'>
                <a href='https://www.instagram.com/' className='text-reset'>
                <BsInstagram icon="phone" className="me-2" />Instagram
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase text-white fw-bold mb-4'>Kontakt</h6>
              <p className='text-white'>
                <a href= "https://www.google.com/maps/place/FITNESS+LIFE/@50.7610383,15.0956606,20.75z/data=!4m5!3m4!1s0x4709369e55555555:0x45802a8d0066c1bf!8m2!3d50.7610425!4d15.0956195" className='text-reset'>
                    <BiHome icon="home" className="me-2" />Olbrachtova 618, Starý Harcov, 460 15 Liberec
                </a>
              </p>
              <p  className='text-white'>
                <a href = "mailto: daniel.valenta@valtes.cz" className='text-reset'>
                    <BiMailSend icon="envelope" className="me-2" />daniel.valenta@valtes.cz
                </a>
              </p>
              <p  className='text-white'>
                <BiPhoneCall icon="phone" className="me-2" />+420 606 555 782
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-white' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: &nbsp;
        <a className='text-white fw-bold' href='https://valtes.cz/'>
          valtes.cz
        </a>
      </div>
    </MDBFooter>
  );
}