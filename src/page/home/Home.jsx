import React from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import Notification from "../../components/notification/Notification";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="sidebar">
        {" "}
        <Sidebar />
      </div>
      <div className="dashboard">
        {" "}
        <Dashboard />
      </div>
      <div className="notify">
        <Notification />
      </div>
    </div>
  );
};

export default Home;
