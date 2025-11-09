import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import ImageGallery from './components/ImageGallery';
import ImageDetail from './components/ImageDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Image Gallery</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/gallery" component={ImageGallery} />
          <Route path="/gallery/:id" component={ImageDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;