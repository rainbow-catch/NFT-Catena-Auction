import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavImg from "../../assets/navbar/navbar.png";
import "./navbarcomp.css";

function NavbarComp() {
  const blockchain = useSelector((state) => state.blockchain);

  let navigate = useNavigate();
  const onNav = (url) =>{
    navigate(url)
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick = {()=> onNav("/")}>
            <img src={NavImg} alt="" /> Axies
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link onClick = {()=> onNav("/")}>Home</Nav.Link> */}
            <NavDropdown title="Explore">
              <NavDropdown.Item onClick = {()=> onNav("/explore")}>
                Explore Collection
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="/explore1">Explore1</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="/explore2">Explore2</NavDropdown.Item> */}
            </NavDropdown>
            {/* <NavDropdown title="Activity">
              <NavDropdown.Item href="/activity1">Activity1</NavDropdown.Item>
              <NavDropdown.Item href="/activity2">Activity2</NavDropdown.Item>
            </NavDropdown> */}
            {/* <NavDropdown title="Item">
              <NavDropdown.Item href="/create_item">
                Create Item
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link onClick = {()=> onNav("/create_item")}>Create Item</Nav.Link>
            <Nav.Link onClick = {()=> onNav("/auction")}>Auctions</Nav.Link>
            {/* <Nav.Link href="/blog">Blog</Nav.Link> */}
            <Nav.Link href="/help">Help</Nav.Link>
            
          </Nav>
          <Nav>
          {blockchain.account === null  ? (
            <Nav.Item className="nav-wallet-layout">
              <Nav.Link className="nav-wallet" onClick = {()=>onNav("/connect_wallet")}>
                Connect Wallet
              </Nav.Link>
            </Nav.Item>
          ):(
            <NavDropdown title="Profile">
              <NavDropdown.Item onClick={()=> onNav("/mynft")}>
                My NFT
              </NavDropdown.Item>
              <NavDropdown.Item href="/profile">My profile</NavDropdown.Item>
              {/* <NavDropdown.Item href="/activity2">Activity2</NavDropdown.Item> */}
            </NavDropdown>
          )
          }
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavbarComp;
