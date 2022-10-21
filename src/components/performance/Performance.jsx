import React from 'react';
import './performance.scss'

const Performance = ({type}) => {
  let data;

  switch (type) {
      case "views":
        data = {
          title: "VIEWS",
          value:'7,124,568',
       
        };
        break;
        
      case "follows":
        data = {
          title: "FOLLOWS",
          value:'91,344',
       
        };
        break;

      case "likes":
        data = {
          title: "LIKES",
          value:'654,931',
        };
        break;
      default:
        break;
    }
  return (
    <div className='widget'>

      <div className="title">
        {data.title}
       
      </div>

      <div className='value'>
        {data.value}
      </div>

    
   
    </div>
  )
}

export default Performance
