import { Link } from '@inertiajs/react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavigationBarTop() {
    return ( 
      <>
      {[  'sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" navbarCoba mb-3 ">
          <Container fluid>
            <div className='logoNav'>
              <Link href={route('prototype.awal')}>
                This me
              </Link>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="txtNav justify-content-end flex-grow-1 pe-3">
                  <Link href={route('prototype.awal')}>Home</Link>
                  <Link href={route('prototype.portfolio')}>My Portfolio</Link>
                  <Link href="#action2">About me</Link>
                  
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </>
      
    
    )
       
}