import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import ModalAdmin from "../../Modals/ModalAdmin/ModalAdmin";
import { connect } from "react-redux";
import "../../../css/colors.css";
import "./AdminNavBar.css";

const NavBarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="">
      <NavbarBrand className="navbar-brand">
        <img
          alt=""
          src="/assets/logo.png"
          width="75"
          height="75"
          className="mx-auto"
        />
      </NavbarBrand>
      <div className="iconButtonWrapper admin">
        <ModalAdmin />
      </div>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  responsiveMenuActive: state.navBar.responsiveMenuActive
});

const mapDispatchToProps = dispatch => ({
  _dispatch(action) {
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBarComponent);
