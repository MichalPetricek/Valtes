import {Navbar,Nav} from 'react-bootstrap';
import logo from '../../Images/valtes-logo.png';
import "./Navbar.css";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


function NavbarMenu() {
  const [show,setShow] = useState(true);
  const controlNavbar = () =>{
    if(window.scrollY > 100 && window.innerWidth > 1000)
    {
      setShow(false)
    }
    else{
      setShow(true)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll",controlNavbar)
    return () =>{
      window.removeEventListener("scroll",controlNavbar)
    }
  },[])

  return (
    <>
      <Navbar collapseOnSelect expand="xl" fixed="top" className={`navbar ${show && "nav__grey"}`} bg="custom">
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width= "auto"
                height="70"
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
            <Nav id='active' navbarScroll>
              <LinkContainer to="/">
              <Nav.Link>ÚVOD</Nav.Link>
              </LinkContainer>
              <NavItem>
                <DropdownMenu></DropdownMenu>
              </NavItem>
              <LinkContainer to="/technologie">
              <Nav.Link>TECHNOLOGIE</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/kontakt">
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
            <div id='drop' className="nav-link" >
              SLUŽBY ▼
            </div>
            {open && props.children}
      </li>
    </>);
  }
  function DropdownMenu(){
  
    return(<>
      <div className={`dropdown ${show && "dropdown-bg"}`}>
        <LinkContainer to="/obrabeni">
          <Nav.Link id='drop-item' className='dropdown-item'>
            OBRÁBĚNÍ
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/zamprace">
          <Nav.Link id='drop-item' className='dropdown-item'>
            ZÁMEČNICKÉ PRÁCE
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/svarovani">
          <Nav.Link id='drop-item' className='dropdown-item'>
            SVAŘOVÁNÍ
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/techdokum">
          <Nav.Link id='drop-item' className='dropdown-item'>
            TECHNICKÁ DOKUMENTACE
          </Nav.Link>
        </LinkContainer>
      </div>
    </>);
  }
  
}

export default NavbarMenu;

