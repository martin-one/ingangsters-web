import React from "react";
import AdminTabBar from "../AdminTabBar/AdminTabBar";
import { connect } from "react-redux";
import AdminNavBar from "../../NavBars/AdminNavBar/AdminNavBar";
import AdminProducts from "../Products/index";

const AdminPage = ({ adminOption }) => {
  return (
    <div>
      <AdminNavBar />
      <AdminTabBar />
      {adminOption === "Users" ? (
        <center>
          <p>Users</p>
        </center>
      ) : adminOption === "Products" ? (
        <center>
          <AdminProducts />
        </center>
      ) : (
        <center>
          <p>Orders</p>
        </center>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    adminOption: state.adminTabBar.activeButton
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminPage);