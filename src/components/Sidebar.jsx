import React from 'react';
import '../styles/Sidebar.css'; // Import the CSS file

const SideBar = () => {
    return (
        <div className="sidebar">

            <div className='sidebar-tab2'>

                <div className="sidebar-tab">
                    <span>+</span>
                    <span>Add New    </span>
                    <span>  </span>
                    <i className="fas fa-plus"></i> {/* Icon for adding new */}
                </div>

                <div className="sidebar-tab">
                    <span>Sort by </span>
                    <i className="fas fa-calendar"></i> {/* Icon for sorting by date */}
                </div>
                <div className="sidebar-tab">
                    <span>Date & Time</span>
                    <i className="fas fa-clock"></i> {/* Icon for sorting by time */}
                </div>

            </div>


            <div className='sidebar-tab2'>
                <div className="sidebar-tab">
                    <span>Bin</span>
                    <i className="fas fa-trash"></i> {/* Icon for bin */}
                </div>
                <div className="sidebar-tab">
                    <span>Users</span>
                    <i className="fas fa-users"></i> {/* Icon for users */}
                </div>
            </div>

            
        </div>
    );
};

export default SideBar;
