import React from 'react';
import './App.css'; // Import the CSS file
 import { HashRouter, Route,Routes} from "react-router-dom";
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  // Component code
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
     </HashRouter>
  );
};

export default App;
