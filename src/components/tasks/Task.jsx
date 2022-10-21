import React from "react";
import { CgTwitter } from "react-icons/cg";
import { FiFacebook } from "react-icons/fi";
import "./task.scss";

const Task = () => {
  const socialMedia = [
    {
      id: "01",
      header: "Facebook",
      text: "Gain atleast 50 visits through facebook ads",
    },

    {
      id: "02",
      header: "twitter",
      text: "Gain atleast 12,500 views on SET posts",
    },

    {
      id: "03",
      header: "Facebook",
      text: "Promote the SET even on facebook with 5 posts",
    },

    {
      id: "04",
      header: "Facebook",
      text: "Post even photos taken by Micheal Scott (Photographer)",
    },
  ];
  return (
    <div className="social--wrapper">
      {socialMedia.map((social, idx) => (
        <div className="social" key={idx}>
          <div className="image">
            {social.header === "twitter" ? (
              <CgTwitter className="icon" />
            ) : (
              <FiFacebook className="icon" />
            )}
          </div>
          <div className="desc">
            <h4>{social.header}</h4>
            <p>{social.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;
