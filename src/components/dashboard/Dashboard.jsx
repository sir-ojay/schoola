import React from "react";
import "./dashboard.scss";
import Performance from "../performance/Performance";
import Task from "../tasks/Task";
import Stats from "../stats/Stats";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h4>May 2022 Performance</h4>

      <div className="widgets">
        <Performance type="views" />
        <Performance type="follows" />
        <Performance type="likes" />
      </div>

      <h4>Statistics</h4>
      <div className='statistics'>
        <Stats style={{backgroundColor:"#FFFFFF",chartColor:'#E19133', color:'#E19133'}}/>
        <Stats style={{backgroundColor:"#E19133",chartColor:'#000000', color:'#FFFFFF'}}/>
      </div>

      <h4>Monthly Tasks</h4>
      <div> <Task /></div>
     
    </div>
  );
};

export default Dashboard;
