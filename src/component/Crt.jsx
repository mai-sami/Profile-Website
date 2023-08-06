import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import './cart.css'
 import { Data } from "../data";
 import { BiLogoGithub } from "react-icons/bi";

const Crt = () => {
  return (
    <Container>
 
       <Row  xs={1} md={2} className="">
        {Data.map((item)=>(
     <Col >
         <a rel="noreferrer" target="_blank" href={item.live}>  
     <Card className=" box text-white m-3">
       <Card.Img
         src={item.image}
         alt="Card image"
         height={"300px"}
       />
             <Card.ImgOverlay className="c">
 
         <Button variant="btn btn-dark button">
           <a  rel="noreferrer" target="_blank" href={item.git}>  
           <BiLogoGithub style={{fontSize:30}} /></a>
          </Button>
              </Card.ImgOverlay>
 
     </Card>
     </a>
   </Col>
        ))}
    
      
      </Row>
 
    </Container>
  );
};

export default Crt;
