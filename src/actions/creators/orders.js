import * as types from "../types/orders";
import axios from "axios";
import { API } from "../../config";

export const createOrder = (
  isUser,
  user,
  billingAddress,
  shippingAddress,
  itemsList
) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  billingAddress.zip = parseInt(billingAddress.zip, 10);
  shippingAddress.zip = parseInt(shippingAddress.zip, 10);
  let body = {};
  if (isUser) {
    body = {
      userId: user,
      billing_address: billingAddress,
      shipping_address: shippingAddress,
      items: itemsList
    };
  } else {
    body = {
      name: user.name,
      email: user.email,
      billing_address: billingAddress,
      shipping_address: shippingAddress,
      items: itemsList
    };
  }
  try {
    const response = await axios.post(`${API}/orders/create`, body, config);
    dispatch({
      type: types.CREATE_ORDER,
      order_id: response.data
    });
  } catch (err) {
    console.log(err.response);
  }
};