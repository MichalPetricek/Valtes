import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Redirect,Route, Routes } from "react-router-dom";
import NavbarMenu from './Components/Navbar/NavbarMenu';
import Uvod from "./Pages/Uvod/Uvod";
import Obrabeni from "./Pages/Sluzby/Obrabeni/Obrabeni";
import Zamprace from "./Pages/Sluzby/Zamprace/Zamprace";
import Svarovani from './Pages/Sluzby/Svarovani/Svarovani';
import Techdokum from "./Pages/Sluzby/Techdokum/Techdokum";
import Technologie from './Pages/Technologie/Technologie';
import Kontakt from './Pages/Kontakt/Kontakt';
import Header from "./Components/Header/Header";
import ScrollToTop from './Components/ScrollToTop';
import {FaArrowCircleUp} from 'react-icons/fa';
import { ScrollBtn } from '../src/Components/ScrollStyle';


const App = () =>{
      /*scroll to top*/
      const [visible, setVisible] = useState(false)
  
      const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300 && window.innerWidth > 1200){
          setVisible(true)
        } 
        else{
          setVisible(false)
        }
      };
      
      const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
      
      window.addEventListener('scroll', toggleVisible);
      /*end of scroll to top*/
    return(
    <div className='App'>
        <Router>
          <header>
            <NavbarMenu></NavbarMenu>
          </header>
          <main>
            <ScrollBtn>
            <FaArrowCircleUp className='slider' onClick={scrollToTop} 
            style={{display: visible ? 'inline' : 'none'}} />
            </ScrollBtn>
            <ScrollToTop>
              <Routes>
                <Route path='/' element={<Uvod/>}></Route>
                <Route path='/obrabeni' element={<Obrabeni/>}></Route>
                <Route path='/zamprace' element={<Zamprace/>}></Route>
                <Route path='/svarovani' element={<Svarovani/>}></Route>
                <Route path='/techdokum' element={<Techdokum/>}></Route>
                <Route path='/technologie' element={<Technologie/>}></Route>
                <Route path='/kontakt' element={<Kontakt/>}></Route>
              </Routes>
            </ScrollToTop>
          </main>
        </Router>
    </div>
  );
}

export default App;
