import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import LinksPage from './pages/LinksPage';

function App() {
    {/*
  const title = "Sonoma Safe";
    */}

  return (
    <div className="App">
        {/*
      <header className="App-header">
        <h1>{ title }</h1>
      </header>
        */}
      <Router>
          <Routes>
              <Route exact path="/" element = {<HomePage/>} />
              <Route exact path="/links" element = {<LinksPage/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
