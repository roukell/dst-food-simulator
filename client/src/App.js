import React from 'react';
import Navigation from './components/Navigation'
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import ChefsSpecial from './pages/ChefsSpecial';
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Recipe />
      <ChefsSpecial />
    </div>
  );
}
export default App;
