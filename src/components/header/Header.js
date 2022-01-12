import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Bell, Mic, Search, Video, Youtube } from "react-feather";

import "./Header.css";
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
  integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
  crossorigin="anonymous"
></link>;

const Header = () => {
  return (
    <div  className="nav">
      
        <Navbar >
          <Container fluid>
            <Navbar.Brand className="ytb" href="#">
             <h5 className="yout"><i class="fab fa-youtube"  style={{ color: "red" }}></i> <strong>YouTube</strong> </h5>
             
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />

                  <Button variant="outline-success" style={{backgroundColor:'white'}}className="searchicon">
                    <Search style={{ color: "black" }} size={25} />
                  </Button>
                </Form>
                <Nav.Link href="#action7">
                  <Mic id="mic" style={{marginTop:"6px"}} />
                </Nav.Link>

                <Nav.Link href="#action1" className="lft">
                  <Video className="video" />
                </Nav.Link>

                <Nav.Link href="#action2"></Nav.Link>
                <NavDropdown
                  title={<i class="fas fa-th"></i>}
                  id="navbarScrollingDropdown"
                  className="lft"
                >
                  <NavDropdown.Item href="#action3">
                    <Youtube style={{ color: "red" }} />{" "}
                    <h6 className="siza">YouTube Tv</h6>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    <i
                      class="fab fa-youtube-square"
                      style={{ color: "red" }}
                    ></i>
                    <h6 className="siza">YouTube Music </h6>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action4">
                    <i
                      class="fab fa-youtube-square"
                      style={{ color: "red" }}
                    ></i>
                    <h6 className="siza">YouTube Kids</h6>{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    <i class="fal fa-tv-music" style={{ color: "red" }}></i>
                    <h6 className="siza">Creator Academy</h6>
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#action1" className="lft">
                  <Bell className="bell" />
                </Nav.Link>
                <Nav.Link href="#action1" className="lft">
                  <img
                    src="https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
                    alt=""
                    classNAme="picture"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "100%",
                    }}
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
     
    </div>
  );
};

export default Header;
