import React, { memo } from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import SearchBox from '../SearchBox/SearchBox';
import HeaderStyle from "./Header.module.css";
function Header({ img }) {

  return (
    <header>
      <Navbar bg="dark" variant='dark'>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              Tuan Anh
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            
            <Nav className={`${HeaderStyle.header_top} ms-3`}>
              <LinkContainer to="/header_address">
                <Nav.Link>
                  <Button variant='dark' className={`${HeaderStyle.header_address}`}>Xem gia, khuyen mai tai</Button>
                </Nav.Link>
              </LinkContainer>
              <SearchBox/>
              <LinkContainer to="/cart" className={`white border border-light rounded-3 ${HeaderStyle.header_cart} ms-3`} >
                <Nav.Link>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="ms-2">Gio Hang</span>
                </Nav.Link>
              </LinkContainer>
                <LinkContainer to="/history" className={`white ${HeaderStyle.yellow} ms-2 ${HeaderStyle.header_history}`}>
                  <Nav.Link>Lich su mua hang</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/hot" className={`white ms-2 ${HeaderStyle.header_hot}`}>
                  <Nav.Link>HOT</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/tin-tuc" className={`white ${HeaderStyle.yellow} ${HeaderStyle.border_right}`} style={{lineHeight: "12px"}}>
                  <Nav.Link>24h <br/>Cong nghe</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/hoi-dap" className={`white ${HeaderStyle.yellow} ${HeaderStyle.border_right}`}>
                  <Nav.Link>Hoi dap</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/game-app" className={`white ${HeaderStyle.yellow} ${HeaderStyle.border_right}`}>
                  <Nav.Link>Game App</Nav.Link>
                </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default memo(Header);
