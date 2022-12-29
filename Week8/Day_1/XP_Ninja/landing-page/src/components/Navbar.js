import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavbarHeader() {
  return (
      <Navbar expand="lg" variant="light" style={{backgroundColor:'tomato'}}>
        <Container style={{justifyContent:"center", textAlign:"center"}}>
          <Navbar.Brand href="#" style={{color:'white'}}>
          <h1>Company</h1>
          <h3>We specialise in somthing</h3>
          <i class="fa-solid fa-building" style={{ color:'tomato'}}></i>
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
}

export default NavbarHeader;