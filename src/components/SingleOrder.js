import React from "react";
import "../styles/List.css";
const SingleOrder = (props) => {
  const {
    id,
    medicine,
    time,
    date,
    amount,
    department,
    userData,
  } = props.order;
  return (
    <div>
      <div className="grid-container">
        <div className="user-cont">
          Name: <strong>{userData.name}</strong> <br />
          Surname: <strong>{userData.surname} </strong>
          <br />
          Patient's ID: <strong>{userData.pin}</strong>
        </div>
        <div>
          Medicine: <strong> {medicine} </strong>
        </div>
        <div>
          Date: <strong>{date}</strong>
        </div>
        <button
          className="cancel-Col"
          style={{
            backgroundColor: "#CD5C5C",
            color: "#404040",
            border: "none",
            borderRadius: "4px",
          }}
          onClick={() => props.handleDeleteOrder(id)}
        >
          <i className="fa fa-trash" style={{ fontSize: "50px" }} />
        </button>

        <div className="dep-Col ">
          Department: <br /> <strong>{department}</strong>
        </div>
        <div>
          {" "}
          Amount: <strong>{amount}</strong>
        </div>
        <div>
          Time: <strong>{time}</strong>
        </div>
        <button
          className="cancel-media"
          style={{
            backgroundColor: "#CD5C5C",
            color: "#404040",
            border: "none",
            borderRadius: "4px",
            width: "100%",
          }}
          onClick={() => props.handleDeleteOrder(id)}
        >
          <i className="fa fa-trash" style={{ fontSize: "50px" }} />
        </button>
      </div>
    </div>
  );
};

export default SingleOrder;
