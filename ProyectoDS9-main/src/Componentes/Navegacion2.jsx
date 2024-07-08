import React from "react"; 
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap"; 
import './css.css';
import "bootstrap/dist/css/bootstrap.min.css"; 


const navBarData = [ 
    { 
        label: "Inicio", 
        url: "/", 
    }, 
    { 
        label: "Productos",
        url: "/productos",
    },
    { 
        label: "Catálogo", 
        url: "/CATALOGO.pdf", 
    },
    {
        label: "Kits escolares",
        url: "/",
    }, 
]; 
function Navegacion2() { 
    const menuShow = (mItems) => { 
        return mItems.map( 
            (item, index) => { 
                if (item.submenu) { 
                    return ( 
                        <NavDropdown 
                            title={ 
                                item.label 
                            } 
                            key={index} 
                            className="dropdown-menu-dark  
                                       dropend"> 
                            {menuShow( 
                                item.submenu 
                            )} 
                        </NavDropdown> 
                    ); 
                } else { 
                    return ( 
                        <Nav.Link 
                            href={ 
                                item.url 
                            } 
                            key={index}> 
                            {item.label} 
                        </Nav.Link> 
                    );}});}; 
    const navStyle = { 
        color: "black", 
        fontWeight: "bold", 
    }; 
    return ( 
        <Navbar expand="lg"> 
            <Navbar.Brand href="#home"> 
                <h1 
                    style={{ 
                        color: "white", 
                    }}> 
                </h1> 
            </Navbar.Brand> 
            <Navbar.Toggle aria-controls="basic-navbar-nav"/> 
            <Navbar.Collapse id="basic-navbar-nav"> 
                <Nav 
                    className="mr-auto"
                    style={navStyle}> 
                    {menuShow( 
                        navBarData 
                    )} 
                </Nav> 
            </Navbar.Collapse> 
        </Navbar> 
    ); 
} 
export default Navegacion2;