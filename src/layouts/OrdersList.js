import React from "react";
import SingleOrder from "../components/SingleOrder";
import "../styles/List.css";

const OrdersList = (props) => {
  return (
    <div className="listContainer">
      <h1 style={{ textAlign: "center", color: "white" }}>Orders List</h1>
      {props.orders.length ? (
        props.orders.map((order) => (
          <SingleOrder
            key={order.id}
            order={order}
            handleDeleteOrder={props.handleDeleteOrder}
          />
        ))
      ) : (
        <div className="empty-list">
          No orders to Display! Add the first one!
        </div>
      )}
    </div>
  );
};

export default OrdersList;
