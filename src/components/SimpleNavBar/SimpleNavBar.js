import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import './SimpleNavBar.css';

class Navigation extends Component{
    render(){
        return(  
                <Navbar bg="dark" variant="dark" fixedTop sticky="top"  className="justify-content-center navbar">
                    <center>
                    <NavbarBrand href="/" className="navbar-brand">      
                        <img
                            alt=""
                            src="/assets/logo.png"
                            width="75"
                            height="75"
                            className="mx-auto"
                        />
                    </NavbarBrand>
                    </center>            
                </Navbar>
        )
    }
}
export default Navigation;