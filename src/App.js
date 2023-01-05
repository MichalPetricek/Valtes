import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Redirect,Route, Routes } from "react-router-dom";
import NavbarMenu from './Components/Navbar/NavbarMenu';
import Uvod from "./Pages/Uvod/Uvod";
import Obrabeni from "./Pages/Sluzby/Obrabeni/Obrabeni";
import Zamprace from "./Pages/Sluzby/Zamprace/Zamprace";
import Svarovani from './Pages/Sluzby/Svarovani/Svarovani';
import Techdokum from "./Pages/Sluzby/Techdokum/Techdokum";
import Stroje from "./Pages/Stroje/Stroje";
import Kontakt from './Pages/Kontakt/Kontakt';

const App = () =>{
  return(
    <div className='App'>
        <Router>
          <header>
            <NavbarMenu></NavbarMenu>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<Uvod/>}></Route>
              <Route path='/obrabeni' element={<Obrabeni/>}></Route>
              <Route path='/zamprace' element={<Zamprace/>}></Route>
              <Route path='/svarovani' element={<Svarovani/>}></Route>
              <Route path='/techdokum' element={<Techdokum/>}></Route>
              <Route path='/stroje' element={<Stroje/>}></Route>
              <Route path='/kontakt' element={<Kontakt/>}></Route>
            </Routes>
          </main>
        </Router>
    </div>
  );
}

export default App;
