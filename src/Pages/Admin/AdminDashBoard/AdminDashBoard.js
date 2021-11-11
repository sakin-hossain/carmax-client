import React, { useState } from "react";
import AddCar from "../AddCar/AddCar";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import "./AdminDashBoard.css";

const AdminDashBoard = () => {
  const [control, setControl] = useState("manageOrders");

  console.log(control);
  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-2 col-sm-12 mt-5">
              <div className="sidebar__container">
                <ul>
                  <li
                    onClick={() => setControl("manageOrders")}
                    className="admin-menu p-2"
                  >
                    Manage Orders
                  </li>
                  <li
                    onClick={() => setControl("AddCar")}
                    className="admin-menu p-2"
                  >
                    Add Packages
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10 col-sm-12 text-center  text-center">
              {control === "AddCar" && <AddCar></AddCar>}
              {control === "manageOrders" && <ManageAllOrders></ManageAllOrders>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;