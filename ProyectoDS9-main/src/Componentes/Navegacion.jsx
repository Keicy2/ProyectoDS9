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
        submenu: [ 
            { 
                label: "Libretas y Cuadernos", 
                url: "/", 
            },   
            { 
                label: "Lápiz y bolígrafos", 
                url: "/", 
            },
            {
                label: "Borradores y Sacapuntas",
                url: "/BorradorSacapuntas",
            },
            {
                label: "Libros",
                url: "/",
                submenu: [
                    {
                        label: "Libros de Ciencia",
                        url: "/",
                    },
                    {
                        label: "Libros de Caligrafía",
                        url: "/",
                    },
                    {
                        label: "Libros de Matemáticas",
                        url: "/",
                    },
                    {
                        label: "Libros de Historia",
                        url: "/",
                    },
                ]
            },
            { 
                label: "Arte", 
                url: "/Arte", 
            },
            { 
                label: "Medición y Tijeras", 
                url: "/MedicionTijeras", 
            },
            { 
              label: "Manualidades", 
              url: "/Manualidades", 
            },
        ], 
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
function Navegacion() { 
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
export default Navegacion;

