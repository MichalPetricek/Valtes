import {Navbar,Nav} from 'react-bootstrap';
import logo from '../../Images/valtes-logo.png';
import "./Navbar.css";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Header from '../Header/Header';


function NavbarMenu() {
  const [show,setShow] = useState(true);
  const [img,setImg] = useState(70);
  const [imgmar,setImgmar]= useState(false);
  const controlNavbar = () =>{
    setImg("70")
    setImgmar(false)
    if(window.scrollY > 40)
    {
      if(window.innerWidth >= 1200){
        setShow(false)
      }
      setImg("70")
      setImgmar(false)
    }

    else{
      setShow(true)
      if(window.innerWidth >= 1200){
        setImg("110")
        setImgmar(true)
      }
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
  return (
    <>
      <Navbar collapseOnSelect expand="xl" fixed="top"  className={`navbar ${show && "nav__grey"}`} bg="custom">
        <Header></Header>
          <Navbar.Brand className={`img70 ${imgmar && "img110"}`}>
            <Link to="/">
              <img
                src={logo}
                width= "auto"
                height={img}
                className="d-inline-block align-top"
                alt="valtes"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll">
                <span className="toggler-icon top-bar" />
                <span className="toggler-icon middle-bar" />
                <span className="toggler-icon bottom-bar" />
          </Navbar.Toggle>  
          <NavbarCollapse id="navbarScroll" className="justify-content-end">
            <Nav className={`link-none ${show && "link-padding"}`} id='active' navbarScroll>
              <LinkContainer activeStyle={{color: "#60b3e5",textDecoration:"none"}} to="/">
              <Nav.Link  className='link-color2'>ÚVOD</Nav.Link>
              </LinkContainer>
              <NavItem>
                <DropdownMenu></DropdownMenu>
              </NavItem>
              <LinkContainer activeStyle={{color: "#60b3e5",textDecoration:"none"}} to="/technologie">
              <Nav.Link className='link-color2'>TECHNOLOGIE</Nav.Link>
              </LinkContainer>
              <LinkContainer activeStyle={{color: "#60b3e5",textDecoration:"none"}} to="/kontakt">
              <Nav.Link className='link-color'>KONTAKT</Nav.Link>
              </LinkContainer>
            </Nav>
          </NavbarCollapse>
      </Navbar>
    </>
  );
  function NavItem(props){
    const [open, setOpen] = useState(false);
    return(<>
          <li sclassName="nav-item" onMouseOver={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onClick={() => setOpen(!open)}>
            <div id='drop' className="nav-link">
              SLUŽBY ▼
            </div>
            {open && props.children}
      </li>
    </>);
  }
  function DropdownMenu(){
  
    return(<>
      <div className={`dropdown ${show && "dropdown-bg"}`}>
        <LinkContainer activeStyle={{color: "#60b3e5",textDecoration:"none"}} to="/obrabeni">
          <Nav.Link id='drop-item' className='dropdown-item'>
            OBRÁBĚNÍ
          </Nav.Link>
        </LinkContainer>
        <LinkContainer activeStyle={{color: "#60b3e5",textDecoration:"none"}} to="/zamprace">
          <Nav.Link id='drop-item' className='dropdown-item'>
            ZÁMEČNICKÉ PRÁCE
          </Nav.Link>
        </LinkContainer>
        <LinkContainer activeStyle={{color: "#60b3e5",textDecoration:"none"}} to="/svarovani">
          <Nav.Link id='drop-item' className='dropdown-item'>
            SVAŘOVÁNÍ
          </Nav.Link>
        </LinkContainer>
        <LinkContainer activeStyle={{color: "#60b3e5",textDecoration:"none"}} to="/techdokum">
          <Nav.Link id='drop-item' className='dropdown-item'>
            TECHNICKÁ DOKUMENTACE
          </Nav.Link>
        </LinkContainer>
      </div>
    </>);
  }
  
}

export default NavbarMenu;

