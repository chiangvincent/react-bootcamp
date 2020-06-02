import React from 'react';
import Home from './Home.js';
import About from './About.js';
import Topics from './Topics.js';
import './App.css';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/topics'>Topics</Link></li>
          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
        </ul>
      </div>
    </BrowserRouter>
  );
}

export default App;
