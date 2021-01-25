
import './App.css';
import * as ReactBootStrap from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React, { useState, useEffect } from 'react'


import HomePage from "./Components/HomePage"
import Bereshit from "./Components/Bereshit"
import Noah from "./Components/Noah"
import LekhLekha from "./Components/LekhLekha"
import Vayera from "./Components/Vayera"
import HayeSarah from "./Components/HayeSarah"
import Toledot from "./Components/Toledot"
import Vayetse from "./Components/Vayetse"
import Vayichlakh from "./Components/Vayichlakh"
import Vayechev from "./Components/Vayechev"
import Mikets from "./Components/Mikets"
import Vayigach from "./Components/Vayigach"
import Vayekhi from "./Components/Vayekhi"

import RochHachana from "./Components/RochHachana"
import QuizzRochHachana from "./Components/QuizzRoshHashana"
import Kippour from "./Components/Kippour"
import QuizzKippour from "./Components/QuizzKippour"
import Souccot from "./Components/Souccot"
import QuizzSouccot from "./Components/QuizzSouccot"
import Hannoukah from "./Components/Hanouka"
import QuizzHannoukah from "./Components/QuizzHanouka"
import TouBichvat from "./Components/TouBichvat"
import Pourim from "./Components/Pourim"

function App() {
  return (
    <div className="App">
      <Router>
        <ReactBootStrap.Navbar bg="dark" variant="dark">
          <ReactBootStrap.Navbar.Brand href="#home">MyGiour</ReactBootStrap.Navbar.Brand>
          <Link className="navbar-li " to="/">Home  </Link>
          <ReactBootStrap.NavDropdown className="drop-list" title="Les Fetes" id="basic-nav-dropdown">
            <ReactBootStrap.NavDropdown.Divider />
            <p className="Drop-title">TICHRI</p>
            <Link className="navbar-li-drop" to="/RochHachana">Roch Hachana</Link>
            <Link className="navbar-li-drop" to="/Kippour">Kippour</Link>
            <Link className="navbar-li-drop" to="/Souccot">Souccot</Link>
            <ReactBootStrap.NavDropdown.Divider />
            <p className="Drop-title">CHESHVAN</p>
            <ReactBootStrap.NavDropdown.Divider />
            <p className="Drop-title">KISLEV</p>
            <Link className="navbar-li-drop" to="/Hannoukah">Hanouka </Link>
            <ReactBootStrap.NavDropdown.Divider />
            <p className="Drop-title">TEVET</p>
            <ReactBootStrap.NavDropdown.Divider />
            <p className="Drop-title">CHVAT</p>
            <Link className="navbar-li-drop" to="/TouBichvat">Tou Bichvat </Link>
            <ReactBootStrap.NavDropdown.Divider />
            <p className="Drop-title">Adar</p>
            <Link className="navbar-li-drop" to="/Pourim">Pourim </Link>
          </ReactBootStrap.NavDropdown>
          {/* <ReactBootStrap.NavDropdown className="drop-list" title="Les Parashiots" id="basic-nav-dropdown">
            <ReactBootStrap.NavDropdown.Divider />
            <p className="Drop-title">SEFER BERESHIT</p>
            <ReactBootStrap.NavDropdown.Divider />
            <Link className="navbar-li-drop" to="/Bereshit">Bereshit </Link>
            <Link className="navbar-li-drop" to="/Noah">Noah </Link>
            <Link className="navbar-li-drop" to="/LekhLekha">Lekh Lékha </Link>
            <Link className="navbar-li-drop" to="/Vayera">Vayéra</Link>
            <Link className="navbar-li-drop" to="/HayeSarah">'Hayé Sarah </Link>
            <Link className="navbar-li-drop" to="/Toledot">Toledot </Link>
            <Link className="navbar-li-drop" to="/Vayetse">Vayétsé </Link>
            <Link className="navbar-li-drop" to="/Vayichlakh">Vayichlakh </Link>
            <Link className="navbar-li-drop" to="/Vayechev">Vayéchev </Link>
            <Link className="navbar-li-drop" to="/Mikets">Mikets </Link>
            <Link className="navbar-li-drop" to="/Vayigach">Vayigach </Link>
            <Link className="navbar-li-drop" to="/Vayekhi">Vayekhi </Link>
            <ReactBootStrap.NavDropdown.Divider />
            <p className="Drop-title">SEFER CHEMOT</p>
            <ReactBootStrap.NavDropdown.Divider />
            <Link className="navbar-li-drop" to="/Chemot">Chemot </Link>
            <Link className="navbar-li-drop" to="/Vaera">Vaera </Link>
            <Link className="navbar-li-drop" to="/Bo">Bo </Link>
            <Link className="navbar-li-drop" to="/Bechala'h">Bechala'h</Link>
            <Link className="navbar-li-drop" to="/Yitro">Yitro </Link>
            <Link className="navbar-li-drop" to="/Michpatim">Michpatim </Link>
            <Link className="navbar-li-drop" to="/Terouma">Terouma </Link>
            <Link className="navbar-li-drop" to="/Tetsavé">Tetsavé </Link>
            <Link className="navbar-li-drop" to="/Ki-Tissa ">Ki-Tissa </Link>
            <Link className="navbar-li-drop" to="/Vaya'hel">Vaya'hel </Link>
            <Link className="navbar-li-drop" to="/Pekoude">Pekoude </Link>
            <ReactBootStrap.NavDropdown.Divider />
            <p className="Drop-title">SEFER VAYIKRA</p>
            <ReactBootStrap.NavDropdown.Divider />
            <Link className="navbar-li-drop" to="/Vayikra">Vayikra </Link>
            <Link className="navbar-li-drop" to="/Tsav">Tsav </Link>
            <Link className="navbar-li-drop" to="/Chemini">Chemini </Link>
            <Link className="navbar-li-drop" to="/Tazria">Tazria</Link>
            <Link className="navbar-li-drop" to="/Metsora">Metsora </Link>
            <Link className="navbar-li-drop" to="/A'haréMot">A'haré Mot </Link>
            <Link className="navbar-li-drop" to="/Kedochim">Kedochim </Link>
            <Link className="navbar-li-drop" to="/Emor">Emor </Link>
            <Link className="navbar-li-drop" to="/Behar">Behar </Link>
            <Link className="navbar-li-drop" to="/Be'houkotai">Be'houkotai </Link>
            <ReactBootStrap.NavDropdown.Divider />
            <p className="Drop-title">SEFER BAMIDBAR</p>
            <ReactBootStrap.NavDropdown.Divider />
            <Link className="navbar-li-drop" to="/Bamidbar">Bamidbar </Link>
            <Link className="navbar-li-drop" to="/Nasso">Nasso</Link>
            <Link className="navbar-li-drop" to="/Behaalote'ha">Behaalote'ha</Link>
            <Link className="navbar-li-drop" to="/Chela'hLe'ha">Chela'h Le'ha</Link>
            <Link className="navbar-li-drop" to="/Kora'h">Kora'h </Link>
            <Link className="navbar-li-drop" to="/'Houkat'">'Houkat </Link>
            <Link className="navbar-li-drop" to="/Balak">Balak </Link>
            <Link className="navbar-li-drop" to="/Pin'has">Pin'has </Link>
            <Link className="navbar-li-drop" to="/Matot">Matot </Link>
            <Link className="navbar-li-drop" to="/Massé">Massé </Link>
            <ReactBootStrap.NavDropdown.Divider />
            <p className="Drop-title">SEFER DEVARIM</p>
            <ReactBootStrap.NavDropdown.Divider />
            <Link className="navbar-li-drop" to="/Devarim">Devarim </Link>
            <Link className="navbar-li-drop" to="/Vaet'hanan">Vaet'hanan</Link>
            <Link className="navbar-li-drop" to="/Ekev">Ekev</Link>
            <Link className="navbar-li-drop" to="/Reeh">Reeh</Link>
            <Link className="navbar-li-drop" to="/Choftim">Choftim </Link>
            <Link className="navbar-li-drop" to="/Ki-tetsé">Ki-tetsé </Link>
            <Link className="navbar-li-drop" to="/Ki-tavo">Ki-tavo </Link>
            <Link className="navbar-li-drop" to="/Nitsavim">Nitsavim </Link>
            <Link className="navbar-li-drop" to="/Vayele'h">Vayele'h </Link>
            <Link className="navbar-li-drop" to="/Haazinou">Haazinou </Link>
            <Link className="navbar-li-drop" to="/VezotHabra'ha">Vezot habra'ha </Link>

          </ReactBootStrap.NavDropdown> */}
        </ReactBootStrap.Navbar>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/RochHachana">
            <RochHachana />
            <QuizzRochHachana />
          </Route>
          <Route path="/Kippour">
            <Kippour />
            <QuizzKippour />
          </Route>
          <Route path="/Souccot">
            <Souccot />
            <QuizzSouccot />
          </Route>
          <Route path="/Hannoukah">
            <Hannoukah />
            <QuizzHannoukah />
          </Route>
          <Route path="/TouBichvat">
            <TouBichvat />
          </Route>
          <Route path="/Pourim">
            <Pourim />
          </Route>
          {/* <Route path="/Bereshit">
            <Bereshit />
          </Route>
          <Route path="/Noah">
            <Noah />
          </Route>
          <Route path="/LekhLekha">
            <LekhLekha />
          </Route>
          <Route path="/Vayera">
          <Vayera/>
          </Route>
          <Route path="/HayeSarah">
          <HayeSarah/>
          </Route>
          <Route path="/Toledot">
            <Toledot/>
          </Route>
          <Route path="/Vayetse">
            <Vayetse/>
          </Route>
          <Route path="/Vayichlakh">
            <Vayichlakh/>
          </Route>
          <Route path="/Vayechev">
            <Vayechev/>
          </Route>
          <Route path="/Mikets">
            <Mikets/>
          </Route>
          <Route path="/Vayigach">
            <Vayigach/>
          </Route>
          <Route path="/Vayekhi">
            <Vayekhi/>
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
