import React from 'react';
import './index.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Services from './components/pages/services';


function App() {
  return (
      <>
    <Router>
     <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/services' exact component={Services}/>
        <Route path='/contact' exact component={Contact}/>
        </Switch>
    </Router>
    </> 
  );
}

export default App;
