import React from 'react';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

import Test1 from '../Test1/Test1';
import Test2 from '../Test2/Test2';
import Test3 from '../Test3/Test3';
import Test4 from '../Test4/Test4';
import Test5 from '../Test5/Test5';
import Test6 from '../Test6/Test6';


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <h1>radar chart spike</h1>
          <ol>
            <li><Link className="link" to="/test1">Show Basic Chart With Sample Data</Link></li>
            <li><Link className="link" to="/test2">Update with Arbitrary Decrements</Link></li>
            <li><Link className="link" to="/test3">Show Change to Data with Two Datasets</Link></li>
            <li><Link className="link" to="/test4">Decrement Based on Varying Fractions</Link></li>
            <li><Link className="link" to="/test5">Define Own Parameters + Metrics</Link></li>
            <li><Link className="link" to="/test6">Style</Link></li>
          </ol>
      </header>
      <section className="main-content">
        <Route path="/test1" component={Test1}/>
        <Route path="/test2" component={Test2}/>
        <Route path="/test3" component={Test3}/>
        <Route path="/test4" component={Test4} />
        <Route path="/test5" component={Test5} />
        <Route path="/test6" component={Test6} />              
      </section>
      </Router>
    </div>
  );
}

export default App;
