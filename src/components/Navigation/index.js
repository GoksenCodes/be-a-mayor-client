import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        YOUR PROJECT NAME
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          {/* {token ? <NavbarItem path="/addacity" linkText="Add a city" /> : null} */}
          <NavbarItem path="/addacity" linkText="city" />
          {loginLogoutControls}
          <span>
            <NavbarItem path="/cart" linkText="Cart" />
          </span>{" "}
          {3}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
