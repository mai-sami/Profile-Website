import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
 import logo from '../asset/logo.jpg'
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
 import { Col } from "react-bootstrap";

function Header() {
  
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary d-flex justify-content-between"
    >
        <Container>

      <div>
        <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="imge_Profie" />
        </Navbar.Brand>
      </div>
      <iv>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Col
                sm="6"
                className="d-flex justify-content-end align-items-center ">
                <div className="d-flex ">
                    
                <div style={{ cursor: "pointer" }}>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mai-sami-1144b9209/">

                    <BiLogoLinkedinSquare style={{fontSize:30,color:"#000"}} />
                    </a>
                 </div>
                 <div style={{ cursor: "pointer" }}>
                    <a rel="noreferrer" target="_blank" href="https://github.com/mai-sami">

                    <BiLogoGithub  style={{fontSize:30,color:"#000" }}/>
                    </a>
                 </div>
               
                 </div> 
            </Col>          </Nav>
        </Navbar.Collapse>
      </iv>
        </Container>
    </Navbar>
  );
}

export default Header;
