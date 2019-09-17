import React from "react";
import Grid from "./Grid/Grid";
import Paginator from "./Paginator/Paginator";
import { connect } from "react-redux";
import { fetchProducts } from "../../../actions/creators/adminProducts";
const AdminProducts = ({
  currentPage,
  totalItems,
  itemsPerPage,
  fetchProducts
}) => {
  return (
    <div>
      <Grid />
      <Paginator
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        navigateFunction={fetchProducts}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  currentPage: state.adminProducts.currentPage,
  totalItems: state.adminProducts.totalItems,
  itemsPerPage: state.adminProducts.itemsPerPage
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(AdminProducts);