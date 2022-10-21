import React from "react";
import Avatar from '../../assets/avatar.png'
import { MdCircleNotifications } from "react-icons/md";
import { BiLogOutCircle} from "react-icons/bi";
import './notification.scss'

const Notification = () => {
    
  return (
    <div className="profile">
      <div className="profile--header">
        <div>      
          <h4>Hi John</h4>
          <p>Good morning</p>
        </div>
        <div>
          <MdCircleNotifications className="icon"/>
        </div>
      </div>
      
      <div className="avatar--img"><img src={Avatar} alt="" /></div>

      <p>Marketing manager @ OrangeWhales </p>

      <div className="stats">
        <div>
          <h4>730k</h4>
          <p>Followers</p>
    
        </div>
        <div>
        <h4>76k</h4>
          <p>Following</p>

        </div>
        <div>
        <h4>432</h4>
          <p>Posts</p>
        </div>

      </div>


      <div className="log--out">
        <BiLogOutCircle className="icon"/>
    
        <p>Log out of account</p>

      </div>
    </div>
  );
};

export default Notification;
