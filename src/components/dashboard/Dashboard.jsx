import React from "react";
import "./dashboard.scss";
import Performance from "../performance/Performance";
import Task from "../tasks/Task";
import Stats from "../stats/Stats";

const Dashboard = () => {
  const statStyle = [
    {backgroundColor:"#FFFFFF",chartColor:'#E19133', color:'#E19133',testColor:"#E19133",},
    {backgroundColor:"#E19133",chartColor:'#000000', color:'#FFFFFF',testColor:"#000000",}

  ]
  return (
    <div className="dashboard">
      <h4>May 2022 Performance</h4>

      <div className="widgets">
       
       { ['views','follows','likes'].map((type,index)=>{return <Performance keys={index } type={type} />})}
      </div>

      <h4 className="display--no">Statistics</h4>
      <div className='statistics'>
        {
          statStyle.map((eachStyle,index)=>{
       return   <Stats key={index} style={eachStyle}/>
          })
        }
        </div>

      <h4>Monthly Tasks</h4>
      <div> <Task /></div>
     
    </div>
  );
};

export default Dashboard;
