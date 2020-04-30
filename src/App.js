import React from 'react'
import './App.css'
import Title from './components/Title/Title.js'
import POPOSlist from './components/POPOSlist/POPOSlist.js'
import Footer from './components/Footer/Footer.js'
import { HashRouter as Router, Route } from 'react-router-dom'
import About from './components/About/About'
import POPOSDetails from './components/POPOSDetails/POPOSDetails'
import Classcomp from './components/Classcomp/Classcomp.js'

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={POPOSlist} />
        <Route path="/about" component={About} />
        <Route path="/details/:id" component={POPOSDetails} />
        <Footer />

        <div>
          <Classcomp step={2} />
          <Classcomp step={5} />
        </div>
      </div>
    </Router>
  );
}

export default App;
