import logo from './logo.svg';
import './App.css';
import Router from './routes'
import { DrinksContext } from './Provider/Drinks';
import { useContext } from 'react';
function App() {
 
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
