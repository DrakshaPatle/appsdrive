import React from 'react';
import '../styles/SecondrySidebar.css'; // Import the CSS file

const SecondarySideBar = () => {
  return (
    <div className="secondary-sidebar">


      {/* <div className="sidebar-tab1">
       <span>+</span>
        <span>abcd</span>
      </div> */}

        <div className="secondry-sidebar-create ">
           <span>+</span>
          <span> project in CX deployer</span>
        </div>
        <div className="secondry-sidebar-create ">
           <span>+</span>
          <span> Workspace in ideadeployer</span>
        </div>
        <div className="secondry-sidebar-create ">
           <span>+</span>
          <span> Workspace in Risk deployer</span>
        </div>
        <div className="secondry-sidebar-create ">
           <span>+</span>
          <span> New form</span>
        </div>
        <div className="secondry-sidebar-create ">
           <span>+</span>
          <span> New whiteboard</span>
        </div>
        <div className="secondry-sidebar-create ">
           <span>+</span>
          <span> Workspace</span>
        </div>


       
    
    </div>
  );
};

export default SecondarySideBar;
