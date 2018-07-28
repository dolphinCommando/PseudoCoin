import React from 'react';
//import logo from '../../logo.svg';
import './NavExpand.css';

const NavExpand = props => {
    return (
        <div class="wrapper">
        {/* <!-- Sidebar --> */}
        <nav id="sidebar">
            <div id="dismiss">
                <i class="fas fa-arrow-right"></i>
            </div>
            <div class="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
            </div>
    
            <ul class="list-unstyled components">
                <p>Dummy Heading</p>
                <li class="active">
                    <a href="/" data-toggle="collapse" aria-expanded="false">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
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
                </li>
                <li>
                    <a href="#">About</a>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/notifications">Notifications</a>
                        </li>
                        <li>
                            <a href="/wallet">Wallet</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    
        {/* Page Content */}
        <div id="content">
    
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
    
                    <button type="button" id="sidebarCollapse" class="btn btn-info">
                        <i class="fas fa-align-right"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                </div>
            </nav>
        </div>
        {/* <!-- Dark Overlay element --> */}
        <div class="overlay"></div>
    </div>
    );
    <script type="text/javascript">
    $(document).ready(function() {
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#dismiss, .overlay').on('click', function () {
            // hide sidebar
            $('#sidebar').removeClass('active');
            // hide overlay
            $('.overlay').removeClass('active');
        });

        $('#sidebarCollapse').on('click', function () {
            // open sidebar
            $('#sidebar').addClass('active');
            // fade in the overlay
            $('.overlay').addClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    });
  </script>
}



export default NavExpand;
