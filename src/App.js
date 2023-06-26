// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import './App.css'; // Import the CSS file
import SearchBar from './components/Searchbar';
import SideBar from './components/Sidebar';
import SecondarySideBar from './components/SecondrySidebar';
import Workspace from './components/WorkSpace';

const App = () => {
  // Component code
  return (
    <>

    <div>
      <SearchBar/>
    </div>
    <div className="app">
      {/* <SearchBar /> */}
      <div className="content">
        <SideBar />
        <SecondarySideBar />
        <Workspace />
      </div>
    </div>

    </>
  );
};

export default App;
