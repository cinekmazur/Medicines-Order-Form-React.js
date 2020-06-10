import React, { useState } from "react";
import Form from "./Form";
import OrdersList from "./OrdersList";
import "../styles/App.css";
import { defaultOrders } from "../components/formData";

const App = () => {
  const [orders, setOrders] = useState(defaultOrders);

  const handleAddOrder = (values) => {
    const order = {
      id: orders.length + 1,
      medicine: values.medicine,
      time: values.time,
      date: values.date,
      amount: values.amount,
      department: values.department,
      userData: {
        name: values.firstName,
        surname: values.lastName,
        pin: values.pin,
      },
    };
    setOrders([...orders, order]);
  };

  const handleDeleteOrder = (id) => {
    let ordersWithoutThatOne = orders.filter((order) => order.id !== id);
    setOrders(ordersWithoutThatOne);
  };

  return (
    <div>
      <Form handleAddOrder={handleAddOrder} />
      <OrdersList orders={orders} handleDeleteOrder={handleDeleteOrder} />
    </div>
  );
};

export default App;
