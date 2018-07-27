import React from 'react';
import './Sidebar.css';

const Sidebar = props => {
return (
  <div className="wrapper">
    <nav id="sidebar">
        <span id="dismiss" onClick={() => document.getElementById('sidebar').classList.toggle('active')}>&#x2715;</span>
        <div className="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
        </div>
        <ul className="list-unstyled components">
            <p>Dummy Heading</p>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <a href="/wallet">Wallet</a>
            </li>
            <li>
                <a href="/notifications">Notifications</a>
            </li>
        </ul>
    </nav>
    <div id="content">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button 
            type="button" 
            id="sidebarCollapse" 
            className="btn btn-info"
            onClick={() => document.getElementById('sidebar').classList.toggle('active')}>
                <span>Menu</span>
            </button>

        </div>
    </nav>
</div>

</div>
)
}

export default Sidebar;