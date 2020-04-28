import React from 'react'
import './App.css'
import Title from './Title.js'
import POPOSlist from './POPOSlist.js'
import Footer from './Footer.js'
import { HashRouter as Router, Route } from 'react-router-dom'
import About from './About'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSlist} />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
