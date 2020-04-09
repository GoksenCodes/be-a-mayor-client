import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import Logo from "../../Images/Logo.png";
import { selectCitiesIntheCart } from "../../store/cart/selectors";

export default function Navigation() {
  const token = useSelector(selectToken);
  const isOwner = useSelector(selectUser);
  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const citiesIntheCart = useSelector(selectCitiesIntheCart);

  return (
    <Navbar
      bg="dark-light"
      className="navbar navbar-expand-sm sticky-top navbar-light bg-light"
      expand="lg"
    >
      <Navbar.Brand as={NavLink} to="/">
        <img src={Logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" />
          {token && isOwner.isOwner === true ? (
            <NavbarItem path="/addacity" linkText="Add a city" />
          ) : null}
          {loginLogoutControls}
          <span>
            <NavbarItem path="/cart" linkText="Cart" />
          </span>
          {citiesIntheCart.length}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
