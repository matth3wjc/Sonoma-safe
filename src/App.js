import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { useState } from 'react';

import Menu from './components/Menu';
import Toggle from './components/Toggle';

import HomePage from './pages/HomePage';
import LinksPage from './pages/LinksPage';
import PastMapPage from "./pages/PastMapPage";
import CurrentMapPage from "./pages/CurrentMapPage";

function App() {
    {/*
  const title = "Sonoma Safe";
    */}

    const [navToggled, setNavToggled] = useState(false);

    const handleNavToggle = () => {
        setNavToggled(!navToggled);
    }

  return (
    <div className="App">
        {/*
      <header className="App-header">
        <h1>{ title }</h1>
      </header>
        */}
        <Toggle handleNavToggle={handleNavToggle} />
      <Router>
          { navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null }
          <Routes>
              <Route exact path="/" element = {<HomePage/>} />
              <Route exact path="/past" element = {<PastMapPage/>} />
              <Route exact path="/current" element = {<CurrentMapPage/>} />
              <Route exact path="/links" element = {<LinksPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
