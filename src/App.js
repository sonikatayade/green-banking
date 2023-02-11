import './App.css';
import { Link, Route, Router, Routes } from "react-router-dom";
import Map from './Map'
import Home from './HomePage/Home';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Home></Home>
    </div>

  );
}

export default App;
