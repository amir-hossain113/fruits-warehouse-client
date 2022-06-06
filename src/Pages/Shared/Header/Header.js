import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Navigate } from "react-router-dom";
import auth from "../../../firebase.init";
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth); 
  const handleSignOut = () => {
    signOut(auth);
  }


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="p-3" bg="info">
        <Container>
          <Navbar.Brand href="#home" as={Link} to="/">Fruits Warehouse</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" href="home#inventory">Inventory</Nav.Link>
              <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
            <Nav>
             {
               user? <>
                        <Nav.Link as={Link} to="manageInventory">
                          Manage Inventory
                        </Nav.Link>
                        <Nav.Link as={Link} to="addItem">
                          Add Item
                        </Nav.Link>
                        <Nav.Link as={Link} to="myItems">
                          My Items
                        </Nav.Link>
                        <button className="btn btn-link text-black text-start text-decoration-none" onClick={handleSignOut}>Signout</button>
                        <span className="mt-2 btn btn-outline-success">{user.email}</span>
                    </> : 
                        <Nav.Link as={Link} to="login">
                          Login
                        </Nav.Link>
             }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
