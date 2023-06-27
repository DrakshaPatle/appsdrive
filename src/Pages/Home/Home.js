import React from 'react';
import styles from './home.module.css'; // Import the CSS file
import SearchBar from '../../components/Searchbar';
import SideBar from '../../components/Sidebar';
import SecondarySideBar from '../../components/SecondrySidebar';
import Workspace from '../../components/WorkSpace';

const Home = () => {
  // Component code
  return (
    <>

    <div>
      <SearchBar/>
    </div>
    <div className={styles['home']}>
      {/* <SearchBar /> */}
      <div className={styles['content']}>
        <SideBar />
        <SecondarySideBar />
        <Workspace />
      </div>
    </div>

    </>
  );
};

export default Home;
