import React from "react";
import Image from "../../assets/logo.png";
import { RiHome6Line } from "react-icons/ri";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillCheckSquare } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsBookmarkDash } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <img src={Image} alt="" />
        </div>
        <div className="logo--desc">
          <h4>OrangeWhales</h4>
          <p>Growth & Marketing</p>
        </div>
      </div>

      <div className="center">
        <ul>
          <Link to="/">
            <li>
              <RiHome6Line className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/">
            <li>
              <AiOutlineCalendar className="icon" />
              <span>Activity</span>
            </li>
          </Link>

          <Link to="/">
            <li>
              <AiOutlineSetting className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <hr />
          <div className="posts">
            <p>Posts</p>
            <p>
              <IoIosAddCircle className="icon" />
            </p>
          </div>

          <Link to="/">
            <li>
              <AiFillCheckSquare className="icon" />
              <span>Published</span>
            </li>
          </Link>
          <Link to="/">
            <li>
              <BiTimeFive className="icon" />
              <span>Today's scheduled</span>
            </li>
          </Link>
          <Link to="/">
            <li>
              <BsBookmarkDash className="icon" />
              <span>Drafts</span>
            </li>
          </Link>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
